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

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getBalanceKey() {
  return ['balance'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getHooksKey() {
  return ['hooks'] as const
}

export function getLookupKey() {
  return ['lookup'] as const
}

export function getPricingKey() {
  return ['pricing'] as const
}

export function getSmsKey() {
  return ['sms'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getValidateForVoiceKey() {
  return ['validate_for_voice'] as const
}

export function getVoiceKey() {
  return ['voice'] as const
}

export function getAnalyticsQueryKey(args: InferRequestType<typeof client.analytics.$get>) {
  return ['analytics', '/analytics', args] as const
}

export function getAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analytics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnalyticsQueryKey>
  >({
    queryKey: getAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBalanceQueryKey() {
  return ['balance', '/balance'] as const
}

export function getBalanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBalanceQueryKey>
  >({
    queryKey: getBalanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBalanceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function createPostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.$post>,
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
    const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHooksQueryKey(args: InferRequestType<typeof client.hooks.$get>) {
  return ['hooks', '/hooks', args] as const
}

export function getHooksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHooksQueryKey>
  >({
    queryKey: getHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHooksMutationKey() {
  return ['hooks', '/hooks', 'POST'] as const
}

export function getPostHooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.hooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hooks.$post>) {
      return parseResponse(client.hooks.$post(args, options))
    },
  })
}

export function createPostHooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$post>>>>>,
        TError,
        InferRequestType<typeof client.hooks.$post>,
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
    const mutationDefaults = getPostHooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLookupMutationKey() {
  return ['lookup', '/lookup', 'POST'] as const
}

export function getPostLookupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.$post>>>>>,
    TError,
    InferRequestType<typeof client.lookup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.$post>) {
      return parseResponse(client.lookup.$post(args, options))
    },
  })
}

export function createPostLookup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.$post>>>>>,
        TError,
        InferRequestType<typeof client.lookup.$post>,
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
    const mutationDefaults = getPostLookupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLookupCnamMutationKey() {
  return ['lookup', '/lookup/cnam', 'POST'] as const
}

export function getPostLookupCnamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.cnam.$post>>>>>,
    TError,
    InferRequestType<typeof client.lookup.cnam.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupCnamMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.cnam.$post>) {
      return parseResponse(client.lookup.cnam.$post(args, options))
    },
  })
}

export function createPostLookupCnam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.cnam.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.lookup.cnam.$post>,
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
    const mutationDefaults = getPostLookupCnamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLookupFormatMutationKey() {
  return ['lookup', '/lookup/format', 'POST'] as const
}

export function getPostLookupFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.format.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lookup.format.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupFormatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.format.$post>) {
      return parseResponse(client.lookup.format.$post(args, options))
    },
  })
}

export function createPostLookupFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.format.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.lookup.format.$post>,
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
    const mutationDefaults = getPostLookupFormatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLookupHlrMutationKey() {
  return ['lookup', '/lookup/hlr', 'POST'] as const
}

export function getPostLookupHlrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.hlr.$post>>>>>,
    TError,
    InferRequestType<typeof client.lookup.hlr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupHlrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.hlr.$post>) {
      return parseResponse(client.lookup.hlr.$post(args, options))
    },
  })
}

export function createPostLookupHlr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.hlr.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.lookup.hlr.$post>,
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
    const mutationDefaults = getPostLookupHlrMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLookupMnpMutationKey() {
  return ['lookup', '/lookup/mnp', 'POST'] as const
}

export function getPostLookupMnpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.mnp.$post>>>>>,
    TError,
    InferRequestType<typeof client.lookup.mnp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupMnpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.mnp.$post>) {
      return parseResponse(client.lookup.mnp.$post(args, options))
    },
  })
}

export function createPostLookupMnp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.mnp.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.lookup.mnp.$post>,
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
    const mutationDefaults = getPostLookupMnpMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPricingQueryKey(args: InferRequestType<typeof client.pricing.$get>) {
  return ['pricing', '/pricing', args] as const
}

export function getPricingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pricing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPricingQueryKey>
  >({
    queryKey: getPricingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pricing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPricingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPricingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSmsMutationKey() {
  return ['sms', '/sms', 'POST'] as const
}

export function getPostSmsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
    TError,
    InferRequestType<typeof client.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.$post>) {
      return parseResponse(client.sms.$post(args, options))
    },
  })
}

export function createPostSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
        TError,
        InferRequestType<typeof client.sms.$post>,
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
    const mutationDefaults = getPostSmsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatusQueryKey(args: InferRequestType<typeof client.status.$get>) {
  return ['status', '/status', args] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostValidateForVoiceMutationKey() {
  return ['validate_for_voice', '/validate_for_voice', 'POST'] as const
}

export function getPostValidateForVoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate_for_voice.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.validate_for_voice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateForVoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validate_for_voice.$post>) {
      return parseResponse(client.validate_for_voice.$post(args, options))
    },
  })
}

export function createPostValidateForVoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.validate_for_voice.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.validate_for_voice.$post>,
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
    const mutationDefaults = getPostValidateForVoiceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostVoiceMutationKey() {
  return ['voice', '/voice', 'POST'] as const
}

export function getPostVoiceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.$post>>>>>,
    TError,
    InferRequestType<typeof client.voice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.voice.$post>) {
      return parseResponse(client.voice.$post(args, options))
    },
  })
}

export function createPostVoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.$post>>>>>,
        TError,
        InferRequestType<typeof client.voice.$post>,
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
    const mutationDefaults = getPostVoiceMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
