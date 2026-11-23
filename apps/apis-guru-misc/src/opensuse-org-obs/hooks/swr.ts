import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAboutKey() {
  return ['about'] as const
}

export function getArchitecturesKey() {
  return ['architectures'] as const
}

export function getAttributeKey() {
  return ['attribute'] as const
}

export function getBuildKey() {
  return ['build'] as const
}

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getDistributionsKey() {
  return ['distributions'] as const
}

export function getGroupKey() {
  return ['group'] as const
}

export function getIssueTrackersKey() {
  return ['issue_trackers'] as const
}

export function getPersonKey() {
  return ['person'] as const
}

export function getPublishedKey() {
  return ['published'] as const
}

export function getRequestKey() {
  return ['request'] as const
}

export function getRequestViewCollectionKey() {
  return ['request?view=collection'] as const
}

export function getWorkerKey() {
  return ['worker'] as const
}

export function getWorkerCmdCheckconstraintsKey() {
  return ['worker?cmd=checkconstraints'] as const
}

export function getGetAboutKey() {
  return ['about', '/about'] as const
}

export function useGetAbout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAboutKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.about.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAboutKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.about.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArchitecturesKey() {
  return ['architectures', '/architectures'] as const
}

export function useGetArchitectures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchitecturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.architectures.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchitectures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchitecturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.architectures.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArchitecturesArchitectureNameKey(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
) {
  return ['architectures', '/architectures/:architecture_name', args] as const
}

export function useGetArchitecturesArchitectureName<TError = unknown>(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
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
        ? getGetArchitecturesArchitectureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.architectures[':architecture_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchitecturesArchitectureName<TError = unknown>(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
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
        ? getGetArchitecturesArchitectureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.architectures[':architecture_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributeKey() {
  return ['attribute', '/attribute'] as const
}

export function useGetAttribute<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttributeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attribute.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttribute<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttributeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attribute.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributeNamespaceKey(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
) {
  return ['attribute', '/attribute/:namespace', args] as const
}

export function useGetAttributeNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
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
        ? getGetAttributeNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attribute[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
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
        ? getGetAttributeNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attribute[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAttributeNamespaceKey() {
  return ['attribute', '/attribute/:namespace', 'DELETE'] as const
}

export function useDeleteAttributeNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttributeNamespaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.attribute)[':namespace']['$delete']> },
      ) => parseResponse(client.attribute[':namespace'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttributeNamespaceMetaKey(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
) {
  return ['attribute', '/attribute/:namespace/_meta', args] as const
}

export function useGetAttributeNamespaceMeta<TError = unknown>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
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
        ? getGetAttributeNamespaceMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attribute[':namespace']._meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeNamespaceMeta<TError = unknown>(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
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
        ? getGetAttributeNamespaceMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attribute[':namespace']._meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAttributeNamespaceMetaKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'PUT'] as const
}

export function usePutAttributeNamespaceMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAttributeNamespaceMetaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']> },
      ) => parseResponse(client.attribute[':namespace']._meta.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributeNamespaceMetaKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'POST'] as const
}

export function usePostAttributeNamespaceMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeNamespaceMetaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']> },
      ) => parseResponse(client.attribute[':namespace']._meta.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAttributeNamespaceMetaKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'DELETE'] as const
}

export function useDeleteAttributeNamespaceMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttributeNamespaceMetaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']> },
      ) => parseResponse(client.attribute[':namespace']._meta.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAttributeNamespaceAttributeNameKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name', 'DELETE'] as const
}

export function useDeleteAttributeNamespaceAttributeName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttributeNamespaceAttributeNameKey()
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
            (typeof client.attribute)[':namespace'][':attribute_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.attribute[':namespace'][':attribute_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAttributeNamespaceAttributeNameMetaKey(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
) {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', args] as const
}

export function useGetAttributeNamespaceAttributeNameMeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
              >
            >
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
        ? getGetAttributeNamespaceAttributeNameMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.attribute[':namespace'][':attribute_name']._meta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributeNamespaceAttributeNameMeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
              >
            >
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
        ? getGetAttributeNamespaceAttributeNameMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.attribute[':namespace'][':attribute_name']._meta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAttributeNamespaceAttributeNameMetaKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'PUT'] as const
}

export function usePutAttributeNamespaceAttributeNameMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAttributeNamespaceAttributeNameMetaKey()
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
            (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
          >
        },
      ) =>
        parseResponse(
          client.attribute[':namespace'][':attribute_name']._meta.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAttributeNamespaceAttributeNameMetaKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'POST'] as const
}

export function usePostAttributeNamespaceAttributeNameMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributeNamespaceAttributeNameMetaKey()
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
            (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
          >
        },
      ) =>
        parseResponse(
          client.attribute[':namespace'][':attribute_name']._meta.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAttributeNamespaceAttributeNameMetaKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'DELETE'] as const
}

export function useDeleteAttributeNamespaceAttributeNameMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttributeNamespaceAttributeNameMetaKey()
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
            (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.attribute[':namespace'][':attribute_name']._meta.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBuildKey() {
  return ['build', '/build'] as const
}

export function useGetBuild<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetBuildKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.build.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuild<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetBuildKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.build.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameKey(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
) {
  return ['build', '/build/:project_name', args] as const
}

export function useGetBuildProjectName<TError = unknown>(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
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
        ? getGetBuildProjectNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.build[':project_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectName<TError = unknown>(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
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
        ? getGetBuildProjectNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.build[':project_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBuildProjectNameKey() {
  return ['build', '/build/:project_name', 'POST'] as const
}

export function usePostBuildProjectName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.build)[':project_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuildProjectNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.build)[':project_name']['$post']> },
      ) => parseResponse(client.build[':project_name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuildProjectNameResultKey(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
) {
  return ['build', '/build/:project_name/_result', args] as const
}

export function useGetBuildProjectNameResult<TError = unknown>(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
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
        ? getGetBuildProjectNameResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.build[':project_name']._result.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameResult<TError = unknown>(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
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
        ? getGetBuildProjectNameResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.build[':project_name']._result.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameKey(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
) {
  return ['build', '/build/:project_name/:repository_name', args] as const
}

export function useGetBuildProjectNameRepositoryName<TError = unknown>(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
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
        ? getGetBuildProjectNameRepositoryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.build[':project_name'][':repository_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryName<TError = unknown>(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
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
        ? getGetBuildProjectNameRepositoryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.build[':project_name'][':repository_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameBuildconfigKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
) {
  return ['build', '/build/:project_name/:repository_name/_buildconfig', args] as const
}

export function useGetBuildProjectNameRepositoryNameBuildconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameBuildconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name']._buildconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameBuildconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameBuildconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name']._buildconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/_builddepinfo',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][
            ':architecture_name'
          ]._builddepinfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][
            ':architecture_name'
          ]._builddepinfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNameRepositoryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/_repository',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNameRepository<TError = unknown>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNameRepositoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name']._repository.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNameRepository<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNameRepositoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name']._repository.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageName<TError = unknown>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_buildinfo',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._buildinfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._buildinfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_history',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_jobstatus',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._jobstatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._jobstatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameLogKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_log',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameLog<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameLog<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_reason',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameReason<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._reason.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameReason<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._reason.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_status',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
            ':file_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
            ':file_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameKey() {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name',
    'PUT',
  ] as const
}

export function usePutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameKey()
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
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
            ':file_name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoKey(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name?view=fileinfo',
    args,
  ] as const
}

export function useGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
            ':file_name?view=fileinfo'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
              >
            >
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
        ? getGetBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
            ':file_name?view=fileinfo'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConfigurationKey() {
  return ['configuration', '/configuration'] as const
}

export function useGetConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigurationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfiguration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigurationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConfigurationKey() {
  return ['configuration', '/configuration', 'PUT'] as const
}

