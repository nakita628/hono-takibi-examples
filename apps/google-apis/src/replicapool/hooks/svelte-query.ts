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

export function getProjectNameKey() {
  return ['{projectName}'] as const
}

export function getProjectNameZonesZonePoolsQueryKey(
  args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>,
) {
  return [':projectName', '/:projectName/zones/:zone/pools', args] as const
}

export function getProjectNameZonesZonePoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsQueryKey>
  >({
    queryKey: getProjectNameZonesZonePoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectNameZonesZonePools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectNameZonesZonePoolsQueryKey>
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
      ...getProjectNameZonesZonePoolsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectNameZonesZonePoolsMutationKey() {
  return [':projectName', '/:projectName/zones/:zone/pools', 'POST'] as const
}

export function getPostProjectNameZonesZonePoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectNameZonesZonePoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>,
    ) {
      return parseResponse(client[':projectName'].zones[':zone'].pools.$post(args, options))
    },
  })
}

export function createPostProjectNameZonesZonePools<
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
                ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>,
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
    const mutationDefaults = getPostProjectNameZonesZonePoolsMutationOptions<
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

export function getProjectNameZonesZonePoolsPoolNameQueryKey(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
  >,
) {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName', args] as const
}

export function getProjectNameZonesZonePoolsPoolNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsPoolNameQueryKey>
  >({
    queryKey: getProjectNameZonesZonePoolsPoolNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectNameZonesZonePoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectNameZonesZonePoolsPoolNameQueryKey>
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
      ...getProjectNameZonesZonePoolsPoolNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectNameZonesZonePoolsPoolNameMutationKey() {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName', 'POST'] as const
}

export function getPostProjectNameZonesZonePoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectNameZonesZonePoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].$post(args, options),
      )
    },
  })
}

export function createPostProjectNameZonesZonePoolsPoolName<
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
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
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
    const mutationDefaults = getPostProjectNameZonesZonePoolsPoolNameMutationOptions<
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

export function getProjectNameZonesZonePoolsPoolNameReplicasQueryKey(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
  >,
) {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName/replicas', args] as const
}

export function getProjectNameZonesZonePoolsPoolNameReplicasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasQueryKey>
  >({
    queryKey: getProjectNameZonesZonePoolsPoolNameReplicasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].replicas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectNameZonesZonePoolsPoolNameReplicas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasQueryKey>
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
      ...getProjectNameZonesZonePoolsPoolNameReplicasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
  >,
) {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName',
    args,
  ] as const
}

export function getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey>
  >({
    queryKey: getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectNameZonesZonePoolsPoolNameReplicasReplicaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey>
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
      ...getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameMutationKey() {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName',
    'POST',
  ] as const
}

export function getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostProjectNameZonesZonePoolsPoolNameReplicasReplicaName<
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
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
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
      getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameMutationOptions<
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

export function getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartMutationKey() {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName/restart',
    'POST',
  ] as const
}

export function getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].replicas[
          ':replicaName'
        ].restart.$post(args, options),
      )
    },
  })
}

export function createPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestart<
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
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
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
      getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartMutationOptions<
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

export function getPostProjectNameZonesZonePoolsPoolNameResizeMutationKey() {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName/resize', 'POST'] as const
}

export function getPostProjectNameZonesZonePoolsPoolNameResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectNameZonesZonePoolsPoolNameResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].resize.$post(args, options),
      )
    },
  })
}

export function createPostProjectNameZonesZonePoolsPoolNameResize<
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
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
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
    const mutationDefaults = getPostProjectNameZonesZonePoolsPoolNameResizeMutationOptions<
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

export function getPostProjectNameZonesZonePoolsPoolNameUpdateTemplateMutationKey() {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/updateTemplate',
    'POST',
  ] as const
}

export function getPostProjectNameZonesZonePoolsPoolNameUpdateTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectNameZonesZonePoolsPoolNameUpdateTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].updateTemplate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostProjectNameZonesZonePoolsPoolNameUpdateTemplate<
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
                  (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
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
    const mutationDefaults = getPostProjectNameZonesZonePoolsPoolNameUpdateTemplateMutationOptions<
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
