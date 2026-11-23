import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getPostBotsNameVersionsMutationKey() {
  return ['bots', '/bots/:name/versions', 'POST'] as const
}

export function getPostBotsNameVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':name']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':name']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsNameVersionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':name']['versions']['$post']>) {
      return parseResponse(client.bots[':name'].versions.$post(args, options))
    },
  })
}

export function usePostBotsNameVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':name']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bots)[':name']['versions']['$post']>,
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
  const mutationDefaults = getPostBotsNameVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostIntentsNameVersionsMutationKey() {
  return ['intents', '/intents/:name/versions', 'POST'] as const
}

export function getPostIntentsNameVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intents)[':name']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.intents)[':name']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIntentsNameVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.intents)[':name']['versions']['$post']>,
    ) {
      return parseResponse(client.intents[':name'].versions.$post(args, options))
    },
  })
}

export function usePostIntentsNameVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intents)[':name']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.intents)[':name']['versions']['$post']>,
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
  const mutationDefaults = getPostIntentsNameVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSlottypesNameVersionsMutationKey() {
  return ['slottypes', '/slottypes/:name/versions', 'POST'] as const
}

export function getPostSlottypesNameVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.slottypes)[':name']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSlottypesNameVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.slottypes)[':name']['versions']['$post']>,
    ) {
      return parseResponse(client.slottypes[':name'].versions.$post(args, options))
    },
  })
}

export function usePostSlottypesNameVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.slottypes)[':name']['versions']['$post']>,
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
  const mutationDefaults = getPostSlottypesNameVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBotsNameMutationKey() {
  return ['bots', '/bots/:name', 'DELETE'] as const
}

export function getDeleteBotsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':name']['$delete']>) {
      return parseResponse(client.bots[':name'].$delete(args, options))
    },
  })
}

export function useDeleteBotsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':name']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bots)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteBotsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBotsBotNameAliasesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bots', '/bots/:botName/aliases/:name', keyArgs] as const
}

export function getBotsBotNameAliasesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsBotNameAliasesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':botName'].aliases[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsBotNameAliasesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBotsBotNameAliasesNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotNameAliasesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsBotNameAliasesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':botName'].aliases[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBotsBotNameAliasesNameMutationKey() {
  return ['bots', '/bots/:botName/aliases/:name', 'PUT'] as const
}

export function getPutBotsBotNameAliasesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotNameAliasesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>,
    ) {
      return parseResponse(client.bots[':botName'].aliases[':name'].$put(args, options))
    },
  })
}

export function usePutBotsBotNameAliasesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>,
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
  const mutationDefaults = getPutBotsBotNameAliasesNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBotsBotNameAliasesNameMutationKey() {
  return ['bots', '/bots/:botName/aliases/:name', 'DELETE'] as const
}

export function getDeleteBotsBotNameAliasesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotNameAliasesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>,
    ) {
      return parseResponse(client.bots[':botName'].aliases[':name'].$delete(args, options))
    },
  })
}

export function useDeleteBotsBotNameAliasesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteBotsBotNameAliasesNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBotsBotNameAliasesAliasNameChannelsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/:name', keyArgs] as const
}

export function getBotsBotNameAliasesAliasNameChannelsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsBotNameAliasesAliasNameChannelsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':botName'].aliases[':aliasName'].channels[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsBotNameAliasesAliasNameChannelsName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getBotsBotNameAliasesAliasNameChannelsNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getBotsBotNameAliasesAliasNameChannelsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsBotNameAliasesAliasNameChannelsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':botName'].aliases[':aliasName'].channels[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBotsBotNameAliasesAliasNameChannelsNameMutationKey() {
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/:name', 'DELETE'] as const
}

export function getDeleteBotsBotNameAliasesAliasNameChannelsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotNameAliasesAliasNameChannelsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botName'].aliases[':aliasName'].channels[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBotsBotNameAliasesAliasNameChannelsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$delete']
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
  const mutationDefaults = getDeleteBotsBotNameAliasesAliasNameChannelsNameMutationOptions<
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

