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

export function getApisResourceK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/resource.k8s.io/v1/'] as const
}

export function getApisResourceK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
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
                Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1IndexQueryKey>
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
    return { ...getApisResourceK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApisResourceK8sIoV1DeviceclassesQueryKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses', args] as const
}

export function getApisResourceK8sIoV1DeviceclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DeviceclassesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1DeviceclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.deviceclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1Deviceclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1DeviceclassesQueryKey>
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
      ...getApisResourceK8sIoV1DeviceclassesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisResourceK8sIoV1DeviceclassesMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses', 'POST'] as const
}

export function getPostApisResourceK8sIoV1DeviceclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisResourceK8sIoV1DeviceclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']
      >,
    ) {
      return parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$post(args, options))
    },
  })
}

export function createPostApisResourceK8sIoV1Deviceclasses<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']>,
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
    const mutationDefaults = getPostApisResourceK8sIoV1DeviceclassesMutationOptions<
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

export function getDeleteApisResourceK8sIoV1DeviceclassesMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses', 'DELETE'] as const
}

export function getDeleteApisResourceK8sIoV1DeviceclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1DeviceclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']
      >,
    ) {
      return parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$delete(args, options))
    },
  })
}

export function createDeleteApisResourceK8sIoV1Deviceclasses<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']
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
    const mutationDefaults = getDeleteApisResourceK8sIoV1DeviceclassesMutationOptions<
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

export function getApisResourceK8sIoV1DeviceclassesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', args] as const
}

export function getApisResourceK8sIoV1DeviceclassesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DeviceclassesNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1DeviceclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1DeviceclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1DeviceclassesNameQueryKey>
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
      ...getApisResourceK8sIoV1DeviceclassesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisResourceK8sIoV1DeviceclassesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', 'PUT'] as const
}

export function getPutApisResourceK8sIoV1DeviceclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisResourceK8sIoV1DeviceclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$put(args, options),
      )
    },
  })
}

export function createPutApisResourceK8sIoV1DeviceclassesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
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
    const mutationDefaults = getPutApisResourceK8sIoV1DeviceclassesNameMutationOptions<
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

export function getDeleteApisResourceK8sIoV1DeviceclassesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', 'DELETE'] as const
}

export function getDeleteApisResourceK8sIoV1DeviceclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1DeviceclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1DeviceclassesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
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
    const mutationDefaults = getDeleteApisResourceK8sIoV1DeviceclassesNameMutationOptions<
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

export function getPatchApisResourceK8sIoV1DeviceclassesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', 'PATCH'] as const
}

export function getPatchApisResourceK8sIoV1DeviceclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisResourceK8sIoV1DeviceclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function createPatchApisResourceK8sIoV1DeviceclassesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
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
    const mutationDefaults = getPatchApisResourceK8sIoV1DeviceclassesNameMutationOptions<
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

export function getApisResourceK8sIoV1DevicetaintrulesQueryKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules', args] as const
}

export function getApisResourceK8sIoV1DevicetaintrulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1DevicetaintrulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1Devicetaintrules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesQueryKey>
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
      ...getApisResourceK8sIoV1DevicetaintrulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisResourceK8sIoV1DevicetaintrulesMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules', 'POST'] as const
}

export function getPostApisResourceK8sIoV1DevicetaintrulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisResourceK8sIoV1DevicetaintrulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']
      >,
    ) {
      return parseResponse(client.apis['resource.k8s.io'].v1.devicetaintrules.$post(args, options))
    },
  })
}

export function createPostApisResourceK8sIoV1Devicetaintrules<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']
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
    const mutationDefaults = getPostApisResourceK8sIoV1DevicetaintrulesMutationOptions<
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

export function getDeleteApisResourceK8sIoV1DevicetaintrulesMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules', 'DELETE'] as const
}

export function getDeleteApisResourceK8sIoV1DevicetaintrulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1DevicetaintrulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules.$delete(args, options),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1Devicetaintrules<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']
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
    const mutationDefaults = getDeleteApisResourceK8sIoV1DevicetaintrulesMutationOptions<
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

export function getApisResourceK8sIoV1DevicetaintrulesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', args] as const
}

export function getApisResourceK8sIoV1DevicetaintrulesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1DevicetaintrulesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1DevicetaintrulesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameQueryKey>
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
      ...getApisResourceK8sIoV1DevicetaintrulesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApisResourceK8sIoV1DevicetaintrulesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', 'PUT'] as const
}

