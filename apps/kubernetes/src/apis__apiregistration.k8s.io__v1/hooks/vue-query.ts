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

export function getApisApiregistrationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/'] as const
}

export function getApisApiregistrationK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisApiregistrationK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiregistrationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisApiregistrationK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisApiregistrationK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiregistration.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiregistrationK8sIoV1ApiservicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', toValue(args)] as const
}

export function getApisApiregistrationK8sIoV1ApiservicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiregistrationK8sIoV1ApiservicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiregistrationK8sIoV1Apiservices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesQueryKey>
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
            ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiregistrationK8sIoV1ApiservicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisApiregistrationK8sIoV1ApiservicesMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', 'POST'] as const
}

export function getPostApisApiregistrationK8sIoV1ApiservicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiregistrationK8sIoV1ApiservicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices.$post(args, options),
      )
    },
  })
}

export function usePostApisApiregistrationK8sIoV1Apiservices<
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$post']
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
  const mutationDefaults = getPostApisApiregistrationK8sIoV1ApiservicesMutationOptions<
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

export function getDeleteApisApiregistrationK8sIoV1ApiservicesMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices', 'DELETE'] as const
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiregistrationK8sIoV1ApiservicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisApiregistrationK8sIoV1Apiservices<
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices']['$delete']
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
  const mutationDefaults = getDeleteApisApiregistrationK8sIoV1ApiservicesMutationOptions<
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

export function getApisApiregistrationK8sIoV1ApiservicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', toValue(args)] as const
}

export function getApisApiregistrationK8sIoV1ApiservicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiregistrationK8sIoV1ApiservicesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiregistrationK8sIoV1ApiservicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameQueryKey>
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
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiregistrationK8sIoV1ApiservicesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'PUT'] as const
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiregistrationK8sIoV1ApiservicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisApiregistrationK8sIoV1ApiservicesName<
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$put']
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
  const mutationDefaults = getPutApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
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

export function getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'DELETE'] as const
}

export function getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisApiregistrationK8sIoV1ApiservicesName<
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
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

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name', 'PATCH'] as const
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisApiregistrationK8sIoV1ApiservicesName<
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['$patch']
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
  const mutationDefaults = getPatchApisApiregistrationK8sIoV1ApiservicesNameMutationOptions<
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

export function getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/apiregistration.k8s.io/v1/apiservices/:name/status',
    toValue(args),
  ] as const
}

export function getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiregistrationK8sIoV1ApiservicesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey>
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
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiregistrationK8sIoV1ApiservicesNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', 'PUT'] as const
}

export function getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$put(args, options),
      )
    },
  })
}

export function usePutApisApiregistrationK8sIoV1ApiservicesNameStatus<
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$put']
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
  const mutationDefaults = getPutApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
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

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey() {
  return ['apis', '/apis/apiregistration.k8s.io/v1/apiservices/:name/status', 'PATCH'] as const
}

export function getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.apiservices[':name'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisApiregistrationK8sIoV1ApiservicesNameStatus<
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['apiservices'][':name']['status']['$patch']
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
  const mutationDefaults = getPatchApisApiregistrationK8sIoV1ApiservicesNameStatusMutationOptions<
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

export function getApisApiregistrationK8sIoV1WatchApiservicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
    >
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/watch/apiservices', toValue(args)] as const
}

export function getApisApiregistrationK8sIoV1WatchApiservicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiregistrationK8sIoV1WatchApiservicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.watch.apiservices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiregistrationK8sIoV1WatchApiservices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesQueryKey>
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
              (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiregistrationK8sIoV1WatchApiservicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiregistration.k8s.io'].v1.watch.apiservices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/apiregistration.k8s.io/v1/watch/apiservices/:name', toValue(args)] as const
}

export function getApisApiregistrationK8sIoV1WatchApiservicesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['apiregistration.k8s.io'].v1.watch.apiservices[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiregistrationK8sIoV1WatchApiservicesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
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
                    (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey>
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
              (typeof client.apis)['apiregistration.k8s.io']['v1']['watch']['apiservices'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiregistrationK8sIoV1WatchApiservicesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['apiregistration.k8s.io'].v1.watch.apiservices[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
