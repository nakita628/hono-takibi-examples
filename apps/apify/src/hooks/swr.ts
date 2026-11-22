import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2ActorsKey(args: InferRequestType<typeof client.v2.actors.$get>) {
  return ['v2', '/v2/actors', args] as const
}

export function useGetV2Actors<TError = unknown>(
  args: InferRequestType<typeof client.v2.actors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ActorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Actors<TError = unknown>(
  args: InferRequestType<typeof client.v2.actors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ActorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsKey() {
  return ['v2', '/v2/actors', 'POST'] as const
}

export function usePostV2Actors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actors.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.actors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.actors.$post> }) =>
        parseResponse(client.v2.actors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId', args] as const
}

export function useGetV2ActorsActorId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
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
        ? getGetV2ActorsActorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
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
        ? getGetV2ActorsActorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ActorsActorIdKey() {
  return ['v2', '/v2/actors/:actorId', 'PUT'] as const
}

export function usePutV2ActorsActorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ActorsActorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.actors)[':actorId']['$put']> },
      ) => parseResponse(client.v2.actors[':actorId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ActorsActorIdKey() {
  return ['v2', '/v2/actors/:actorId', 'DELETE'] as const
}

export function useDeleteV2ActorsActorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ActorsActorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.actors)[':actorId']['$delete']> },
      ) => parseResponse(client.v2.actors[':actorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdVersionsKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/versions', args] as const
}

export function useGetV2ActorsActorIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
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
        ? getGetV2ActorsActorIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
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
        ? getGetV2ActorsActorIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsActorIdVersionsKey() {
  return ['v2', '/v2/actors/:actorId/versions', 'POST'] as const
}

export function usePostV2ActorsActorIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$post']> },
      ) => parseResponse(client.v2.actors[':actorId'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdVersionsVersionNumberKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber', args] as const
}

export function useGetV2ActorsActorIdVersionsVersionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdVersionsVersionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdVersionsVersionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdVersionsVersionNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ActorsActorIdVersionsVersionNumberKey() {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber', 'DELETE'] as const
}

export function useDeleteV2ActorsActorIdVersionsVersionNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ActorsActorIdVersionsVersionNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2ActorsActorIdVersionsVersionNumberBuildOnPushKey() {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/build-on-push', 'PUT'] as const
}

export function usePutV2ActorsActorIdVersionsVersionNumberBuildOnPush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ActorsActorIdVersionsVersionNumberBuildOnPushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['build-on-push'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdVersionsVersionNumberEnvVarsKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/env-vars', args] as const
}

export function useGetV2ActorsActorIdVersionsVersionNumberEnvVars<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdVersionsVersionNumberEnvVarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdVersionsVersionNumberEnvVars<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdVersionsVersionNumberEnvVarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsActorIdVersionsVersionNumberEnvVarsKey() {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/env-vars', 'POST'] as const
}

export function usePostV2ActorsActorIdVersionsVersionNumberEnvVars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdVersionsVersionNumberEnvVarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/versions/:versionNumber/env-vars/:envVarName', args] as const
}

export function useGetV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameKey() {
  return [
    'v2',
    '/v2/actors/:actorId/versions/:versionNumber/env-vars/:envVarName',
    'DELETE',
  ] as const
}

export function useDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][
            ':envVarName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdWebhooksKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/webhooks', args] as const
}

export function useGetV2ActorsActorIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
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
        ? getGetV2ActorsActorIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
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
        ? getGetV2ActorsActorIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorsActorIdOauthConnectionsKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/oauth-connections', args] as const
}

export function useGetV2ActorsActorIdOauthConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
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
        ? getGetV2ActorsActorIdOauthConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId']['oauth-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdOauthConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
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
        ? getGetV2ActorsActorIdOauthConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId']['oauth-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorsActorIdBuildsKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/builds', args] as const
}

