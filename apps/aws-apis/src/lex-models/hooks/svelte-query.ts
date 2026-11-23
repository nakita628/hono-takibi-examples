import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostBotsNameVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBotsNameVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostIntentsNameVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIntentsNameVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSlottypesNameVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSlottypesNameVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBotsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBotsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBotsBotNameAliasesNameQueryKey(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/:name', keyArgs] as const
}

export function getBotsBotNameAliasesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsBotNameAliasesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botName'].aliases[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotsBotNameAliasesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBotsBotNameAliasesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutBotsBotNameAliasesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBotsBotNameAliasesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBotsBotNameAliasesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBotsBotNameAliasesNameMutationOptions<
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

export function getBotsBotNameAliasesAliasNameChannelsNameQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/:name', keyArgs] as const
}

export function getBotsBotNameAliasesAliasNameChannelsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsBotNameAliasesAliasNameChannelsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botName'].aliases[':aliasName'].channels[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotsBotNameAliasesAliasNameChannelsName<
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
  args: () => InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBotsBotNameAliasesAliasNameChannelsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteBotsBotNameAliasesAliasNameChannelsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBotsBotNameAliasesAliasNameChannelsNameMutationOptions<
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

export function createDeleteBotsNameVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBotsNameVersionsVersionMutationOptions<
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

export function createDeleteIntentsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.intents)[':name']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.intents)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteIntentsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIntentsNameVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['intents', '/intents/:name/versions/:version', keyArgs] as const
}

export function getIntentsNameVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIntentsNameVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intents[':name'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntentsNameVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intents)[':name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntentsNameVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteIntentsNameVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIntentsNameVersionsVersionMutationOptions<
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

export function createDeleteSlottypesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSlottypesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSlottypesNameVersionVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSlottypesNameVersionVersionMutationOptions<
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

export function createDeleteBotsBotNameUtterancesUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBotsBotNameUtterancesUserIdMutationOptions<
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

export function getBotsNameVersionsVersionoraliasQueryKey(
  args: InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:name/versions/:versionoralias', keyArgs] as const
}

export function getBotsNameVersionsVersionoraliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsNameVersionsVersionoraliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':name'].versions[':versionoralias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotsNameVersionsVersionoralias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bots)[':name']['versions'][':versionoralias']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBotsNameVersionsVersionoraliasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBotsNameVersionsVersionoraliasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBotsBotNameAliasesIndexQueryKey(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/', keyArgs] as const
}

export function getBotsBotNameAliasesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsBotNameAliasesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botName'].aliases.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotsBotNameAliasesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':botName']['aliases']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBotsBotNameAliasesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBotsBotNameAliasesAliasNameChannelsIndexQueryKey(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:botName/aliases/:aliasName/channels/', keyArgs] as const
}

export function getBotsBotNameAliasesAliasNameChannelsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsBotNameAliasesAliasNameChannelsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botName'].aliases[':aliasName'].channels.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotsBotNameAliasesAliasNameChannelsIndex<
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
  args: () => InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBotsBotNameAliasesAliasNameChannelsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getBotsNameVersionsIndexQueryKey(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/:name/versions/', keyArgs] as const
}

export function getBotsNameVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsNameVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':name'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotsNameVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bots)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBotsNameVersionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBotsIndexQueryKey(args: InferRequestType<typeof client.bots.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['bots', '/bots/', keyArgs] as const
}