export function usePutConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.configuration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.configuration.$put> }) =>
        parseResponse(client.configuration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDistributionsKey() {
  return ['distributions', '/distributions'] as const
}

export function useGetDistributions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDistributionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistributions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDistributionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDistributionsKey() {
  return ['distributions', '/distributions', 'POST'] as const
}

export function usePostDistributions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.distributions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDistributionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.distributions.$post> }) =>
        parseResponse(client.distributions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDistributionsBulkReplaceKey() {
  return ['distributions', '/distributions/bulk_replace', 'PUT'] as const
}

export function usePutDistributionsBulkReplace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.distributions.bulk_replace.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.distributions.bulk_replace.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDistributionsBulkReplaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.distributions.bulk_replace.$put> },
      ) => parseResponse(client.distributions.bulk_replace.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDistributionsIncludeRemotesKey() {
  return ['distributions', '/distributions/include_remotes'] as const
}

export function useGetDistributionsIncludeRemotes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDistributionsIncludeRemotesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.distributions.include_remotes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistributionsIncludeRemotes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDistributionsIncludeRemotesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.distributions.include_remotes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDistributionsDistributionIdKey(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
) {
  return ['distributions', '/distributions/:distribution_id', args] as const
}

export function useGetDistributionsDistributionId<TError = unknown>(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
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
        ? getGetDistributionsDistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions[':distribution_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistributionsDistributionId<TError = unknown>(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
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
        ? getGetDistributionsDistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.distributions[':distribution_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDistributionsDistributionIdKey() {
  return ['distributions', '/distributions/:distribution_id', 'PUT'] as const
}

export function usePutDistributionsDistributionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDistributionsDistributionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.distributions)[':distribution_id']['$put']> },
      ) => parseResponse(client.distributions[':distribution_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDistributionsDistributionIdKey() {
  return ['distributions', '/distributions/:distribution_id', 'DELETE'] as const
}

export function useDeleteDistributionsDistributionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDistributionsDistributionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']> },
      ) => parseResponse(client.distributions[':distribution_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupKey() {
  return ['group', '/group'] as const
}

export function useGetGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupGroupTitleKey(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
) {
  return ['group', '/group/:group_title', args] as const
}

export function useGetGroupGroupTitle<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
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
        ? getGetGroupGroupTitleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':group_title'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupGroupTitle<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
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
        ? getGetGroupGroupTitleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':group_title'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupGroupTitleKey() {
  return ['group', '/group/:group_title', 'PUT'] as const
}

export function usePutGroupGroupTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group)[':group_title']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupGroupTitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.group)[':group_title']['$put']> },
      ) => parseResponse(client.group[':group_title'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupGroupTitleKey() {
  return ['group', '/group/:group_title', 'POST'] as const
}

export function usePostGroupGroupTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group)[':group_title']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupGroupTitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.group)[':group_title']['$post']> },
      ) => parseResponse(client.group[':group_title'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupGroupTitleKey() {
  return ['group', '/group/:group_title', 'DELETE'] as const
}

export function useDeleteGroupGroupTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group)[':group_title']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupGroupTitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.group)[':group_title']['$delete']> },
      ) => parseResponse(client.group[':group_title'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTrackersKey() {
  return ['issue_trackers', '/issue_trackers'] as const
}

export function useGetIssueTrackers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssueTrackersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issue_trackers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssueTrackersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issue_trackers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIssueTrackersKey() {
  return ['issue_trackers', '/issue_trackers', 'POST'] as const
}

export function usePostIssueTrackers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.issue_trackers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssueTrackersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.issue_trackers.$post> }) =>
        parseResponse(client.issue_trackers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTrackersIssueTrackerNameKey(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
) {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', args] as const
}

export function useGetIssueTrackersIssueTrackerName<TError = unknown>(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
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
        ? getGetIssueTrackersIssueTrackerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.issue_trackers[':issue_tracker_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackersIssueTrackerName<TError = unknown>(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
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
        ? getGetIssueTrackersIssueTrackerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.issue_trackers[':issue_tracker_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIssueTrackersIssueTrackerNameKey() {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', 'PUT'] as const
}

export function usePutIssueTrackersIssueTrackerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIssueTrackersIssueTrackerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']> },
      ) => parseResponse(client.issue_trackers[':issue_tracker_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIssueTrackersIssueTrackerNameKey() {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', 'DELETE'] as const
}

export function useDeleteIssueTrackersIssueTrackerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIssueTrackersIssueTrackerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>
        },
      ) => parseResponse(client.issue_trackers[':issue_tracker_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTrackersIssueTrackerNameIssuesIssueNameKey(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
) {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name/issues/:issue_name', args] as const
}

export function useGetIssueTrackersIssueTrackerNameIssuesIssueName<TError = unknown>(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
              >
            >
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
        ? getGetIssueTrackersIssueTrackerNameIssuesIssueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.issue_trackers[':issue_tracker_name'].issues[':issue_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackersIssueTrackerNameIssuesIssueName<TError = unknown>(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
              >
            >
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
        ? getGetIssueTrackersIssueTrackerNameIssuesIssueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.issue_trackers[':issue_tracker_name'].issues[':issue_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPersonKey(args: InferRequestType<typeof client.person.$get>) {
  return ['person', '/person', args] as const
}

export function useGetPerson<TError = unknown>(
  args: InferRequestType<typeof client.person.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPersonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.person.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPerson<TError = unknown>(
  args: InferRequestType<typeof client.person.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPersonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.person.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPersonKey() {
  return ['person', '/person', 'POST'] as const
}

export function usePostPerson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.person.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPersonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.person.$post> }) =>
        parseResponse(client.person.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPersonRegisterKey() {
  return ['person', '/person/register', 'POST'] as const
}

export function usePostPersonRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.person.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPersonRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.person.register.$post> }) =>
        parseResponse(client.person.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPersonLoginKey(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
) {
  return ['person', '/person/:login', args] as const
}

export function useGetPersonLogin<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPersonLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':login'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonLogin<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPersonLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':login'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPersonLoginKey() {
  return ['person', '/person/:login', 'PUT'] as const
}

export function usePutPersonLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.person)[':login']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPersonLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.person)[':login']['$put']> },
      ) => parseResponse(client.person[':login'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPersonLoginKey() {
  return ['person', '/person/:login', 'POST'] as const
}

export function usePostPersonLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.person)[':login']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPersonLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.person)[':login']['$post']> },
      ) => parseResponse(client.person[':login'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPersonLoginGroupKey(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
) {
  return ['person', '/person/:login/group', args] as const
}

export function useGetPersonLoginGroup<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
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
        ? getGetPersonLoginGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':login'].group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonLoginGroup<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
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
        ? getGetPersonLoginGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':login'].group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPersonLoginTokenKey(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
) {
  return ['person', '/person/:login/token', args] as const
}

