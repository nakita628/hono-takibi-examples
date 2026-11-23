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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisCoordinationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/'] as const
}

export function getApisCoordinationK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApisCoordinationK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCoordinationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
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
                ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisCoordinationK8sIoV1IndexQueryKey>
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
      ...getApisCoordinationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisCoordinationK8sIoV1LeasesQueryKey(
  args: InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/leases', args] as const
}

export function getApisCoordinationK8sIoV1LeasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCoordinationK8sIoV1LeasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.leases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCoordinationK8sIoV1Leases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApisCoordinationK8sIoV1LeasesQueryKey>
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
      ...getApisCoordinationK8sIoV1LeasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', args] as const
}

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCoordinationK8sIoV1NamespacesNamespaceLeases<
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
  args: () => InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisCoordinationK8sIoV1NamespacesNamespaceLeasesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApisCoordinationK8sIoV1NamespacesNamespaceLeases<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationOptions<
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

export function createDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeases<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesMutationOptions<
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

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', args] as const
}

export function getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
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
  args: () => InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
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

export function createDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
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

export function createPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameMutationOptions<
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

export function getApisCoordinationK8sIoV1WatchLeasesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/watch/leases', args] as const
}

export function getApisCoordinationK8sIoV1WatchLeasesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCoordinationK8sIoV1WatchLeasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.watch.leases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCoordinationK8sIoV1WatchLeases<
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
  args: () => InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApisCoordinationK8sIoV1WatchLeasesQueryKey>
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
      ...getApisCoordinationK8sIoV1WatchLeasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases', args] as const
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCoordinationK8sIoV1WatchNamespacesNamespaceLeases<
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
  args: () => InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name',
    args,
  ] as const
}

export function getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesName<
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
  args: () => InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
