import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getPostV1beta1ProjectsProjectIdExportMutationKey() {
  return ['v1beta1', '/v1beta1/projects/:projectId:export', 'POST'] as const
}

export function getPostV1beta1ProjectsProjectIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.projects)[':projectId:export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.projects)[':projectId:export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.projects)[':projectId:export']['$post']>,
    ) {
      return parseResponse(client.v1beta1.projects[':projectId:export'].$post(args, options))
    },
  })
}

export function usePostV1beta1ProjectsProjectIdExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.projects)[':projectId:export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1.projects)[':projectId:export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ProjectsProjectIdExportMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdImportMutationKey() {
  return ['v1beta1', '/v1beta1/projects/:projectId:import', 'POST'] as const
}

export function getPostV1beta1ProjectsProjectIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.projects)[':projectId:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.projects)[':projectId:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.projects)[':projectId:import']['$post']>,
    ) {
      return parseResponse(client.v1beta1.projects[':projectId:import'].$post(args, options))
    },
  })
}

export function usePostV1beta1ProjectsProjectIdImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.projects)[':projectId:import']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1.projects)[':projectId:import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ProjectsProjectIdImportMutationOptions<
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
