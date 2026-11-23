import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisAuthorizationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/'] as const
}

export function getApisAuthorizationK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisAuthorizationK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['authorization.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAuthorizationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisAuthorizationK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAuthorizationK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisAuthorizationK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['authorization.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsMutationKey() {
  return [
    'apis',
    '/apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews',
    'POST',
  ] as const
}

export function getPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['authorization.k8s.io'].v1.namespaces[
          ':namespace'
        ].localsubjectaccessreviews.$post(args, options),
      )
    },
  })
}

export function usePostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviews<
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
                    (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['authorization.k8s.io']['v1']['namespaces'][':namespace']['localsubjectaccessreviews']['$post']
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
    getPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsMutationOptions<
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

export function getPostApisAuthorizationK8sIoV1SelfsubjectaccessreviewsMutationKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/selfsubjectaccessreviews', 'POST'] as const
}

export function getPostApisAuthorizationK8sIoV1SelfsubjectaccessreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAuthorizationK8sIoV1SelfsubjectaccessreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['authorization.k8s.io'].v1.selfsubjectaccessreviews.$post(args, options),
      )
    },
  })
}

export function usePostApisAuthorizationK8sIoV1Selfsubjectaccessreviews<
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
                    (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectaccessreviews']['$post']
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
  const mutationDefaults = getPostApisAuthorizationK8sIoV1SelfsubjectaccessreviewsMutationOptions<
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

export function getPostApisAuthorizationK8sIoV1SelfsubjectrulesreviewsMutationKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/selfsubjectrulesreviews', 'POST'] as const
}

export function getPostApisAuthorizationK8sIoV1SelfsubjectrulesreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAuthorizationK8sIoV1SelfsubjectrulesreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['authorization.k8s.io'].v1.selfsubjectrulesreviews.$post(args, options),
      )
    },
  })
}

export function usePostApisAuthorizationK8sIoV1Selfsubjectrulesreviews<
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
                    (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['authorization.k8s.io']['v1']['selfsubjectrulesreviews']['$post']
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
  const mutationDefaults = getPostApisAuthorizationK8sIoV1SelfsubjectrulesreviewsMutationOptions<
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

export function getPostApisAuthorizationK8sIoV1SubjectaccessreviewsMutationKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/subjectaccessreviews', 'POST'] as const
}

export function getPostApisAuthorizationK8sIoV1SubjectaccessreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAuthorizationK8sIoV1SubjectaccessreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['authorization.k8s.io'].v1.subjectaccessreviews.$post(args, options),
      )
    },
  })
}

export function usePostApisAuthorizationK8sIoV1Subjectaccessreviews<
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
                    (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['authorization.k8s.io']['v1']['subjectaccessreviews']['$post']
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
  const mutationDefaults = getPostApisAuthorizationK8sIoV1SubjectaccessreviewsMutationOptions<
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
