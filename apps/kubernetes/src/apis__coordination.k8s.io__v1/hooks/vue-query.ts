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

export function getApisCoordinationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/'] as const
}

export function getApisCoordinationK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisCoordinationK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCoordinationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisCoordinationK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCoordinationK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisCoordinationK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['coordination.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCoordinationK8sIoV1LeasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/leases', toValue(args)] as const
}

export function getApisCoordinationK8sIoV1LeasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCoordinationK8sIoV1LeasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.leases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCoordinationK8sIoV1Leases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>
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
                  ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisCoordinationK8sIoV1LeasesQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCoordinationK8sIoV1LeasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCoordinationK8sIoV1LeasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['coordination.k8s.io'].v1.leases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases',
    toValue(args),
  ] as const
}

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCoordinationK8sIoV1NamespacesNamespaceLeases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryKey>
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
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', 'POST'] as const
}

export function getPostApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$post(args, options),
      )
    },
  })
}

export function usePostApisCoordinationK8sIoV1NamespacesNamespaceLeases<
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
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
  const mutationDefaults = getPostApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationOptions<
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

export function getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', 'DELETE'] as const
}

export function getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeases<
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
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
  const mutationDefaults = getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationOptions<
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

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name',
    toValue(args),
  ] as const
}

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryKey>
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
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', 'PUT'] as const
}

export function getPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
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
    getPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
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

export function getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationKey() {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
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
    getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
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

export function getPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationKey() {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name',
    'PATCH',
  ] as const
}

export function getPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
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
    getPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
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

export function getApisCoordinationK8sIoV1WatchLeasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']>
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/watch/leases', toValue(args)] as const
}

export function getApisCoordinationK8sIoV1WatchLeasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCoordinationK8sIoV1WatchLeasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.watch.leases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCoordinationK8sIoV1WatchLeases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']>
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCoordinationK8sIoV1WatchLeasesQueryKey>
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
            ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCoordinationK8sIoV1WatchLeasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCoordinationK8sIoV1WatchLeasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['coordination.k8s.io'].v1.watch.leases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases',
    toValue(args),
  ] as const
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCoordinationK8sIoV1WatchNamespacesNamespaceLeases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryKey>
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
              (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name',
    toValue(args),
  ] as const
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
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
                    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryKey>
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
              (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