export function useGetV2ActorsActorIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
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
        ? getGetV2ActorsActorIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
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
        ? getGetV2ActorsActorIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsActorIdBuildsKey() {
  return ['v2', '/v2/actors/:actorId/builds', 'POST'] as const
}

export function usePostV2ActorsActorIdBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdBuildsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$post']> },
      ) => parseResponse(client.v2.actors[':actorId'].builds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdBuildsDefaultKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/builds/default', args] as const
}

export function useGetV2ActorsActorIdBuildsDefault<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
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
        ? getGetV2ActorsActorIdBuildsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId'].builds.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdBuildsDefault<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
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
        ? getGetV2ActorsActorIdBuildsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId'].builds.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorsActorIdBuildsBuildIdOpenapiJsonKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/builds/:buildId/openapi.json', args] as const
}

export function useGetV2ActorsActorIdBuildsBuildIdOpenapiJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdBuildsBuildIdOpenapiJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].builds[':buildId']['openapi.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdBuildsBuildIdOpenapiJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdBuildsBuildIdOpenapiJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId'].builds[':buildId']['openapi.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorsActorIdBuildsBuildIdKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/builds/:buildId', args] as const
}

export function useGetV2ActorsActorIdBuildsBuildId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
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
        ? getGetV2ActorsActorIdBuildsBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId'].builds[':buildId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdBuildsBuildId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
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
        ? getGetV2ActorsActorIdBuildsBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId'].builds[':buildId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsActorIdBuildsBuildIdAbortKey() {
  return ['v2', '/v2/actors/:actorId/builds/:buildId/abort', 'POST'] as const
}

export function usePostV2ActorsActorIdBuildsBuildIdAbort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdBuildsBuildIdAbortKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.actors[':actorId'].builds[':buildId'].abort.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdRunsKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/runs', args] as const
}

export function useGetV2ActorsActorIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
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
        ? getGetV2ActorsActorIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
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
        ? getGetV2ActorsActorIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsActorIdRunsKey() {
  return ['v2', '/v2/actors/:actorId/runs', 'POST'] as const
}

export function usePostV2ActorsActorIdRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$post']> },
      ) => parseResponse(client.v2.actors[':actorId'].runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdRunSyncKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/run-sync', args] as const
}

export function useGetV2ActorsActorIdRunSync<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
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
        ? getGetV2ActorsActorIdRunSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId']['run-sync'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdRunSync<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
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
        ? getGetV2ActorsActorIdRunSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId']['run-sync'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsActorIdRunSyncKey() {
  return ['v2', '/v2/actors/:actorId/run-sync', 'POST'] as const
}

export function usePostV2ActorsActorIdRunSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdRunSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']> },
      ) => parseResponse(client.v2.actors[':actorId']['run-sync'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdRunSyncGetDatasetItemsKey(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
  >,
) {
  return ['v2', '/v2/actors/:actorId/run-sync-get-dataset-items', args] as const
}

export function useGetV2ActorsActorIdRunSyncGetDatasetItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdRunSyncGetDatasetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId']['run-sync-get-dataset-items'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdRunSyncGetDatasetItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorsActorIdRunSyncGetDatasetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.actors[':actorId']['run-sync-get-dataset-items'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorsActorIdRunSyncGetDatasetItemsKey() {
  return ['v2', '/v2/actors/:actorId/run-sync-get-dataset-items', 'POST'] as const
}

export function usePostV2ActorsActorIdRunSyncGetDatasetItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdRunSyncGetDatasetItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.actors[':actorId']['run-sync-get-dataset-items'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2ActorsActorIdValidateInputKey() {
  return ['v2', '/v2/actors/:actorId/validate-input', 'POST'] as const
}

export function usePostV2ActorsActorIdValidateInput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorsActorIdValidateInputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>
        },
      ) => parseResponse(client.v2.actors[':actorId']['validate-input'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorsActorIdRunsLastKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/runs/last', args] as const
}

export function useGetV2ActorsActorIdRunsLast<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
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
        ? getGetV2ActorsActorIdRunsLastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].runs.last.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdRunsLast<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
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
        ? getGetV2ActorsActorIdRunsLastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actors[':actorId'].runs.last.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorsActorIdRunsRunIdKey(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>,
) {
  return ['v2', '/v2/actors/:actorId/runs/:runId', args] as const
}

