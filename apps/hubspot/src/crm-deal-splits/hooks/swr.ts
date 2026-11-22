import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDealSplitsKey() {
  return ['deal-splits'] as const
}

export function getPostDealSplits202609BatchReadKey() {
  return ['deal-splits', '/deal-splits/2026-09/batch/read', 'POST'] as const
}

export function usePostDealSplits202609BatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDealSplits202609BatchReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>
        },
      ) => parseResponse(client['deal-splits']['2026-09'].batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDealSplits202609BatchUpsertKey() {
  return ['deal-splits', '/deal-splits/2026-09/batch/upsert', 'POST'] as const
}

export function usePostDealSplits202609BatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDealSplits202609BatchUpsertKey()
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
            (typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']
          >
        },
      ) => parseResponse(client['deal-splits']['2026-09'].batch.upsert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
