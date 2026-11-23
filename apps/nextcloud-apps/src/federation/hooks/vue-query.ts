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

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/federation/api/v1/shared-secret', keyArgs] as const
}

export function getOcsV2PhpAppsFederationApiV1SharedSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation.api.v1['shared-secret'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsFederationApiV1SharedSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey>
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
              (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['shared-secret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsFederationApiV1SharedSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.federation.api.v1['shared-secret'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/federation/api/v1/request-shared-secret', 'POST'] as const
}

export function getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation.api.v1['request-shared-secret'].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsFederationApiV1RequestSharedSecret<
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
                    (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['federation']['api']['v1']['request-shared-secret']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsFederationApiV1RequestSharedSecretMutationOptions<
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

export function getOcsV2PhpCloudSharedSecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/cloud/shared-secret', keyArgs] as const
}

export function getOcsV2PhpCloudSharedSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpCloudSharedSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].cloud['shared-secret'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpCloudSharedSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpCloudSharedSecretQueryKey>
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
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpCloudSharedSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpCloudSharedSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].cloud['shared-secret'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpCloudSharedSecretMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shared-secret', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharedSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharedSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud['shared-secret'].$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudSharedSecret<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shared-secret']['$post']>,
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
  const mutationDefaults = getPostOcsV2PhpCloudSharedSecretMutationOptions<TError, TOnMutateResult>(
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

export function getOcsV2PhpAppsFederationTrustedServersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/federation/trusted-servers', keyArgs] as const
}

export function getOcsV2PhpAppsFederationTrustedServersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsFederationTrustedServersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation['trusted-servers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsFederationTrustedServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']>
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
                    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsFederationTrustedServersQueryKey>
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
              (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsFederationTrustedServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsFederationTrustedServersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.federation['trusted-servers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsFederationTrustedServersMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/federation/trusted-servers', 'POST'] as const
}

export function getPostOcsV2PhpAppsFederationTrustedServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsFederationTrustedServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation['trusted-servers'].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsFederationTrustedServers<
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
                    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsFederationTrustedServersMutationOptions<
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

export function getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/federation/trusted-servers/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.federation['trusted-servers'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsFederationTrustedServersId<
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
                    (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['federation']['trusted-servers'][':id']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsFederationTrustedServersIdMutationOptions<
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
