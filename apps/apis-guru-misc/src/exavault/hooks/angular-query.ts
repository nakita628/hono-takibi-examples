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

export function getAccountKey() {
  return ['account'] as const
}

export function getActivityKey() {
  return ['activity'] as const
}

export function getEmailKey() {
  return ['email'] as const
}

export function getEmailListsKey() {
  return ['email-lists'] as const
}

export function getFormsKey() {
  return ['forms'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getRecipientsKey() {
  return ['recipients'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getSharesKey() {
  return ['shares'] as const
}

export function getSshKeysKey() {
  return ['ssh-keys'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAccountQueryKey(args: InferRequestType<typeof client.account.$get>) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account', keyArgs] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchAccountMutationKey() {
  return ['account', '/account', 'PATCH'] as const
}

export function getPatchAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>>,
    TError,
    InferRequestType<typeof client.account.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$patch>) {
      return parseResponse(client.account.$patch(args, options))
    },
  })
}

export function injectPatchAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.$patch>,
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
    const mutationDefaults = getPatchAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getActivitySessionQueryKey(
  args: InferRequestType<typeof client.activity.session.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['activity', '/activity/session', keyArgs] as const
}

export function getActivitySessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.session.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.activity.session.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.session.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActivitySessionQueryKey>
  >({
    queryKey: getActivitySessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activity.session.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActivitySession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.activity.session.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.session.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getActivitySessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActivitySessionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getActivityWebhooksQueryKey(
  args: InferRequestType<typeof client.activity.webhooks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['activity', '/activity/webhooks', keyArgs] as const
}

export function getActivityWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.activity.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.webhooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActivityWebhooksQueryKey>
  >({
    queryKey: getActivityWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activity.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActivityWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.activity.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.activity.webhooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActivityWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActivityWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEmailListsQueryKey(
  args: InferRequestType<(typeof client)['email-lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['email-lists', '/email-lists', keyArgs] as const
}

export function getEmailListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['email-lists']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailListsQueryKey>
  >({
    queryKey: getEmailListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['email-lists'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmailLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['email-lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmailListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostEmailListsMutationKey() {
  return ['email-lists', '/email-lists', 'POST'] as const
}

export function getPostEmailListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['email-lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['email-lists']['$post']>) {
      return parseResponse(client['email-lists'].$post(args, options))
    },
  })
}

export function injectPostEmailLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['email-lists']['$post']>,
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
    const mutationDefaults = getPostEmailListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmailListsIdQueryKey(
  args: InferRequestType<(typeof client)['email-lists'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['email-lists', '/email-lists/:id', keyArgs] as const
}

export function getEmailListsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['email-lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailListsIdQueryKey>
  >({
    queryKey: getEmailListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['email-lists'][':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmailListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['email-lists'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmailListsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteEmailListsIdMutationKey() {
  return ['email-lists', '/email-lists/:id', 'DELETE'] as const
}

export function getDeleteEmailListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['email-lists'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmailListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['email-lists'][':id']['$delete']>) {
      return parseResponse(client['email-lists'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteEmailListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['email-lists'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['email-lists'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteEmailListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmailListsIdMutationKey() {
  return ['email-lists', '/email-lists/:id', 'PATCH'] as const
}

export function getPatchEmailListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-lists'][':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['email-lists'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmailListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['email-lists'][':id']['$patch']>) {
      return parseResponse(client['email-lists'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchEmailListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['email-lists'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['email-lists'][':id']['$patch']>,
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
    const mutationDefaults = getPatchEmailListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEmailReferralMutationKey() {
  return ['email', '/email/referral', 'POST'] as const
}

export function getPostEmailReferralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.referral.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.email.referral.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailReferralMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email.referral.$post>) {
      return parseResponse(client.email.referral.$post(args, options))
    },
  })
}

export function injectPostEmailReferral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.referral.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.email.referral.$post>,
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
    const mutationDefaults = getPostEmailReferralMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEmailWelcomeUsernameMutationKey() {
  return ['email', '/email/welcome/:username', 'POST'] as const
}

export function getPostEmailWelcomeUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email.welcome)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.email.welcome)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailWelcomeUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.email.welcome)[':username']['$post']>) {
      return parseResponse(client.email.welcome[':username'].$post(args, options))
    },
  })
}

export function injectPostEmailWelcomeUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.email.welcome)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.email.welcome)[':username']['$post']>,
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
    const mutationDefaults = getPostEmailWelcomeUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFormsQueryKey(args: InferRequestType<typeof client.forms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['forms', '/forms', keyArgs] as const
}

export function getFormsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.forms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormsQueryKey>
  >({
    queryKey: getFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectForms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.forms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFormsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFormsEntriesIdQueryKey(
  args: InferRequestType<(typeof client.forms.entries)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['forms', '/forms/entries/:id', keyArgs] as const
}

export function getFormsEntriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.forms.entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.forms.entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.forms.entries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormsEntriesIdQueryKey>
  >({
    queryKey: getFormsEntriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forms.entries[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFormsEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.forms.entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.forms.entries)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.forms.entries)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormsEntriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormsEntriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFormsEntriesIdMutationKey() {
  return ['forms', '/forms/entries/:id', 'DELETE'] as const
}

export function getDeleteFormsEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.forms.entries)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.forms.entries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFormsEntriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.forms.entries)[':id']['$delete']>) {
      return parseResponse(client.forms.entries[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFormsEntriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.forms.entries)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.forms.entries)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteFormsEntriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFormsIdQueryKey(args: InferRequestType<(typeof client.forms)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['forms', '/forms/:id', keyArgs] as const
}

export function getFormsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.forms)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFormsIdQueryKey>
  >({
    queryKey: getFormsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forms[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFormsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.forms)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchFormsIdMutationKey() {
  return ['forms', '/forms/:id', 'PATCH'] as const
}

export function getPatchFormsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.forms)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFormsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.forms)[':id']['$patch']>) {
      return parseResponse(client.forms[':id'].$patch(args, options))
    },
  })
}

export function injectPatchFormsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.forms)[':id']['$patch']>,
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
    const mutationDefaults = getPatchFormsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNotificationsQueryKey(args: InferRequestType<typeof client.notifications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications', keyArgs] as const
}

export function getNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >({
    queryKey: getNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notifications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostNotificationsMutationKey() {
  return ['notifications', '/notifications', 'POST'] as const
}

export function getPostNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.$post>) {
      return parseResponse(client.notifications.$post(args, options))
    },
  })
}