export function getDeleteBotsNameVersionsVersionMutationKey() {
  return ['bots', '/bots/:name/versions/:version', 'DELETE'] as const
}

export function getDeleteBotsNameVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':name']['versions'][':version']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':name']['versions'][':version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsNameVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':name']['versions'][':version']['$delete']>,
    ) {
      return parseResponse(client.bots[':name'].versions[':version'].$delete(args, options))
    },
  })
}

export function useDeleteBotsNameVersionsVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.bots)[':name']['versions'][':version']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bots)[':name']['versions'][':version']['$delete']>,
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
  const mutationDefaults = getDeleteBotsNameVersionsVersionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteIntentsNameMutationKey() {
  return ['intents', '/intents/:name', 'DELETE'] as const
}

export function getDeleteIntentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.intents)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.intents)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntentsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.intents)[':name']['$delete']>) {
      return parseResponse(client.intents[':name'].$delete(args, options))
    },
  })
}

export function useDeleteIntentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.intents)[':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.intents)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteIntentsNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIntentsNameVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['intents', '/intents/:name/versions/:version', keyArgs] as const
}

export function getIntentsNameVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntentsNameVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intents[':name'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntentsNameVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIntentsNameVersionsVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntentsNameVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntentsNameVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intents[':name'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteIntentsNameVersionsVersionMutationKey() {
  return ['intents', '/intents/:name/versions/:version', 'DELETE'] as const
}

export function getDeleteIntentsNameVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntentsNameVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$delete']>,
    ) {
      return parseResponse(client.intents[':name'].versions[':version'].$delete(args, options))
    },
  })
}

export function useDeleteIntentsNameVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.intents)[':name']['versions'][':version']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$delete']>,
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
  const mutationDefaults = getDeleteIntentsNameVersionsVersionMutationOptions<
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

export function getDeleteSlottypesNameMutationKey() {
  return ['slottypes', '/slottypes/:name', 'DELETE'] as const
}

export function getDeleteSlottypesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.slottypes)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.slottypes)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSlottypesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.slottypes)[':name']['$delete']>) {
      return parseResponse(client.slottypes[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSlottypesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.slottypes)[':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.slottypes)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteSlottypesNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSlottypesNameVersionVersionMutationKey() {
  return ['slottypes', '/slottypes/:name/version/:version', 'DELETE'] as const
}

export function getDeleteSlottypesNameVersionVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.slottypes)[':name']['version'][':version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSlottypesNameVersionVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.slottypes)[':name']['version'][':version']['$delete']>,
    ) {
      return parseResponse(client.slottypes[':name'].version[':version'].$delete(args, options))
    },
  })
}

export function useDeleteSlottypesNameVersionVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.slottypes)[':name']['version'][':version']['$delete']>,
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
  const mutationDefaults = getDeleteSlottypesNameVersionVersionMutationOptions<
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

export function getDeleteBotsBotNameUtterancesUserIdMutationKey() {
  return ['bots', '/bots/:botName/utterances/:userId', 'DELETE'] as const
}

export function getDeleteBotsBotNameUtterancesUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.bots)[':botName']['utterances'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotNameUtterancesUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':botName']['utterances'][':userId']['$delete']>,
    ) {
      return parseResponse(client.bots[':botName'].utterances[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteBotsBotNameUtterancesUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client.bots)[':botName']['utterances'][':userId']['$delete']>,
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
  const mutationDefaults = getDeleteBotsBotNameUtterancesUserIdMutationOptions<
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

export function getBotsNameVersionsVersionoraliasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bots', '/bots/:name/versions/:versionoralias', keyArgs] as const
}

export function getBotsNameVersionsVersionoraliasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsNameVersionsVersionoraliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':name'].versions[':versionoralias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsNameVersionsVersionoralias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBotsNameVersionsVersionoraliasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsNameVersionsVersionoraliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsNameVersionsVersionoraliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':name'].versions[':versionoralias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBotsBotNameAliasesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bots', '/bots/:botName/aliases/', keyArgs] as const
}

