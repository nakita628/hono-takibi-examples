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

export function getAppidAppIdKey() {
  return ['appid-<appId>'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getRecipeKey() {
  return ['recipe'] as const
}

export function getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/accountlinking/user/primary/check',
    keyArgs,
  ] as const
}

export function getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.accountlinking.user.primary.check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeAccountlinkingUserPrimaryCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.accountlinking.user.primary.check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/link/check', keyArgs] as const
}

export function getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.accountlinking.user.link.check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeAccountlinkingUserLinkCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.accountlinking.user.link.check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeAccountlinkingUserPrimaryMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/primary', 'POST'] as const
}

export function getPostAppidAppIdRecipeAccountlinkingUserPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeAccountlinkingUserPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.accountlinking.user.primary.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdRecipeAccountlinkingUserPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeAccountlinkingUserPrimaryMutationOptions<
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

export function getPostAppidAppIdRecipeAccountlinkingUserLinkMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/link', 'POST'] as const
}

export function getPostAppidAppIdRecipeAccountlinkingUserLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeAccountlinkingUserLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.accountlinking.user.link.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdRecipeAccountlinkingUserLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeAccountlinkingUserLinkMutationOptions<
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

export function getPostAppidAppIdRecipeAccountlinkingUserUnlinkMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/unlink', 'POST'] as const
}

export function getPostAppidAppIdRecipeAccountlinkingUserUnlinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeAccountlinkingUserUnlinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.accountlinking.user.unlink.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdRecipeAccountlinkingUserUnlink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeAccountlinkingUserUnlinkMutationOptions<
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

export function getPutAppidAppIdRecipeTotpDeviceMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device', 'PUT'] as const
}

export function getPutAppidAppIdRecipeTotpDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeTotpDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.totp.device.$put(args, options))
    },
  })
}

export function usePutAppidAppIdRecipeTotpDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>,
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
  const mutationDefaults = getPutAppidAppIdRecipeTotpDeviceMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppidAppIdRecipeTotpDeviceMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device', 'POST'] as const
}

export function getPostAppidAppIdRecipeTotpDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeTotpDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.totp.device.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeTotpDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>,
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
  const mutationDefaults = getPostAppidAppIdRecipeTotpDeviceMutationOptions<
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

export function getAppidAppIdRecipeTotpDeviceListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device/list', keyArgs] as const
}

export function getAppidAppIdRecipeTotpDeviceListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeTotpDeviceListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.totp.device.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeTotpDeviceList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']>
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
                    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeTotpDeviceListQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeTotpDeviceListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeTotpDeviceListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.totp.device.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipeTotpDeviceImportMutationKey() {
  return ['recipe', '/recipe/totp/device/import', 'POST'] as const
}

export function getPostRecipeTotpDeviceImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.totp.device.import.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.totp.device.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeTotpDeviceImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.totp.device.import.$post>) {
      return parseResponse(client.recipe.totp.device.import.$post(args, options))
    },
  })
}

export function usePostRecipeTotpDeviceImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.totp.device.import.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.totp.device.import.$post>,
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
  const mutationDefaults = getPostRecipeTotpDeviceImportMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppidAppIdRecipeTotpDeviceRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeTotpDeviceRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeTotpDeviceRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.totp.device.remove.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeTotpDeviceRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeTotpDeviceRemoveMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeTotpVerifyMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/totp/verify', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeTotpVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeTotpVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.totp.verify.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeTotpVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeTotpVerifyMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeTotpDeviceVerifyMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/totp/device/verify', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeTotpDeviceVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeTotpDeviceVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.totp.device.verify.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeTotpDeviceVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeTotpDeviceVerifyMutationOptions<
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

export function getAppidAppIdRecipeUseridMapQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/map', keyArgs] as const
}

export function getAppidAppIdRecipeUseridMapQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeUseridMapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.userid.map.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeUseridMap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeUseridMapQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeUseridMapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeUseridMapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.userid.map.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeUseridMapMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/map', 'POST'] as const
}

export function getPostAppidAppIdRecipeUseridMapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeUseridMapMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.userid.map.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeUseridMap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>,
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
  const mutationDefaults = getPostAppidAppIdRecipeUseridMapMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppidAppIdRecipeUseridMapRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/map/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeUseridMapRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeUseridMapRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.userid.map.remove.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeUseridMapRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeUseridMapRemoveMutationOptions<
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

export function getPutAppidAppIdRecipeUseridExternalUserIdInfoMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/external-user-id-info', 'PUT'] as const
}

