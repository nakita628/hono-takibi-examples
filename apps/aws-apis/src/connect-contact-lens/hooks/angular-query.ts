import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostRealtimeContactAnalysisAnalysisSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealtimeContactAnalysisAnalysisSegmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
