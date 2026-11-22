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

export function getProjectNameKey() {
  return ['{projectName}'] as const
}

export function getProjectNameZonesZonePoolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>
  >,
) {
  return [':projectName', '/:projectName/zones/:zone/pools', toValue(args)] as const
}

export function getProjectNameZonesZonePoolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectNameZonesZonePoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectNameZonesZonePools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectNameZonesZonePoolsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectNameZonesZonePoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':projectName'].zones[':zone'].pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectNameZonesZonePools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectNameZonesZonePoolsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectNameZonesZonePoolsPoolNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
    >
  >,
) {
  return [':projectName', '/:projectName/zones/:zone/pools/:poolName', toValue(args)] as const
}

export function getProjectNameZonesZonePoolsPoolNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectNameZonesZonePoolsPoolNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectNameZonesZonePoolsPoolName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
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
                    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
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
                    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectNameZonesZonePoolsPoolNameQueryKey>
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
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsPoolNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectNameZonesZonePoolsPoolNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectNameZonesZonePoolsPoolName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectNameZonesZonePoolsPoolNameMutationOptions<
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

export function getProjectNameZonesZonePoolsPoolNameReplicasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
    >
  >,
) {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas',
    toValue(args),
  ] as const
}

export function getProjectNameZonesZonePoolsPoolNameReplicasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectNameZonesZonePoolsPoolNameReplicasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].replicas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectNameZonesZonePoolsPoolNameReplicas<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
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
                    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
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
                    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasQueryKey>
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
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectNameZonesZonePoolsPoolNameReplicasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
    >
  >,
) {
  return [
    ':projectName',
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName',
    toValue(args),
  ] as const
}

export function getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectNameZonesZonePoolsPoolNameReplicasReplicaName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
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
                    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
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
                    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey>
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
              (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectNameZonesZonePoolsPoolNameReplicasReplicaNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectNameZonesZonePoolsPoolNameReplicasReplicaName<
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
    getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameMutationOptions<
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

export function usePostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestart<
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
    getPostProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestartMutationOptions<
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

export function usePostProjectNameZonesZonePoolsPoolNameResize<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectNameZonesZonePoolsPoolNameResizeMutationOptions<
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

export function usePostProjectNameZonesZonePoolsPoolNameUpdateTemplate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectNameZonesZonePoolsPoolNameUpdateTemplateMutationOptions<
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
