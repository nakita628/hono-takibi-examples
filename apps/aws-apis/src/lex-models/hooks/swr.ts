import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBotsKey() {
  return ['bots'] as const
}

export function getBuiltinsKey() {
  return ['builtins'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getImportsKey() {
  return ['imports'] as const
}

export function getIntentsKey() {
  return ['intents'] as const
}

export function getMigrationsKey() {
  return ['migrations'] as const
}

export function getSlottypesKey() {
  return ['slottypes'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostBotsNameVersionsKey() {
  return ['bots', '/bots/:name/versions', 'POST'] as const
}

export function usePostBotsNameVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':name']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':name']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsNameVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bots)[':name']['versions']['$post']> },
      ) => parseResponse(client.bots[':name'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntentsNameVersionsKey() {
  return ['intents', '/intents/:name/versions', 'POST'] as const
}

export function usePostIntentsNameVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intents)[':name']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.intents)[':name']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntentsNameVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.intents)[':name']['versions']['$post']> },
      ) => parseResponse(client.intents[':name'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSlottypesNameVersionsKey() {
  return ['slottypes', '/slottypes/:name/versions', 'POST'] as const
}

export function usePostSlottypesNameVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.slottypes)[':name']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSlottypesNameVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.slottypes)[':name']['versions']['$post']> },
      ) => parseResponse(client.slottypes[':name'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsNameKey() {
  return ['bots', '/bots/:name', 'DELETE'] as const
}

export function useDeleteBotsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bots)[':name']['$delete']> },
      ) => parseResponse(client.bots[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotNameAliasesNameKey(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/:name', keyArgs] as const
}

export function useGetBotsBotNameAliasesName<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
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
        ? getGetBotsBotNameAliasesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':botName'].aliases[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotNameAliasesName<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
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
        ? getGetBotsBotNameAliasesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':botName'].aliases[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotNameAliasesNameKey() {
  return ['bots', '/bots/:botName/aliases/:name', 'PUT'] as const
}

export function usePutBotsBotNameAliasesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsBotNameAliasesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$put']> },
      ) => parseResponse(client.bots[':botName'].aliases[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotNameAliasesNameKey() {
  return ['bots', '/bots/:botName/aliases/:name', 'DELETE'] as const
}

export function useDeleteBotsBotNameAliasesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotNameAliasesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>
        },
      ) => parseResponse(client.bots[':botName'].aliases[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotNameAliasesAliasNameChannelsNameKey(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/:name', keyArgs] as const
}

export function useGetBotsBotNameAliasesAliasNameChannelsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
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
        ? getGetBotsBotNameAliasesAliasNameChannelsNameKey(args)
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
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
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
          client.bots[':botName'].aliases[':aliasName'].channels[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotNameAliasesAliasNameChannelsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
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
        ? getGetBotsBotNameAliasesAliasNameChannelsNameKey(args)
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
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
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
          client.bots[':botName'].aliases[':aliasName'].channels[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBotsBotNameAliasesAliasNameChannelsNameKey() {
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/:name', 'DELETE'] as const
}

export function useDeleteBotsBotNameAliasesAliasNameChannelsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotNameAliasesAliasNameChannelsNameKey()
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
            (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botName'].aliases[':aliasName'].channels[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsNameVersionsVersionKey() {
  return ['bots', '/bots/:name/versions/:version', 'DELETE'] as const
}

export function useDeleteBotsNameVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':name']['versions'][':version']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':name']['versions'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsNameVersionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bots)[':name']['versions'][':version']['$delete']>
        },
      ) => parseResponse(client.bots[':name'].versions[':version'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIntentsNameKey() {
  return ['intents', '/intents/:name', 'DELETE'] as const
}

export function useDeleteIntentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.intents)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.intents)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.intents)[':name']['$delete']> },
      ) => parseResponse(client.intents[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntentsNameVersionsVersionKey(
  args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['intents', '/intents/:name/versions/:version', keyArgs] as const
}

export function useGetIntentsNameVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
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
        ? getGetIntentsNameVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intents[':name'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntentsNameVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
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
        ? getGetIntentsNameVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.intents[':name'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIntentsNameVersionsVersionKey() {
  return ['intents', '/intents/:name/versions/:version', 'DELETE'] as const
}

export function useDeleteIntentsNameVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntentsNameVersionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$delete']>
        },
      ) => parseResponse(client.intents[':name'].versions[':version'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSlottypesNameKey() {
  return ['slottypes', '/slottypes/:name', 'DELETE'] as const
}

export function useDeleteSlottypesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.slottypes)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.slottypes)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSlottypesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.slottypes)[':name']['$delete']> },
      ) => parseResponse(client.slottypes[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSlottypesNameVersionVersionKey() {
  return ['slottypes', '/slottypes/:name/version/:version', 'DELETE'] as const
}

export function useDeleteSlottypesNameVersionVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.slottypes)[':name']['version'][':version']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.slottypes)[':name']['version'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSlottypesNameVersionVersionKey()
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
            (typeof client.slottypes)[':name']['version'][':version']['$delete']
          >
        },
      ) => parseResponse(client.slottypes[':name'].version[':version'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotNameUtterancesUserIdKey() {
  return ['bots', '/bots/:botName/utterances/:userId', 'DELETE'] as const
}

export function useDeleteBotsBotNameUtterancesUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bots)[':botName']['utterances'][':userId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botName']['utterances'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotNameUtterancesUserIdKey()
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
            (typeof client.bots)[':botName']['utterances'][':userId']['$delete']
          >
        },
      ) => parseResponse(client.bots[':botName'].utterances[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsNameVersionsVersionoraliasKey(
  args: InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:name/versions/:versionoralias', keyArgs] as const
}

export function useGetBotsNameVersionsVersionoralias<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
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
        ? getGetBotsNameVersionsVersionoraliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bots[':name'].versions[':versionoralias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsNameVersionsVersionoralias<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
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
        ? getGetBotsNameVersionsVersionoraliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bots[':name'].versions[':versionoralias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBotsBotNameAliasesIndexKey(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/', keyArgs] as const
}

export function useGetBotsBotNameAliasesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
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
        ? getGetBotsBotNameAliasesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':botName'].aliases.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotNameAliasesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
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
        ? getGetBotsBotNameAliasesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':botName'].aliases.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBotsBotNameAliasesAliasNameChannelsIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/', keyArgs] as const
}

