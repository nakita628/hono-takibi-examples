import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisAuthenticationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/authentication.k8s.io/v1/'] as const
}

export function getApisAuthenticationK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAuthenticationK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisAuthenticationK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['authentication.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApisAuthenticationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAuthenticationK8sIoV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApisAuthenticationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisAuthenticationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApisAuthenticationK8sIoV1IndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApisAuthenticationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApisAuthenticationK8sIoV1SelfsubjectreviewsMutationKey() {
  return ['apis', '/apis/authentication.k8s.io/v1/selfsubjectreviews', 'POST'] as const
}

export function getPostApisAuthenticationK8sIoV1SelfsubjectreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['authentication.k8s.io']['v1']['selfsubjectreviews']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['authentication.k8s.io']['v1']['selfsubjectreviews']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAuthenticationK8sIoV1SelfsubjectreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['authentication.k8s.io']['v1']['selfsubjectreviews']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['authentication.k8s.io'].v1.selfsubjectreviews.$post(args, options),
      )
    },
  })
}

export function usePostApisAuthenticationK8sIoV1Selfsubjectreviews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['authentication.k8s.io']['v1']['selfsubjectreviews']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['authentication.k8s.io']['v1']['selfsubjectreviews']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisAuthenticationK8sIoV1SelfsubjectreviewsMutationOptions<
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

export function getPostApisAuthenticationK8sIoV1TokenreviewsMutationKey() {
  return ['apis', '/apis/authentication.k8s.io/v1/tokenreviews', 'POST'] as const
}

export function getPostApisAuthenticationK8sIoV1TokenreviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['tokenreviews']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['authentication.k8s.io']['v1']['tokenreviews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisAuthenticationK8sIoV1TokenreviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['authentication.k8s.io']['v1']['tokenreviews']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['authentication.k8s.io'].v1.tokenreviews.$post(args, options),
      )
    },
  })
}

export function usePostApisAuthenticationK8sIoV1Tokenreviews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apis)['authentication.k8s.io']['v1']['tokenreviews']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apis)['authentication.k8s.io']['v1']['tokenreviews']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisAuthenticationK8sIoV1TokenreviewsMutationOptions<
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
