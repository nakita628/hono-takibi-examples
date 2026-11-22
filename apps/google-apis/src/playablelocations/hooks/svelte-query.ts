import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3LogImpressionsKey() {
  return ['v3:logImpressions'] as const
}

export function getV3LogPlayerReportsKey() {
  return ['v3:logPlayerReports'] as const
}

export function getV3SamplePlayableLocationsKey() {
  return ['v3:samplePlayableLocations'] as const
}

export function getPostV3LogImpressionsMutationKey() {
  return ['v3:logImpressions', '/v3:logImpressions', 'POST'] as const
}

export function getPostV3LogImpressionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v3:logImpressions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['v3:logImpressions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogImpressionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['v3:logImpressions']['$post']>) {
      return parseResponse(client['v3:logImpressions'].$post(args, options))
    },
  })
}

export function createPostV3LogImpressions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['v3:logImpressions']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['v3:logImpressions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3LogImpressionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3LogPlayerReportsMutationKey() {
  return ['v3:logPlayerReports', '/v3:logPlayerReports', 'POST'] as const
}

export function getPostV3LogPlayerReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v3:logPlayerReports']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['v3:logPlayerReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogPlayerReportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['v3:logPlayerReports']['$post']>) {
      return parseResponse(client['v3:logPlayerReports'].$post(args, options))
    },
  })
}

export function createPostV3LogPlayerReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v3:logPlayerReports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v3:logPlayerReports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3LogPlayerReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3SamplePlayableLocationsMutationKey() {
  return ['v3:samplePlayableLocations', '/v3:samplePlayableLocations', 'POST'] as const
}

export function getPostV3SamplePlayableLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v3:samplePlayableLocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v3:samplePlayableLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3SamplePlayableLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v3:samplePlayableLocations']['$post']>,
    ) {
      return parseResponse(client['v3:samplePlayableLocations'].$post(args, options))
    },
  })
}

export function createPostV3SamplePlayableLocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v3:samplePlayableLocations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v3:samplePlayableLocations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3SamplePlayableLocationsMutationOptions<
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
