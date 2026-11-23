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

export function getApisCertificatesK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/'] as const
}

export function getApisCertificatesK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisCertificatesK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisCertificatesK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
    >
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests', toValue(args)] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1Certificatesigningrequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisCertificatesK8sIoV1CertificatesigningrequestsMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests', 'POST'] as const
}

export function getPostApisCertificatesK8sIoV1CertificatesigningrequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisCertificatesK8sIoV1CertificatesigningrequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$post(args, options),
      )
    },
  })
}

export function usePostApisCertificatesK8sIoV1Certificatesigningrequests<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
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
  const mutationDefaults = getPostApisCertificatesK8sIoV1CertificatesigningrequestsMutationOptions<
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

export function getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests', 'DELETE'] as const
}

export function getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisCertificatesK8sIoV1Certificatesigningrequests<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
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
    getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsMutationOptions<
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

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1CertificatesigningrequestsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', 'PUT'] as const
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisCertificatesK8sIoV1CertificatesigningrequestsName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
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
    getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
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

export function getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisCertificatesK8sIoV1CertificatesigningrequestsName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
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
    getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
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

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', 'PATCH'] as const
}

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisCertificatesK8sIoV1CertificatesigningrequestsName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
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
    getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
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

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey
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
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval',
    'PUT',
  ] as const
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
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
    getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationOptions<
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

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval',
    'PATCH',
  ] as const
}

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
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
    getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationOptions<
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

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status',
    'PUT',
  ] as const
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
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
    getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationOptions<
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

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
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
    getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationOptions<
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

export function getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
    >
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles', toValue(args)] as const
}

export function getApisCertificatesK8sIoV1ClustertrustbundlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1Clustertrustbundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisCertificatesK8sIoV1ClustertrustbundlesMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles', 'POST'] as const
}

export function getPostApisCertificatesK8sIoV1ClustertrustbundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisCertificatesK8sIoV1ClustertrustbundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles.$post(args, options),
      )
    },
  })
}

export function usePostApisCertificatesK8sIoV1Clustertrustbundles<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
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
  const mutationDefaults = getPostApisCertificatesK8sIoV1ClustertrustbundlesMutationOptions<
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

export function getDeleteApisCertificatesK8sIoV1ClustertrustbundlesMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles', 'DELETE'] as const
}

export function getDeleteApisCertificatesK8sIoV1ClustertrustbundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisCertificatesK8sIoV1ClustertrustbundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisCertificatesK8sIoV1Clustertrustbundles<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
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
  const mutationDefaults = getDeleteApisCertificatesK8sIoV1ClustertrustbundlesMutationOptions<
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

export function getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', toValue(args)] as const
}

export function getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1ClustertrustbundlesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisCertificatesK8sIoV1ClustertrustbundlesNameMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', 'PUT'] as const
}

export function getPutApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisCertificatesK8sIoV1ClustertrustbundlesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisCertificatesK8sIoV1ClustertrustbundlesName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
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
  const mutationDefaults = getPutApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
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

export function getDeleteApisCertificatesK8sIoV1ClustertrustbundlesNameMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', 'DELETE'] as const
}

export function getDeleteApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisCertificatesK8sIoV1ClustertrustbundlesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisCertificatesK8sIoV1ClustertrustbundlesName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
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

export function getPatchApisCertificatesK8sIoV1ClustertrustbundlesNameMutationKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', 'PATCH'] as const
}

export function getPatchApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisCertificatesK8sIoV1ClustertrustbundlesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisCertificatesK8sIoV1ClustertrustbundlesName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
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
  const mutationDefaults = getPatchApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
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

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey
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
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[
            ':namespace'
          ].podcertificaterequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests',
    'POST',
  ] as const
}

export function getPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
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
    getPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationOptions<
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

export function getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests',
    'DELETE',
  ] as const
}

export function getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[
          ':namespace'
        ].podcertificaterequests.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
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
    getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationOptions<
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

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryKey
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
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    'PUT',
  ] as const
}

export function getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].$put(args, options),
      )
    },
  })
}

export function usePutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
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
    getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
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

export function getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
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
    getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
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

export function getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    'PATCH',
  ] as const
}

export function getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
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
    getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
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

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name/status',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryKey
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
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
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

export function getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name/status',
    'PUT',
  ] as const
}

export function getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function usePutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
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
    getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationOptions<
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

export function getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
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
    getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationOptions<
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

export function getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
    >
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/podcertificaterequests', toValue(args)] as const
}

export function getApisCertificatesK8sIoV1PodcertificaterequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.podcertificaterequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1Podcertificaterequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.podcertificaterequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/certificatesigningrequests',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1WatchCertificatesigningrequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/:name',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1WatchCertificatesigningrequestsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
    >
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/clustertrustbundles', toValue(args)] as const
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1WatchClustertrustbundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/clustertrustbundles/:name',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1WatchClustertrustbundlesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/namespaces/:namespace/podcertificaterequests',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.namespaces[
          ':namespace'
        ].podcertificaterequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryKey
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
              (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].podcertificaterequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/namespaces/:namespace/podcertificaterequests/:name',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryKey
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
              (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].podcertificaterequests[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/podcertificaterequests',
    toValue(args),
  ] as const
}

export function getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.podcertificaterequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisCertificatesK8sIoV1WatchPodcertificaterequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey>
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
              (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.podcertificaterequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