export function useGetV2ActorsActorIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
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
        ? getGetV2ActorsActorIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId'].runs[':runId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorsActorIdRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
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
        ? getGetV2ActorsActorIdRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.actors[':actorId'].runs[':runId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorTasksKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks']['$get']>,
) {
  return ['v2', '/v2/actor-tasks', args] as const
}

export function useGetV2ActorTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ActorTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-tasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ActorTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-tasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorTasksKey() {
  return ['v2', '/v2/actor-tasks', 'POST'] as const
}

export function usePostV2ActorTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-tasks']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['actor-tasks']['$post']> },
      ) => parseResponse(client.v2['actor-tasks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorTasksActorTaskIdKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId', args] as const
}

export function useGetV2ActorTasksActorTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
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
        ? getGetV2ActorTasksActorTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-tasks'][':actorTaskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasksActorTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
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
        ? getGetV2ActorTasksActorTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-tasks'][':actorTaskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ActorTasksActorTaskIdKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId', 'PUT'] as const
}

export function usePutV2ActorTasksActorTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ActorTasksActorTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']> },
      ) => parseResponse(client.v2['actor-tasks'][':actorTaskId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ActorTasksActorTaskIdKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId', 'DELETE'] as const
}

export function useDeleteV2ActorTasksActorTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ActorTasksActorTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']> },
      ) => parseResponse(client.v2['actor-tasks'][':actorTaskId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorTasksActorTaskIdInputKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/input', args] as const
}

export function useGetV2ActorTasksActorTaskIdInput<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
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
        ? getGetV2ActorTasksActorTaskIdInputKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].input.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasksActorTaskIdInput<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
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
        ? getGetV2ActorTasksActorTaskIdInputKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].input.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ActorTasksActorTaskIdInputKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/input', 'PUT'] as const
}

export function usePutV2ActorTasksActorTaskIdInput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ActorTasksActorTaskIdInputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>
        },
      ) => parseResponse(client.v2['actor-tasks'][':actorTaskId'].input.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorTasksActorTaskIdWebhooksKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/webhooks', args] as const
}

export function useGetV2ActorTasksActorTaskIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
            >
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
        ? getGetV2ActorTasksActorTaskIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasksActorTaskIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
            >
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
        ? getGetV2ActorTasksActorTaskIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorTasksActorTaskIdRunsKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs', args] as const
}

export function useGetV2ActorTasksActorTaskIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
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
        ? getGetV2ActorTasksActorTaskIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasksActorTaskIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
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
        ? getGetV2ActorTasksActorTaskIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorTasksActorTaskIdRunsKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs', 'POST'] as const
}

export function usePostV2ActorTasksActorTaskIdRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorTasksActorTaskIdRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>
        },
      ) => parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorTasksActorTaskIdRunSyncKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync', args] as const
}

export function useGetV2ActorTasksActorTaskIdRunSync<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
            >
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
        ? getGetV2ActorTasksActorTaskIdRunSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasksActorTaskIdRunSync<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
            >
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
        ? getGetV2ActorTasksActorTaskIdRunSyncKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorTasksActorTaskIdRunSyncKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync', 'POST'] as const
}

export function usePostV2ActorTasksActorTaskIdRunSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorTasksActorTaskIdRunSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorTasksActorTaskIdRunSyncGetDatasetItemsKey(
  args: InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
  >,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync-get-dataset-items', args] as const
}

