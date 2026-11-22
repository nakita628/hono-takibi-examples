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

export function getApisAuthorizationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/authorization.k8s.io/v1/'] as const
}

export function getApisAuthorizationK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApisAuthorizationK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['authorization.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAuthorizationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>>
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
                  ReturnType<(typeof client.apis)['authorization.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisAuthorizationK8sIoV1IndexQueryKey>
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
      ...getApisAuthorizationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviews<
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
      getPostApisAuthorizationK8sIoV1NamespacesNamespaceLocalsubjectaccessreviewsMutationOptions<
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

export function createPostApisAuthorizationK8sIoV1Selfsubjectaccessreviews<
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
    const mutationDefaults = getPostApisAuthorizationK8sIoV1SelfsubjectaccessreviewsMutationOptions<
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

export function createPostApisAuthorizationK8sIoV1Selfsubjectrulesreviews<
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
    const mutationDefaults = getPostApisAuthorizationK8sIoV1SelfsubjectrulesreviewsMutationOptions<
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

export function createPostApisAuthorizationK8sIoV1Subjectaccessreviews<
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
    const mutationDefaults = getPostApisAuthorizationK8sIoV1SubjectaccessreviewsMutationOptions<
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
