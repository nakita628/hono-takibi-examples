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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:projectId/testMatrices/:testMatrixId', toValue(args)] as const
}

export function getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':projectId'].testMatrices[':testMatrixId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
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
                    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
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
                    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey>
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
              (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdTestMatricesTestMatrixIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':projectId'].testMatrices[':testMatrixId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
  >,
) {
  return ['v1', '/v1/testEnvironmentCatalog/:environmentType', toValue(args)] as const
}

export function getV1TestEnvironmentCatalogEnvironmentTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TestEnvironmentCatalogEnvironmentTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.testEnvironmentCatalog[':environmentType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1TestEnvironmentCatalogEnvironmentTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TestEnvironmentCatalogEnvironmentTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TestEnvironmentCatalogEnvironmentTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.testEnvironmentCatalog[':environmentType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