export function useGetV2ActorTasksActorTaskIdRunSyncGetDatasetItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorTasksActorTaskIdRunSyncGetDatasetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasksActorTaskIdRunSyncGetDatasetItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorTasksActorTaskIdRunSyncGetDatasetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2ActorTasksActorTaskIdRunSyncGetDatasetItemsKey() {
  return ['v2', '/v2/actor-tasks/:actorTaskId/run-sync-get-dataset-items', 'POST'] as const
}

export function usePostV2ActorTasksActorTaskIdRunSyncGetDatasetItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorTasksActorTaskIdRunSyncGetDatasetItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorTasksActorTaskIdRunsLastKey(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>,
) {
  return ['v2', '/v2/actor-tasks/:actorTaskId/runs/last', args] as const
}

export function useGetV2ActorTasksActorTaskIdRunsLast<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
            >
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
        ? getGetV2ActorTasksActorTaskIdRunsLastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.last.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorTasksActorTaskIdRunsLast<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
            >
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
        ? getGetV2ActorTasksActorTaskIdRunsLastKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.last.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorRunsKey(
  args: InferRequestType<(typeof client.v2)['actor-runs']['$get']>,
) {
  return ['v2', '/v2/actor-runs', args] as const
}

export function useGetV2ActorRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ActorRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ActorRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-runs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorRunsRunIdKey(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>,
) {
  return ['v2', '/v2/actor-runs/:runId', args] as const
}

export function useGetV2ActorRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>
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
        ? getGetV2ActorRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-runs'][':runId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>
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
        ? getGetV2ActorRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-runs'][':runId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ActorRunsRunIdKey() {
  return ['v2', '/v2/actor-runs/:runId', 'PUT'] as const
}

export function usePutV2ActorRunsRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ActorRunsRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$put']> },
      ) => parseResponse(client.v2['actor-runs'][':runId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ActorRunsRunIdKey() {
  return ['v2', '/v2/actor-runs/:runId', 'DELETE'] as const
}

export function useDeleteV2ActorRunsRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ActorRunsRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$delete']> },
      ) => parseResponse(client.v2['actor-runs'][':runId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ActorRunsRunIdChargeKey() {
  return ['v2', '/v2/actor-runs/:runId/charge', 'POST'] as const
}

export function usePostV2ActorRunsRunIdCharge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorRunsRunIdChargeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']> },
      ) => parseResponse(client.v2['actor-runs'][':runId'].charge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorBuildsKey(
  args: InferRequestType<(typeof client.v2)['actor-builds']['$get']>,
) {
  return ['v2', '/v2/actor-builds', args] as const
}

export function useGetV2ActorBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ActorBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-builds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2ActorBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['actor-builds']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-builds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorBuildsBuildIdKey(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>,
) {
  return ['v2', '/v2/actor-builds/:buildId', args] as const
}

export function useGetV2ActorBuildsBuildId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
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
        ? getGetV2ActorBuildsBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-builds'][':buildId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorBuildsBuildId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
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
        ? getGetV2ActorBuildsBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['actor-builds'][':buildId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ActorBuildsBuildIdKey() {
  return ['v2', '/v2/actor-builds/:buildId', 'DELETE'] as const
}

export function useDeleteV2ActorBuildsBuildId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ActorBuildsBuildIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$delete']> },
      ) => parseResponse(client.v2['actor-builds'][':buildId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ActorBuildsBuildIdAbortKey() {
  return ['v2', '/v2/actor-builds/:buildId/abort', 'POST'] as const
}

export function usePostV2ActorBuildsBuildIdAbort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ActorBuildsBuildIdAbortKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>
        },
      ) => parseResponse(client.v2['actor-builds'][':buildId'].abort.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActorBuildsBuildIdOpenapiJsonKey() {
  return ['v2', '/v2/actor-builds/:buildId/openapi.json'] as const
}

export function useGetV2ActorBuildsBuildIdOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ActorBuildsBuildIdOpenapiJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-builds'][':buildId']['openapi.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorBuildsBuildIdOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ActorBuildsBuildIdOpenapiJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-builds'][':buildId']['openapi.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorOauthAccountsConnectionIdAccountsKey(
  args: InferRequestType<
    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
  >,
) {
  return ['v2', '/v2/actor-oauth-accounts/:connectionId/accounts', args] as const
}

export function useGetV2ActorOauthAccountsConnectionIdAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorOauthAccountsConnectionIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-oauth-accounts'][':connectionId'].accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorOauthAccountsConnectionIdAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ActorOauthAccountsConnectionIdAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['actor-oauth-accounts'][':connectionId'].accounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActorOauthAccountsAccountIdKey(
  args: InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>,
) {
  return ['v2', '/v2/actor-oauth-accounts/:accountId', args] as const
}

