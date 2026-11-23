import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTagmanagerKey() {
  return ['tagmanager'] as const
}

export function getGetTagmanagerV2AccountsKey(
  args: InferRequestType<typeof client.tagmanager.v2.accounts.$get>,
) {
  return ['tagmanager', '/tagmanager/v2/accounts', args] as const
}

export function useGetTagmanagerV2Accounts<TError = unknown>(
  args: InferRequestType<typeof client.tagmanager.v2.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>
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
        ? getGetTagmanagerV2AccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2Accounts<TError = unknown>(
  args: InferRequestType<typeof client.tagmanager.v2.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>
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
        ? getGetTagmanagerV2AccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagmanagerV2AccountsContainersLookupKey(
  args: InferRequestType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/accounts/containers:lookup', args] as const
}

export function useGetTagmanagerV2AccountsContainersLookup<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>>
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
        ? getGetTagmanagerV2AccountsContainersLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2.accounts['containers:lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2AccountsContainersLookup<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>>
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
        ? getGetTagmanagerV2AccountsContainersLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2.accounts['containers:lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentBuiltInVariablesKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/built_in_variables', args] as const
}

export function useGetTagmanagerV2ParentBuiltInVariables<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
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
        ? getGetTagmanagerV2ParentBuiltInVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].built_in_variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentBuiltInVariables<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
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
        ? getGetTagmanagerV2ParentBuiltInVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].built_in_variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentBuiltInVariablesKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/built_in_variables', 'POST'] as const
}

export function usePostTagmanagerV2ParentBuiltInVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentBuiltInVariablesKey()
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
            (typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']
          >
        },
      ) =>
        parseResponse(client.tagmanager.v2[':parent'].built_in_variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentClientsKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/clients', args] as const
}

export function useGetTagmanagerV2ParentClients<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
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
        ? getGetTagmanagerV2ParentClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentClients<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
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
        ? getGetTagmanagerV2ParentClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentClientsKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/clients', 'POST'] as const
}

export function usePostTagmanagerV2ParentClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':parent'].clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentContainersKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/containers', args] as const
}

export function useGetTagmanagerV2ParentContainers<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
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
        ? getGetTagmanagerV2ParentContainersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].containers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentContainers<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
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
        ? getGetTagmanagerV2ParentContainersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].containers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentContainersKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/containers', 'POST'] as const
}

export function usePostTagmanagerV2ParentContainers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentContainersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':parent'].containers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentDestinationsKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/destinations', args] as const
}

export function useGetTagmanagerV2ParentDestinations<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>>
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
        ? getGetTagmanagerV2ParentDestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentDestinations<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>>
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
        ? getGetTagmanagerV2ParentDestinationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentDestinationsLinkKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/destinations:link', 'POST'] as const
}

export function usePostTagmanagerV2ParentDestinationsLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentDestinationsLinkKey()
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
            (typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tagmanager.v2[':parent']['destinations:link'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentEnvironmentsKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/environments', args] as const
}

export function useGetTagmanagerV2ParentEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>>
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
        ? getGetTagmanagerV2ParentEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>>
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
        ? getGetTagmanagerV2ParentEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentEnvironmentsKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/environments', 'POST'] as const
}

export function usePostTagmanagerV2ParentEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':parent'].environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentFoldersKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/folders', args] as const
}

export function useGetTagmanagerV2ParentFolders<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
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
        ? getGetTagmanagerV2ParentFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentFolders<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
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
        ? getGetTagmanagerV2ParentFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentFoldersKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/folders', 'POST'] as const
}

export function usePostTagmanagerV2ParentFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':parent'].folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentGtagConfigKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/gtag_config', args] as const
}

export function useGetTagmanagerV2ParentGtagConfig<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
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
        ? getGetTagmanagerV2ParentGtagConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].gtag_config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentGtagConfig<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
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
        ? getGetTagmanagerV2ParentGtagConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].gtag_config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentGtagConfigKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/gtag_config', 'POST'] as const
}

export function usePostTagmanagerV2ParentGtagConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentGtagConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':parent'].gtag_config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentTagsKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/tags', args] as const
}

export function useGetTagmanagerV2ParentTags<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
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
        ? getGetTagmanagerV2ParentTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentTags<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
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
        ? getGetTagmanagerV2ParentTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentTagsKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/tags', 'POST'] as const
}

