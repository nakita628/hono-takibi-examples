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

export function getApisNetworkingK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/networking.k8s.io/v1/'] as const
}

export function getApisNetworkingK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisNetworkingK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisNetworkingK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1IngressclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1IngressclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1IngressclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1Ingressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesQueryKey>
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
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1IngressclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.ingressclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1IngressclassesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1IngressclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1IngressclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.ingressclasses.$post(args, options))
    },
  })
}

export function usePostApisNetworkingK8sIoV1Ingressclasses<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
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
  const mutationDefaults = getPostApisNetworkingK8sIoV1IngressclassesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IngressclassesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IngressclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IngressclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1Ingressclasses<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IngressclassesMutationOptions<
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

export function getApisNetworkingK8sIoV1IngressclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1IngressclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1IngressclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1IngressclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IngressclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1IngressclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1IngressclassesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1IngressclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1IngressclassesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1IngressclassesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1IngressclassesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1IngressclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1IngressclassesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1IngressclassesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1IngressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingresses', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1IngressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1IngressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ingresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1Ingresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
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
                  ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1IngressesQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IngressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1IngressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.ingresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1IpaddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1IpaddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1IpaddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1Ipaddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
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
                  ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesQueryKey>
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
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1IpaddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.ipaddresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1IpaddressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1IpaddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1IpaddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$post(args, options))
    },
  })
}

export function usePostApisNetworkingK8sIoV1Ipaddresses<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>,
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
  const mutationDefaults = getPostApisNetworkingK8sIoV1IpaddressesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IpaddressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IpaddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IpaddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$delete(args, options))
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1Ipaddresses<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IpaddressesMutationOptions<
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

export function getApisNetworkingK8sIoV1IpaddressesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1IpaddressesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1IpaddressesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1IpaddressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1IpaddressesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1IpaddressesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1IpaddressesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1IpaddressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1IpaddressesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1IpaddressesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1IpaddressesNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1IpaddressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1IpaddressesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1IpaddressesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1NamespacesNamespaceIngressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$post(args, options),
      )
    },
  })
}

export function usePostApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
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
  const mutationDefaults = getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'PUT',
  ] as const
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
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
    getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'PATCH',
  ] as const
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
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
    getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[
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

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    'PUT',
  ] as const
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
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
    getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
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
    getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies',
    'POST',
  ] as const
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
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
    getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies',
    'DELETE',
  ] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesMutationOptions<
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

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'PUT',
  ] as const
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
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
    getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
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
    getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'PATCH',
  ] as const
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
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
    getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameMutationOptions<
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

export function getApisNetworkingK8sIoV1NetworkpoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/networkpolicies', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1NetworkpoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1NetworkpoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.networkpolicies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1Networkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
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
                    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1NetworkpoliciesQueryKey>
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
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1NetworkpoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1NetworkpoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.networkpolicies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1ServicecidrsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1ServicecidrsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1ServicecidrsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1Servicecidrs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsQueryKey>
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
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1ServicecidrsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisNetworkingK8sIoV1ServicecidrsMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', 'POST'] as const
}

export function getPostApisNetworkingK8sIoV1ServicecidrsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNetworkingK8sIoV1ServicecidrsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$post(args, options))
    },
  })
}

export function usePostApisNetworkingK8sIoV1Servicecidrs<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']
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
  const mutationDefaults = getPostApisNetworkingK8sIoV1ServicecidrsMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1ServicecidrsMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1ServicecidrsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1ServicecidrsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
      >,
    ) {
      return parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$delete(args, options))
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1Servicecidrs<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1ServicecidrsMutationOptions<
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

export function getApisNetworkingK8sIoV1ServicecidrsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1ServicecidrsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1ServicecidrsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1ServicecidrsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1ServicecidrsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1ServicecidrsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1ServicecidrsName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
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

export function getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'DELETE'] as const
}

export function getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNetworkingK8sIoV1ServicecidrsName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1ServicecidrsName<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1ServicecidrsNameMutationOptions<
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

export function getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1ServicecidrsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1ServicecidrsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', 'PUT'] as const
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisNetworkingK8sIoV1ServicecidrsNameStatus<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
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

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', 'PATCH'] as const
}

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisNetworkingK8sIoV1ServicecidrsNameStatus<
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
                    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusMutationOptions<
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

export function getApisNetworkingK8sIoV1WatchIngressclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingressclasses', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchIngressclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchIngressclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ingressclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchIngressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchIngressclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.ingressclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingressclasses/:name', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchIngressclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ingressclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchIngressclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchIngressclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.ingressclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIngressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']>
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingresses', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchIngressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchIngressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ingresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']>
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIngressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchIngressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.ingresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIpaddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ipaddresses', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchIpaddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchIpaddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ipaddresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchIpaddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchIpaddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.ipaddresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ipaddresses/:name', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchIpaddressesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.ipaddresses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchIpaddressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchIpaddressesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.ipaddresses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name',
    toValue(args),
  ] as const
}

export function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/networkpolicies', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.networkpolicies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchNetworkpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchNetworkpoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.networkpolicies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchServicecidrsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/servicecidrs', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchServicecidrsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchServicecidrsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.servicecidrs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchServicecidrs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchServicecidrsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.servicecidrs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/servicecidrs/:name', toValue(args)] as const
}

export function getApisNetworkingK8sIoV1WatchServicecidrsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['networking.k8s.io'].v1.watch.servicecidrs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNetworkingK8sIoV1WatchServicecidrsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
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
                    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey>
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
              (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNetworkingK8sIoV1WatchServicecidrsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['networking.k8s.io'].v1.watch.servicecidrs[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
