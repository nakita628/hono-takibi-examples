import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getGetApisCertificatesK8sIoV1IndexKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/'] as const
}

export function useGetApisCertificatesK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['certificates.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['certificates.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['certificates.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1CertificatesigningrequestsKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests', args] as const
}

export function useGetApisCertificatesK8sIoV1Certificatesigningrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1Certificatesigningrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisCertificatesK8sIoV1CertificatesigningrequestsKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests', 'POST'] as const
}

export function usePostApisCertificatesK8sIoV1Certificatesigningrequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisCertificatesK8sIoV1CertificatesigningrequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests', 'DELETE'] as const
}

export function useDeleteApisCertificatesK8sIoV1Certificatesigningrequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', args] as const
}

export function useGetApisCertificatesK8sIoV1CertificatesigningrequestsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1CertificatesigningrequestsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', 'PUT'] as const
}

export function usePutApisCertificatesK8sIoV1CertificatesigningrequestsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsNameKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisCertificatesK8sIoV1CertificatesigningrequestsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisCertificatesK8sIoV1CertificatesigningrequestsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', 'PATCH'] as const
}

export function usePatchApisCertificatesK8sIoV1CertificatesigningrequestsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalKey(
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

export function useGetApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval',
    'PUT',
  ] as const
}

export function usePutApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval',
    'PATCH',
  ] as const
}

export function usePatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusKey(
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

export function useGetApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status',
    'PUT',
  ] as const
}

export function usePutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1ClustertrustbundlesKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles', args] as const
}

export function useGetApisCertificatesK8sIoV1Clustertrustbundles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1ClustertrustbundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1Clustertrustbundles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1ClustertrustbundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisCertificatesK8sIoV1ClustertrustbundlesKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles', 'POST'] as const
}

export function usePostApisCertificatesK8sIoV1Clustertrustbundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisCertificatesK8sIoV1ClustertrustbundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCertificatesK8sIoV1ClustertrustbundlesKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles', 'DELETE'] as const
}

export function useDeleteApisCertificatesK8sIoV1Clustertrustbundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisCertificatesK8sIoV1ClustertrustbundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1ClustertrustbundlesNameKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', args] as const
}

export function useGetApisCertificatesK8sIoV1ClustertrustbundlesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1ClustertrustbundlesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1ClustertrustbundlesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1ClustertrustbundlesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisCertificatesK8sIoV1ClustertrustbundlesNameKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', 'PUT'] as const
}

export function usePutApisCertificatesK8sIoV1ClustertrustbundlesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisCertificatesK8sIoV1ClustertrustbundlesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCertificatesK8sIoV1ClustertrustbundlesNameKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', 'DELETE'] as const
}

export function useDeleteApisCertificatesK8sIoV1ClustertrustbundlesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisCertificatesK8sIoV1ClustertrustbundlesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisCertificatesK8sIoV1ClustertrustbundlesNameKey() {
  return ['apis', '/apis/certificates.k8s.io/v1/clustertrustbundles/:name', 'PATCH'] as const
}

export function usePatchApisCertificatesK8sIoV1ClustertrustbundlesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisCertificatesK8sIoV1ClustertrustbundlesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsKey(
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

export function useGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[
            ':namespace'
          ].podcertificaterequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[
            ':namespace'
          ].podcertificaterequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests',
    'POST',
  ] as const
}

export function usePostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[
            ':namespace'
          ].podcertificaterequests.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests',
    'DELETE',
  ] as const
}

export function useDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[
            ':namespace'
          ].podcertificaterequests.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey(
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

export function useGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    'PUT',
  ] as const
}

export function usePutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name',
    'PATCH',
  ] as const
}

export function usePatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusKey(
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

export function useGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name/status',
    'PUT',
  ] as const
}

export function usePutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusKey() {
  return [
    'apis',
    '/apis/certificates.k8s.io/v1/namespaces/:namespace/podcertificaterequests/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1PodcertificaterequestsKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/podcertificaterequests', args] as const
}

export function useGetApisCertificatesK8sIoV1Podcertificaterequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1PodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.podcertificaterequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1Podcertificaterequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1PodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.podcertificaterequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/certificatesigningrequests', args] as const
}

export function useGetApisCertificatesK8sIoV1WatchCertificatesigningrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1WatchCertificatesigningrequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameKey(
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

export function useGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1WatchClustertrustbundlesKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/clustertrustbundles', args] as const
}

export function useGetApisCertificatesK8sIoV1WatchClustertrustbundles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchClustertrustbundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1WatchClustertrustbundles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchClustertrustbundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1WatchClustertrustbundlesNameKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/clustertrustbundles/:name', args] as const
}

export function useGetApisCertificatesK8sIoV1WatchClustertrustbundlesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchClustertrustbundlesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1WatchClustertrustbundlesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchClustertrustbundlesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsKey(
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

export function useGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].podcertificaterequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].podcertificaterequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameKey(
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

export function useGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].podcertificaterequests[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].podcertificaterequests[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCertificatesK8sIoV1WatchPodcertificaterequestsKey(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
  >,
) {
  return ['apis', '/apis/certificates.k8s.io/v1/watch/podcertificaterequests', args] as const
}

export function useGetApisCertificatesK8sIoV1WatchPodcertificaterequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchPodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.podcertificaterequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCertificatesK8sIoV1WatchPodcertificaterequests<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCertificatesK8sIoV1WatchPodcertificaterequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['certificates.k8s.io'].v1.watch.podcertificaterequests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
