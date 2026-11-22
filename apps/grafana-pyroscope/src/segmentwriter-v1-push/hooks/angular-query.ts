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

export function injectPostSegmentwriterV1SegmentWriterServicePush<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}
