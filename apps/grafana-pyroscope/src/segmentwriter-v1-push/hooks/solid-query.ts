import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPostSegmentwriterV1SegmentWriterServicePush<
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
                Awaited<
                  ReturnType<
                    (typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']
          >,
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
    const mutationDefaults = getPostSegmentwriterV1SegmentWriterServicePushMutationOptions<
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
