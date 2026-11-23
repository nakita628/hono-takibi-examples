import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3p1beta1Key() {
  return ['v3p1beta1'] as const
}

export function getGetV3p1beta1NameKey(
  args: InferRequestType<(typeof client.v3p1beta1)[':name']['$get']>,
) {
  return ['v3p1beta1', '/v3p1beta1/:name', args] as const
}

export function useGetV3p1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3p1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3p1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3p1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3p1beta1NameKey() {
  return ['v3p1beta1', '/v3p1beta1/:name', 'DELETE'] as const
}

export function useDeleteV3p1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3p1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3p1beta1)[':name']['$delete']> },
      ) => parseResponse(client.v3p1beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3p1beta1NameKey() {
  return ['v3p1beta1', '/v3p1beta1/:name', 'PATCH'] as const
}

export function usePatchV3p1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3p1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3p1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3p1beta1)[':name']['$patch']> },
      ) => parseResponse(client.v3p1beta1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3p1beta1NameCompleteKey(
  args: InferRequestType<(typeof client.v3p1beta1)[':name:complete']['$get']>,
) {
  return ['v3p1beta1', '/v3p1beta1/:name:complete', args] as const
}

export function useGetV3p1beta1NameComplete<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':name:complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3p1beta1NameCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':name:complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3p1beta1NameComplete<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':name:complete']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3p1beta1NameCompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':name:complete']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':name:complete'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3p1beta1ParentClientEventsKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/clientEvents', 'POST'] as const
}

export function usePostV3p1beta1ParentClientEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3p1beta1ParentClientEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']> },
      ) => parseResponse(client.v3p1beta1[':parent'].clientEvents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3p1beta1ParentCompaniesKey(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>,
) {
  return ['v3p1beta1', '/v3p1beta1/:parent/companies', args] as const
}

export function useGetV3p1beta1ParentCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3p1beta1ParentCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':parent'].companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3p1beta1ParentCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3p1beta1ParentCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':parent'].companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3p1beta1ParentCompaniesKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/companies', 'POST'] as const
}

export function usePostV3p1beta1ParentCompanies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3p1beta1ParentCompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$post']> },
      ) => parseResponse(client.v3p1beta1[':parent'].companies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3p1beta1ParentJobsKey(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>,
) {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs', args] as const
}

export function useGetV3p1beta1ParentJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3p1beta1ParentJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':parent'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3p1beta1ParentJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3p1beta1ParentJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3p1beta1[':parent'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3p1beta1ParentJobsKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs', 'POST'] as const
}

export function usePostV3p1beta1ParentJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3p1beta1ParentJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']> },
      ) => parseResponse(client.v3p1beta1[':parent'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3p1beta1ParentJobsBatchDeleteKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs:batchDelete', 'POST'] as const
}

export function usePostV3p1beta1ParentJobsBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3p1beta1ParentJobsBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>
        },
      ) => parseResponse(client.v3p1beta1[':parent']['jobs:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3p1beta1ParentJobsSearchKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs:search', 'POST'] as const
}

export function usePostV3p1beta1ParentJobsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3p1beta1ParentJobsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']> },
      ) => parseResponse(client.v3p1beta1[':parent']['jobs:search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3p1beta1ParentJobsSearchForAlertKey() {
  return ['v3p1beta1', '/v3p1beta1/:parent/jobs:searchForAlert', 'POST'] as const
}

export function usePostV3p1beta1ParentJobsSearchForAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3p1beta1ParentJobsSearchForAlertKey()
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
            (typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']
          >
        },
      ) =>
        parseResponse(client.v3p1beta1[':parent']['jobs:searchForAlert'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
