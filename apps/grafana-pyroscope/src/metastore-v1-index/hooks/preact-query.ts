import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function usePostMetastoreV1IndexServiceAddBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetastoreV1IndexServiceAddBlockMutationOptions<
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

export function usePostMetastoreV1IndexServiceGetBlockMetadata<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetastoreV1IndexServiceGetBlockMetadataMutationOptions<
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