export function getPutAppidAppIdRecipeUseridExternalUserIdInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeUseridExternalUserIdInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.userid['external-user-id-info'].$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeUseridExternalUserIdInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeUseridExternalUserIdInfoMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeSigninupCodeCheckMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/code/check', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSigninupCodeCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.code.check.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodeCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeCheckMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeSigninupCodeConsumeMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/signinup/code/consume',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeConsumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSigninupCodeConsumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.code.consume.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodeConsume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeConsumeMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeSigninupCodeMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/code', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSigninupCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.code.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSigninupCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeSigninupCodeRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/code/remove', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSigninupCodeRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.code.remove.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodeRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeRemoveMutationOptions<
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

export function getAppidAppIdTenantIdRecipeSigninupCodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/codes', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeSigninupCodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeSigninupCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeSigninupCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeSigninupCodesQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeSigninupCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeSigninupCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodesRemoveMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/signinup/codes/remove',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodesRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSigninupCodesRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.remove.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodesRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodesRemoveMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀⠀', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeUserQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdTenantIdRecipeUserMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀⠀', 'PUT'] as const
}

export function getPutAppidAppIdTenantIdRecipeUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdTenantIdRecipeUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdTenantIdRecipeUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']
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
  const mutationDefaults = getPutAppidAppIdTenantIdRecipeUserMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeSigninMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signin', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSigninMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSigninMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>']['<tenantId>'].recipe.signin.$post(args, options))
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSignin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeSignupMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signup', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSignupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>']['<tenantId>'].recipe.signup.$post(args, options))
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSignup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSignupMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUser2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUser2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeUser2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeUser2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeUser2QueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeUser2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeUser2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdTenantIdRecipeUser2MutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user', 'PUT'] as const
}

export function getPutAppidAppIdTenantIdRecipeUser2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdTenantIdRecipeUser2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']
      >,
    ) {
      return parseResponse(client['appid-<appId>']['<tenantId>'].recipe.user.$put(args, options))
    },
  })
}

export function usePutAppidAppIdTenantIdRecipeUser2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']
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
  const mutationDefaults = getPutAppidAppIdTenantIdRecipeUser2MutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/password/reset/token',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.token.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordResetToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/password/reset', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserPasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserPasswordResetMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeUserPasswordhashImportMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/passwordhash/import',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordhashImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserPasswordhashImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.passwordhash.import.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordhashImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserPasswordhashImportMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/password/reset/token/consume',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.token.consume.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
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
  const mutationDefaults =
    getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeSigninupMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSigninupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSigninupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSigninup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUser3QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUser3QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeUser3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe['user⠀'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeUser3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeUser3QueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeUser3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeUser3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe['user⠀'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdRecipeUsersByEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/users/by-email', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUsersByEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeUsersByEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.users['by-email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeUsersByEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeUsersByEmailQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeUsersByEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeUsersByEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.users['by-email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/email/verify/token',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.token.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserEmailVerifyToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/email/verify/token/remove',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.token.remove.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/email/verify', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserEmailVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserEmailVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserEmailVerifyMutationOptions<
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

export function getAppidAppIdRecipeUserEmailVerifyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/user/email/verify', keyArgs] as const
}

export function getAppidAppIdRecipeUserEmailVerifyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeUserEmailVerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.user.email.verify.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeUserEmailVerify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']>
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
                    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeUserEmailVerifyQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeUserEmailVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeUserEmailVerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.user.email.verify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeUserEmailVerifyRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/user/email/verify/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeUserEmailVerifyRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeUserEmailVerifyRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.user.email.verify.remove.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdRecipeUserEmailVerifyRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeUserEmailVerifyRemoveMutationOptions<
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

export function getAppidAppIdRecipeUserMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/user/metadata', keyArgs] as const
}

export function getAppidAppIdRecipeUserMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeUserMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.user.metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeUserMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeUserMetadataQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeUserMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeUserMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.user.metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdRecipeUserMetadataMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/user/metadata', 'PUT'] as const
}

export function getPutAppidAppIdRecipeUserMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeUserMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.user.metadata.$put(args, options))
    },
  })
}

export function usePutAppidAppIdRecipeUserMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']>,
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
  const mutationDefaults = getPutAppidAppIdRecipeUserMetadataMutationOptions<
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

export function getPostAppidAppIdRecipeUserMetadataRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/user/metadata/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeUserMetadataRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeUserMetadataRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.user.metadata.remove.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeUserMetadataRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeUserMetadataRemoveMutationOptions<
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

export function getPutAppidAppIdTenantIdRecipeUserRoleMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/role', 'PUT'] as const
}

export function getPutAppidAppIdTenantIdRecipeUserRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdTenantIdRecipeUserRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.role.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdTenantIdRecipeUserRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
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
  const mutationDefaults = getPutAppidAppIdTenantIdRecipeUserRoleMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeUserRoleRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/role/remove', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeUserRoleRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeUserRoleRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.role.remove.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeUserRoleRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserRoleRemoveMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUserRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/roles', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUserRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeUserRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeUserRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeUserRolesQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeUserRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeUserRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdRecipeRoleUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/role/users', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeRoleUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeRoleUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.role.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeRoleUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeRoleUsersQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeRoleUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeRoleUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.role.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdRecipeRoleMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/role', 'PUT'] as const
}

export function getPutAppidAppIdRecipeRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.role.$put(args, options))
    },
  })
}

export function usePutAppidAppIdRecipeRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>,
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
  const mutationDefaults = getPutAppidAppIdRecipeRoleMutationOptions<TError, TOnMutateResult>(
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

export function getAppidAppIdRecipeRolePermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/role/permissions', keyArgs] as const
}

export function getAppidAppIdRecipeRolePermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeRolePermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.role.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeRolePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
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
                    (typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeRolePermissionsQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeRolePermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeRolePermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.role.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeRolePermissionsRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/role/permissions/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeRolePermissionsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeRolePermissionsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.role.permissions.remove.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdRecipeRolePermissionsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeRolePermissionsRemoveMutationOptions<
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

export function getAppidAppIdRecipePermissionRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/permission/roles', keyArgs] as const
}

export function getAppidAppIdRecipePermissionRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipePermissionRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.permission.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipePermissionRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
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
                    (typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipePermissionRolesQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipePermissionRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipePermissionRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.permission.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeRoleRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/role/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeRoleRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeRoleRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.role.remove.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeRoleRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>,
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
  const mutationDefaults = getPostAppidAppIdRecipeRoleRemoveMutationOptions<
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

export function getAppidAppIdRecipeRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/roles', keyArgs] as const
}

export function getAppidAppIdRecipeRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeRolesQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdTenantIdRecipeSessionMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/session', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.session.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSessionMutationOptions<
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

export function getAppidAppIdRecipeSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/session', keyArgs] as const
}

export function getAppidAppIdRecipeSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.session.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeSessionQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.session.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdTenantIdRecipeSessionRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/session/remove', 'POST'] as const
}

export function getPostAppidAppIdTenantIdRecipeSessionRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeSessionRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.session.remove.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeSessionRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeSessionRemoveMutationOptions<
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

export function getPostAppidAppIdRecipeSessionVerifyMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/verify', 'POST'] as const
}

export function getPostAppidAppIdRecipeSessionVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeSessionVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.session.verify.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeSessionVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeSessionVerifyMutationOptions<
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

export function getPostAppidAppIdRecipeSessionRefreshMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/refresh', 'POST'] as const
}

export function getPostAppidAppIdRecipeSessionRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeSessionRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.session.refresh.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeSessionRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeSessionRefreshMutationOptions<
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

export function getAppidAppIdTenantIdRecipeSessionUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/session/user', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeSessionUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeSessionUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.session.user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeSessionUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeSessionUserQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeSessionUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeSessionUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.session.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeSessionRegenerateMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/regenerate', 'POST'] as const
}

export function getPostAppidAppIdRecipeSessionRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeSessionRegenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.session.regenerate.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeSessionRegenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeSessionRegenerateMutationOptions<
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

export function getAppidAppIdRecipeSessionDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/session/data', keyArgs] as const
}

export function getAppidAppIdRecipeSessionDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeSessionDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.session.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeSessionData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeSessionDataQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeSessionDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeSessionDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.session.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdRecipeSessionDataMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/data', 'PUT'] as const
}

export function getPutAppidAppIdRecipeSessionDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeSessionDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.session.data.$put(args, options))
    },
  })
}

export function usePutAppidAppIdRecipeSessionData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>,
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
  const mutationDefaults = getPutAppidAppIdRecipeSessionDataMutationOptions<
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

export function getPostAppidAppIdRecipeJwtMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/jwt', 'POST'] as const
}

export function getPostAppidAppIdRecipeJwtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeJwtMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.jwt.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>,
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
  const mutationDefaults = getPostAppidAppIdRecipeJwtMutationOptions<TError, TOnMutateResult>(
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

export function getAppidAppIdRecipeJwtJwksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/jwt/jwks', keyArgs] as const
}

export function getAppidAppIdRecipeJwtJwksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeJwtJwksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.jwt.jwks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeJwtJwks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeJwtJwksQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeJwtJwksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeJwtJwksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.jwt.jwks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdWellKnownJwksJsonQueryKey() {
  return ['appid-<appId>', '/appid-<appId>/.well-known/jwks.json'] as const
}

export function getAppidAppIdWellKnownJwksJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppidAppIdWellKnownJwksJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['.well-known']['jwks.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdWellKnownJwksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdWellKnownJwksJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdWellKnownJwksJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppidAppIdWellKnownJwksJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['.well-known']['jwks.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdRecipeJwtDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/jwt/data', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeJwtDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeJwtDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeJwtData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeJwtDataQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeJwtDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeJwtDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdTenantIdRecipeJwtDataMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/jwt/data', 'PUT'] as const
}

