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

export function getApiKey() {
  return ['api'] as const
}

export function getApiStatusQueryKey(args: InferRequestType<typeof client.api.status.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/status', keyArgs] as const
}

export function getApiStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiStatusQueryKey>
  >({
    queryKey: getApiStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiFleetAgentsEnrollMutationKey() {
  return ['api', '/api/fleet/agents/enroll', 'POST'] as const
}

export function getPostApiFleetAgentsEnrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.agents.enroll.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.fleet.agents.enroll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFleetAgentsEnrollMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.fleet.agents.enroll.$post>) {
      return parseResponse(client.api.fleet.agents.enroll.$post(args, options))
    },
  })
}

export function createPostApiFleetAgentsEnroll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.agents.enroll.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.fleet.agents.enroll.$post>,
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
    const mutationDefaults = getPostApiFleetAgentsEnrollMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiFleetAgentsIdCheckinMutationKey() {
  return ['api', '/api/fleet/agents/:id/checkin', 'POST'] as const
}

export function getPostApiFleetAgentsIdCheckinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFleetAgentsIdCheckinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>,
    ) {
      return parseResponse(client.api.fleet.agents[':id'].checkin.$post(args, options))
    },
  })
}

export function createPostApiFleetAgentsIdCheckin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.fleet.agents)[':id']['checkin']['$post']>,
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
    const mutationDefaults = getPostApiFleetAgentsIdCheckinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiFleetAgentsIdAcksMutationKey() {
  return ['api', '/api/fleet/agents/:id/acks', 'POST'] as const
}

export function getPostApiFleetAgentsIdAcksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFleetAgentsIdAcksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>,
    ) {
      return parseResponse(client.api.fleet.agents[':id'].acks.$post(args, options))
    },
  })
}

export function createPostApiFleetAgentsIdAcks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.fleet.agents)[':id']['acks']['$post']>,
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
    const mutationDefaults = getPostApiFleetAgentsIdAcksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiFleetArtifactsIdSha2QueryKey(
  args: InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/fleet/artifacts/:id/:sha2', keyArgs] as const
}

export function getApiFleetArtifactsIdSha2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFleetArtifactsIdSha2QueryKey>
  >({
    queryKey: getApiFleetArtifactsIdSha2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.fleet.artifacts[':id'][':sha2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiFleetArtifactsIdSha2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFleetArtifactsIdSha2QueryKey>
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
      ...getApiFleetArtifactsIdSha2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiFleetUploadsMutationKey() {
  return ['api', '/api/fleet/uploads', 'POST'] as const
}

export function getPostApiFleetUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.uploads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.fleet.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFleetUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.fleet.uploads.$post>) {
      return parseResponse(client.api.fleet.uploads.$post(args, options))
    },
  })
}

export function createPostApiFleetUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.uploads.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.fleet.uploads.$post>,
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
    const mutationDefaults = getPostApiFleetUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiFleetUploadsIdChunkNumMutationKey() {
  return ['api', '/api/fleet/uploads/:id/:chunkNum', 'PUT'] as const
}

export function getPutApiFleetUploadsIdChunkNumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiFleetUploadsIdChunkNumMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>,
    ) {
      return parseResponse(client.api.fleet.uploads[':id'][':chunkNum'].$put(args, options))
    },
  })
}

export function createPutApiFleetUploadsIdChunkNum<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.fleet.uploads)[':id'][':chunkNum']['$put']>,
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
    const mutationDefaults = getPutApiFleetUploadsIdChunkNumMutationOptions<
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

export function getPostApiFleetUploadsIdMutationKey() {
  return ['api', '/api/fleet/uploads/:id', 'POST'] as const
}

export function getPostApiFleetUploadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.uploads)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.fleet.uploads)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFleetUploadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.fleet.uploads)[':id']['$post']>) {
      return parseResponse(client.api.fleet.uploads[':id'].$post(args, options))
    },
  })
}

export function createPostApiFleetUploadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.fleet.uploads)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.fleet.uploads)[':id']['$post']>,
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
    const mutationDefaults = getPostApiFleetUploadsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiFleetFileIdQueryKey(
  args: InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/fleet/file/:id', keyArgs] as const
}

export function getApiFleetFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFleetFileIdQueryKey>
  >({
    queryKey: getApiFleetFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.fleet.file[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiFleetFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFleetFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFleetFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/agents/upgrades/:major.:minor.:patch/pgp-public-key', keyArgs] as const
}

export function getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey>
  >({
    queryKey: getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.agents.upgrades[':major.:minor.:patch']['pgp-public-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAgentsUpgradesMajorMinorPatchPgpPublicKey<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.agents.upgrades)[':major.:minor.:patch']['pgp-public-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey>
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
      ...getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiFleetAgentsIdAuditUnenrollMutationKey() {
  return ['api', '/api/fleet/agents/:id/audit/unenroll', 'POST'] as const
}

export function getPostApiFleetAgentsIdAuditUnenrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFleetAgentsIdAuditUnenrollMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>,
    ) {
      return parseResponse(client.api.fleet.agents[':id'].audit.unenroll.$post(args, options))
    },
  })
}

export function createPostApiFleetAgentsIdAuditUnenroll<
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
                ReturnType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>,
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
    const mutationDefaults = getPostApiFleetAgentsIdAuditUnenrollMutationOptions<
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
