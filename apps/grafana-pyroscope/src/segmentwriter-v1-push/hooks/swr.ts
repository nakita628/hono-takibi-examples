import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSegmentwriterV1SegmentWriterServiceKey() {
  return ['segmentwriter.v1.SegmentWriterService'] as const
}

export function getPostSegmentwriterV1SegmentWriterServicePushKey() {
  return [
    'segmentwriter.v1.SegmentWriterService',
    '/segmentwriter.v1.SegmentWriterService/Push',
    'POST',
  ] as const
}

export function usePostSegmentwriterV1SegmentWriterServicePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSegmentwriterV1SegmentWriterServicePushKey()
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
            (typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']
          >
        },
      ) =>
        parseResponse(
          client['segmentwriter.v1.SegmentWriterService'].Push.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
