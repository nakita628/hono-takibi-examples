import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2InfoTypesKey(args: InferRequestType<typeof client.v2.infoTypes.$get>) {
  return ['v2', '/v2/infoTypes', args] as const
}

export function useGetV2InfoTypes<TError = unknown>(
  args: InferRequestType<typeof client.v2.infoTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.infoTypes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2InfoTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.infoTypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.infoTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InfoTypes<TError = unknown>(
  args: InferRequestType<typeof client.v2.infoTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.infoTypes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2InfoTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.infoTypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.infoTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2NameKey(args: InferRequestType<(typeof client.v2)[':name']['$get']>) {
  return ['v2', '/v2/:name', args] as const
}

export function useGetV2Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2NameKey() {
  return ['v2', '/v2/:name', 'DELETE'] as const
}

export function useDeleteV2Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v2)[':name']['$delete']> }) =>
        parseResponse(client.v2[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2NameKey() {
  return ['v2', '/v2/:name', 'PATCH'] as const
}

export function usePatchV2Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v2)[':name']['$patch']> }) =>
        parseResponse(client.v2[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2NameActivateKey() {
  return ['v2', '/v2/:name:activate', 'POST'] as const
}

export function usePostV2NameActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:activate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':name:activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2NameActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)[':name:activate']['$post']> },
      ) => parseResponse(client.v2[':name:activate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2NameCancelKey() {
  return ['v2', '/v2/:name:cancel', 'POST'] as const
}

export function usePostV2NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)[':name:cancel']['$post']> },
      ) => parseResponse(client.v2[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2NameFinishKey() {
  return ['v2', '/v2/:name:finish', 'POST'] as const
}

export function usePostV2NameFinish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:finish']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':name:finish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2NameFinishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)[':name:finish']['$post']> },
      ) => parseResponse(client.v2[':name:finish'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2NameHybridInspectKey() {
  return ['v2', '/v2/:name:hybridInspect', 'POST'] as const
}

export function usePostV2NameHybridInspect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name:hybridInspect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':name:hybridInspect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2NameHybridInspectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)[':name:hybridInspect']['$post']> },
      ) => parseResponse(client.v2[':name:hybridInspect'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ParentContentDeidentifyKey() {
  return ['v2', '/v2/:parent/content:deidentify', 'POST'] as const
}

export function usePostV2ParentContentDeidentify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['content:deidentify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['content:deidentify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentContentDeidentifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)[':parent']['content:deidentify']['$post']> },
      ) => parseResponse(client.v2[':parent']['content:deidentify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ParentContentInspectKey() {
  return ['v2', '/v2/:parent/content:inspect', 'POST'] as const
}

export function usePostV2ParentContentInspect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['content:inspect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['content:inspect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentContentInspectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)[':parent']['content:inspect']['$post']> },
      ) => parseResponse(client.v2[':parent']['content:inspect'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ParentContentReidentifyKey() {
  return ['v2', '/v2/:parent/content:reidentify', 'POST'] as const
}

export function usePostV2ParentContentReidentify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['content:reidentify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['content:reidentify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentContentReidentifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)[':parent']['content:reidentify']['$post']> },
      ) => parseResponse(client.v2[':parent']['content:reidentify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ParentDeidentifyTemplatesKey(
  args: InferRequestType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>,
) {
  return ['v2', '/v2/:parent/deidentifyTemplates', args] as const
}

export function useGetV2ParentDeidentifyTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>>
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
        ? getGetV2ParentDeidentifyTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].deidentifyTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ParentDeidentifyTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>>
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
        ? getGetV2ParentDeidentifyTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].deidentifyTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ParentDeidentifyTemplatesKey() {
  return ['v2', '/v2/:parent/deidentifyTemplates', 'POST'] as const
}

