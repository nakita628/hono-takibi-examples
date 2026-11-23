import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiStatusKey(args: InferRequestType<typeof client.api.status.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/status', keyArgs] as const
}

export function useGetApiStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFleetAgentsEnrollKey() {
  return ['api', '/api/fleet/agents/enroll', 'POST'] as const
}

export function usePostApiFleetAgentsEnroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.agents.enroll.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.fleet.agents.enroll.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFleetAgentsEnrollKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.fleet.agents.enroll.$post> },
      ) => parseResponse(client.api.fleet.agents.enroll.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFleetAgentsIdCheckinKey() {
  return ['api', '/api/fleet/agents/:id/checkin', 'POST'] as const
}

export function usePostApiFleetAgentsIdCheckin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFleetAgentsIdCheckinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']> },
      ) => parseResponse(client.api.fleet.agents[':id'].checkin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFleetAgentsIdAcksKey() {
  return ['api', '/api/fleet/agents/:id/acks', 'POST'] as const
}

export function usePostApiFleetAgentsIdAcks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFleetAgentsIdAcksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.fleet.agents)[':id']['acks']['$post']> },
      ) => parseResponse(client.api.fleet.agents[':id'].acks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFleetArtifactsIdSha2Key(
  args: InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/fleet/artifacts/:id/:sha2', keyArgs] as const
}

export function useGetApiFleetArtifactsIdSha2<TError = unknown>(
  args: InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
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
        ? getGetApiFleetArtifactsIdSha2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.fleet.artifacts[':id'][':sha2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFleetArtifactsIdSha2<TError = unknown>(
  args: InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
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
        ? getGetApiFleetArtifactsIdSha2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.fleet.artifacts[':id'][':sha2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFleetUploadsKey() {
  return ['api', '/api/fleet/uploads', 'POST'] as const
}

export function usePostApiFleetUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.uploads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.fleet.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFleetUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.fleet.uploads.$post> }) =>
        parseResponse(client.api.fleet.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiFleetUploadsIdChunkNumKey() {
  return ['api', '/api/fleet/uploads/:id/:chunkNum', 'PUT'] as const
}

export function usePutApiFleetUploadsIdChunkNum<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiFleetUploadsIdChunkNumKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']> },
      ) => parseResponse(client.api.fleet.uploads[':id'][':chunkNum'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFleetUploadsIdKey() {
  return ['api', '/api/fleet/uploads/:id', 'POST'] as const
}

export function usePostApiFleetUploadsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.uploads)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.fleet.uploads)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFleetUploadsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.fleet.uploads)[':id']['$post']> },
      ) => parseResponse(client.api.fleet.uploads[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFleetFileIdKey(
  args: InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/fleet/file/:id', keyArgs] as const
}

export function useGetApiFleetFileId<TError = unknown>(
  args: InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiFleetFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.fleet.file[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFleetFileId<TError = unknown>(
  args: InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiFleetFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.fleet.file[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAgentsUpgradesMajorMinorPatchPgpPublicKeyKey(
  args: InferRequestType<
    (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/agents/upgrades/:major.:minor.:patch/pgp-public-key', keyArgs] as const
}

export function useGetApiAgentsUpgradesMajorMinorPatchPgpPublicKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
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
        ? getGetApiAgentsUpgradesMajorMinorPatchPgpPublicKeyKey(args)
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
                (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
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
          client.api.agents.upgrades[':major.:minor.:patch']['pgp-public-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAgentsUpgradesMajorMinorPatchPgpPublicKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
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
        ? getGetApiAgentsUpgradesMajorMinorPatchPgpPublicKeyKey(args)
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
                (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
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
          client.api.agents.upgrades[':major.:minor.:patch']['pgp-public-key'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiFleetAgentsIdAuditUnenrollKey() {
  return ['api', '/api/fleet/agents/:id/audit/unenroll', 'POST'] as const
}

export function usePostApiFleetAgentsIdAuditUnenroll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFleetAgentsIdAuditUnenrollKey()
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
            (typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']
          >
        },
      ) => parseResponse(client.api.fleet.agents[':id'].audit.unenroll.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
