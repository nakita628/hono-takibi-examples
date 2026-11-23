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

export function getCreateuploadurlKey() {
  return ['createuploadurl'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getImportsKey() {
  return ['imports'] as const
}

export function getPolicyKey() {
  return ['policy'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchcreate',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].customvocabulary.DEFAULT.batchcreate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchdelete',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].customvocabulary.DEFAULT.batchdelete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/batchupdate',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].customvocabulary.DEFAULT.batchupdate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', keyArgs] as const
}

export function useGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', 'PUT'] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', 'POST'] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/:localeId/', 'DELETE'] as const
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBotsIndexKey() {
  return ['bots', '/bots/', 'PUT'] as const
}

export function usePutBotsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bots.index.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bots.index.$put> }) =>
        parseResponse(client.bots.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBotsIndexKey() {
  return ['bots', '/bots/', 'POST'] as const
}

export function usePostBotsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bots.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bots.index.$post> }) =>
        parseResponse(client.bots.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotaliasesIndexKey() {
  return ['bots', '/bots/:botId/botaliases/', 'PUT'] as const
}

export function usePutBotsBotIdBotaliasesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsBotIdBotaliasesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$put']> },
      ) => parseResponse(client.bots[':botId'].botaliases.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotaliasesIndexKey() {
  return ['bots', '/bots/:botId/botaliases/', 'POST'] as const
}

export function usePostBotsBotIdBotaliasesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsBotIdBotaliasesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>
        },
      ) => parseResponse(client.bots[':botId'].botaliases.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesIndexKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/', 'PUT'] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsBotIdBotversionsBotVersionBotlocalesIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales.index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesIndexKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/botlocales/', 'POST'] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsBotIdBotversionsBotVersionBotlocalesIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsIndexKey() {
  return ['bots', '/bots/:botId/botversions/', 'PUT'] as const
}

export function usePutBotsBotIdBotversionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botversions']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsBotIdBotversionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$put']>
        },
      ) => parseResponse(client.bots[':botId'].botversions.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsIndexKey() {
  return ['bots', '/bots/:botId/botversions/', 'POST'] as const
}

export function usePostBotsBotIdBotversionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['botversions']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsBotIdBotversionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$post']>
        },
      ) => parseResponse(client.bots[':botId'].botversions.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutExportsIndexKey() {
  return ['exports', '/exports/', 'PUT'] as const
}

export function usePutExportsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.index.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExportsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.index.$put> }) =>
        parseResponse(client.exports.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsIndexKey() {
  return ['exports', '/exports/', 'POST'] as const
}

export function usePostExportsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.index.$post> }) =>
        parseResponse(client.exports.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].intents.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].intents.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPolicyResourceArnIndexKey(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policy', '/policy/:resourceArn/', keyArgs] as const
}

export function useGetPolicyResourceArnIndex<TError = unknown>(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
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
        ? getGetPolicyResourceArnIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policy[':resourceArn'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPolicyResourceArnIndex<TError = unknown>(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
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
        ? getGetPolicyResourceArnIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.policy[':resourceArn'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPolicyResourceArnIndexKey() {
  return ['policy', '/policy/:resourceArn/', 'PUT'] as const
}

export function usePutPolicyResourceArnIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policy)[':resourceArn']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPolicyResourceArnIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$put']> },
      ) => parseResponse(client.policy[':resourceArn'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPolicyResourceArnIndexKey() {
  return ['policy', '/policy/:resourceArn/', 'POST'] as const
}

export function usePostPolicyResourceArnIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policy)[':resourceArn']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPolicyResourceArnIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$post']> },
      ) => parseResponse(client.policy[':resourceArn'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePolicyResourceArnIndexKey() {
  return ['policy', '/policy/:resourceArn/', 'DELETE'] as const
}

export function useDeletePolicyResourceArnIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.policy)[':resourceArn']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.policy)[':resourceArn']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePolicyResourceArnIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$delete']> },
      ) => parseResponse(client.policy[':resourceArn'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPolicyResourceArnStatementsIndexKey() {
  return ['policy', '/policy/:resourceArn/statements/', 'POST'] as const
}

export function usePostPolicyResourceArnStatementsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.policy)[':resourceArn']['statements']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.policy)[':resourceArn']['statements']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPolicyResourceArnStatementsIndexKey()
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
            (typeof client.policy)[':resourceArn']['statements']['index']['$post']
          >
        },
      ) => parseResponse(client.policy[':resourceArn'].statements.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].slots.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].slots.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].slottypes.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].slottypes.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCreateuploadurlIndexKey() {
  return ['createuploadurl', '/createuploadurl/', 'POST'] as const
}

