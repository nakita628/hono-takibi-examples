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

export function getDealSplitsKey() {
  return ['deal-splits'] as const
}

export function getPostDealSplits202609BatchReadMutationKey() {
  return ['deal-splits', '/deal-splits/2026-09/batch/read', 'POST'] as const
}

export function getPostDealSplits202609BatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDealSplits202609BatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>,
    ) {
      return parseResponse(client['deal-splits']['2026-09'].batch.read.$post(args, options))
    },
  })
}

export function injectPostDealSplits202609BatchRead<
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
                ReturnType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>,
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
    const mutationDefaults = getPostDealSplits202609BatchReadMutationOptions<
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

export function getPostDealSplits202609BatchUpsertMutationKey() {
  return ['deal-splits', '/deal-splits/2026-09/batch/upsert', 'POST'] as const
}

export function getPostDealSplits202609BatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDealSplits202609BatchUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>,
    ) {
      return parseResponse(client['deal-splits']['2026-09'].batch.upsert.$post(args, options))
    },
  })
}

export function injectPostDealSplits202609BatchUpsert<
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
                ReturnType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>,
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
    const mutationDefaults = getPostDealSplits202609BatchUpsertMutationOptions<
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