export function usePostTagmanagerV2ParentTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':parent'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentTemplatesKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/templates', args] as const
}

export function useGetTagmanagerV2ParentTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
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
        ? getGetTagmanagerV2ParentTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
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
        ? getGetTagmanagerV2ParentTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentTemplatesKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/templates', 'POST'] as const
}

export function usePostTagmanagerV2ParentTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':parent'].templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentTriggersKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/triggers', args] as const
}

export function useGetTagmanagerV2ParentTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
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
        ? getGetTagmanagerV2ParentTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
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
        ? getGetTagmanagerV2ParentTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentTriggersKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/triggers', 'POST'] as const
}

export function usePostTagmanagerV2ParentTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':parent'].triggers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentUserPermissionsKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/user_permissions', args] as const
}

export function useGetTagmanagerV2ParentUserPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
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
        ? getGetTagmanagerV2ParentUserPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].user_permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentUserPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
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
        ? getGetTagmanagerV2ParentUserPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].user_permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentUserPermissionsKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/user_permissions', 'POST'] as const
}

export function usePostTagmanagerV2ParentUserPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentUserPermissionsKey()
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
            (typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']
          >
        },
      ) =>
        parseResponse(client.tagmanager.v2[':parent'].user_permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentVariablesKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/variables', args] as const
}

export function useGetTagmanagerV2ParentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
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
        ? getGetTagmanagerV2ParentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
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
        ? getGetTagmanagerV2ParentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentVariablesKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/variables', 'POST'] as const
}

export function usePostTagmanagerV2ParentVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentVariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':parent'].variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentVersionHeadersKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/version_headers', args] as const
}

export function useGetTagmanagerV2ParentVersionHeaders<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>>
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
        ? getGetTagmanagerV2ParentVersionHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].version_headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentVersionHeaders<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>>
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
        ? getGetTagmanagerV2ParentVersionHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].version_headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentVersionHeadersLatestKey(
  args: InferRequestType<
    (typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/version_headers:latest', args] as const
}

export function useGetTagmanagerV2ParentVersionHeadersLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
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
        ? getGetTagmanagerV2ParentVersionHeadersLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tagmanager.v2[':parent']['version_headers:latest'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentVersionHeadersLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
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
        ? getGetTagmanagerV2ParentVersionHeadersLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tagmanager.v2[':parent']['version_headers:latest'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentVersionsLiveKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/versions:live', args] as const
}

export function useGetTagmanagerV2ParentVersionsLive<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>>
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
        ? getGetTagmanagerV2ParentVersionsLiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent']['versions:live'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentVersionsLive<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>>
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
        ? getGetTagmanagerV2ParentVersionsLiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent']['versions:live'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentWorkspacesKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/workspaces', args] as const
}

export function useGetTagmanagerV2ParentWorkspaces<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
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
        ? getGetTagmanagerV2ParentWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentWorkspaces<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
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
        ? getGetTagmanagerV2ParentWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tagmanager.v2[':parent'].workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentWorkspacesKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/workspaces', 'POST'] as const
}

export function usePostTagmanagerV2ParentWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':parent'].workspaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2ParentZonesKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/zones', args] as const
}

export function useGetTagmanagerV2ParentZones<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
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
        ? getGetTagmanagerV2ParentZonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].zones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2ParentZones<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
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
        ? getGetTagmanagerV2ParentZonesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':parent'].zones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2ParentZonesKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/zones', 'POST'] as const
}

export function usePostTagmanagerV2ParentZones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2ParentZonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':parent'].zones.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2PathKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:path', args] as const
}

export function useGetTagmanagerV2Path<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>>
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
        ? getGetTagmanagerV2PathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2Path<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>>
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
        ? getGetTagmanagerV2PathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTagmanagerV2PathKey() {
  return ['tagmanager', '/tagmanager/v2/:path', 'PUT'] as const
}