export function useGetPersonLoginToken<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
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
        ? getGetPersonLoginTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':login'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonLoginToken<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
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
        ? getGetPersonLoginTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':login'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPersonLoginTokenKey() {
  return ['person', '/person/:login/token', 'POST'] as const
}

export function usePostPersonLoginToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.person)[':login']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.person)[':login']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPersonLoginTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.person)[':login']['token']['$post']> },
      ) => parseResponse(client.person[':login'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePersonLoginTokenIdKey() {
  return ['person', '/person/:login/token/:id', 'DELETE'] as const
}

export function useDeletePersonLoginTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.person)[':login']['token'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePersonLoginTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']> },
      ) => parseResponse(client.person[':login'].token[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPublishedKey() {
  return ['published', '/published'] as const
}

export function useGetPublished<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublishedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.published.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublished<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublishedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.published.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublishedProjectNameKey(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
) {
  return ['published', '/published/:project_name', args] as const
}

export function useGetPublishedProjectName<TError = unknown>(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
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
        ? getGetPublishedProjectNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.published[':project_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublishedProjectName<TError = unknown>(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
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
        ? getGetPublishedProjectNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.published[':project_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublishedProjectNameRepositoryNameKey(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
) {
  return ['published', '/published/:project_name/:repository_name', args] as const
}

export function useGetPublishedProjectNameRepositoryName<TError = unknown>(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
            >
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
        ? getGetPublishedProjectNameRepositoryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublishedProjectNameRepositoryName<TError = unknown>(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
            >
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
        ? getGetPublishedProjectNameRepositoryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPublishedProjectNameRepositoryNameArchitectureNameKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name',
    args,
  ] as const
}

export function useGetPublishedProjectNameRepositoryNameArchitectureName<TError = unknown>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameArchitectureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublishedProjectNameRepositoryNameArchitectureName<TError = unknown>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameArchitectureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename',
    args,
  ] as const
}

export function useGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'][
            ':binary_filename'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'][
            ':binary_filename'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename?view=ymp',
    args,
  ] as const
}

export function useGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmp<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'][
            ':binary_filename?view=ymp'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmp<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'][
            ':binary_filename?view=ymp'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPublishedProjectNameRepositoryNameViewStatusKey(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
) {
  return ['published', '/published/:project_name/:repository_name?view=status', args] as const
}

export function useGetPublishedProjectNameRepositoryNameViewStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameViewStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name?view=status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublishedProjectNameRepositoryNameViewStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
              >
            >
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
        ? getGetPublishedProjectNameRepositoryNameViewStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.published[':project_name'][':repository_name?view=status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRequestKey() {
  return ['request', '/request'] as const
}

export function useGetRequest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRequestKey() {
  return ['request', '/request', 'POST'] as const
}

export function usePostRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.request.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.request.$post> }) =>
        parseResponse(client.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRequestIdKey(args: InferRequestType<(typeof client.request)[':id']['$get']>) {
  return ['request', '/request/:id', args] as const
}

export function useGetRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.request)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRequestIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.request)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRequestIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRequestIdKey() {
  return ['request', '/request/:id', 'PUT'] as const
}

