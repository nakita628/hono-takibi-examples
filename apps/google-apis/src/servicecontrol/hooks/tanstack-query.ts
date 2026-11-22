import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ServicesServiceNameCheckMutationKey() {
  return ['v2', '/v2/services/:serviceName:check', 'POST'] as const
}

export function getPostV2ServicesServiceNameCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.services)[':serviceName:check']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.services)[':serviceName:check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ServicesServiceNameCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.services)[':serviceName:check']['$post']>,
    ) {
      return parseResponse(client.v2.services[':serviceName:check'].$post(args, options))
    },
  })
}

export function usePostV2ServicesServiceNameCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.services)[':serviceName:check']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.services)[':serviceName:check']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ServicesServiceNameCheckMutationOptions<
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

export function getPostV2ServicesServiceNameReportMutationKey() {
  return ['v2', '/v2/services/:serviceName:report', 'POST'] as const
}

export function getPostV2ServicesServiceNameReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.services)[':serviceName:report']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.services)[':serviceName:report']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ServicesServiceNameReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.services)[':serviceName:report']['$post']>,
    ) {
      return parseResponse(client.v2.services[':serviceName:report'].$post(args, options))
    },
  })
}

export function usePostV2ServicesServiceNameReport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.services)[':serviceName:report']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.services)[':serviceName:report']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ServicesServiceNameReportMutationOptions<
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