export function getPutAppidAppIdTenantIdRecipeJwtDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdTenantIdRecipeJwtDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdTenantIdRecipeJwtData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
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
  const mutationDefaults = getPutAppidAppIdTenantIdRecipeJwtDataMutationOptions<
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

export function getPutAppidAppIdRecipeDashboardUserMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user', 'PUT'] as const
}

export function getPutAppidAppIdRecipeDashboardUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeDashboardUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.dashboard.user.$put(args, options))
    },
  })
}

export function usePutAppidAppIdRecipeDashboardUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']>,
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
  const mutationDefaults = getPutAppidAppIdRecipeDashboardUserMutationOptions<
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

export function getPostAppidAppIdRecipeDashboardUserMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user', 'POST'] as const
}

export function getPostAppidAppIdRecipeDashboardUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeDashboardUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.dashboard.user.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeDashboardUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeDashboardUserMutationOptions<
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

export function getDeleteAppidAppIdRecipeDashboardUserMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user', 'DELETE'] as const
}

export function getDeleteAppidAppIdRecipeDashboardUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppidAppIdRecipeDashboardUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.dashboard.user.$delete(args, options))
    },
  })
}

export function useDeleteAppidAppIdRecipeDashboardUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']
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
  const mutationDefaults = getDeleteAppidAppIdRecipeDashboardUserMutationOptions<
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

export function getAppidAppIdRecipeDashboardUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/users', keyArgs] as const
}

export function getAppidAppIdRecipeDashboardUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeDashboardUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.dashboard.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeDashboardUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
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
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeDashboardUsersQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeDashboardUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeDashboardUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.dashboard.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeDashboardSessionVerifyMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/session/verify', 'POST'] as const
}

export function getPostAppidAppIdRecipeDashboardSessionVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeDashboardSessionVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.dashboard.session.verify.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdRecipeDashboardSessionVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeDashboardSessionVerifyMutationOptions<
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

export function getDeleteAppidAppIdRecipeDashboardSessionMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/session', 'DELETE'] as const
}

export function getDeleteAppidAppIdRecipeDashboardSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppidAppIdRecipeDashboardSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.dashboard.session.$delete(args, options))
    },
  })
}

export function useDeleteAppidAppIdRecipeDashboardSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']
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
  const mutationDefaults = getDeleteAppidAppIdRecipeDashboardSessionMutationOptions<
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

export function getPostAppidAppIdRecipeDashboardSigninMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/signin', 'POST'] as const
}

export function getPostAppidAppIdRecipeDashboardSigninMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeDashboardSigninMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.dashboard.signin.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeDashboardSignin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeDashboardSigninMutationOptions<
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

export function getAppidAppIdRecipeDashboardUserSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user/sessions', keyArgs] as const
}

export function getAppidAppIdRecipeDashboardUserSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeDashboardUserSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.dashboard.user.sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeDashboardUserSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeDashboardUserSessionsQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeDashboardUserSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeDashboardUserSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.dashboard.user.sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdApiversionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/apiversion', keyArgs] as const
}

export function getAppidAppIdApiversionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdApiversionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].apiversion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdApiversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdApiversionQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdApiversionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdApiversionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].apiversion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['config', '/config', keyArgs] as const
}

export function getConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdIndexQueryKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/'] as const
}

export function getAppidAppIdTenantIdIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppidAppIdTenantIdIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppidAppIdTenantIdIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdHelloQueryKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello'] as const
}

export function getAppidAppIdTenantIdHelloQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppidAppIdTenantIdHelloQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].hello.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdHello<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdHelloQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdHelloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppidAppIdTenantIdHelloQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].hello.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdTenantIdHelloMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello', 'PUT'] as const
}

export function getPutAppidAppIdTenantIdHelloMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$put']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdTenantIdHelloMutationKey(),
    async mutationFn() {
      return parseResponse(client['appid-<appId>']['<tenantId>'].hello.$put(undefined, options))
    },
  })
}

export function usePutAppidAppIdTenantIdHello<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$put']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutAppidAppIdTenantIdHelloMutationOptions<TError, TOnMutateResult>(
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

export function getPostAppidAppIdTenantIdHelloMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello', 'POST'] as const
}

export function getPostAppidAppIdTenantIdHelloMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdHelloMutationKey(),
    async mutationFn() {
      return parseResponse(client['appid-<appId>']['<tenantId>'].hello.$post(undefined, options))
    },
  })
}

export function usePostAppidAppIdTenantIdHello<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$post']>
                >
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAppidAppIdTenantIdHelloMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppidAppIdTenantIdHelloMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello', 'DELETE'] as const
}

