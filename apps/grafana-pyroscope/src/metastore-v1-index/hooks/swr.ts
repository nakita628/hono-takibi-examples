import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetastoreV1IndexServiceKey() {
  return ['metastore.v1.IndexService'] as const
}

export function getPostMetastoreV1IndexServiceAddBlockKey() {
  return ['metastore.v1.IndexService', '/metastore.v1.IndexService/AddBlock', 'POST'] as const
}

export function usePostMetastoreV1IndexServiceAddBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1IndexServiceAddBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['metastore.v1.IndexService']['AddBlock']['$post']>
        },
      ) => parseResponse(client['metastore.v1.IndexService'].AddBlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetastoreV1IndexServiceGetBlockMetadataKey() {
  return [
    'metastore.v1.IndexService',
    '/metastore.v1.IndexService/GetBlockMetadata',
    'POST',
  ] as const
}

export function usePostMetastoreV1IndexServiceGetBlockMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1IndexServiceGetBlockMetadataKey()
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
            (typeof client)['metastore.v1.IndexService']['GetBlockMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['metastore.v1.IndexService'].GetBlockMetadata.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