export function getBotsBotNameAliasesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsBotNameAliasesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':botName'].aliases.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsBotNameAliasesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBotsBotNameAliasesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotNameAliasesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsBotNameAliasesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':botName'].aliases.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBotsBotNameAliasesAliasNameChannelsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/', keyArgs] as const
}

export function getBotsBotNameAliasesAliasNameChannelsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsBotNameAliasesAliasNameChannelsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':botName'].aliases[':aliasName'].channels.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsBotNameAliasesAliasNameChannelsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getBotsBotNameAliasesAliasNameChannelsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getBotsBotNameAliasesAliasNameChannelsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsBotNameAliasesAliasNameChannelsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':botName'].aliases[':aliasName'].channels.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBotsNameVersionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bots', '/bots/:name/versions/', keyArgs] as const
}

export function getBotsNameVersionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsNameVersionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':name'].versions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsNameVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBotsNameVersionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsNameVersionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsNameVersionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':name'].versions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBotsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bots.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bots', '/bots/', keyArgs] as const
}

export function getBotsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bots.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBotsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bots.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>
          >,
          ReturnType<typeof getBotsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBotsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuiltinsIntentsSignatureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['builtins', '/builtins/intents/:signature', keyArgs] as const
}

export function getBuiltinsIntentsSignatureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuiltinsIntentsSignatureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.builtins.intents[':signature'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuiltinsIntentsSignature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBuiltinsIntentsSignatureQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuiltinsIntentsSignatureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuiltinsIntentsSignatureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.builtins.intents[':signature'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuiltinsIntentsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.builtins.intents.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['builtins', '/builtins/intents/', keyArgs] as const
}

export function getBuiltinsIntentsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.builtins.intents.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuiltinsIntentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.builtins.intents.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuiltinsIntentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.builtins.intents.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
            >
          >,
          ReturnType<typeof getBuiltinsIntentsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuiltinsIntentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuiltinsIntentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.builtins.intents.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuiltinsSlottypesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.builtins.slottypes.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['builtins', '/builtins/slottypes/', keyArgs] as const
}

export function getBuiltinsSlottypesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.builtins.slottypes.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuiltinsSlottypesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.builtins.slottypes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuiltinsSlottypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.builtins.slottypes.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
            >
          >,
          ReturnType<typeof getBuiltinsSlottypesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuiltinsSlottypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuiltinsSlottypesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.builtins.slottypes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportsNameVersionResourceTypeExportTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['exports', '/exports/#name&version&resourceType&exportType', keyArgs] as const
}

export function getExportsNameVersionResourceTypeExportTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsNameVersionResourceTypeExportTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports['#name&version&resourceType&exportType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportsNameVersionResourceTypeExportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.exports)['#name&version&resourceType&exportType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.exports)['#name&version&resourceType&exportType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getExportsNameVersionResourceTypeExportTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsNameVersionResourceTypeExportTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsNameVersionResourceTypeExportTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports['#name&version&resourceType&exportType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImportsImportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.imports)[':importId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['imports', '/imports/:importId', keyArgs] as const
}

export function getImportsImportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.imports)[':importId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportsImportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports[':importId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportsImportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.imports)[':importId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImportsImportIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportsImportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.imports[':importId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntentsNameVersionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['intents', '/intents/:name/versions/', keyArgs] as const
}

export function getIntentsNameVersionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntentsNameVersionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intents[':name'].versions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntentsNameVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntentsNameVersionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntentsNameVersionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntentsNameVersionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intents[':name'].versions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntentsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intents.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['intents', '/intents/', keyArgs] as const
}

export function getIntentsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intents.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intents.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intents.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
          >,
          ReturnType<typeof getIntentsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intents.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMigrationsMigrationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.migrations)[':migrationId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['migrations', '/migrations/:migrationId', keyArgs] as const
}

