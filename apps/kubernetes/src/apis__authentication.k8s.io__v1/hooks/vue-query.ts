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

export function getApisAuthenticationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/authentication.k8s.io/v1/'] as const
}

export function getApisAuthenticationK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisAuthenticationK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['authentication.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisAuthenticationK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['authentication.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAuthenticationK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisAuthenticationK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['authentication.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