export function getDeleteAppidAppIdTenantIdHelloMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppidAppIdTenantIdHelloMutationKey(),
    async mutationFn() {
      return parseResponse(client['appid-<appId>']['<tenantId>'].hello.$delete(undefined, options))
    },
  })
}

export function useDeleteAppidAppIdTenantIdHello<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$delete']>
                >
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteAppidAppIdTenantIdHelloMutationOptions<TError, TOnMutateResult>(
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

export function getAppidAppIdTelemetryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/telemetry', keyArgs] as const
}

export function getAppidAppIdTelemetryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTelemetryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].telemetry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTelemetry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTelemetryQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTelemetryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTelemetryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].telemetry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdUsersCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users/count', keyArgs] as const
}

export function getAppidAppIdTenantIdUsersCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdUsersCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].users.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdUsersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
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
                    (typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdUsersCountQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdUsersCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdUsersCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].users.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdUsersCountActiveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/users/count/active', keyArgs] as const
}

export function getAppidAppIdUsersCountActiveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdUsersCountActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].users.count.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdUsersCountActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdUsersCountActiveQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdUsersCountActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdUsersCountActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].users.count.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users', keyArgs] as const
}

export function getAppidAppIdTenantIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdUserRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/user/remove', 'POST'] as const
}

export function getPostAppidAppIdUserRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['user']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdUserRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['user']['remove']['$post']>,
    ) {
      return parseResponse(client['appid-<appId>'].user.remove.$post(args, options))
    },
  })
}

export function usePostAppidAppIdUserRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['remove']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['user']['remove']['$post']>,
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
  const mutationDefaults = getPostAppidAppIdUserRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getAppidAppIdUserSearchTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/user/search/tags', keyArgs] as const
}

export function getAppidAppIdUserSearchTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdUserSearchTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].user.search.tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdUserSearchTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdUserSearchTagsQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdUserSearchTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdUserSearchTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].user.search.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdEeFeatureflagQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/ee/featureflag', keyArgs] as const
}

export function getAppidAppIdEeFeatureflagQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdEeFeatureflagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].ee.featureflag.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdEeFeatureflag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdEeFeatureflagQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdEeFeatureflagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdEeFeatureflagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].ee.featureflag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdEeLicenseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/ee/license', keyArgs] as const
}

export function getAppidAppIdEeLicenseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdEeLicenseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].ee.license.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdEeLicense<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdEeLicenseQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdEeLicenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdEeLicenseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].ee.license.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdEeLicenseMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/ee/license', 'PUT'] as const
}

export function getPutAppidAppIdEeLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdEeLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$put']>,
    ) {
      return parseResponse(client['appid-<appId>'].ee.license.$put(args, options))
    },
  })
}

export function usePutAppidAppIdEeLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$put']>,
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
  const mutationDefaults = getPutAppidAppIdEeLicenseMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppidAppIdEeLicenseMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/ee/license', 'DELETE'] as const
}

export function getDeleteAppidAppIdEeLicenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppidAppIdEeLicenseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>,
    ) {
      return parseResponse(client['appid-<appId>'].ee.license.$delete(args, options))
    },
  })
}

export function useDeleteAppidAppIdEeLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>,
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
  const mutationDefaults = getDeleteAppidAppIdEeLicenseMutationOptions<TError, TOnMutateResult>(
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

export function getAppidAppIdUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/user/id', keyArgs] as const
}

export function getAppidAppIdUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].user.id.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].user.id.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdUsersByAccountinfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users/by-accountinfo', keyArgs] as const
}

export function getAppidAppIdTenantIdUsersByAccountinfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdUsersByAccountinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].users['by-accountinfo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdUsersByAccountinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdUsersByAccountinfoQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdUsersByAccountinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdUsersByAccountinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].users['by-accountinfo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdRequestsStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/requests/stats', keyArgs] as const
}

export function getAppidAppIdRequestsStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRequestsStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].requests.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRequestsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRequestsStatsQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRequestsStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRequestsStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].requests.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRecipeMultitenancyConnectionuridomainMutationKey() {
  return ['recipe', '/recipe/multitenancy/connectionuridomain', 'PUT'] as const
}

export function getPutRecipeMultitenancyConnectionuridomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeMultitenancyConnectionuridomainMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.$put>,
    ) {
      return parseResponse(client.recipe.multitenancy.connectionuridomain.$put(args, options))
    },
  })
}

export function usePutRecipeMultitenancyConnectionuridomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.$put>,
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
  const mutationDefaults = getPutRecipeMultitenancyConnectionuridomainMutationOptions<
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

export function getPutRecipeMultitenancyConnectionuridomainV2MutationKey() {
  return ['recipe', '/recipe/multitenancy/connectionuridomain/v2', 'PUT'] as const
}

export function getPutRecipeMultitenancyConnectionuridomainV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeMultitenancyConnectionuridomainV2MutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>,
    ) {
      return parseResponse(client.recipe.multitenancy.connectionuridomain.v2.$put(args, options))
    },
  })
}