export function getMigrationsMigrationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.migrations)[':migrationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMigrationsMigrationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.migrations[':migrationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMigrationsMigrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.migrations)[':migrationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMigrationsMigrationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMigrationsMigrationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMigrationsMigrationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.migrations[':migrationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMigrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.migrations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['migrations', '/migrations', keyArgs] as const
}

export function getMigrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.migrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMigrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.migrations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMigrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.migrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>
          >,
          ReturnType<typeof getMigrationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMigrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMigrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.migrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMigrationsMutationKey() {
  return ['migrations', '/migrations', 'POST'] as const
}

export function getPostMigrationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$post>>>>>,
    TError,
    InferRequestType<typeof client.migrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMigrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.migrations.$post>) {
      return parseResponse(client.migrations.$post(args, options))
    },
  })
}

export function usePostMigrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.migrations.$post>,
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
  const mutationDefaults = getPostMigrationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSlottypesNameVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['slottypes', '/slottypes/:name/versions/:version', keyArgs] as const
}

export function getSlottypesNameVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlottypesNameVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.slottypes[':name'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlottypesNameVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSlottypesNameVersionsVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlottypesNameVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlottypesNameVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.slottypes[':name'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlottypesNameVersionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['slottypes', '/slottypes/:name/versions/', keyArgs] as const
}

export function getSlottypesNameVersionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlottypesNameVersionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.slottypes[':name'].versions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlottypesNameVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlottypesNameVersionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlottypesNameVersionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlottypesNameVersionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.slottypes[':name'].versions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlottypesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.slottypes.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['slottypes', '/slottypes/', keyArgs] as const
}

export function getSlottypesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.slottypes.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlottypesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.slottypes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlottypesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.slottypes.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>
            >
          >,
          ReturnType<typeof getSlottypesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSlottypesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlottypesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.slottypes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'bots',
    '/bots/:botname/utterances#view=aggregation&bot_versions&status_type',
    keyArgs,
  ] as const
}

export function getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':botname']['utterances#view=aggregation&bot_versions&status_type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBotsBotnameUtterancesViewAggregationBotVersionsStatusType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':botname']['utterances#view=aggregation&bot_versions&status_type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutBotsNameVersionsLATESTMutationKey() {
  return ['bots', '/bots/:name/versions/$LATEST', 'PUT'] as const
}

export function getPutBotsNameVersionsLATESTMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsNameVersionsLATESTMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>,
    ) {
      return parseResponse(client.bots[':name'].versions.$LATEST.$put(args, options))
    },
  })
}

export function usePutBotsNameVersionsLATEST<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>,
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
  const mutationDefaults = getPutBotsNameVersionsLATESTMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutIntentsNameVersionsLATESTMutationKey() {
  return ['intents', '/intents/:name/versions/$LATEST', 'PUT'] as const
}

export function getPutIntentsNameVersionsLATESTMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIntentsNameVersionsLATESTMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>,
    ) {
      return parseResponse(client.intents[':name'].versions.$LATEST.$put(args, options))
    },
  })
}

export function usePutIntentsNameVersionsLATEST<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>,
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
  const mutationDefaults = getPutIntentsNameVersionsLATESTMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutSlottypesNameVersionsLATESTMutationKey() {
  return ['slottypes', '/slottypes/:name/versions/$LATEST', 'PUT'] as const
}

export function getPutSlottypesNameVersionsLATESTMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSlottypesNameVersionsLATESTMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>,
    ) {
      return parseResponse(client.slottypes[':name'].versions.$LATEST.$put(args, options))
    },
  })
}

export function usePutSlottypesNameVersionsLATEST<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>,
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
  const mutationDefaults = getPutSlottypesNameVersionsLATESTMutationOptions<
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

export function getPostImportsIndexMutationKey() {
  return ['imports', '/imports/', 'POST'] as const
}

export function getPostImportsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.imports.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.imports.index.$post>) {
      return parseResponse(client.imports.index.$post(args, options))
    },
  })
}

export function usePostImportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.imports.index.$post>,
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
  const mutationDefaults = getPostImportsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
