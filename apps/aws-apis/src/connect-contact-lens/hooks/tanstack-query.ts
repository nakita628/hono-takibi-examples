import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRealtimeContactAnalysisKey() {
  return ['realtime-contact-analysis'] as const
}

export function getPostRealtimeContactAnalysisAnalysisSegmentsMutationKey() {
  return [
    'realtime-contact-analysis',
    '/realtime-contact-analysis/analysis-segments',
    'POST',
  ] as const
}

export function getPostRealtimeContactAnalysisAnalysisSegmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['realtime-contact-analysis']['analysis-segments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['realtime-contact-analysis']['analysis-segments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealtimeContactAnalysisAnalysisSegmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['realtime-contact-analysis']['analysis-segments']['$post']
      >,
    ) {
      return parseResponse(
        client['realtime-contact-analysis']['analysis-segments'].$post(args, options),
      )
    },
  })
}

export function usePostRealtimeContactAnalysisAnalysisSegments<
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
                  (typeof client)['realtime-contact-analysis']['analysis-segments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['realtime-contact-analysis']['analysis-segments']['$post']
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
  const mutationDefaults = getPostRealtimeContactAnalysisAnalysisSegmentsMutationOptions<
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