export function usePutRecipeMultitenancyConnectionuridomainV2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>,
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
  const mutationDefaults = getPutRecipeMultitenancyConnectionuridomainV2MutationOptions<
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

export function getPostRecipeMultitenancyConnectionuridomainRemoveMutationKey() {
  return ['recipe', '/recipe/multitenancy/connectionuridomain/remove', 'POST'] as const
}

export function getPostRecipeMultitenancyConnectionuridomainRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeMultitenancyConnectionuridomainRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>,
    ) {
      return parseResponse(
        client.recipe.multitenancy.connectionuridomain.remove.$post(args, options),
      )
    },
  })
}

export function usePostRecipeMultitenancyConnectionuridomainRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>,
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
  const mutationDefaults = getPostRecipeMultitenancyConnectionuridomainRemoveMutationOptions<
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

export function getRecipeMultitenancyConnectionuridomainListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipe', '/recipe/multitenancy/connectionuridomain/list', keyArgs] as const
}

export function getRecipeMultitenancyConnectionuridomainListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeMultitenancyConnectionuridomainListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.multitenancy.connectionuridomain.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeMultitenancyConnectionuridomainList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
              >
            >
          >,
          ReturnType<typeof getRecipeMultitenancyConnectionuridomainListQueryKey>
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
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeMultitenancyConnectionuridomainListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeMultitenancyConnectionuridomainListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.multitenancy.connectionuridomain.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeMultitenancyConnectionuridomainListV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipe', '/recipe/multitenancy/connectionuridomain/list/v2', keyArgs] as const
}

export function getRecipeMultitenancyConnectionuridomainListV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeMultitenancyConnectionuridomainListV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.multitenancy.connectionuridomain.list.v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeMultitenancyConnectionuridomainListV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>
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
                  ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>
                >
              >
            >
          >,
          ReturnType<typeof getRecipeMultitenancyConnectionuridomainListV2QueryKey>
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
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeMultitenancyConnectionuridomainListV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeMultitenancyConnectionuridomainListV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.multitenancy.connectionuridomain.list.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRecipeMultitenancyAppMutationKey() {
  return ['recipe', '/recipe/multitenancy/app', 'PUT'] as const
}

export function getPutRecipeMultitenancyAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.multitenancy.app.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeMultitenancyAppMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.multitenancy.app.$put>) {
      return parseResponse(client.recipe.multitenancy.app.$put(args, options))
    },
  })
}

export function usePutRecipeMultitenancyApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.multitenancy.app.$put>,
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
  const mutationDefaults = getPutRecipeMultitenancyAppMutationOptions<TError, TOnMutateResult>(
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

export function getPutRecipeMultitenancyAppV2MutationKey() {
  return ['recipe', '/recipe/multitenancy/app/v2', 'PUT'] as const
}

export function getPutRecipeMultitenancyAppV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.v2.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.multitenancy.app.v2.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeMultitenancyAppV2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.multitenancy.app.v2.$put>) {
      return parseResponse(client.recipe.multitenancy.app.v2.$put(args, options))
    },
  })
}

export function usePutRecipeMultitenancyAppV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.app.v2.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.multitenancy.app.v2.$put>,
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
  const mutationDefaults = getPutRecipeMultitenancyAppV2MutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipeMultitenancyAppRemoveMutationKey() {
  return ['recipe', '/recipe/multitenancy/app/remove', 'POST'] as const
}

export function getPostRecipeMultitenancyAppRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.app.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.recipe.multitenancy.app.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeMultitenancyAppRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipe.multitenancy.app.remove.$post>) {
      return parseResponse(client.recipe.multitenancy.app.remove.$post(args, options))
    },
  })
}

export function usePostRecipeMultitenancyAppRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.app.remove.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.recipe.multitenancy.app.remove.$post>,
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
  const mutationDefaults = getPostRecipeMultitenancyAppRemoveMutationOptions<
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

export function getRecipeMultitenancyAppListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.multitenancy.app.list.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipe', '/recipe/multitenancy/app/list', keyArgs] as const
}

export function getRecipeMultitenancyAppListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.multitenancy.app.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeMultitenancyAppListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.multitenancy.app.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeMultitenancyAppList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.multitenancy.app.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>
              >
            >
          >,
          ReturnType<typeof getRecipeMultitenancyAppListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeMultitenancyAppListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeMultitenancyAppListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.multitenancy.app.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeMultitenancyAppListV2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipe', '/recipe/multitenancy/app/list/v2', keyArgs] as const
}

