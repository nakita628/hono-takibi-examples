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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisRbacAuthorizationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/'] as const
}

export function getApisRbacAuthorizationK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisRbacAuthorizationK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1IndexQueryKey>
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
            ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisRbacAuthorizationK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1ClusterrolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
    >
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1ClusterrolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1ClusterrolebindingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1Clusterrolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolebindingsQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1ClusterrolebindingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', 'POST'] as const
}

export function getPostApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$post(args, options),
      )
    },
  })
}

export function usePostApisRbacAuthorizationK8sIoV1Clusterrolebindings<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
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
  const mutationDefaults = getPostApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', 'DELETE'] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1Clusterrolebindings<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
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
  const mutationDefaults = getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', 'PUT'] as const
}

export function getPutApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
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
  const mutationDefaults = getPutApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', 'DELETE'] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
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
    getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationOptions<
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

export function getPatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', 'PATCH'] as const
}

export function getPatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
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
    getPatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1ClusterrolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
    >
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1ClusterrolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1ClusterrolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1Clusterroles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolesQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1ClusterrolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisRbacAuthorizationK8sIoV1ClusterrolesMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles', 'POST'] as const
}

export function getPostApisRbacAuthorizationK8sIoV1ClusterrolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisRbacAuthorizationK8sIoV1ClusterrolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$post(args, options),
      )
    },
  })
}

export function usePostApisRbacAuthorizationK8sIoV1Clusterroles<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
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
  const mutationDefaults = getPostApisRbacAuthorizationK8sIoV1ClusterrolesMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles', 'DELETE'] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1Clusterroles<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
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
  const mutationDefaults = getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1ClusterrolesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1ClusterrolesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1ClusterrolesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1ClusterrolesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolesNameQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1ClusterrolesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1ClusterrolesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', 'PUT'] as const
}

export function getPutApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisRbacAuthorizationK8sIoV1ClusterrolesName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
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
  const mutationDefaults = getPutApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', 'DELETE'] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1ClusterrolesName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationOptions<
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

export function getPatchApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', 'PATCH'] as const
}

export function getPatchApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisRbacAuthorizationK8sIoV1ClusterrolesName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
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
  const mutationDefaults = getPatchApisRbacAuthorizationK8sIoV1ClusterrolesNameMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings',
    'POST',
  ] as const
}

export function getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
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
    getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings',
    'DELETE',
  ] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
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
    getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameQueryKey
          >
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    'PUT',
  ] as const
}

export function getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
          ':name'
        ].$put(args, options),
      )
    },
  })
}

export function usePutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
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
    getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
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
    getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationOptions<
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

export function getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    'PATCH',
  ] as const
}

export function getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
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
    getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', 'POST'] as const
}

export function getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
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
    getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles',
    'DELETE',
  ] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
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
    getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    'PUT',
  ] as const
}

export function getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
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
    getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationOptions<
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

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
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
    getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationOptions<
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

export function getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    'PATCH',
  ] as const
}

export function getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
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
    getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameMutationOptions<
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

export function getApisRbacAuthorizationK8sIoV1RolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
    >
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/rolebindings', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1RolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1RolebindingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.rolebindings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1Rolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1RolebindingsQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1RolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1RolebindingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.rolebindings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1RolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/roles', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1RolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1RolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1Roles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1RolesQueryKey>
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
            ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1RolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1RolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchClusterrolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
    >
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/clusterroles', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchClusterrolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchClusterroles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolesQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchClusterrolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchClusterrolesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[
          ':namespace'
        ].rolebindings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsQueryKey
          >
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].rolebindings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].rolebindings[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameQueryKey
          >
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].rolebindings[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles/:name',
    toValue(args),
  ] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameQueryKey
          >
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchRolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
    >
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/rolebindings', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchRolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchRolebindingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.rolebindings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchRolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchRolebindingsQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchRolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchRolebindingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.rolebindings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisRbacAuthorizationK8sIoV1WatchRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
    >
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/roles', toValue(args)] as const
}

export function getApisRbacAuthorizationK8sIoV1WatchRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['rbac.authorization.k8s.io'].v1.watch.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisRbacAuthorizationK8sIoV1WatchRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
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
                    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchRolesQueryKey>
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
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisRbacAuthorizationK8sIoV1WatchRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisRbacAuthorizationK8sIoV1WatchRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.watch.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
