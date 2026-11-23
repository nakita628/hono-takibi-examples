import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPostV2ServicesServiceNameCheck<
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
                Awaited<ReturnType<(typeof client.v2.services)[':serviceName:check']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.services)[':serviceName:check']['$post']>,
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
    const mutationDefaults = getPostV2ServicesServiceNameCheckMutationOptions<
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

export function createPostV2ServicesServiceNameReport<
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
                Awaited<ReturnType<(typeof client.v2.services)[':serviceName:report']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.services)[':serviceName:report']['$post']>,
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
    const mutationDefaults = getPostV2ServicesServiceNameReportMutationOptions<
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
