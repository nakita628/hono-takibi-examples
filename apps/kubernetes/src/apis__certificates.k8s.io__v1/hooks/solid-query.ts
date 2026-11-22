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

export function getApisCertificatesK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/'] as const
}

export function getApisCertificatesK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1IndexQueryKey>
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
      ...getApisCertificatesK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests', args] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1Certificatesigningrequests<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsQueryKey>
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
      ...getApisCertificatesK8sIoV1CertificatesigningrequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApisCertificatesK8sIoV1Certificatesigningrequests<
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
      getPostApisCertificatesK8sIoV1CertificatesigningrequestsMutationOptions<
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

export function createDeleteApisCertificatesK8sIoV1Certificatesigningrequests<
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
      getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsMutationOptions<
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

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', args] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1CertificatesigningrequestsName<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryKey>
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
      ...getApisCertificatesK8sIoV1CertificatesigningrequestsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApisCertificatesK8sIoV1CertificatesigningrequestsName<
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
      getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
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

export function createDeleteApisCertificatesK8sIoV1CertificatesigningrequestsName<
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
      getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
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

export function createPatchApisCertificatesK8sIoV1CertificatesigningrequestsName<
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
      getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameMutationOptions<
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

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryKey
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
      ...getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
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
      getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationOptions<
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

export function createPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
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
      getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalMutationOptions<
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

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryKey>
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
      ...getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
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
      getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationOptions<
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

export function createPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
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
      getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusMutationOptions<
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

export function getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles', args] as const
}

export function getApisCertificatesK8sIoV1ClustertrustbundlesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1Clustertrustbundles<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1ClustertrustbundlesQueryKey>
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
      ...getApisCertificatesK8sIoV1ClustertrustbundlesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApisCertificatesK8sIoV1Clustertrustbundles<
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
    const mutationDefaults = getPostApisCertificatesK8sIoV1ClustertrustbundlesMutationOptions<
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

export function createDeleteApisCertificatesK8sIoV1Clustertrustbundles<
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
    const mutationDefaults = getDeleteApisCertificatesK8sIoV1ClustertrustbundlesMutationOptions<
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

export function getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', args] as const
}

export function getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1ClustertrustbundlesName<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryKey>
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
      ...getApisCertificatesK8sIoV1ClustertrustbundlesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApisCertificatesK8sIoV1ClustertrustbundlesName<
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
    const mutationDefaults = getPutApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
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

export function createDeleteApisCertificatesK8sIoV1ClustertrustbundlesName<
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
    const mutationDefaults = getDeleteApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
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

export function createPatchApisCertificatesK8sIoV1ClustertrustbundlesName<
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
    const mutationDefaults = getPatchApisCertificatesK8sIoV1ClustertrustbundlesNameMutationOptions<
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

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryKey
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
      ...getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
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
      getPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationOptions<
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

export function createDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
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
      getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsMutationOptions<
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

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
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
      ...getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
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
      getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
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

export function createDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
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
      getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
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

export function createPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
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
      getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameMutationOptions<
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

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name/status',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
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
      ...getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
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
      getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationOptions<
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

export function createPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
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
      getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusMutationOptions<
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

export function getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/podcertificaterequests', args] as const
}

export function getApisCertificatesK8sIoV1PodcertificaterequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.podcertificaterequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1Podcertificaterequests<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1PodcertificaterequestsQueryKey>
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
      ...getApisCertificatesK8sIoV1PodcertificaterequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/certificatesigningrequests', args] as const
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1WatchCertificatesigningrequests<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryKey>
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
      ...getApisCertificatesK8sIoV1WatchCertificatesigningrequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/:name',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1WatchCertificatesigningrequestsName<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryKey>
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
      ...getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/clustertrustbundles', args] as const
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1WatchClustertrustbundles<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryKey>
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
      ...getApisCertificatesK8sIoV1WatchClustertrustbundlesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/clustertrustbundles/:name', args] as const
}

export function getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1WatchClustertrustbundlesName<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryKey>
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
      ...getApisCertificatesK8sIoV1WatchClustertrustbundlesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/namespaces/:namespace/podcertificaterequests',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.namespaces[
          ':namespace'
        ].podcertificaterequests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequests<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
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
      ...getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/watch/namespaces/:namespace/podcertificaterequests/:name',
    args,
  ] as const
}

export function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.namespaces[':namespace'].podcertificaterequests[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsName<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
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
      ...getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/podcertificaterequests', args] as const
}

export function getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['certificates.k8s.io'].v1.watch.podcertificaterequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisCertificatesK8sIoV1WatchPodcertificaterequests<
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
  args: () => InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
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
                    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryKey>
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
      ...getApisCertificatesK8sIoV1WatchPodcertificaterequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
