import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSegmentwriterV1SegmentWriterServiceKey() {
  return ['segmentwriter.v1.SegmentWriterService'] as const
}

export function getPostSegmentwriterV1SegmentWriterServicePushMutationKey() {
  return [
    'segmentwriter.v1.SegmentWriterService',
    '/segmentwriter.v1.SegmentWriterService/Push',
    'POST',
  ] as const
}

export function getPostSegmentwriterV1SegmentWriterServicePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSegmentwriterV1SegmentWriterServicePushMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']
      >,
    ) {
      return parseResponse(
        client['segmentwriter.v1.SegmentWriterService'].Push.$post(args, options),
      )
    },
  })
}

export function usePostSegmentwriterV1SegmentWriterServicePush<
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
                  (typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSegmentwriterV1SegmentWriterServicePushMutationOptions<
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
