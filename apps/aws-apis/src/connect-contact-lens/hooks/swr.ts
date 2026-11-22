import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRealtimeContactAnalysisKey() {
  return ['realtime-contact-analysis'] as const
}

export function getPostRealtimeContactAnalysisAnalysisSegmentsKey() {
  return [
    'realtime-contact-analysis',
    '/realtime-contact-analysis/analysis-segments',
    'POST',
  ] as const
}

export function usePostRealtimeContactAnalysisAnalysisSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['realtime-contact-analysis']['analysis-segments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRealtimeContactAnalysisAnalysisSegmentsKey()
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
            (typeof client)['realtime-contact-analysis']['analysis-segments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['realtime-contact-analysis']['analysis-segments'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