export function getPutApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisResourceK8sIoV1DevicetaintrulesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$put(args, options),
      )
    },
  })
}

export function createPutApisResourceK8sIoV1DevicetaintrulesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
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
    const mutationDefaults = getPutApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
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

export function getDeleteApisResourceK8sIoV1DevicetaintrulesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', 'DELETE'] as const
}

export function getDeleteApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1DevicetaintrulesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1DevicetaintrulesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
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
    const mutationDefaults = getDeleteApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
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

export function getPatchApisResourceK8sIoV1DevicetaintrulesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', 'PATCH'] as const
}

export function getPatchApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisResourceK8sIoV1DevicetaintrulesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$patch(args, options),
      )
    },
  })
}

export function createPatchApisResourceK8sIoV1DevicetaintrulesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
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
    const mutationDefaults = getPatchApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
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

export function getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name/status', args] as const
}

export function getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1DevicetaintrulesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey>
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
      ...getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApisResourceK8sIoV1DevicetaintrulesNameStatusMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name/status', 'PUT'] as const
}

export function getPutApisResourceK8sIoV1DevicetaintrulesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisResourceK8sIoV1DevicetaintrulesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$put(args, options),
      )
    },
  })
}

export function createPutApisResourceK8sIoV1DevicetaintrulesNameStatus<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
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
    const mutationDefaults = getPutApisResourceK8sIoV1DevicetaintrulesNameStatusMutationOptions<
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

export function getPatchApisResourceK8sIoV1DevicetaintrulesNameStatusMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name/status', 'PATCH'] as const
}

export function getPatchApisResourceK8sIoV1DevicetaintrulesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisResourceK8sIoV1DevicetaintrulesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$patch(args, options),
      )
    },
  })
}

export function createPatchApisResourceK8sIoV1DevicetaintrulesNameStatus<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
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
    const mutationDefaults = getPatchApisResourceK8sIoV1DevicetaintrulesNameStatusMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims', args] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey>
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
      ...getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims', 'POST'] as const
}

export function getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
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
      getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationOptions<
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

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims',
    'DELETE',
  ] as const
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
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
      getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    args,
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey>
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
      ...getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    'PUT',
  ] as const
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
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
      getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
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

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
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
      getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
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

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    'PATCH',
  ] as const
}

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
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
      getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name/status',
    args,
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
          ':name'
        ].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey
          >
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
      ...getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name/status',
    'PUT',
  ] as const
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function createPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
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
      getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationOptions<
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

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function createPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
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
      getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates',
    args,
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey>
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
      ...getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates',
    'POST',
  ] as const
}

export function getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
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
      getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationOptions<
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

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates',
    'DELETE',
  ] as const
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
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
      getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    args,
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey
          >
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
      ...getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    'PUT',
  ] as const
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
          ':name'
        ].$put(args, options),
      )
    },
  })
}

export function createPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
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
      getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
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

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
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
      getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
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

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    'PATCH',
  ] as const
}

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
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
      getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
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

export function getApisResourceK8sIoV1ResourceclaimsQueryKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceclaims', args] as const
}

export function getApisResourceK8sIoV1ResourceclaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceclaimsQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1ResourceclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1Resourceclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1ResourceclaimsQueryKey>
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
      ...getApisResourceK8sIoV1ResourceclaimsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceclaimtemplates', args] as const
}

export function getApisResourceK8sIoV1ResourceclaimtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceclaimtemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1Resourceclaimtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey>
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
      ...getApisResourceK8sIoV1ResourceclaimtemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1ResourceslicesQueryKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices', args] as const
}

export function getApisResourceK8sIoV1ResourceslicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceslicesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1ResourceslicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceslices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1Resourceslices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1ResourceslicesQueryKey>
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
      ...getApisResourceK8sIoV1ResourceslicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisResourceK8sIoV1ResourceslicesMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices', 'POST'] as const
}

export function getPostApisResourceK8sIoV1ResourceslicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisResourceK8sIoV1ResourceslicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']
      >,
    ) {
      return parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$post(args, options))
    },
  })
}

export function createPostApisResourceK8sIoV1Resourceslices<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']
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
    const mutationDefaults = getPostApisResourceK8sIoV1ResourceslicesMutationOptions<
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