export function usePutTagmanagerV2Path<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTagmanagerV2PathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path']['$put']> },
      ) => parseResponse(client.tagmanager.v2[':path'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagmanagerV2PathKey() {
  return ['tagmanager', '/tagmanager/v2/:path', 'DELETE'] as const
}

export function useDeleteTagmanagerV2Path<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagmanagerV2PathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path']['$delete']> },
      ) => parseResponse(client.tagmanager.v2[':path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathBuiltInVariablesRevertKey() {
  return ['tagmanager', '/tagmanager/v2/:path/built_in_variables:revert', 'POST'] as const
}

export function usePostTagmanagerV2PathBuiltInVariablesRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathBuiltInVariablesRevertKey()
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
            (typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tagmanager.v2[':path']['built_in_variables:revert'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2PathStatusKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['status']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:path/status', args] as const
}

export function useGetTagmanagerV2PathStatus<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
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
        ? getGetTagmanagerV2PathStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':path'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2PathStatus<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
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
        ? getGetTagmanagerV2PathStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':path'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2PathCombineKey() {
  return ['tagmanager', '/tagmanager/v2/:path:combine', 'POST'] as const
}

export function usePostTagmanagerV2PathCombine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:combine']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:combine']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathCombineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:combine']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:combine'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathCreateVersionKey() {
  return ['tagmanager', '/tagmanager/v2/:path:create_version', 'POST'] as const
}

export function usePostTagmanagerV2PathCreateVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathCreateVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':path:create_version'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathEntitiesKey() {
  return ['tagmanager', '/tagmanager/v2/:path:entities', 'POST'] as const
}

export function usePostTagmanagerV2PathEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:entities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:entities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:entities']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:entities'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathMoveEntitiesToFolderKey() {
  return ['tagmanager', '/tagmanager/v2/:path:move_entities_to_folder', 'POST'] as const
}

export function usePostTagmanagerV2PathMoveEntitiesToFolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathMoveEntitiesToFolderKey()
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
            (typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tagmanager.v2[':path:move_entities_to_folder'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathMoveTagIdKey() {
  return ['tagmanager', '/tagmanager/v2/:path:move_tag_id', 'POST'] as const
}

export function usePostTagmanagerV2PathMoveTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathMoveTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:move_tag_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathPublishKey() {
  return ['tagmanager', '/tagmanager/v2/:path:publish', 'POST'] as const
}

export function usePostTagmanagerV2PathPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:publish']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:publish'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathQuickPreviewKey() {
  return ['tagmanager', '/tagmanager/v2/:path:quick_preview', 'POST'] as const
}

export function usePostTagmanagerV2PathQuickPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathQuickPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:quick_preview'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathReauthorizeKey() {
  return ['tagmanager', '/tagmanager/v2/:path:reauthorize', 'POST'] as const
}

export function usePostTagmanagerV2PathReauthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathReauthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:reauthorize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathResolveConflictKey() {
  return ['tagmanager', '/tagmanager/v2/:path:resolve_conflict', 'POST'] as const
}

export function usePostTagmanagerV2PathResolveConflict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathResolveConflictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>
        },
      ) => parseResponse(client.tagmanager.v2[':path:resolve_conflict'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathRevertKey() {
  return ['tagmanager', '/tagmanager/v2/:path:revert', 'POST'] as const
}

export function usePostTagmanagerV2PathRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:revert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:revert']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:revert'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathSetLatestKey() {
  return ['tagmanager', '/tagmanager/v2/:path:set_latest', 'POST'] as const
}

export function usePostTagmanagerV2PathSetLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathSetLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:set_latest'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagmanagerV2PathSnippetKey(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>,
) {
  return ['tagmanager', '/tagmanager/v2/:path:snippet', args] as const
}

export function useGetTagmanagerV2PathSnippet<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
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
        ? getGetTagmanagerV2PathSnippetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':path:snippet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagmanagerV2PathSnippet<TError = unknown>(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
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
        ? getGetTagmanagerV2PathSnippetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tagmanager.v2[':path:snippet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagmanagerV2PathSyncKey() {
  return ['tagmanager', '/tagmanager/v2/:path:sync', 'POST'] as const
}

export function usePostTagmanagerV2PathSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:sync']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:sync']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:sync'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagmanagerV2PathUndeleteKey() {
  return ['tagmanager', '/tagmanager/v2/:path:undelete', 'POST'] as const
}

export function usePostTagmanagerV2PathUndelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagmanagerV2PathUndeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tagmanager.v2)[':path:undelete']['$post']> },
      ) => parseResponse(client.tagmanager.v2[':path:undelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
