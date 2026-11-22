import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostV3LogImpressionsKey() {
  return ['v3:logImpressions', '/v3:logImpressions', 'POST'] as const
}

export function usePostV3LogImpressions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v3:logImpressions']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v3:logImpressions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3LogImpressionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v3:logImpressions']['$post']> },
      ) => parseResponse(client['v3:logImpressions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3LogPlayerReportsKey() {
  return ['v3:logPlayerReports', '/v3:logPlayerReports', 'POST'] as const
}

export function usePostV3LogPlayerReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v3:logPlayerReports']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v3:logPlayerReports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3LogPlayerReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v3:logPlayerReports']['$post']> },
      ) => parseResponse(client['v3:logPlayerReports'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3SamplePlayableLocationsKey() {
  return ['v3:samplePlayableLocations', '/v3:samplePlayableLocations', 'POST'] as const
}

export function usePostV3SamplePlayableLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v3:samplePlayableLocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v3:samplePlayableLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SamplePlayableLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v3:samplePlayableLocations']['$post']> },
      ) => parseResponse(client['v3:samplePlayableLocations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