export function usePostCreateuploadurlIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createuploadurl.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createuploadurl.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateuploadurlIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createuploadurl.index.$post> },
      ) => parseResponse(client.createuploadurl.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdIndexKey(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/', keyArgs] as const
}

export function useGetBotsBotIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBotsBotIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':botId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBotsBotIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bots[':botId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotIdIndexKey() {
  return ['bots', '/bots/:botId/', 'PUT'] as const
}

export function usePutBotsBotIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsBotIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bots)[':botId']['index']['$put']> },
      ) => parseResponse(client.bots[':botId'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdIndexKey() {
  return ['bots', '/bots/:botId/', 'DELETE'] as const
}

export function useDeleteBotsBotIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botId']['index']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bots)[':botId']['index']['$delete']> },
      ) => parseResponse(client.bots[':botId'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotaliasesBotAliasIdIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/botaliases/:botAliasId/', keyArgs] as const
}

export function useGetBotsBotIdBotaliasesBotAliasIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
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
        ? getGetBotsBotIdBotaliasesBotAliasIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
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
          client.bots[':botId'].botaliases[':botAliasId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotaliasesBotAliasIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
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
        ? getGetBotsBotIdBotaliasesBotAliasIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
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
          client.bots[':botId'].botaliases[':botAliasId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotIdBotaliasesBotAliasIdIndexKey() {
  return ['bots', '/bots/:botId/botaliases/:botAliasId/', 'PUT'] as const
}

export function usePutBotsBotIdBotaliasesBotAliasIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBotsBotIdBotaliasesBotAliasIdIndexKey()
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
            (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botaliases[':botAliasId'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotaliasesBotAliasIdIndexKey() {
  return ['bots', '/bots/:botId/botaliases/:botAliasId/', 'DELETE'] as const
}

export function useDeleteBotsBotIdBotaliasesBotAliasIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotIdBotaliasesBotAliasIdIndexKey()
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
            (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botaliases[':botAliasId'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotversionsBotVersionIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botId/botversions/:botVersion/', keyArgs] as const
}

export function useGetBotsBotIdBotversionsBotVersionIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotversionsBotVersionIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotversionsBotVersionIndexKey() {
  return ['bots', '/bots/:botId/botversions/:botVersion/', 'DELETE'] as const
}

export function useDeleteBotsBotIdBotversionsBotVersionIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotIdBotversionsBotVersionIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary',
    'DELETE',
  ] as const
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabulary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].customvocabulary.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetExportsExportIdIndexKey(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['exports', '/exports/:exportId/', keyArgs] as const
}

export function useGetExportsExportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
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
        ? getGetExportsExportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':exportId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportsExportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
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
        ? getGetExportsExportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':exportId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutExportsExportIdIndexKey() {
  return ['exports', '/exports/:exportId/', 'PUT'] as const
}

export function usePutExportsExportIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.exports)[':exportId']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutExportsExportIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.exports)[':exportId']['index']['$put']> },
      ) => parseResponse(client.exports[':exportId'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteExportsExportIdIndexKey() {
  return ['exports', '/exports/:exportId/', 'DELETE'] as const
}

export function useDeleteExportsExportIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.exports)[':exportId']['index']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.exports)[':exportId']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExportsExportIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.exports)[':exportId']['index']['$delete']> },
      ) => parseResponse(client.exports[':exportId'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetImportsImportIdIndexKey(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['imports', '/imports/:importId/', keyArgs] as const
}

export function useGetImportsImportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
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
        ? getGetImportsImportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.imports[':importId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImportsImportIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
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
        ? getGetImportsImportIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.imports[':importId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteImportsImportIdIndexKey() {
  return ['imports', '/imports/:importId/', 'DELETE'] as const
}

export function useDeleteImportsImportIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports)[':importId']['index']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.imports)[':importId']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteImportsImportIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.imports)[':importId']['index']['$delete']> },
      ) => parseResponse(client.imports[':importId'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/',
    keyArgs,
  ] as const
}

export function useGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/',
    'DELETE',
  ] as const
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePolicyResourceArnStatementsStatementIdIndexKey() {
  return ['policy', '/policy/:resourceArn/statements/:statementId/', 'DELETE'] as const
}

