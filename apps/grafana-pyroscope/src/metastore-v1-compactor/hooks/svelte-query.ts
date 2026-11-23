import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createPostMetastoreV1CompactionServiceDeleteDatasets<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetastoreV1CompactionServiceDeleteDatasetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMetastoreV1CompactionServiceListCompactionJobs<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetastoreV1CompactionServiceListCompactionJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMetastoreV1CompactionServicePollCompactionJobs<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetastoreV1CompactionServicePollCompactionJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
