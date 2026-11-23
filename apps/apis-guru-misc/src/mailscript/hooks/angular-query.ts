import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionsKey() {
  return ['actions'] as const
}

export function getAddressesKey() {
  return ['addresses'] as const
}

export function getDaemonsKey() {
  return ['daemons'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getInputsKey() {
  return ['inputs'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getSendKey() {
  return ['send'] as const
}

export function getTriggersKey() {
  return ['triggers'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getVerificationsKey() {
  return ['verifications'] as const
}

export function getWorkflowsKey() {
  return ['workflows'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getActionsQueryKey() {
  return ['actions', '/actions'] as const
}

export function getActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActionsQueryKey>
  >({
    queryKey: getActionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.actions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostActionsMutationKey() {
  return ['actions', '/actions', 'POST'] as const
}

export function getPostActionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$post>>>>>,
    TError,
    InferRequestType<typeof client.actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.actions.$post>) {
      return parseResponse(client.actions.$post(args, options))
    },
  })
}

export function injectPostActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$post>>>>>,
        TError,
        InferRequestType<typeof client.actions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutActionsActionMutationKey() {
  return ['actions', '/actions/:action', 'PUT'] as const
}

export function getPutActionsActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':action']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':action']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsActionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':action']['$put']>) {
      return parseResponse(client.actions[':action'].$put(args, options))
    },
  })
}

export function injectPutActionsAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':action']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':action']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutActionsActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteActionsActionMutationKey() {
  return ['actions', '/actions/:action', 'DELETE'] as const
}

export function getDeleteActionsActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':action']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.actions)[':action']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionsActionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':action']['$delete']>) {
      return parseResponse(client.actions[':action'].$delete(args, options))
    },
  })
}

export function injectDeleteActionsAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actions)[':action']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.actions)[':action']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteActionsActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAddressesQueryKey() {
  return ['addresses', '/addresses'] as const
}

export function getAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddressesQueryKey>
  >({
    queryKey: getAddressesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddressesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAddressesMutationKey() {
  return ['addresses', '/addresses', 'POST'] as const
}

export function getPostAddressesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>>,
    TError,
    InferRequestType<typeof client.addresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.addresses.$post>) {
      return parseResponse(client.addresses.$post(args, options))
    },
  })
}

export function injectPostAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.addresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAddressesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAddressesAddressMutationKey() {
  return ['addresses', '/addresses/:address', 'DELETE'] as const
}

export function getDeleteAddressesAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.addresses)[':address']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAddressesAddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.addresses)[':address']['$delete']>) {
      return parseResponse(client.addresses[':address'].$delete(args, options))
    },
  })
}

export function injectDeleteAddressesAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addresses)[':address']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.addresses)[':address']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAddressesAddressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAddressesAddressKeysQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['keys']['$get']>,
) {
  return ['addresses', '/addresses/:address/keys', args] as const
}

export function getAddressesAddressKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressKeysQueryKey>
  >({
    queryKey: getAddressesAddressKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAddressesAddressKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.addresses)[':address']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesAddressKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAddressesAddressKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAddressesAddressKeysMutationKey() {
  return ['addresses', '/addresses/:address/keys', 'POST'] as const
}

export function getPostAddressesAddressKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.addresses)[':address']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressesAddressKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.addresses)[':address']['keys']['$post']>,
    ) {
      return parseResponse(client.addresses[':address'].keys.$post(args, options))
    },
  })
}

export function injectPostAddressesAddressKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.addresses)[':address']['keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.addresses)[':address']['keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAddressesAddressKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAddressesAddressKeysKeyQueryKey(
  args: InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$get']>,
) {
  return ['addresses', '/addresses/:address/keys/:key', args] as const
}

export function getAddressesAddressKeysKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddressesAddressKeysKeyQueryKey>
  >({
    queryKey: getAddressesAddressKeysKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses[':address'].keys[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAddressesAddressKeysKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesAddressKeysKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAddressesAddressKeysKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAddressesAddressKeysKeyMutationKey() {
  return ['addresses', '/addresses/:address/keys/:key', 'PUT'] as const
}

export function getPutAddressesAddressKeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAddressesAddressKeysKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$put']>,
    ) {
      return parseResponse(client.addresses[':address'].keys[':key'].$put(args, options))
    },
  })
}

export function injectPutAddressesAddressKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAddressesAddressKeysKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAddressesAddressKeysKeyMutationKey() {
  return ['addresses', '/addresses/:address/keys/:key', 'DELETE'] as const
}

export function getDeleteAddressesAddressKeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAddressesAddressKeysKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$delete']>,
    ) {
      return parseResponse(client.addresses[':address'].keys[':key'].$delete(args, options))
    },
  })
}

export function injectDeleteAddressesAddressKeysKey<
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
                  ReturnType<(typeof client.addresses)[':address']['keys'][':key']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.addresses)[':address']['keys'][':key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAddressesAddressKeysKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDaemonsDaemonTokenQueryKey(
  args: InferRequestType<(typeof client.daemons)[':daemon']['token']['$get']>,
) {
  return ['daemons', '/daemons/:daemon/token', args] as const
}

export function getDaemonsDaemonTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.daemons)[':daemon']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.daemons)[':daemon']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.daemons)[':daemon']['token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDaemonsDaemonTokenQueryKey>
  >({
    queryKey: getDaemonsDaemonTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.daemons[':daemon'].token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDaemonsDaemonToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.daemons)[':daemon']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.daemons)[':daemon']['token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.daemons)[':daemon']['token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDaemonsDaemonTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDaemonsDaemonTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDomainsQueryKey() {
  return ['domains', '/domains'] as const
}

export function getDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >({
    queryKey: getDomainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostDomainsMutationKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function getPostDomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.$post>) {
      return parseResponse(client.domains.$post(args, options))
    },
  })
}

export function injectPostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
        TError,
        InferRequestType<typeof client.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDomainsVerifyDomainQueryKey(
  args: InferRequestType<(typeof client.domains.verify)[':domain']['$get']>,
) {
  return ['domains', '/domains/verify/:domain', args] as const
}

export function getDomainsVerifyDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.verify)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains.verify)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains.verify)[':domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsVerifyDomainQueryKey>
  >({
    queryKey: getDomainsVerifyDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.verify[':domain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDomainsVerifyDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains.verify)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains.verify)[':domain']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains.verify)[':domain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsVerifyDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDomainsVerifyDomainQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDomainsVerifyDomainMutationKey() {
  return ['domains', '/domains/verify/:domain', 'POST'] as const
}

export function getPostDomainsVerifyDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains.verify)[':domain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains.verify)[':domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsVerifyDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains.verify)[':domain']['$post']>) {
      return parseResponse(client.domains.verify[':domain'].$post(args, options))
    },
  })
}

export function injectPostDomainsVerifyDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains.verify)[':domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains.verify)[':domain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomainsVerifyDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteDomainsDomainMutationKey() {
  return ['domains', '/domains/:domain', 'DELETE'] as const
}

export function getDeleteDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domain']['$delete']>) {
      return parseResponse(client.domains[':domain'].$delete(args, options))
    },
  })
}

export function injectDeleteDomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domain']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDomainsDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getInputsQueryKey(args: InferRequestType<typeof client.inputs.$get>) {
  return ['inputs', '/inputs', args] as const
}

export function getInputsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inputs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInputsQueryKey>
  >({
    queryKey: getInputsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inputs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInputs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inputs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inputs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInputsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInputsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getIntegrationsQueryKey() {
  return ['integrations', '/integrations'] as const
}

export function getIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIntegrationsQueryKey>
  >({
    queryKey: getIntegrationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteIntegrationsIntegrationMutationKey() {
  return ['integrations', '/integrations/:integration', 'DELETE'] as const
}

export function getDeleteIntegrationsIntegrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':integration']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.integrations)[':integration']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationsIntegrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrations)[':integration']['$delete']>,
    ) {
      return parseResponse(client.integrations[':integration'].$delete(args, options))
    },
  })
}

export function injectDeleteIntegrationsIntegration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.integrations)[':integration']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.integrations)[':integration']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIntegrationsIntegrationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSendMutationKey() {
  return ['send', '/send', 'POST'] as const
}

export function getPostSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.send.$post>) {
      return parseResponse(client.send.$post(args, options))
    },
  })
}

export function injectPostSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.send.$post>>>>>,
        TError,
        InferRequestType<typeof client.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTriggersQueryKey() {
  return ['triggers', '/triggers'] as const
}

export function getTriggersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.triggers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.triggers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTriggersQueryKey>
  >({
    queryKey: getTriggersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.triggers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTriggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.triggers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.triggers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTriggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTriggersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostTriggersMutationKey() {
  return ['triggers', '/triggers', 'POST'] as const
}

export function getPostTriggersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.triggers.$post>>>>>,
    TError,
    InferRequestType<typeof client.triggers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTriggersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.triggers.$post>) {
      return parseResponse(client.triggers.$post(args, options))
    },
  })
}