export function getBotsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bots.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBotsIndexQueryKey>
  >({
    queryKey: getBotsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBotsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bots.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBotsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBotsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBuiltinsIntentsSignatureQueryKey(
  args: InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['builtins', '/builtins/intents/:signature', keyArgs] as const
}

export function getBuiltinsIntentsSignatureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBuiltinsIntentsSignatureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.builtins.intents[':signature'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuiltinsIntentsSignature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.builtins.intents)[':signature']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuiltinsIntentsSignatureQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBuiltinsIntentsIndexQueryKey(
  args: InferRequestType<typeof client.builtins.intents.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['builtins', '/builtins/intents/', keyArgs] as const
}

export function getBuiltinsIntentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.builtins.intents.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuiltinsIntentsIndexQueryKey>
  >({
    queryKey: getBuiltinsIntentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.builtins.intents.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuiltinsIntentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.builtins.intents.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.builtins.intents.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuiltinsIntentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuiltinsIntentsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBuiltinsSlottypesIndexQueryKey(
  args: InferRequestType<typeof client.builtins.slottypes.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['builtins', '/builtins/slottypes/', keyArgs] as const
}

export function getBuiltinsSlottypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.builtins.slottypes.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuiltinsSlottypesIndexQueryKey>
  >({
    queryKey: getBuiltinsSlottypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.builtins.slottypes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBuiltinsSlottypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.builtins.slottypes.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.builtins.slottypes.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuiltinsSlottypesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBuiltinsSlottypesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportsNameVersionResourceTypeExportTypeQueryKey(
  args: InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['exports', '/exports/#name&version&resourceType&exportType', keyArgs] as const
}

export function getExportsNameVersionResourceTypeExportTypeQueryOptions<
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
  args: InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportsNameVersionResourceTypeExportTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports['#name&version&resourceType&exportType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportsNameVersionResourceTypeExportType<
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
  args: () => InferRequestType<
    (typeof client.exports)['#name&version&resourceType&exportType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getExportsNameVersionResourceTypeExportTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getImportsImportIdQueryKey(
  args: InferRequestType<(typeof client.imports)[':importId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['imports', '/imports/:importId', keyArgs] as const
}

export function getImportsImportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports)[':importId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImportIdQueryKey>
  >({
    queryKey: getImportsImportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports[':importId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImportsImportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.imports)[':importId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':importId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImportsImportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIntentsNameVersionsIndexQueryKey(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['intents', '/intents/:name/versions/', keyArgs] as const
}

export function getIntentsNameVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIntentsNameVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intents[':name'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntentsNameVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intents)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIntentsNameVersionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIntentsIndexQueryKey(args: InferRequestType<typeof client.intents.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['intents', '/intents/', keyArgs] as const
}

export function getIntentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.intents.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntentsIndexQueryKey>
  >({
    queryKey: getIntentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intents.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIntentsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.intents.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intents.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIntentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntentsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMigrationsMigrationIdQueryKey(
  args: InferRequestType<(typeof client.migrations)[':migrationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['migrations', '/migrations/:migrationId', keyArgs] as const
}

export function getMigrationsMigrationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.migrations)[':migrationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMigrationsMigrationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.migrations[':migrationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMigrationsMigrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.migrations)[':migrationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.migrations)[':migrationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMigrationsMigrationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMigrationsQueryKey(args: InferRequestType<typeof client.migrations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['migrations', '/migrations', keyArgs] as const
}

export function getMigrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.migrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMigrationsQueryKey>
  >({
    queryKey: getMigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.migrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMigrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.migrations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMigrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMigrationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMigrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.migrations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.migrations.$post>,
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
    const mutationDefaults = getPostMigrationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSlottypesNameVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['slottypes', '/slottypes/:name/versions/:version', keyArgs] as const
}

export function getSlottypesNameVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSlottypesNameVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.slottypes[':name'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSlottypesNameVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSlottypesNameVersionsVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlottypesNameVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSlottypesNameVersionsIndexQueryKey(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['slottypes', '/slottypes/:name/versions/', keyArgs] as const
}

export function getSlottypesNameVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSlottypesNameVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.slottypes[':name'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSlottypesNameVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.slottypes)[':name']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlottypesNameVersionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSlottypesIndexQueryKey(
  args: InferRequestType<typeof client.slottypes.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['slottypes', '/slottypes/', keyArgs] as const
}

export function getSlottypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.slottypes.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSlottypesIndexQueryKey>
  >({
    queryKey: getSlottypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.slottypes.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSlottypesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.slottypes.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slottypes.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSlottypesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlottypesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryKey(
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

export function getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botname']['utterances#view=aggregation&bot_versions&status_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotsBotnameUtterancesViewAggregationBotVersionsStatusType<
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
  args: () => InferRequestType<
    (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutBotsNameVersionsLATEST<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBotsNameVersionsLATESTMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutIntentsNameVersionsLATEST<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIntentsNameVersionsLATESTMutationOptions<
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

export function createPutSlottypesNameVersionsLATEST<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSlottypesNameVersionsLATESTMutationOptions<
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

export function createPostImportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.imports.index.$post>,
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
    const mutationDefaults = getPostImportsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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
