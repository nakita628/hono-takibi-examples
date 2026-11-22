import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetastoreV1MetadataQueryServiceKey() {
  return ['metastore.v1.MetadataQueryService'] as const
}

export function getPostMetastoreV1MetadataQueryServiceQueryMetadataMutationKey() {
  return [
    'metastore.v1.MetadataQueryService',
    '/metastore.v1.MetadataQueryService/QueryMetadata',
    'POST',
  ] as const
}

export function getPostMetastoreV1MetadataQueryServiceQueryMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1MetadataQueryServiceQueryMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['metastore.v1.MetadataQueryService'].QueryMetadata.$post(args, options),
      )
    },
  })
}

export function usePostMetastoreV1MetadataQueryServiceQueryMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadata']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetastoreV1MetadataQueryServiceQueryMetadataMutationOptions<
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

export function getPostMetastoreV1MetadataQueryServiceQueryMetadataLabelsMutationKey() {
  return [
    'metastore.v1.MetadataQueryService',
    '/metastore.v1.MetadataQueryService/QueryMetadataLabels',
    'POST',
  ] as const
}

export function getPostMetastoreV1MetadataQueryServiceQueryMetadataLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadataLabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1MetadataQueryServiceQueryMetadataLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadataLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['metastore.v1.MetadataQueryService'].QueryMetadataLabels.$post(args, options),
      )
    },
  })
}

export function usePostMetastoreV1MetadataQueryServiceQueryMetadataLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['metastore.v1.MetadataQueryService']['QueryMetadataLabels']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetastoreV1MetadataQueryServiceQueryMetadataLabelsMutationOptions<
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
