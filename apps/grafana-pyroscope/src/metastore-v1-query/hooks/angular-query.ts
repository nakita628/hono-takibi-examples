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

export function injectPostMetastoreV1MetadataQueryServiceQueryMetadata<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetastoreV1MetadataQueryServiceQueryMetadataMutationOptions<
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

export function injectPostMetastoreV1MetadataQueryServiceQueryMetadataLabels<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMetastoreV1MetadataQueryServiceQueryMetadataLabelsMutationOptions<
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