export function injectPostTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.triggers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.triggers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTriggersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutTriggersTriggerMutationKey() {
  return ['triggers', '/triggers/:trigger', 'PUT'] as const
}

export function getPutTriggersTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.triggers)[':trigger']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.triggers)[':trigger']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTriggersTriggerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.triggers)[':trigger']['$put']>) {
      return parseResponse(client.triggers[':trigger'].$put(args, options))
    },
  })
}

export function injectPutTriggersTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.triggers)[':trigger']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.triggers)[':trigger']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTriggersTriggerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTriggersTriggerMutationKey() {
  return ['triggers', '/triggers/:trigger', 'DELETE'] as const
}

export function getDeleteTriggersTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.triggers)[':trigger']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.triggers)[':trigger']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTriggersTriggerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.triggers)[':trigger']['$delete']>) {
      return parseResponse(client.triggers[':trigger'].$delete(args, options))
    },
  })
}

export function injectDeleteTriggersTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.triggers)[':trigger']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.triggers)[':trigger']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTriggersTriggerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserMutationKey() {
  return ['user', '/user', 'PUT'] as const
}

export function getPutUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    InferRequestType<typeof client.user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$put>) {
      return parseResponse(client.user.$put(args, options))
    },
  })
}

export function injectPutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
        TError,
        InferRequestType<typeof client.user.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVerificationsQueryKey() {
  return ['verifications', '/verifications'] as const
}

export function getVerificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVerificationsQueryKey>
  >({
    queryKey: getVerificationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.verifications.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVerifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVerificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVerificationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostVerificationsMutationKey() {
  return ['verifications', '/verifications', 'POST'] as const
}

export function getPostVerificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.verifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifications.$post>) {
      return parseResponse(client.verifications.$post(args, options))
    },
  })
}

export function injectPostVerifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.verifications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.verifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVerificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVerificationsVerificationVerifyMutationKey() {
  return ['verifications', '/verifications/:verification/verify', 'POST'] as const
}

export function getPostVerificationsVerificationVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.verifications)[':verification']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.verifications)[':verification']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVerificationsVerificationVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.verifications)[':verification']['verify']['$post']>,
    ) {
      return parseResponse(client.verifications[':verification'].verify.$post(args, options))
    },
  })
}

export function injectPostVerificationsVerificationVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.verifications)[':verification']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.verifications)[':verification']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVerificationsVerificationVerifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWorkflowsQueryKey() {
  return ['workflows', '/workflows'] as const
}

export function getWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkflowsQueryKey>
  >({
    queryKey: getWorkflowsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.workflows.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkflowsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostWorkflowsMutationKey() {
  return ['workflows', '/workflows', 'POST'] as const
}

export function getPostWorkflowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>>,
    TError,
    InferRequestType<typeof client.workflows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.$post>) {
      return parseResponse(client.workflows.$post(args, options))
    },
  })
}

export function injectPostWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.workflows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWorkflowsSetMutationKey() {
  return ['workflows', '/workflows/set', 'POST'] as const
}

export function getPostWorkflowsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.set.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.workflows.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.set.$post>) {
      return parseResponse(client.workflows.set.$post(args, options))
    },
  })
}

export function injectPostWorkflowsSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.set.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.workflows.set.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkflowsSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutWorkflowsWorkflowMutationKey() {
  return ['workflows', '/workflows/:workflow', 'PUT'] as const
}

export function getPutWorkflowsWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflow']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflow']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkflowsWorkflowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflow']['$put']>) {
      return parseResponse(client.workflows[':workflow'].$put(args, options))
    },
  })
}

export function injectPutWorkflowsWorkflow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workflows)[':workflow']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workflows)[':workflow']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWorkflowsWorkflowMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWorkflowsWorkflowMutationKey() {
  return ['workflows', '/workflows/:workflow', 'DELETE'] as const
}

export function getDeleteWorkflowsWorkflowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflow']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workflows)[':workflow']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkflowsWorkflowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflow']['$delete']>) {
      return parseResponse(client.workflows[':workflow'].$delete(args, options))
    },
  })
}

export function injectDeleteWorkflowsWorkflow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflow']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.workflows)[':workflow']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkflowsWorkflowMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWorkspacesQueryKey() {
  return ['workspaces', '/workspaces'] as const
}

export function getWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >({
    queryKey: getWorkspacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkspacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostWorkspacesMutationKey() {
  return ['workspaces', '/workspaces', 'POST'] as const
}

export function getPostWorkspacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>>,
    TError,
    InferRequestType<typeof client.workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workspaces.$post>) {
      return parseResponse(client.workspaces.$post(args, options))
    },
  })
}

export function injectPostWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.workspaces.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkspacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
