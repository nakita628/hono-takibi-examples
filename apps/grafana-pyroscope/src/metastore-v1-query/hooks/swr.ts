import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetastoreV1MetadataQueryServiceKey() {
  return ['metastore.v1.MetadataQueryService'] as const
}

export function getPostMetastoreV1MetadataQueryServiceQueryMetadataKey() {
  return [
    'metastore.v1.MetadataQueryService',
    '/metastore.v1.MetadataQueryService/QueryMetadata',
    'POST',
  ] as const
}

export function usePostMetastoreV1MetadataQueryServiceQueryMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['metastore.v1.MetadataQueryService']['QueryMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1MetadataQueryServiceQueryMetadataKey()
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
            (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['metastore.v1.MetadataQueryService'].QueryMetadata.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetastoreV1MetadataQueryServiceQueryMetadataLabelsKey() {
  return [
    'metastore.v1.MetadataQueryService',
    '/metastore.v1.MetadataQueryService/QueryMetadataLabels',
    'POST',
  ] as const
}

export function usePostMetastoreV1MetadataQueryServiceQueryMetadataLabels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadataLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadataLabels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1MetadataQueryServiceQueryMetadataLabelsKey()
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
            (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadataLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['metastore.v1.MetadataQueryService'].QueryMetadataLabels.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
