import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1VerificationResultKey(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
) {
  return ['v1', '/v1/verification/result', args] as const
}

export function useGetV1VerificationResult<TError = unknown>(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1VerificationResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.verification.result.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VerificationResult<TError = unknown>(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1VerificationResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.verification.result.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1VerificationSendKey() {
  return ['v1', '/v1/verification/send', 'POST'] as const
}

export function usePostV1VerificationSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.verification.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VerificationSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.verification.send.$post> },
      ) => parseResponse(client.v1.verification.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
