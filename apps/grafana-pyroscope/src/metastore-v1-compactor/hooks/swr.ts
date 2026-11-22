import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetastoreV1CompactionServiceKey() {
  return ['metastore.v1.CompactionService'] as const
}

export function getPostMetastoreV1CompactionServiceDeleteDatasetsKey() {
  return [
    'metastore.v1.CompactionService',
    '/metastore.v1.CompactionService/DeleteDatasets',
    'POST',
  ] as const
}

export function usePostMetastoreV1CompactionServiceDeleteDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1CompactionServiceDeleteDatasetsKey()
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
            (typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['metastore.v1.CompactionService'].DeleteDatasets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetastoreV1CompactionServiceListCompactionJobsKey() {
  return [
    'metastore.v1.CompactionService',
    '/metastore.v1.CompactionService/ListCompactionJobs',
    'POST',
  ] as const
}

export function usePostMetastoreV1CompactionServiceListCompactionJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1CompactionServiceListCompactionJobsKey()
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
            (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['metastore.v1.CompactionService'].ListCompactionJobs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetastoreV1CompactionServicePollCompactionJobsKey() {
  return [
    'metastore.v1.CompactionService',
    '/metastore.v1.CompactionService/PollCompactionJobs',
    'POST',
  ] as const
}

export function usePostMetastoreV1CompactionServicePollCompactionJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1CompactionServicePollCompactionJobsKey()
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
            (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['metastore.v1.CompactionService'].PollCompactionJobs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