export function getRecipeMultitenancyAppListV2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeMultitenancyAppListV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipe.multitenancy.app.list.v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeMultitenancyAppListV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>
              >
            >
          >,
          ReturnType<typeof getRecipeMultitenancyAppListV2QueryKey>
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
          Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeMultitenancyAppListV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeMultitenancyAppListV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipe.multitenancy.app.list.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdRecipeMultitenancyTenantMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant', 'PUT'] as const
}

export function getPutAppidAppIdRecipeMultitenancyTenantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeMultitenancyTenantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.multitenancy.tenant.$put(args, options))
    },
  })
}

export function usePutAppidAppIdRecipeMultitenancyTenant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeMultitenancyTenantMutationOptions<
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

export function getPutAppidAppIdRecipeMultitenancyTenantV2MutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/v2', 'PUT'] as const
}

export function getPutAppidAppIdRecipeMultitenancyTenantV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeMultitenancyTenantV2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.multitenancy.tenant.v2.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeMultitenancyTenantV2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeMultitenancyTenantV2MutationOptions<
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

export function getAppidAppIdTenantIdRecipeMultitenancyTenantQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeMultitenancyTenantQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeMultitenancyTenantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeMultitenancyTenant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeMultitenancyTenantQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeMultitenancyTenantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeMultitenancyTenantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/v2',
    keyArgs,
  ] as const
}

export function getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeMultitenancyTenantV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/dashboard/tenant/core-config',
    keyArgs,
  ] as const
}

export function getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.dashboard.tenant['core-config'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAppidAppIdTenantIdRecipeDashboardTenantCoreConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
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
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryKey>
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
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.dashboard.tenant['core-config'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeMultitenancyTenantRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeMultitenancyTenantRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeMultitenancyTenantRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.multitenancy.tenant.remove.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdRecipeMultitenancyTenantRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeMultitenancyTenantRemoveMutationOptions<
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

export function getAppidAppIdRecipeMultitenancyTenantListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/list', keyArgs] as const
}

export function getAppidAppIdRecipeMultitenancyTenantListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeMultitenancyTenantListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.multitenancy.tenant.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeMultitenancyTenantList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeMultitenancyTenantListQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeMultitenancyTenantListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeMultitenancyTenantListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.multitenancy.tenant.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppidAppIdRecipeMultitenancyTenantListV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/list/v2', keyArgs] as const
}

export function getAppidAppIdRecipeMultitenancyTenantListV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeMultitenancyTenantListV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.multitenancy.tenant.list.v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeMultitenancyTenantListV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeMultitenancyTenantListV2QueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeMultitenancyTenantListV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeMultitenancyTenantListV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.multitenancy.tenant.list.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty',
    'PUT',
  ] as const
}

export function getPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.config.thirdparty.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAppidAppIdTenantIdRecipeMultitenancyConfigThirdparty<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
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
  const mutationDefaults =
    getPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty/remove',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.config.thirdparty.remove.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
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
  const mutationDefaults =
    getPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.user.$post(args, options),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeMultitenancyTenantUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
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
  const mutationDefaults = getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserMutationOptions<
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

export function getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user/remove',
    'POST',
  ] as const
}

export function getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.user.remove.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
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
  const mutationDefaults =
    getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveMutationOptions<
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

export function getAppidAppIdRecipeOauthClientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients', keyArgs] as const
}

export function getAppidAppIdRecipeOauthClientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeOauthClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeOauthClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeOauthClientsQueryKey>
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
            ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeOauthClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeOauthClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.oauth.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdRecipeOauthClientsMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients', 'PUT'] as const
}

export function getPutAppidAppIdRecipeOauthClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeOauthClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.clients.$put(args, options))
    },
  })
}

export function usePutAppidAppIdRecipeOauthClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']>,
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
  const mutationDefaults = getPutAppidAppIdRecipeOauthClientsMutationOptions<
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

export function getPostAppidAppIdRecipeOauthClientsMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients', 'POST'] as const
}

export function getPostAppidAppIdRecipeOauthClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeOauthClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.clients.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeOauthClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']>,
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
  const mutationDefaults = getPostAppidAppIdRecipeOauthClientsMutationOptions<
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

export function getAppidAppIdRecipeOauthClientsListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients/list', keyArgs] as const
}

export function getAppidAppIdRecipeOauthClientsListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeOauthClientsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.clients.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeOauthClientsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']>
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeOauthClientsListQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeOauthClientsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeOauthClientsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.oauth.clients.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeOauthClientsRemoveMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients/remove', 'POST'] as const
}

export function getPostAppidAppIdRecipeOauthClientsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeOauthClientsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.clients.remove.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeOauthClientsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeOauthClientsRemoveMutationOptions<
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

export function getAppidAppIdRecipeOauthAuthRequestsConsentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/consent', keyArgs] as const
}

