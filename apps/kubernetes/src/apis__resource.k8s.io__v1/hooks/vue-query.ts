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

export function getApisResourceK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/resource.k8s.io/v1/'] as const
}

export function getApisResourceK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisResourceK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
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
                Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisResourceK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1DeviceclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses', toValue(args)] as const
}

export function getApisResourceK8sIoV1DeviceclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1DeviceclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.deviceclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1Deviceclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1DeviceclassesQueryKey>
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
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DeviceclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1DeviceclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.deviceclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisResourceK8sIoV1Deviceclasses<
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']>,
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
  const mutationDefaults = getPostApisResourceK8sIoV1DeviceclassesMutationOptions<
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

export function useDeleteApisResourceK8sIoV1Deviceclasses<
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
  const mutationDefaults = getDeleteApisResourceK8sIoV1DeviceclassesMutationOptions<
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

export function getApisResourceK8sIoV1DeviceclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', toValue(args)] as const
}

export function getApisResourceK8sIoV1DeviceclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1DeviceclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1DeviceclassesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1DeviceclassesNameQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DeviceclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1DeviceclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisResourceK8sIoV1DeviceclassesName<
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
  const mutationDefaults = getPutApisResourceK8sIoV1DeviceclassesNameMutationOptions<
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

export function useDeleteApisResourceK8sIoV1DeviceclassesName<
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
  const mutationDefaults = getDeleteApisResourceK8sIoV1DeviceclassesNameMutationOptions<
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

export function usePatchApisResourceK8sIoV1DeviceclassesName<
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
  const mutationDefaults = getPatchApisResourceK8sIoV1DeviceclassesNameMutationOptions<
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

export function getApisResourceK8sIoV1DevicetaintrulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules', toValue(args)] as const
}

export function getApisResourceK8sIoV1DevicetaintrulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1DevicetaintrulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1Devicetaintrules<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesQueryKey>
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
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1DevicetaintrulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisResourceK8sIoV1Devicetaintrules<
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
  const mutationDefaults = getPostApisResourceK8sIoV1DevicetaintrulesMutationOptions<
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

export function useDeleteApisResourceK8sIoV1Devicetaintrules<
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
  const mutationDefaults = getDeleteApisResourceK8sIoV1DevicetaintrulesMutationOptions<
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

export function getApisResourceK8sIoV1DevicetaintrulesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', toValue(args)] as const
}

export function getApisResourceK8sIoV1DevicetaintrulesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1DevicetaintrulesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1DevicetaintrulesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1DevicetaintrulesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisResourceK8sIoV1DevicetaintrulesName<
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
  const mutationDefaults = getPutApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
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

export function useDeleteApisResourceK8sIoV1DevicetaintrulesName<
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
  const mutationDefaults = getDeleteApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
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

export function usePatchApisResourceK8sIoV1DevicetaintrulesName<
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
  const mutationDefaults = getPatchApisResourceK8sIoV1DevicetaintrulesNameMutationOptions<
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

export function getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name/status', toValue(args)] as const
}

export function getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1DevicetaintrulesNameStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1DevicetaintrulesNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisResourceK8sIoV1DevicetaintrulesNameStatus<
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
  const mutationDefaults = getPutApisResourceK8sIoV1DevicetaintrulesNameStatusMutationOptions<
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

export function usePatchApisResourceK8sIoV1DevicetaintrulesNameStatus<
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
  const mutationDefaults = getPatchApisResourceK8sIoV1DevicetaintrulesNameStatusMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
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
    getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationOptions<
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

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
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
    getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
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
    getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
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

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
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
    getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
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

export function usePatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
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
    getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name/status',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
          ':name'
        ].status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey
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
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
            ':name'
          ].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
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
    getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationOptions<
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

export function usePatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
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
    getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
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
    getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationOptions<
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

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
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
    getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesMutationOptions<
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

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey
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
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
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
    getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
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

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
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
    getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
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

export function usePatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
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
    getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameMutationOptions<
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

export function getApisResourceK8sIoV1ResourceclaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceclaims', toValue(args)] as const
}

export function getApisResourceK8sIoV1ResourceclaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1ResourceclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceclaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1Resourceclaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1ResourceclaimsQueryKey>
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
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1ResourceclaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.resourceclaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceclaimtemplates', toValue(args)] as const
}

export function getApisResourceK8sIoV1ResourceclaimtemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceclaimtemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1Resourceclaimtemplates<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1ResourceclaimtemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.resourceclaimtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1ResourceslicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices', toValue(args)] as const
}

export function getApisResourceK8sIoV1ResourceslicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1ResourceslicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceslices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1Resourceslices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1ResourceslicesQueryKey>
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
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceslicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1ResourceslicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.resourceslices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApisResourceK8sIoV1Resourceslices<
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
  const mutationDefaults = getPostApisResourceK8sIoV1ResourceslicesMutationOptions<
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

export function useDeleteApisResourceK8sIoV1Resourceslices<
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
  const mutationDefaults = getDeleteApisResourceK8sIoV1ResourceslicesMutationOptions<
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

export function getApisResourceK8sIoV1ResourceslicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', toValue(args)] as const
}

export function getApisResourceK8sIoV1ResourceslicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1ResourceslicesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.resourceslices[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1ResourceslicesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1ResourceslicesNameQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1ResourceslicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1ResourceslicesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.resourceslices[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApisResourceK8sIoV1ResourceslicesName<
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
  const mutationDefaults = getPutApisResourceK8sIoV1ResourceslicesNameMutationOptions<
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

export function useDeleteApisResourceK8sIoV1ResourceslicesName<
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
  const mutationDefaults = getDeleteApisResourceK8sIoV1ResourceslicesNameMutationOptions<
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

export function usePatchApisResourceK8sIoV1ResourceslicesName<
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
  const mutationDefaults = getPatchApisResourceK8sIoV1ResourceslicesNameMutationOptions<
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

export function getApisResourceK8sIoV1WatchDeviceclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/deviceclasses', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchDeviceclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchDeviceclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.deviceclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchDeviceclasses<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchDeviceclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.deviceclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/deviceclasses/:name', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchDeviceclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.deviceclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchDeviceclassesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchDeviceclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.deviceclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/devicetaintrules', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.devicetaintrules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchDevicetaintrules<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchDevicetaintrulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.devicetaintrules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/devicetaintrules/:name', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.devicetaintrules[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchDevicetaintrulesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchDevicetaintrulesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.devicetaintrules[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaims',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaims<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaims/:name',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaimtemplates',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[
          ':namespace'
        ].resourceclaimtemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplates<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].resourceclaimtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaimtemplates/:name',
    toValue(args),
  ] as const
}

export function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaimtemplates[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchResourceclaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceclaims', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchResourceclaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchResourceclaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceclaims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchResourceclaims<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimsQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchResourceclaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.resourceclaims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceclaimtemplates', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceclaimtemplates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchResourceclaimtemplates<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchResourceclaimtemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.resourceclaimtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchResourceslicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceslices', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchResourceslicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchResourceslicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceslices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchResourceslices<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchResourceslicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.resourceslices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisResourceK8sIoV1WatchResourceslicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceslices/:name', toValue(args)] as const
}

export function getApisResourceK8sIoV1WatchResourceslicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisResourceK8sIoV1WatchResourceslicesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['resource.k8s.io'].v1.watch.resourceslices[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisResourceK8sIoV1WatchResourceslicesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
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
                    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesNameQueryKey>
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
              (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisResourceK8sIoV1WatchResourceslicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisResourceK8sIoV1WatchResourceslicesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['resource.k8s.io'].v1.watch.resourceslices[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