export function getDeleteApisResourceK8sIoV1ResourceslicesMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices', 'DELETE'] as const
}

export function getDeleteApisResourceK8sIoV1ResourceslicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1ResourceslicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']
      >,
    ) {
      return parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$delete(args, options))
    },
  })
}

export function createDeleteApisResourceK8sIoV1Resourceslices<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']
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
    const mutationDefaults = getDeleteApisResourceK8sIoV1ResourceslicesMutationOptions<
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

export function getApisResourceK8sIoV1ResourceslicesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', args] as const
}

export function getApisResourceK8sIoV1ResourceslicesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceslicesNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1ResourceslicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceslices[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1ResourceslicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1ResourceslicesNameQueryKey>
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
      ...getApisResourceK8sIoV1ResourceslicesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisResourceK8sIoV1ResourceslicesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', 'PUT'] as const
}

export function getPutApisResourceK8sIoV1ResourceslicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisResourceK8sIoV1ResourceslicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceslices[':name'].$put(args, options),
      )
    },
  })
}

export function createPutApisResourceK8sIoV1ResourceslicesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
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
    const mutationDefaults = getPutApisResourceK8sIoV1ResourceslicesNameMutationOptions<
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

export function getDeleteApisResourceK8sIoV1ResourceslicesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', 'DELETE'] as const
}

export function getDeleteApisResourceK8sIoV1ResourceslicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisResourceK8sIoV1ResourceslicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceslices[':name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisResourceK8sIoV1ResourceslicesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
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
    const mutationDefaults = getDeleteApisResourceK8sIoV1ResourceslicesNameMutationOptions<
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

export function getPatchApisResourceK8sIoV1ResourceslicesNameMutationKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', 'PATCH'] as const
}

export function getPatchApisResourceK8sIoV1ResourceslicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisResourceK8sIoV1ResourceslicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceslices[':name'].$patch(args, options),
      )
    },
  })
}

export function createPatchApisResourceK8sIoV1ResourceslicesName<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
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
    const mutationDefaults = getPatchApisResourceK8sIoV1ResourceslicesNameMutationOptions<
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

export function getApisResourceK8sIoV1WatchDeviceclassesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/deviceclasses', args] as const
}

export function getApisResourceK8sIoV1WatchDeviceclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchDeviceclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.deviceclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchDeviceclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesQueryKey>
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
      ...getApisResourceK8sIoV1WatchDeviceclassesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/deviceclasses/:name', args] as const
}

export function getApisResourceK8sIoV1WatchDeviceclassesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.deviceclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchDeviceclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey>
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
      ...getApisResourceK8sIoV1WatchDeviceclassesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/devicetaintrules', args] as const
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.devicetaintrules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchDevicetaintrules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey>
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
      ...getApisResourceK8sIoV1WatchDevicetaintrulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/devicetaintrules/:name', args] as const
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.devicetaintrules[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchDevicetaintrulesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey>
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
      ...getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaims',
    args,
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey>
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
      ...getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaims/:name',
    args,
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey
          >
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
      ...getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaimtemplates',
    args,
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[
          ':namespace'
        ].resourceclaimtemplates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey
          >
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
      ...getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaimtemplates/:name',
    args,
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey
    >
  >({
    queryKey:
      getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaimtemplates[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey
          >
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
      ...getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchResourceclaimsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceclaims', args] as const
}

export function getApisResourceK8sIoV1WatchResourceclaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimsQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchResourceclaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceclaims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchResourceclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimsQueryKey>
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
      ...getApisResourceK8sIoV1WatchResourceclaimsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceclaimtemplates', args] as const
}

export function getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceclaimtemplates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchResourceclaimtemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey>
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
      ...getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchResourceslicesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceslices', args] as const
}

export function getApisResourceK8sIoV1WatchResourceslicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchResourceslicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceslices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchResourceslices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesQueryKey>
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
      ...getApisResourceK8sIoV1WatchResourceslicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisResourceK8sIoV1WatchResourceslicesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceslices/:name', args] as const
}

export function getApisResourceK8sIoV1WatchResourceslicesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesNameQueryKey>
  >({
    queryKey: getApisResourceK8sIoV1WatchResourceslicesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceslices[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisResourceK8sIoV1WatchResourceslicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesNameQueryKey>
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
      ...getApisResourceK8sIoV1WatchResourceslicesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
