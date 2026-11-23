import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1ApplicationDetailServiceGetApkDetailsMutationKey() {
  return ['v1', '/v1/applicationDetailService/getApkDetails', 'POST'] as const
}

export function getPostV1ApplicationDetailServiceGetApkDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.applicationDetailService.getApkDetails.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.applicationDetailService.getApkDetails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApplicationDetailServiceGetApkDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.applicationDetailService.getApkDetails.$post>,
    ) {
      return parseResponse(client.v1.applicationDetailService.getApkDetails.$post(args, options))
    },
  })
}

export function usePostV1ApplicationDetailServiceGetApkDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.applicationDetailService.getApkDetails.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.applicationDetailService.getApkDetails.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApplicationDetailServiceGetApkDetailsMutationOptions<
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

export function getPostV1ProjectsProjectIdTestMatricesMutationKey() {
  return ['v1', '/v1/projects/:projectId/testMatrices', 'POST'] as const
}

export function getPostV1ProjectsProjectIdTestMatricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdTestMatricesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':projectId'].testMatrices.$post(args, options))
    },
  })
}

export function usePostV1ProjectsProjectIdTestMatrices<
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
                ReturnType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProjectsProjectIdTestMatricesMutationOptions<
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

export function getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectId/testMatrices/:testMatrixId', args] as const
}

export function getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':projectId'].testMatrices[':testMatrixId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectIdTestMatricesTestMatrixId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey>
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
      ...getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectIdTestMatricesTestMatrixId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey>
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
      ...getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectIdTestMatricesTestMatrixIdCancelMutationKey() {
  return ['v1', '/v1/projects/:projectId/testMatrices/:testMatrixId:cancel', 'POST'] as const
}

export function getPostV1ProjectsProjectIdTestMatricesTestMatrixIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdTestMatricesTestMatrixIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':projectId'].testMatrices[':testMatrixId:cancel'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectIdTestMatricesTestMatrixIdCancel<
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
                  (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectIdTestMatricesTestMatrixIdCancelMutationOptions<
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

export function getV1TestEnvironmentCatalogEnvironmentTypeQueryKey(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
) {
  return ['v1', '/v1/testEnvironmentCatalog/:environmentType', args] as const
}

export function getV1TestEnvironmentCatalogEnvironmentTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TestEnvironmentCatalogEnvironmentTypeQueryKey>
  >({
    queryKey: getV1TestEnvironmentCatalogEnvironmentTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.testEnvironmentCatalog[':environmentType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1TestEnvironmentCatalogEnvironmentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TestEnvironmentCatalogEnvironmentTypeQueryKey>
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
      ...getV1TestEnvironmentCatalogEnvironmentTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1TestEnvironmentCatalogEnvironmentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TestEnvironmentCatalogEnvironmentTypeQueryKey>
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
      ...getV1TestEnvironmentCatalogEnvironmentTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