export function injectPostNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.notifications.$post>,
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
    const mutationDefaults = getPostNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNotificationsIdQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/:id', keyArgs] as const
}

export function getNotificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdQueryKey>
  >({
    queryKey: getNotificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'DELETE'] as const
}

export function getDeleteNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$delete']>) {
      return parseResponse(client.notifications[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'PATCH'] as const
}

export function getPatchNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$patch']>) {
      return parseResponse(client.notifications[':id'].$patch(args, options))
    },
  })
}

export function injectPatchNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)[':id']['$patch']>,
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
    const mutationDefaults = getPatchNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRecipientsSharesInvitesShareIdMutationKey() {
  return ['recipients', '/recipients/shares/invites/:shareId', 'POST'] as const
}

export function getPostRecipientsSharesInvitesShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipients.shares.invites)[':shareId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipients.shares.invites)[':shareId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipientsSharesInvitesShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipients.shares.invites)[':shareId']['$post']>,
    ) {
      return parseResponse(client.recipients.shares.invites[':shareId'].$post(args, options))
    },
  })
}

export function injectPostRecipientsSharesInvitesShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipients.shares.invites)[':shareId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.recipients.shares.invites)[':shareId']['$post']>,
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
    const mutationDefaults = getPostRecipientsSharesInvitesShareIdMutationOptions<
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

export function getResourcesQueryKey(args: InferRequestType<typeof client.resources.$get>) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources', keyArgs] as const
}

export function getResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResourcesQueryKey>
  >({
    queryKey: getResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostResourcesMutationKey() {
  return ['resources', '/resources', 'POST'] as const
}

export function getPostResourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$post>>>>>,
    TError,
    InferRequestType<typeof client.resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.$post>) {
      return parseResponse(client.resources.$post(args, options))
    },
  })
}

export function injectPostResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.resources.$post>,
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
    const mutationDefaults = getPostResourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteResourcesMutationKey() {
  return ['resources', '/resources', 'DELETE'] as const
}

export function getDeleteResourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$delete>>>>>,
    TError,
    InferRequestType<typeof client.resources.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.$delete>) {
      return parseResponse(client.resources.$delete(args, options))
    },
  })
}

export function injectDeleteResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.resources.$delete>,
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
    const mutationDefaults = getDeleteResourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostResourcesCompressMutationKey() {
  return ['resources', '/resources/compress', 'POST'] as const
}

export function getPostResourcesCompressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.compress.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resources.compress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesCompressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.compress.$post>) {
      return parseResponse(client.resources.compress.$post(args, options))
    },
  })
}

export function injectPostResourcesCompress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.resources.compress.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.resources.compress.$post>,
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
    const mutationDefaults = getPostResourcesCompressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostResourcesCopyMutationKey() {
  return ['resources', '/resources/copy', 'POST'] as const
}