export function useGetBotsBotNameAliasesAliasNameChannelsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
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
        ? getGetBotsBotNameAliasesAliasNameChannelsIndexKey(args)
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
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
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
          client.bots[':botName'].aliases[':aliasName'].channels.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotNameAliasesAliasNameChannelsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
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
        ? getGetBotsBotNameAliasesAliasNameChannelsIndexKey(args)
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
                (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
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
          client.bots[':botName'].aliases[':aliasName'].channels.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBotsNameVersionsIndexKey(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:name/versions/', keyArgs] as const
}

export function useGetBotsNameVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
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
        ? getGetBotsNameVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':name'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsNameVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
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
        ? getGetBotsNameVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':name'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBotsIndexKey(args: InferRequestType<typeof client.bots.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/', keyArgs] as const
}

export function useGetBotsIndex<TError = unknown>(
  args: InferRequestType<typeof client.bots.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBotsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsIndex<TError = unknown>(
  args: InferRequestType<typeof client.bots.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBotsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBuiltinsIntentsSignatureKey(
  args: InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['builtins', '/builtins/intents/:signature', keyArgs] as const
}

export function useGetBuiltinsIntentsSignature<TError = unknown>(
  args: InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
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
        ? getGetBuiltinsIntentsSignatureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builtins.intents[':signature'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuiltinsIntentsSignature<TError = unknown>(
  args: InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
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
        ? getGetBuiltinsIntentsSignatureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builtins.intents[':signature'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBuiltinsIntentsIndexKey(
  args: InferRequestType<typeof client.builtins.intents.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['builtins', '/builtins/intents/', keyArgs] as const
}

export function useGetBuiltinsIntentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.builtins.intents.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
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
        ? getGetBuiltinsIntentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builtins.intents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuiltinsIntentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.builtins.intents.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
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
        ? getGetBuiltinsIntentsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builtins.intents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBuiltinsSlottypesIndexKey(
  args: InferRequestType<typeof client.builtins.slottypes.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['builtins', '/builtins/slottypes/', keyArgs] as const
}

export function useGetBuiltinsSlottypesIndex<TError = unknown>(
  args: InferRequestType<typeof client.builtins.slottypes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
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
        ? getGetBuiltinsSlottypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builtins.slottypes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuiltinsSlottypesIndex<TError = unknown>(
  args: InferRequestType<typeof client.builtins.slottypes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
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
        ? getGetBuiltinsSlottypesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builtins.slottypes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExportsNameVersionResourceTypeExportTypeKey(
  args: InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['exports', '/exports/#name&version&resourceType&exportType', keyArgs] as const
}

export function useGetExportsNameVersionResourceTypeExportType<TError = unknown>(
  args: InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
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
        ? getGetExportsNameVersionResourceTypeExportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.exports['#name&version&resourceType&exportType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportsNameVersionResourceTypeExportType<TError = unknown>(
  args: InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
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
        ? getGetExportsNameVersionResourceTypeExportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.exports['#name&version&resourceType&exportType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetImportsImportIdKey(
  args: InferRequestType<(typeof client.imports)[':importId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['imports', '/imports/:importId', keyArgs] as const
}

export function useGetImportsImportId<TError = unknown>(
  args: InferRequestType<(typeof client.imports)[':importId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
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
        ? getGetImportsImportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.imports[':importId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImportsImportId<TError = unknown>(
  args: InferRequestType<(typeof client.imports)[':importId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
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
        ? getGetImportsImportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.imports[':importId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntentsNameVersionsIndexKey(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['intents', '/intents/:name/versions/', keyArgs] as const
}

export function useGetIntentsNameVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
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
        ? getGetIntentsNameVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intents[':name'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntentsNameVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
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
        ? getGetIntentsNameVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intents[':name'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntentsIndexKey(args: InferRequestType<typeof client.intents.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['intents', '/intents/', keyArgs] as const
}

export function useGetIntentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.intents.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntentsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntentsIndex<TError = unknown>(
  args: InferRequestType<typeof client.intents.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntentsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intents.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMigrationsMigrationIdKey(
  args: InferRequestType<(typeof client.migrations)[':migrationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['migrations', '/migrations/:migrationId', keyArgs] as const
}

export function useGetMigrationsMigrationId<TError = unknown>(
  args: InferRequestType<(typeof client.migrations)[':migrationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>
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
        ? getGetMigrationsMigrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.migrations[':migrationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMigrationsMigrationId<TError = unknown>(
  args: InferRequestType<(typeof client.migrations)[':migrationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>
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
        ? getGetMigrationsMigrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.migrations[':migrationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMigrationsKey(args: InferRequestType<typeof client.migrations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['migrations', '/migrations', keyArgs] as const
}

export function useGetMigrations<TError = unknown>(
  args: InferRequestType<typeof client.migrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMigrationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMigrations<TError = unknown>(
  args: InferRequestType<typeof client.migrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMigrationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMigrationsKey() {
  return ['migrations', '/migrations', 'POST'] as const
}

export function usePostMigrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.migrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMigrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.migrations.$post> }) =>
        parseResponse(client.migrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSlottypesNameVersionsVersionKey(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['slottypes', '/slottypes/:name/versions/:version', keyArgs] as const
}

export function useGetSlottypesNameVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
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
        ? getGetSlottypesNameVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.slottypes[':name'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSlottypesNameVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
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
        ? getGetSlottypesNameVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.slottypes[':name'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSlottypesNameVersionsIndexKey(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['slottypes', '/slottypes/:name/versions/', keyArgs] as const
}

export function useGetSlottypesNameVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
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
        ? getGetSlottypesNameVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.slottypes[':name'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSlottypesNameVersionsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
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
        ? getGetSlottypesNameVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.slottypes[':name'].versions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSlottypesIndexKey(
  args: InferRequestType<typeof client.slottypes.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['slottypes', '/slottypes/', keyArgs] as const
}

export function useGetSlottypesIndex<TError = unknown>(
  args: InferRequestType<typeof client.slottypes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSlottypesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.slottypes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSlottypesIndex<TError = unknown>(
  args: InferRequestType<typeof client.slottypes.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSlottypesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.slottypes.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeKey(
  args: InferRequestType<
    (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botname/utterances#view=aggregation&bot_versions&status_type',
    keyArgs,
  ] as const
}

export function useGetBotsBotnameUtterancesViewAggregationBotVersionsStatusType<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
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
        ? getGetBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeKey(args)
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
                (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
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
          client.bots[':botname']['utterances#view=aggregation&bot_versions&status_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotnameUtterancesViewAggregationBotVersionsStatusType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
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
        ? getGetBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeKey(args)
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
                (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
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
          client.bots[':botname']['utterances#view=aggregation&bot_versions&status_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBotsNameVersionsLATESTKey() {
  return ['bots', '/bots/:name/versions/$LATEST', 'PUT'] as const
}

export function usePutBotsNameVersionsLATEST<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsNameVersionsLATESTKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']> },
      ) => parseResponse(client.bots[':name'].versions.$LATEST.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIntentsNameVersionsLATESTKey() {
  return ['intents', '/intents/:name/versions/$LATEST', 'PUT'] as const
}

export function usePutIntentsNameVersionsLATEST<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIntentsNameVersionsLATESTKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>
        },
      ) => parseResponse(client.intents[':name'].versions.$LATEST.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSlottypesNameVersionsLATESTKey() {
  return ['slottypes', '/slottypes/:name/versions/$LATEST', 'PUT'] as const
}

export function usePutSlottypesNameVersionsLATEST<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSlottypesNameVersionsLATESTKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>
        },
      ) => parseResponse(client.slottypes[':name'].versions.$LATEST.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImportsIndexKey() {
  return ['imports', '/imports/', 'POST'] as const
}

export function usePostImportsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.imports.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImportsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.imports.index.$post> }) =>
        parseResponse(client.imports.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
