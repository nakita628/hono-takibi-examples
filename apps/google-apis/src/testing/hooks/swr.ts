import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1ApplicationDetailServiceGetApkDetailsKey() {
  return ['v1', '/v1/applicationDetailService/getApkDetails', 'POST'] as const
}

export function usePostV1ApplicationDetailServiceGetApkDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.applicationDetailService.getApkDetails.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.applicationDetailService.getApkDetails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationDetailServiceGetApkDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.applicationDetailService.getApkDetails.$post> },
      ) =>
        parseResponse(client.v1.applicationDetailService.getApkDetails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdTestMatricesKey() {
  return ['v1', '/v1/projects/:projectId/testMatrices', 'POST'] as const
}

export function usePostV1ProjectsProjectIdTestMatrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdTestMatricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>
        },
      ) => parseResponse(client.v1.projects[':projectId'].testMatrices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdTestMatricesTestMatrixIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectId/testMatrices/:testMatrixId', args] as const
}

export function useGetV1ProjectsProjectIdTestMatricesTestMatrixId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectIdTestMatricesTestMatrixIdKey(args)
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
                (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
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
          client.v1.projects[':projectId'].testMatrices[':testMatrixId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdTestMatricesTestMatrixId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectIdTestMatricesTestMatrixIdKey(args)
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
                (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
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
          client.v1.projects[':projectId'].testMatrices[':testMatrixId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdTestMatricesTestMatrixIdCancelKey() {
  return ['v1', '/v1/projects/:projectId/testMatrices/:testMatrixId:cancel', 'POST'] as const
}

export function usePostV1ProjectsProjectIdTestMatricesTestMatrixIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdTestMatricesTestMatrixIdCancelKey()
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
            (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectId'].testMatrices[':testMatrixId:cancel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TestEnvironmentCatalogEnvironmentTypeKey(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
) {
  return ['v1', '/v1/testEnvironmentCatalog/:environmentType', args] as const
}

export function useGetV1TestEnvironmentCatalogEnvironmentType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
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
        ? getGetV1TestEnvironmentCatalogEnvironmentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.testEnvironmentCatalog[':environmentType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TestEnvironmentCatalogEnvironmentType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
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
        ? getGetV1TestEnvironmentCatalogEnvironmentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.testEnvironmentCatalog[':environmentType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