export function getPostResourcesCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.copy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resources.copy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesCopyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.copy.$post>) {
      return parseResponse(client.resources.copy.$post(args, options))
    },
  })
}

export function injectPostResourcesCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.copy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.resources.copy.$post>,
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
    const mutationDefaults = getPostResourcesCopyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourcesDownloadQueryKey(
  args: InferRequestType<typeof client.resources.download.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/download', keyArgs] as const
}

export function getResourcesDownloadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.download.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.download.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.download.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesDownloadQueryKey>
  >({
    queryKey: getResourcesDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.download.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResourcesDownload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.download.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.download.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.resources.download.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostResourcesExtractMutationKey() {
  return ['resources', '/resources/extract', 'POST'] as const
}

export function getPostResourcesExtractMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.extract.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resources.extract.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesExtractMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.extract.$post>) {
      return parseResponse(client.resources.extract.$post(args, options))
    },
  })
}

export function injectPostResourcesExtract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.resources.extract.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.resources.extract.$post>,
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
    const mutationDefaults = getPostResourcesExtractMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourcesListQueryKey(
  args: InferRequestType<typeof client.resources.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/list', keyArgs] as const
}

export function getResourcesListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesListQueryKey>
  >({
    queryKey: getResourcesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResourcesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getResourcesListIdQueryKey(
  args: InferRequestType<(typeof client.resources.list)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/list/:id', keyArgs] as const
}

export function getResourcesListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources.list)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.list)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources.list)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesListIdQueryKey>
  >({
    queryKey: getResourcesListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.list[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResourcesListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources.list)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.list)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources.list)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesListIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostResourcesMoveMutationKey() {
  return ['resources', '/resources/move', 'POST'] as const
}

export function getPostResourcesMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.move.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resources.move.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesMoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.move.$post>) {
      return parseResponse(client.resources.move.$post(args, options))
    },
  })
}

export function injectPostResourcesMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.move.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.resources.move.$post>,
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
    const mutationDefaults = getPostResourcesMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourcesPreviewQueryKey(
  args: InferRequestType<typeof client.resources.preview.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/preview', keyArgs] as const
}

export function getResourcesPreviewQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.preview.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.preview.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.preview.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesPreviewQueryKey>
  >({
    queryKey: getResourcesPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.preview.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResourcesPreview<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.preview.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.preview.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.resources.preview.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesPreviewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostResourcesUploadMutationKey() {
  return ['resources', '/resources/upload', 'POST'] as const
}

export function getPostResourcesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resources.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.upload.$post>) {
      return parseResponse(client.resources.upload.$post(args, options))
    },
  })
}

export function injectPostResourcesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.resources.upload.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.resources.upload.$post>,
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
    const mutationDefaults = getPostResourcesUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResourcesIdQueryKey(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:id', keyArgs] as const
}

export function getResourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesIdQueryKey>
  >({
    queryKey: getResourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteResourcesIdMutationKey() {
  return ['resources', '/resources/:id', 'DELETE'] as const
}

export function getDeleteResourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resources)[':id']['$delete']>) {
      return parseResponse(client.resources[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.resources)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteResourcesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchResourcesIdMutationKey() {
  return ['resources', '/resources/:id', 'PATCH'] as const
}

export function getPatchResourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchResourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resources)[':id']['$patch']>) {
      return parseResponse(client.resources[':id'].$patch(args, options))
    },
  })
}

export function injectPatchResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.resources)[':id']['$patch']>,
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
    const mutationDefaults = getPatchResourcesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSharesQueryKey(args: InferRequestType<typeof client.shares.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shares', '/shares', keyArgs] as const
}

export function getSharesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shares.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shares.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shares.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSharesQueryKey>
  >({
    queryKey: getSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shares.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectShares<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shares.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shares.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shares.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSharesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSharesMutationKey() {
  return ['shares', '/shares', 'POST'] as const
}

export function getPostSharesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shares.$post>>>>>,
    TError,
    InferRequestType<typeof client.shares.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSharesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shares.$post>) {
      return parseResponse(client.shares.$post(args, options))
    },
  })
}

export function injectPostShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shares.$post>>>>>,
        TError,
        InferRequestType<typeof client.shares.$post>,
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
    const mutationDefaults = getPostSharesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSharesCompleteSendIdMutationKey() {
  return ['shares', '/shares/complete-send/:id', 'POST'] as const
}

export function getPostSharesCompleteSendIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shares)['complete-send'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shares)['complete-send'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharesCompleteSendIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shares)['complete-send'][':id']['$post']>,
    ) {
      return parseResponse(client.shares['complete-send'][':id'].$post(args, options))
    },
  })
}

