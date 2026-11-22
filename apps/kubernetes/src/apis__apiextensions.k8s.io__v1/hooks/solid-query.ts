import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisApiextensionsK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/'] as const
}

export function getApisApiextensionsK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisApiextensionsK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiextensionsK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiextensionsK8sIoV1IndexQueryKey>
        >
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
      ...getApisApiextensionsK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
  >,
) {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', args] as const
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey>
  >({
    queryKey: getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiextensionsK8sIoV1Customresourcedefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryKey>
        >
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
      ...getApisApiextensionsK8sIoV1CustomresourcedefinitionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', 'POST'] as const
}

export function getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$post(args, options),
      )
    },
  })
}

export function createPostApisApiextensionsK8sIoV1Customresourcedefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
          >,
          TOnMutateResult
        >
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
      getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
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

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', 'DELETE'] as const
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$delete(args, options),
      )
    },
  })
}

export function createDeleteApisApiextensionsK8sIoV1Customresourcedefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsMutationOptions<
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

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', args] as const
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey>
  >({
    queryKey: getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryKey>
        >
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
      ...getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', 'PUT'] as const
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
          >,
          TOnMutateResult
        >
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
      getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
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

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
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

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', 'PATCH'] as const
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
          >,
          TOnMutateResult
        >
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
      getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameMutationOptions<
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

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    args,
  ] as const
}

export function getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey>
  >({
    queryKey: getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryKey>
        >
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
      ...getApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    'PUT',
  ] as const
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
          >,
          TOnMutateResult
        >
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
      getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
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

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
          >,
          TOnMutateResult
        >
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
      getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusMutationOptions<
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

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
  >,
) {
  return ['apis', '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions', args] as const
}

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey>
  >({
    queryKey: getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiextensionsK8sIoV1WatchCustomresourcedefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryKey>
        >
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
      ...getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name',
    args,
  ] as const
}

export function getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey>
  >({
    queryKey: getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryKey>
        >
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
      ...getApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
