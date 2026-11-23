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

export function getApiKey() {
  return ['api'] as const
}

export function getApiStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/status', keyArgs] as const
}

export function getApiStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>
          >,
          ReturnType<typeof getApiStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiFleetAgentsEnroll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.agents.enroll.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.fleet.agents.enroll.$post>,
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
  const mutationDefaults = getPostApiFleetAgentsEnrollMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiFleetAgentsIdCheckin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFleetAgentsIdCheckinMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiFleetAgentsIdAcks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFleetAgentsIdAcksMutationOptions<TError, TOnMutateResult>(
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

export function getApiFleetArtifactsIdSha2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/fleet/artifacts/:id/:sha2', keyArgs] as const
}

export function getApiFleetArtifactsIdSha2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFleetArtifactsIdSha2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.fleet.artifacts[':id'][':sha2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFleetArtifactsIdSha2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFleetArtifactsIdSha2QueryKey>
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
          Awaited<ReturnType<(typeof client.api.fleet.artifacts)[':id'][':sha2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFleetArtifactsIdSha2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFleetArtifactsIdSha2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.fleet.artifacts[':id'][':sha2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiFleetUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.fleet.uploads.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.fleet.uploads.$post>,
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
  const mutationDefaults = getPostApiFleetUploadsMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiFleetUploadsIdChunkNum<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiFleetUploadsIdChunkNumMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiFleetUploadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiFleetUploadsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiFleetFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/fleet/file/:id', keyArgs] as const
}

export function getApiFleetFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFleetFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.fleet.file[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFleetFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.fleet.file)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFleetFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.fleet.file)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFleetFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFleetFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.fleet.file[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/agents/upgrades/:major.{minor}.{patch}/pgp-public-key', keyArgs] as const
}

export function getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.agents.upgrades[':major.{minor}.{patch}']['pgp-public-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAgentsUpgradesMajorMinorPatchPgpPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
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
                    (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
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
                    (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey>
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
              (typeof client.api.agents.upgrades)[':major.{minor}.{patch}']['pgp-public-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.agents.upgrades[':major.{minor}.{patch}']['pgp-public-key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiFleetAgentsIdAuditUnenroll<
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
                  ReturnType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.fleet.agents)[':id']['audit']['unenroll']['$post']>,
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
  const mutationDefaults = getPostApiFleetAgentsIdAuditUnenrollMutationOptions<
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