export function usePostV2ParentDeidentifyTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['deidentifyTemplates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['deidentifyTemplates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentDeidentifyTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)[':parent']['deidentifyTemplates']['$post']> },
      ) => parseResponse(client.v2[':parent'].deidentifyTemplates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ParentDlpJobsKey(
  args: InferRequestType<(typeof client.v2)[':parent']['dlpJobs']['$get']>,
) {
  return ['v2', '/v2/:parent/dlpJobs', args] as const
}

export function useGetV2ParentDlpJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['dlpJobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['dlpJobs']['$get']>>
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
        ? getGetV2ParentDlpJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['dlpJobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].dlpJobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ParentDlpJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['dlpJobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['dlpJobs']['$get']>>
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
        ? getGetV2ParentDlpJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['dlpJobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].dlpJobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ParentDlpJobsKey() {
  return ['v2', '/v2/:parent/dlpJobs', 'POST'] as const
}

export function usePostV2ParentDlpJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['dlpJobs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['dlpJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentDlpJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)[':parent']['dlpJobs']['$post']> },
      ) => parseResponse(client.v2[':parent'].dlpJobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ParentImageRedactKey() {
  return ['v2', '/v2/:parent/image:redact', 'POST'] as const
}

export function usePostV2ParentImageRedact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['image:redact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['image:redact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentImageRedactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)[':parent']['image:redact']['$post']> },
      ) => parseResponse(client.v2[':parent']['image:redact'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ParentInfoTypesKey(
  args: InferRequestType<(typeof client.v2)[':parent']['infoTypes']['$get']>,
) {
  return ['v2', '/v2/:parent/infoTypes', args] as const
}

export function useGetV2ParentInfoTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['infoTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['infoTypes']['$get']>>
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
        ? getGetV2ParentInfoTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['infoTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].infoTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ParentInfoTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['infoTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['infoTypes']['$get']>>
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
        ? getGetV2ParentInfoTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['infoTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].infoTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ParentInspectTemplatesKey(
  args: InferRequestType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>,
) {
  return ['v2', '/v2/:parent/inspectTemplates', args] as const
}

export function useGetV2ParentInspectTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>>
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
        ? getGetV2ParentInspectTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].inspectTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ParentInspectTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>>
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
        ? getGetV2ParentInspectTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].inspectTemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ParentInspectTemplatesKey() {
  return ['v2', '/v2/:parent/inspectTemplates', 'POST'] as const
}

export function usePostV2ParentInspectTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['inspectTemplates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['inspectTemplates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentInspectTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)[':parent']['inspectTemplates']['$post']> },
      ) => parseResponse(client.v2[':parent'].inspectTemplates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ParentJobTriggersKey(
  args: InferRequestType<(typeof client.v2)[':parent']['jobTriggers']['$get']>,
) {
  return ['v2', '/v2/:parent/jobTriggers', args] as const
}

export function useGetV2ParentJobTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['jobTriggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['jobTriggers']['$get']>>
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
        ? getGetV2ParentJobTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['jobTriggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].jobTriggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ParentJobTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['jobTriggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['jobTriggers']['$get']>>
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
        ? getGetV2ParentJobTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['jobTriggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].jobTriggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ParentJobTriggersKey() {
  return ['v2', '/v2/:parent/jobTriggers', 'POST'] as const
}

export function usePostV2ParentJobTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['jobTriggers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['jobTriggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentJobTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)[':parent']['jobTriggers']['$post']> },
      ) => parseResponse(client.v2[':parent'].jobTriggers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ParentStoredInfoTypesKey(
  args: InferRequestType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>,
) {
  return ['v2', '/v2/:parent/storedInfoTypes', args] as const
}

export function useGetV2ParentStoredInfoTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>>
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
        ? getGetV2ParentStoredInfoTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].storedInfoTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ParentStoredInfoTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>>
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
        ? getGetV2ParentStoredInfoTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':parent'].storedInfoTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ParentStoredInfoTypesKey() {
  return ['v2', '/v2/:parent/storedInfoTypes', 'POST'] as const
}

export function usePostV2ParentStoredInfoTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['storedInfoTypes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)[':parent']['storedInfoTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ParentStoredInfoTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)[':parent']['storedInfoTypes']['$post']> },
      ) => parseResponse(client.v2[':parent'].storedInfoTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