export function useDeletePolicyResourceArnStatementsStatementIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePolicyResourceArnStatementsStatementIdIndexKey()
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
            (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.policy[':resourceArn'].statements[':statementId'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/:slotId/',
    keyArgs,
  ] as const
}

export function useGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexKey(
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].slots[':slotId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexKey(
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].slots[':slotId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/:slotId/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].slots[':slotId'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/intents/:intentId/slots/:slotId/',
    'DELETE',
  ] as const
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
            ':intentId'
          ].slots[':slotId'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/:slotTypeId/',
    keyArgs,
  ] as const
}

export function useGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
            ':slotTypeId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexKey(args)
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
            ':slotTypeId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/:slotTypeId/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
            ':slotTypeId'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/slottypes/:slotTypeId/',
    'DELETE',
  ] as const
}

export function useDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
            ':slotTypeId'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdUtterancesIndexKey() {
  return ['bots', '/bots/:botId/utterances/', 'DELETE'] as const
}

export function useDeleteBotsBotIdUtterancesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotsBotIdUtterancesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>
        },
      ) => parseResponse(client.bots[':botId'].utterances.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/',
    keyArgs,
  ] as const
}

export function useGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexKey(
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations[':botRecommendationId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexKey(
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations[':botRecommendationId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations[':botRecommendationId'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/metadata',
    keyArgs,
  ] as const
}

export function useGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadata<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataKey(
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].customvocabulary.DEFAULT.metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadata<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
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
        ? getGetBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataKey(
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
                (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
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
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].customvocabulary.DEFAULT.metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBotsBotIdAggregatedutterancesIndexKey() {
  return ['bots', '/bots/:botId/aggregatedutterances/', 'POST'] as const
}

export function usePostBotsBotIdAggregatedutterancesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotsBotIdAggregatedutterancesIndexKey()
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
            (typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.bots[':botId'].aggregatedutterances.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBuiltinsLocalesLocaleIdIntentsIndexKey() {
  return ['builtins', '/builtins/locales/:localeId/intents/', 'POST'] as const
}

export function usePostBuiltinsLocalesLocaleIdIntentsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.builtins.locales)[':localeId']['intents']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.builtins.locales)[':localeId']['intents']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuiltinsLocalesLocaleIdIntentsIndexKey()
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
            (typeof client.builtins.locales)[':localeId']['intents']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.builtins.locales[':localeId'].intents.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBuiltinsLocalesLocaleIdSlottypesIndexKey() {
  return ['builtins', '/builtins/locales/:localeId/slottypes/', 'POST'] as const
}

export function usePostBuiltinsLocalesLocaleIdSlottypesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuiltinsLocalesLocaleIdSlottypesIndexKey()
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
            (typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.builtins.locales[':localeId'].slottypes.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/customvocabulary/DEFAULT/list',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].customvocabulary.DEFAULT.list.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutImportsIndexKey() {
  return ['imports', '/imports/', 'PUT'] as const
}

export function usePutImportsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.imports.index.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutImportsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.imports.index.$put> }) =>
        parseResponse(client.imports.index.$put(arg, clientOptions)),
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

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/intents',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations[':botRecommendationId'].intents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceARNKey(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceARN', keyArgs] as const
}

export function useGetTagsResourceARN<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
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
        ? getGetTagsResourceARNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceARN'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceARN<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
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
        ? getGetTagsResourceARNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceARN'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceARNKey() {
  return ['tags', '/tags/:resourceARN', 'POST'] as const
}

export function usePostTagsResourceARN<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceARN']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceARN']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceARNKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceARN']['$post']> },
      ) => parseResponse(client.tags[':resourceARN'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/associatedtranscripts',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscripts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations[':botRecommendationId'].associatedtranscripts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationKey() {
  return [
    'bots',
    '/bots/:botId/botversions/:botVersion/botlocales/:localeId/botrecommendations/:botRecommendationId/stopbotrecommendation',
    'PUT',
  ] as const
}

export function usePutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationKey()
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
            (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botversions[':botVersion'].botlocales[
            ':localeId'
          ].botrecommendations[':botRecommendationId'].stopbotrecommendation.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceARNTagKeysKey() {
  return ['tags', '/tags/:resourceARN#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceARNTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceARNTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceARN#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