export function useGetV2ActorOauthAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
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
        ? getGetV2ActorOauthAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-oauth-accounts'][':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActorOauthAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
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
        ? getGetV2ActorOauthAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['actor-oauth-accounts'][':accountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2KeyValueStoresKey(
  args: InferRequestType<(typeof client.v2)['key-value-stores']['$get']>,
) {
  return ['v2', '/v2/key-value-stores', args] as const
}

export function useGetV2KeyValueStores<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['key-value-stores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
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
        ? getGetV2KeyValueStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['key-value-stores'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KeyValueStores<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['key-value-stores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
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
        ? getGetV2KeyValueStoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['key-value-stores'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2KeyValueStoresKey() {
  return ['v2', '/v2/key-value-stores', 'POST'] as const
}

export function usePostV2KeyValueStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['key-value-stores']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['key-value-stores']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KeyValueStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['key-value-stores']['$post']> },
      ) => parseResponse(client.v2['key-value-stores'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadV2KeyValueStoresStoreIdRecordsRecordKeyKey() {
  return ['v2', '/v2/key-value-stores/:storeId/records/:recordKey', 'HEAD'] as const
}

export function useHeadV2KeyValueStoresStoreIdRecordsRecordKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV2KeyValueStoresStoreIdRecordsRecordKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
          >
        },
      ) =>
        parseResponse(
          client.v2['key-value-stores'][':storeId'].records[':recordKey'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatasetsKey(args: InferRequestType<typeof client.v2.datasets.$get>) {
  return ['v2', '/v2/datasets', args] as const
}

export function useGetV2Datasets<TError = unknown>(
  args: InferRequestType<typeof client.v2.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Datasets<TError = unknown>(
  args: InferRequestType<typeof client.v2.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DatasetsKey() {
  return ['v2', '/v2/datasets', 'POST'] as const
}

export function usePostV2Datasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.datasets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.datasets.$post> }) =>
        parseResponse(client.v2.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadV2DatasetsDatasetIdItemsKey() {
  return ['v2', '/v2/datasets/:datasetId/items', 'HEAD'] as const
}

export function useHeadV2DatasetsDatasetIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV2DatasetsDatasetIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.v2.datasets[':datasetId'].items.$head(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2RequestQueuesKey(
  args: InferRequestType<(typeof client.v2)['request-queues']['$get']>,
) {
  return ['v2', '/v2/request-queues', args] as const
}

export function useGetV2RequestQueues<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['request-queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
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
        ? getGetV2RequestQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['request-queues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RequestQueues<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['request-queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
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
        ? getGetV2RequestQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['request-queues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2RequestQueuesKey() {
  return ['v2', '/v2/request-queues', 'POST'] as const
}

export function usePostV2RequestQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['request-queues']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['request-queues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2RequestQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['request-queues']['$post']> },
      ) => parseResponse(client.v2['request-queues'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WebhooksKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  return ['v2', '/v2/webhooks', args] as const
}

export function useGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WebhooksKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function usePostV2Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.webhooks.$post> }) =>
        parseResponse(client.v2.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhookId', args] as const
}

export function useGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
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
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
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
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'PUT'] as const
}

export function usePutV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$put']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WebhooksWebhookIdTestKey() {
  return ['v2', '/v2/webhooks/:webhookId/test', 'POST'] as const
}

export function usePostV2WebhooksWebhookIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WebhooksWebhookIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WebhooksWebhookIdDispatchesKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhookId/dispatches', args] as const
}

export function useGetV2WebhooksWebhookIdDispatches<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
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
        ? getGetV2WebhooksWebhookIdDispatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.webhooks[':webhookId'].dispatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhooksWebhookIdDispatches<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
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
        ? getGetV2WebhooksWebhookIdDispatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.webhooks[':webhookId'].dispatches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WebhookDispatchesKey(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>,
) {
  return ['v2', '/v2/webhook-dispatches', args] as const
}

export function useGetV2WebhookDispatches<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>
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
        ? getGetV2WebhookDispatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['webhook-dispatches'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhookDispatches<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>
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
        ? getGetV2WebhookDispatchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['webhook-dispatches'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WebhookDispatchesDispatchIdKey(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>,
) {
  return ['v2', '/v2/webhook-dispatches/:dispatchId', args] as const
}

export function useGetV2WebhookDispatchesDispatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
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
        ? getGetV2WebhookDispatchesDispatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['webhook-dispatches'][':dispatchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhookDispatchesDispatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
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
        ? getGetV2WebhookDispatchesDispatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['webhook-dispatches'][':dispatchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SchedulesKey(args: InferRequestType<typeof client.v2.schedules.$get>) {
  return ['v2', '/v2/schedules', args] as const
}

export function useGetV2Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v2.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v2.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SchedulesKey() {
  return ['v2', '/v2/schedules', 'POST'] as const
}

export function usePostV2Schedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.schedules.$post> }) =>
        parseResponse(client.v2.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SchedulesScheduleIdKey(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
) {
  return ['v2', '/v2/schedules/:scheduleId', args] as const
}

export function useGetV2SchedulesScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
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
        ? getGetV2SchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules[':scheduleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SchedulesScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
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
        ? getGetV2SchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules[':scheduleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2SchedulesScheduleIdKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'PUT'] as const
}

export function usePutV2SchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2SchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$put']> },
      ) => parseResponse(client.v2.schedules[':scheduleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2SchedulesScheduleIdKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'DELETE'] as const
}

export function useDeleteV2SchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']> },
      ) => parseResponse(client.v2.schedules[':scheduleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SchedulesScheduleIdInvokeKey() {
  return ['v2', '/v2/schedules/:scheduleId/invoke', 'POST'] as const
}

export function usePostV2SchedulesScheduleIdInvoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SchedulesScheduleIdInvokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>
        },
      ) => parseResponse(client.v2.schedules[':scheduleId'].invoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SchedulesScheduleIdLogKey(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>,
) {
  return ['v2', '/v2/schedules/:scheduleId/log', args] as const
}

export function useGetV2SchedulesScheduleIdLog<TError = unknown>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
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
        ? getGetV2SchedulesScheduleIdLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules[':scheduleId'].log.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SchedulesScheduleIdLog<TError = unknown>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
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
        ? getGetV2SchedulesScheduleIdLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.schedules[':scheduleId'].log.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StoreKey(args: InferRequestType<typeof client.v2.store.$get>) {
  return ['v2', '/v2/store', args] as const
}

export function useGetV2Store<TError = unknown>(
  args: InferRequestType<typeof client.v2.store.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.store.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Store<TError = unknown>(
  args: InferRequestType<typeof client.v2.store.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2StoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.store.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.store.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2UsersUserIdKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
) {
  return ['v2', '/v2/users/:userId', args] as const
}

export function useGetV2UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UsersMeKey() {
  return ['v2', '/v2/users/me'] as const
}

export function useGetV2UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UsersMeUsageMonthlyKey(
  args: InferRequestType<typeof client.v2.users.me.usage.monthly.$get>,
) {
  return ['v2', '/v2/users/me/usage/monthly', args] as const
}

export function useGetV2UsersMeUsageMonthly<TError = unknown>(
  args: InferRequestType<typeof client.v2.users.me.usage.monthly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
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
        ? getGetV2UsersMeUsageMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.me.usage.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersMeUsageMonthly<TError = unknown>(
  args: InferRequestType<typeof client.v2.users.me.usage.monthly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
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
        ? getGetV2UsersMeUsageMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.usage.monthly.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.me.usage.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UsersMeLimitsKey() {
  return ['v2', '/v2/users/me/limits'] as const
}

export function useGetV2UsersMeLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersMeLimitsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.me.limits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersMeLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersMeLimitsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.me.limits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2UsersMeLimitsKey() {
  return ['v2', '/v2/users/me/limits', 'PUT'] as const
}

export function usePutV2UsersMeLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.me.limits.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.me.limits.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UsersMeLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.users.me.limits.$put> }) =>
        parseResponse(client.v2.users.me.limits.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UsersUserIdUsageMonthlyKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>,
) {
  return ['v2', '/v2/users/:userId/usage/monthly', args] as const
}

export function useGetV2UsersUserIdUsageMonthly<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
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
        ? getGetV2UsersUserIdUsageMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].usage.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersUserIdUsageMonthly<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
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
        ? getGetV2UsersUserIdUsageMonthlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].usage.monthly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UsersUserIdLimitsKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>,
) {
  return ['v2', '/v2/users/:userId/limits', args] as const
}

export function useGetV2UsersUserIdLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
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
        ? getGetV2UsersUserIdLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersUserIdLimits<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
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
        ? getGetV2UsersUserIdLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2UsersUserIdLimitsKey() {
  return ['v2', '/v2/users/:userId/limits', 'PUT'] as const
}

export function usePutV2UsersUserIdLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.users)[':userId']['limits']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['limits']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UsersUserIdLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$put']> },
      ) => parseResponse(client.v2.users[':userId'].limits.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2IntegrationsGitKey() {
  return ['v2', '/v2/integrations/git'] as const
}

export function useGetV2IntegrationsGit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2IntegrationsGitKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.integrations.git.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2IntegrationsGit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2IntegrationsGitKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.integrations.git.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.integrations.git.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2IntegrationsGitProviderIdCreateRepoKey() {
  return ['v2', '/v2/integrations/git/:providerId/create-repo', 'POST'] as const
}

export function usePostV2IntegrationsGitProviderIdCreateRepo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2IntegrationsGitProviderIdCreateRepoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.integrations.git[':providerId']['create-repo'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2IntegrationsGitProviderIdRegisterDeploymentKeyKey() {
  return ['v2', '/v2/integrations/git/:providerId/register-deployment-key', 'POST'] as const
}

export function usePostV2IntegrationsGitProviderIdRegisterDeploymentKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2IntegrationsGitProviderIdRegisterDeploymentKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.integrations.git[':providerId']['register-deployment-key'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2ToolsEncodeAndSignKey() {
  return ['v2', '/v2/tools/encode-and-sign', 'POST'] as const
}

export function usePostV2ToolsEncodeAndSign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.tools)['encode-and-sign']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.tools)['encode-and-sign']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ToolsEncodeAndSignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.tools)['encode-and-sign']['$post']> },
      ) => parseResponse(client.v2.tools['encode-and-sign'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ToolsDecodeAndVerifyKey() {
  return ['v2', '/v2/tools/decode-and-verify', 'POST'] as const
}

export function usePostV2ToolsDecodeAndVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.tools)['decode-and-verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.tools)['decode-and-verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ToolsDecodeAndVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.tools)['decode-and-verify']['$post']> },
      ) => parseResponse(client.v2.tools['decode-and-verify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
