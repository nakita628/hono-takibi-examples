import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetastoreV1CompactionServiceKey() {
  return ['metastore.v1.CompactionService'] as const
}

export function getPostMetastoreV1CompactionServiceDeleteDatasetsMutationKey() {
  return [
    'metastore.v1.CompactionService',
    '/metastore.v1.CompactionService/DeleteDatasets',
    'POST',
  ] as const
}

export function getPostMetastoreV1CompactionServiceDeleteDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1CompactionServiceDeleteDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']
      >,
    ) {
      return parseResponse(
        client['metastore.v1.CompactionService'].DeleteDatasets.$post(args, options),
      )
    },
  })
}

export function usePostMetastoreV1CompactionServiceDeleteDatasets<
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
                    (typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']
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
  const mutationDefaults = getPostMetastoreV1CompactionServiceDeleteDatasetsMutationOptions<
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

export function getPostMetastoreV1CompactionServiceListCompactionJobsMutationKey() {
  return [
    'metastore.v1.CompactionService',
    '/metastore.v1.CompactionService/ListCompactionJobs',
    'POST',
  ] as const
}

export function getPostMetastoreV1CompactionServiceListCompactionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1CompactionServiceListCompactionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['metastore.v1.CompactionService'].ListCompactionJobs.$post(args, options),
      )
    },
  })
}

export function usePostMetastoreV1CompactionServiceListCompactionJobs<
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
                    (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
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
  const mutationDefaults = getPostMetastoreV1CompactionServiceListCompactionJobsMutationOptions<
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

export function getPostMetastoreV1CompactionServicePollCompactionJobsMutationKey() {
  return [
    'metastore.v1.CompactionService',
    '/metastore.v1.CompactionService/PollCompactionJobs',
    'POST',
  ] as const
}

export function getPostMetastoreV1CompactionServicePollCompactionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1CompactionServicePollCompactionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['metastore.v1.CompactionService'].PollCompactionJobs.$post(args, options),
      )
    },
  })
}

export function usePostMetastoreV1CompactionServicePollCompactionJobs<
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
                    (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
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
  const mutationDefaults = getPostMetastoreV1CompactionServicePollCompactionJobsMutationOptions<
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
