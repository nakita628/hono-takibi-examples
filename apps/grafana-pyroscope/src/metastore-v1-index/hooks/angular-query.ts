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

export function getMetastoreV1IndexServiceKey() {
  return ['metastore.v1.IndexService'] as const
}

export function getPostMetastoreV1IndexServiceAddBlockMutationKey() {
  return ['metastore.v1.IndexService', '/metastore.v1.IndexService/AddBlock', 'POST'] as const
}

export function getPostMetastoreV1IndexServiceAddBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1IndexServiceAddBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>,
    ) {
      return parseResponse(client['metastore.v1.IndexService'].AddBlock.$post(args, options))
    },
  })
}

export function injectPostMetastoreV1IndexServiceAddBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>,
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
    const mutationDefaults = getPostMetastoreV1IndexServiceAddBlockMutationOptions<
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

export function getPostMetastoreV1IndexServiceGetBlockMetadataMutationKey() {
  return [
    'metastore.v1.IndexService',
    '/metastore.v1.IndexService/GetBlockMetadata',
    'POST',
  ] as const
}

export function getPostMetastoreV1IndexServiceGetBlockMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1IndexServiceGetBlockMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['metastore.v1.IndexService'].GetBlockMetadata.$post(args, options),
      )
    },
  })
}

export function injectPostMetastoreV1IndexServiceGetBlockMetadata<
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
                  (typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']>,
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
    const mutationDefaults = getPostMetastoreV1IndexServiceGetBlockMetadataMutationOptions<
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