export function getAppidAppIdRecipeOauthAuthRequestsConsentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeOauthAuthRequestsConsentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.consent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeOauthAuthRequestsConsent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeOauthAuthRequestsConsentQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeOauthAuthRequestsConsentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeOauthAuthRequestsConsentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.consent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdRecipeOauthAuthRequestsConsentAcceptMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/consent/accept',
    'PUT',
  ] as const
}

export function getPutAppidAppIdRecipeOauthAuthRequestsConsentAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeOauthAuthRequestsConsentAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.consent.accept.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeOauthAuthRequestsConsentAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsConsentAcceptMutationOptions<
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

export function getPutAppidAppIdRecipeOauthAuthRequestsConsentRejectMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/consent/reject',
    'PUT',
  ] as const
}

export function getPutAppidAppIdRecipeOauthAuthRequestsConsentRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeOauthAuthRequestsConsentRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.consent.reject.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeOauthAuthRequestsConsentReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsConsentRejectMutationOptions<
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

export function getAppidAppIdRecipeOauthAuthRequestsLoginQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/login', keyArgs] as const
}

export function getAppidAppIdRecipeOauthAuthRequestsLoginQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeOauthAuthRequestsLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.login.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeOauthAuthRequestsLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeOauthAuthRequestsLoginQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeOauthAuthRequestsLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeOauthAuthRequestsLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLoginAcceptMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/login/accept', 'PUT'] as const
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLoginAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeOauthAuthRequestsLoginAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.login.accept.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLoginAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLoginAcceptMutationOptions<
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

export function getPutAppidAppIdRecipeOauthAuthRequestsLoginRejectMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/login/reject', 'PUT'] as const
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLoginRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeOauthAuthRequestsLoginRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.login.reject.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLoginReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLoginRejectMutationOptions<
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

export function getPutAppidAppIdRecipeOauthAuthRequestsLogoutAcceptMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/logout/accept',
    'PUT',
  ] as const
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLogoutAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeOauthAuthRequestsLogoutAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.logout.accept.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLogoutAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLogoutAcceptMutationOptions<
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

export function getPutAppidAppIdRecipeOauthAuthRequestsLogoutRejectMutationKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/logout/reject',
    'PUT',
  ] as const
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLogoutRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppidAppIdRecipeOauthAuthRequestsLogoutRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
      >,
    ) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.logout.reject.$put(args, options),
      )
    },
  })
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLogoutReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
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
  const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLogoutRejectMutationOptions<
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

export function getPostAppidAppIdRecipeOauthSessionRevokeMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/session/revoke', 'POST'] as const
}

export function getPostAppidAppIdRecipeOauthSessionRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeOauthSessionRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.session.revoke.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeOauthSessionRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeOauthSessionRevokeMutationOptions<
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

export function getPostAppidAppIdRecipeOauthTokenRevokeMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/token/revoke', 'POST'] as const
}

export function getPostAppidAppIdRecipeOauthTokenRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeOauthTokenRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.token.revoke.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeOauthTokenRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeOauthTokenRevokeMutationOptions<
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

export function getPostAppidAppIdRecipeOauthTokensRevokeMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/tokens/revoke', 'POST'] as const
}

export function getPostAppidAppIdRecipeOauthTokensRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeOauthTokensRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.tokens.revoke.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeOauthTokensRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeOauthTokensRevokeMutationOptions<
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

export function getAppidAppIdRecipeOauthAuthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth', keyArgs] as const
}

export function getAppidAppIdRecipeOauthAuthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeOauthAuthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeOauthAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>
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
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeOauthAuthQueryKey>
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
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeOauthAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeOauthAuthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeOauthTokenMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/token', 'POST'] as const
}

export function getPostAppidAppIdRecipeOauthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeOauthTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.token.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>,
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
  const mutationDefaults = getPostAppidAppIdRecipeOauthTokenMutationOptions<
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

export function getAppidAppIdRecipeOauthSessionsLogoutQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/sessions/logout', keyArgs] as const
}

export function getAppidAppIdRecipeOauthSessionsLogoutQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppidAppIdRecipeOauthSessionsLogoutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.sessions.logout.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppidAppIdRecipeOauthSessionsLogout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
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
                    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppidAppIdRecipeOauthSessionsLogoutQueryKey>
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
              (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppidAppIdRecipeOauthSessionsLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppidAppIdRecipeOauthSessionsLogoutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['appid-<appId>'].recipe.oauth.sessions.logout.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppidAppIdRecipeOauthIntrospectMutationKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/introspect', 'POST'] as const
}

export function getPostAppidAppIdRecipeOauthIntrospectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppidAppIdRecipeOauthIntrospectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']
      >,
    ) {
      return parseResponse(client['appid-<appId>'].recipe.oauth.introspect.$post(args, options))
    },
  })
}

export function usePostAppidAppIdRecipeOauthIntrospect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']
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
  const mutationDefaults = getPostAppidAppIdRecipeOauthIntrospectMutationOptions<
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