export function injectPostSharesCompleteSendId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shares)['complete-send'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shares)['complete-send'][':id']['$post']>,
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
    const mutationDefaults = getPostSharesCompleteSendIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSharesIdQueryKey(args: InferRequestType<(typeof client.shares)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['shares', '/shares/:id', keyArgs] as const
}

export function getSharesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.shares)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharesIdQueryKey>
  >({
    queryKey: getSharesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shares[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSharesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shares)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteSharesIdMutationKey() {
  return ['shares', '/shares/:id', 'DELETE'] as const
}

export function getDeleteSharesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.shares)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSharesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.shares)[':id']['$delete']>) {
      return parseResponse(client.shares[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteSharesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.shares)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteSharesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchSharesIdMutationKey() {
  return ['shares', '/shares/:id', 'PATCH'] as const
}

export function getPatchSharesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.shares)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSharesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.shares)[':id']['$patch']>) {
      return parseResponse(client.shares[':id'].$patch(args, options))
    },
  })
}

export function injectPatchSharesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shares)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.shares)[':id']['$patch']>,
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
    const mutationDefaults = getPatchSharesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSshKeysQueryKey(args: InferRequestType<(typeof client)['ssh-keys']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['ssh-keys', '/ssh-keys', keyArgs] as const
}

export function getSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['ssh-keys']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysQueryKey>
  >({
    queryKey: getSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ssh-keys'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSshKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ssh-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSshKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSshKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSshKeysMutationKey() {
  return ['ssh-keys', '/ssh-keys', 'POST'] as const
}

export function getPostSshKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['ssh-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSshKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ssh-keys']['$post']>) {
      return parseResponse(client['ssh-keys'].$post(args, options))
    },
  })
}

export function injectPostSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['ssh-keys']['$post']>,
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
    const mutationDefaults = getPostSshKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSshKeysIdQueryKey(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ssh-keys', '/ssh-keys/:id', keyArgs] as const
}

export function getSshKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysIdQueryKey>
  >({
    queryKey: getSshKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ssh-keys'][':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSshKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSshKeysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSshKeysIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteSshKeysIdMutationKey() {
  return ['ssh-keys', '/ssh-keys/:id', 'DELETE'] as const
}

export function getDeleteSshKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSshKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>) {
      return parseResponse(client['ssh-keys'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteSshKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ssh-keys'][':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteSshKeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users', keyArgs] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function injectPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
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
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id', keyArgs] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteUsersIdMutationKey() {
  return ['users', '/users/:id', 'DELETE'] as const
}

export function getDeleteUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$delete']>) {
      return parseResponse(client.users[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUsersIdMutationKey() {
  return ['users', '/users/:id', 'PATCH'] as const
}

export function getPatchUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$patch']>) {
      return parseResponse(client.users[':id'].$patch(args, options))
    },
  })
}

export function injectPatchUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['$patch']>,
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
    const mutationDefaults = getPatchUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks', keyArgs] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function injectPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
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
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWebhooksRegenerateTokenIdMutationKey() {
  return ['webhooks', '/webhooks/regenerate-token/:id', 'POST'] as const
}

export function getPostWebhooksRegenerateTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)['regenerate-token'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)['regenerate-token'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksRegenerateTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)['regenerate-token'][':id']['$post']>,
    ) {
      return parseResponse(client.webhooks['regenerate-token'][':id'].$post(args, options))
    },
  })
}

export function injectPostWebhooksRegenerateTokenId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)['regenerate-token'][':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)['regenerate-token'][':id']['$post']>,
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
    const mutationDefaults = getPostWebhooksRegenerateTokenIdMutationOptions<
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

export function getPostWebhooksResendActivityIdMutationKey() {
  return ['webhooks', '/webhooks/resend/:activityId', 'POST'] as const
}

export function getPostWebhooksResendActivityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.resend)[':activityId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.resend)[':activityId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksResendActivityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks.resend)[':activityId']['$post']>,
    ) {
      return parseResponse(client.webhooks.resend[':activityId'].$post(args, options))
    },
  })
}

export function injectPostWebhooksResendActivityId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks.resend)[':activityId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks.resend)[':activityId']['$post']>,
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
    const mutationDefaults = getPostWebhooksResendActivityIdMutationOptions<
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

export function getWebhooksIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks/:id', keyArgs] as const
}

export function getWebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.webhooks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdQueryKey>
  >({
    queryKey: getWebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function getDeleteWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>) {
      return parseResponse(client.webhooks[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'PATCH'] as const
}

export function getPatchWebhooksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$patch']>) {
      return parseResponse(client.webhooks[':id'].$patch(args, options))
    },
  })
}

export function injectPatchWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['$patch']>,
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
    const mutationDefaults = getPatchWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
