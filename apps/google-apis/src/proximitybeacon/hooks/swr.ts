import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getPostV1beta1BeaconinfoGetforobservedKey() {
  return ['v1beta1', '/v1beta1/beaconinfo:getforobserved', 'POST'] as const
}

export function usePostV1beta1BeaconinfoGetforobserved<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1BeaconinfoGetforobservedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']> },
      ) => parseResponse(client.v1beta1['beaconinfo:getforobserved'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1BeaconsKey(
  args: InferRequestType<typeof client.v1beta1.beacons.$get>,
) {
  return ['v1beta1', '/v1beta1/beacons', args] as const
}

export function useGetV1beta1Beacons<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.beacons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1BeaconsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.beacons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Beacons<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.beacons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta1BeaconsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.beacons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1BeaconsRegisterKey() {
  return ['v1beta1', '/v1beta1/beacons:register', 'POST'] as const
}

export function usePostV1beta1BeaconsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['beacons:register']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)['beacons:register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1BeaconsRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)['beacons:register']['$post']> },
      ) => parseResponse(client.v1beta1['beacons:register'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1EidparamsKey(
  args: InferRequestType<typeof client.v1beta1.eidparams.$get>,
) {
  return ['v1beta1', '/v1beta1/eidparams', args] as const
}

export function useGetV1beta1Eidparams<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.eidparams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
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
        ? getGetV1beta1EidparamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.eidparams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Eidparams<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.eidparams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
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
        ? getGetV1beta1EidparamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.eidparams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1NamespacesKey(
  args: InferRequestType<typeof client.v1beta1.namespaces.$get>,
) {
  return ['v1beta1', '/v1beta1/namespaces', args] as const
}

export function useGetV1beta1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
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
        ? getGetV1beta1NamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
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
        ? getGetV1beta1NamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1beta1AttachmentNameKey() {
  return ['v1beta1', '/v1beta1/:attachmentName', 'DELETE'] as const
}

export function useDeleteV1beta1AttachmentName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':attachmentName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':attachmentName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta1AttachmentNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':attachmentName']['$delete']> },
      ) => parseResponse(client.v1beta1[':attachmentName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1BeaconNameKey(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:beaconName', args] as const
}

export function useGetV1beta1BeaconName<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
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
        ? getGetV1beta1BeaconNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':beaconName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1BeaconName<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
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
        ? getGetV1beta1BeaconNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':beaconName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1beta1BeaconNameKey() {
  return ['v1beta1', '/v1beta1/:beaconName', 'PUT'] as const
}

export function usePutV1beta1BeaconName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1beta1BeaconNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':beaconName']['$put']> },
      ) => parseResponse(client.v1beta1[':beaconName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1beta1BeaconNameKey() {
  return ['v1beta1', '/v1beta1/:beaconName', 'DELETE'] as const
}

export function useDeleteV1beta1BeaconName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta1BeaconNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':beaconName']['$delete']> },
      ) => parseResponse(client.v1beta1[':beaconName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1BeaconNameAttachmentsKey(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:beaconName/attachments', args] as const
}

export function useGetV1beta1BeaconNameAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
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
        ? getGetV1beta1BeaconNameAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1[':beaconName'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1BeaconNameAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
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
        ? getGetV1beta1BeaconNameAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1[':beaconName'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1BeaconNameAttachmentsKey() {
  return ['v1beta1', '/v1beta1/:beaconName/attachments', 'POST'] as const
}

export function usePostV1beta1BeaconNameAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1BeaconNameAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>
        },
      ) => parseResponse(client.v1beta1[':beaconName'].attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1BeaconNameAttachmentsBatchDeleteKey() {
  return ['v1beta1', '/v1beta1/:beaconName/attachments:batchDelete', 'POST'] as const
}

export function usePostV1beta1BeaconNameAttachmentsBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1BeaconNameAttachmentsBatchDeleteKey()
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
            (typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1[':beaconName']['attachments:batchDelete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1BeaconNameDiagnosticsKey(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:beaconName/diagnostics', args] as const
}

export function useGetV1beta1BeaconNameDiagnostics<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
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
        ? getGetV1beta1BeaconNameDiagnosticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1[':beaconName'].diagnostics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1BeaconNameDiagnostics<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
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
        ? getGetV1beta1BeaconNameDiagnosticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1[':beaconName'].diagnostics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1BeaconNameActivateKey() {
  return ['v1beta1', '/v1beta1/:beaconName:activate', 'POST'] as const
}

export function usePostV1beta1BeaconNameActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:activate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':beaconName:activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1BeaconNameActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':beaconName:activate']['$post']> },
      ) => parseResponse(client.v1beta1[':beaconName:activate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1BeaconNameDeactivateKey() {
  return ['v1beta1', '/v1beta1/:beaconName:deactivate', 'POST'] as const
}

export function usePostV1beta1BeaconNameDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1BeaconNameDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']> },
      ) => parseResponse(client.v1beta1[':beaconName:deactivate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1BeaconNameDecommissionKey() {
  return ['v1beta1', '/v1beta1/:beaconName:decommission', 'POST'] as const
}

export function usePostV1beta1BeaconNameDecommission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1BeaconNameDecommissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':beaconName:decommission']['$post']> },
      ) => parseResponse(client.v1beta1[':beaconName:decommission'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1beta1NamespaceNameKey() {
  return ['v1beta1', '/v1beta1/:namespaceName', 'PUT'] as const
}

export function usePutV1beta1NamespaceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':namespaceName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':namespaceName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1beta1NamespaceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':namespaceName']['$put']> },
      ) => parseResponse(client.v1beta1[':namespaceName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