export function usePutRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.request)[':id']['$put']> }) =>
        parseResponse(client.request[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestIdKey() {
  return ['request', '/request/:id', 'POST'] as const
}

export function usePostRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.request)[':id']['$post']> }) =>
        parseResponse(client.request[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRequestIdKey() {
  return ['request', '/request/:id', 'DELETE'] as const
}

export function useDeleteRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.request)[':id']['$delete']> },
      ) => parseResponse(client.request[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestIdCmdDiffKey() {
  return ['request', '/request/:id?cmd=diff', 'POST'] as const
}

export function usePostRequestIdCmdDiff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id?cmd=diff']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestIdCmdDiffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']> },
      ) => parseResponse(client.request[':id?cmd=diff'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRequestViewCollectionKey(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
) {
  return ['request?view=collection', '/request?view=collection', args] as const
}

export function useGetRequestViewCollection<TError = unknown>(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
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
        ? getGetRequestViewCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['request?view=collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestViewCollection<TError = unknown>(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
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
        ? getGetRequestViewCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['request?view=collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkerStatusKey() {
  return ['worker', '/worker/status'] as const
}

export function useGetWorkerStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkerStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkerStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkerStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.worker.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkerArchitectureNameWorkerIdKey(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
) {
  return ['worker', '/worker/:architecture_name:{worker_id}', args] as const
}

export function useGetWorkerArchitectureNameWorkerId<TError = unknown>(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
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
        ? getGetWorkerArchitectureNameWorkerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.worker[':architecture_name:{worker_id}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkerArchitectureNameWorkerId<TError = unknown>(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
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
        ? getGetWorkerArchitectureNameWorkerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.worker[':architecture_name:{worker_id}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkerCmdCheckconstraintsKey() {
  return ['worker?cmd=checkconstraints', '/worker?cmd=checkconstraints', 'POST'] as const
}

export function usePostWorkerCmdCheckconstraints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['worker?cmd=checkconstraints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkerCmdCheckconstraintsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']> },
      ) => parseResponse(client['worker?cmd=checkconstraints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
