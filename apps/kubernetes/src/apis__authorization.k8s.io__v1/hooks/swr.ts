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

export function getGetApisAuthorizationK8sIoV1IndexKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/'] as const
}

export function useGetApisAuthorizationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisAuthorizationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['authorization.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAuthorizationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisAuthorizationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['authorization.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsKey() {
  return [
    'apis',
    '/apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews',
    'POST',
  ] as const
}

export function usePostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviews<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsKey()
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
            (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['authorization.k8s.io'].v1.namespaces[
            ':namespace'
          ].localsubjectaccessreviews.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApisAuthorizationK8sIoV1SelfsubjectaccessreviewsKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/selfsubjectaccessreviews', 'POST'] as const
}

export function usePostApisAuthorizationK8sIoV1Selfsubjectaccessreviews<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAuthorizationK8sIoV1SelfsubjectaccessreviewsKey()
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
            (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['authorization.k8s.io'].v1.selfsubjectaccessreviews.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApisAuthorizationK8sIoV1SelfsubjectrulesreviewsKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/selfsubjectrulesreviews', 'POST'] as const
}

export function usePostApisAuthorizationK8sIoV1Selfsubjectrulesreviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAuthorizationK8sIoV1SelfsubjectrulesreviewsKey()
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
            (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['authorization.k8s.io'].v1.selfsubjectrulesreviews.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApisAuthorizationK8sIoV1SubjectaccessreviewsKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/subjectaccessreviews', 'POST'] as const
}

export function usePostApisAuthorizationK8sIoV1Subjectaccessreviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAuthorizationK8sIoV1SubjectaccessreviewsKey()
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
            (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['authorization.k8s.io'].v1.subjectaccessreviews.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
