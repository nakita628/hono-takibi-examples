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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/accountlinking/user/primary/check',
    keyArgs,
  ] as const
}

export function getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.accountlinking.user.primary.check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeAccountlinkingUserPrimaryCheck<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeAccountlinkingUserPrimaryCheckQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/link/check', keyArgs] as const
}

export function getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.accountlinking.user.link.check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeAccountlinkingUserLinkCheck<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeAccountlinkingUserLinkCheckQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeAccountlinkingUserPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeAccountlinkingUserPrimaryMutationOptions<
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

export function injectPostAppidAppIdRecipeAccountlinkingUserLink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeAccountlinkingUserLinkMutationOptions<
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

export function injectPostAppidAppIdRecipeAccountlinkingUserUnlink<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeAccountlinkingUserUnlinkMutationOptions<
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

export function injectPutAppidAppIdRecipeTotpDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeTotpDeviceMutationOptions<
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

export function injectPostAppidAppIdRecipeTotpDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeTotpDeviceMutationOptions<
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

export function getAppidAppIdRecipeTotpDeviceListQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device/list', keyArgs] as const
}

export function getAppidAppIdRecipeTotpDeviceListQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeTotpDeviceListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.totp.device.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeTotpDeviceList<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdRecipeTotpDeviceListQueryKey>
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
      ...getAppidAppIdRecipeTotpDeviceListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRecipeTotpDeviceImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipe.totp.device.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.recipe.totp.device.import.$post>,
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
    const mutationDefaults = getPostRecipeTotpDeviceImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeTotpDeviceRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeTotpDeviceRemoveMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeTotpVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeTotpVerifyMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeTotpDeviceVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeTotpDeviceVerifyMutationOptions<
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

export function getAppidAppIdRecipeUseridMapQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/map', keyArgs] as const
}

export function getAppidAppIdRecipeUseridMapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeUseridMapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.userid.map.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeUseridMap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdRecipeUseridMapQueryKey>
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
      ...getAppidAppIdRecipeUseridMapQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeUseridMap<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeUseridMapMutationOptions<
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

export function injectPostAppidAppIdRecipeUseridMapRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeUseridMapRemoveMutationOptions<
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

export function injectPutAppidAppIdRecipeUseridExternalUserIdInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeUseridExternalUserIdInfoMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeSigninupCodeCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeCheckMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeSigninupCodeConsume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeConsumeMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeSigninupCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeSigninupCodeRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodeRemoveMutationOptions<
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

export function getAppidAppIdTenantIdRecipeSigninupCodesQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/codes', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeSigninupCodesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeSigninupCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeSigninupCodes<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeSigninupCodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdTenantIdRecipeSigninupCodesRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupCodesRemoveMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUserQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀⠀', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUserQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeUser<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdTenantIdRecipeUserQueryKey>
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
      ...getAppidAppIdTenantIdRecipeUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdTenantIdRecipeUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdTenantIdRecipeUserMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeSignin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeSignup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSignupMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUser2QueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUser2QueryOptions<
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
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeUser2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeUser2<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeUser2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdTenantIdRecipeUser2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdTenantIdRecipeUser2MutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeUserPasswordResetToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeUserPasswordReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserPasswordResetMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeUserPasswordhashImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserPasswordhashImportMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeSigninup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSigninupMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUser3QueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUser3QueryOptions<
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
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeUser3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe['user⠀'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeUser3<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdTenantIdRecipeUser3QueryKey>
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
      ...getAppidAppIdTenantIdRecipeUser3QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdTenantIdRecipeUsersByEmailQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/users/by-email', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUsersByEmailQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeUsersByEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.users['by-email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeUsersByEmail<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeUsersByEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdTenantIdRecipeUserEmailVerifyToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeUserEmailVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserEmailVerifyMutationOptions<
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

export function getAppidAppIdRecipeUserEmailVerifyQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/user/email/verify', keyArgs] as const
}

export function getAppidAppIdRecipeUserEmailVerifyQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeUserEmailVerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.user.email.verify.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeUserEmailVerify<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeUserEmailVerifyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeUserEmailVerifyRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeUserEmailVerifyRemoveMutationOptions<
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

export function getAppidAppIdRecipeUserMetadataQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/user/metadata', keyArgs] as const
}

export function getAppidAppIdRecipeUserMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeUserMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.user.metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeUserMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeUserMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdRecipeUserMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeUserMetadataMutationOptions<
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

export function injectPostAppidAppIdRecipeUserMetadataRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeUserMetadataRemoveMutationOptions<
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

export function injectPutAppidAppIdTenantIdRecipeUserRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdTenantIdRecipeUserRoleMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeUserRoleRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeUserRoleRemoveMutationOptions<
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

export function getAppidAppIdTenantIdRecipeUserRolesQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/roles', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeUserRolesQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeUserRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.user.roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeUserRoles<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeUserRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdTenantIdRecipeRoleUsersQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/role/users', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeRoleUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeRoleUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.role.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeRoleUsers<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeRoleUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdRecipeRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeRoleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAppidAppIdRecipeRolePermissionsQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/role/permissions', keyArgs] as const
}

export function getAppidAppIdRecipeRolePermissionsQueryOptions<
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
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeRolePermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.role.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeRolePermissions<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdRecipeRolePermissionsQueryKey>
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
      ...getAppidAppIdRecipeRolePermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeRolePermissionsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeRolePermissionsRemoveMutationOptions<
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

export function getAppidAppIdRecipePermissionRolesQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/permission/roles', keyArgs] as const
}

export function getAppidAppIdRecipePermissionRolesQueryOptions<
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
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipePermissionRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.permission.roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipePermissionRoles<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdRecipePermissionRolesQueryKey>
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
      ...getAppidAppIdRecipePermissionRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeRoleRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeRoleRemoveMutationOptions<
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

export function getAppidAppIdRecipeRolesQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/roles', keyArgs] as const
}

export function getAppidAppIdRecipeRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdTenantIdRecipeSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSessionMutationOptions<
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

export function getAppidAppIdRecipeSessionQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/session', keyArgs] as const
}

export function getAppidAppIdRecipeSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.session.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeSessionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdTenantIdRecipeSessionRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeSessionRemoveMutationOptions<
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

export function injectPostAppidAppIdRecipeSessionVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeSessionVerifyMutationOptions<
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

export function injectPostAppidAppIdRecipeSessionRefresh<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']>,
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
    const mutationDefaults = getPostAppidAppIdRecipeSessionRefreshMutationOptions<
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

export function getAppidAppIdTenantIdRecipeSessionUserQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/session/user', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeSessionUserQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeSessionUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.session.user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeSessionUser<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeSessionUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeSessionRegenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeSessionRegenerateMutationOptions<
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

export function getAppidAppIdRecipeSessionDataQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/session/data', keyArgs] as const
}

export function getAppidAppIdRecipeSessionDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeSessionDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.session.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeSessionData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['session']['data']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdRecipeSessionDataQueryKey>
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
      ...getAppidAppIdRecipeSessionDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdRecipeSessionData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeSessionDataMutationOptions<
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

export function injectPostAppidAppIdRecipeJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeJwtMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAppidAppIdRecipeJwtJwksQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/jwt/jwks', keyArgs] as const
}

export function getAppidAppIdRecipeJwtJwksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeJwtJwksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.jwt.jwks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeJwtJwks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeJwtJwksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdWellKnownJwksJsonQueryKey() {
  return ['appid-<appId>', '/appid-<appId>/.well-known/jwks.json'] as const
}

export function getAppidAppIdWellKnownJwksJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdWellKnownJwksJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['.well-known']['jwks.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdWellKnownJwksJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdWellKnownJwksJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppidAppIdWellKnownJwksJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAppidAppIdTenantIdRecipeJwtDataQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/jwt/data', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeJwtDataQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeJwtDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeJwtData<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeJwtDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdTenantIdRecipeJwtData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdTenantIdRecipeJwtDataMutationOptions<
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

export function injectPutAppidAppIdRecipeDashboardUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeDashboardUserMutationOptions<
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

export function injectPostAppidAppIdRecipeDashboardUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeDashboardUserMutationOptions<
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

export function injectDeleteAppidAppIdRecipeDashboardUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppidAppIdRecipeDashboardUserMutationOptions<
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

export function getAppidAppIdRecipeDashboardUsersQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/users', keyArgs] as const
}

export function getAppidAppIdRecipeDashboardUsersQueryOptions<
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
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeDashboardUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.dashboard.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeDashboardUsers<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeDashboardUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeDashboardSessionVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeDashboardSessionVerifyMutationOptions<
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

export function injectDeleteAppidAppIdRecipeDashboardSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppidAppIdRecipeDashboardSessionMutationOptions<
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

export function injectPostAppidAppIdRecipeDashboardSignin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeDashboardSigninMutationOptions<
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

export function getAppidAppIdRecipeDashboardUserSessionsQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user/sessions', keyArgs] as const
}

export function getAppidAppIdRecipeDashboardUserSessionsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeDashboardUserSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.dashboard.user.sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeDashboardUserSessions<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeDashboardUserSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdApiversionQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/apiversion', keyArgs] as const
}

export function getAppidAppIdApiversionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdApiversionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].apiversion.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdApiversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdApiversionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getConfigQueryKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAppidAppIdTenantIdIndexQueryKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/'] as const
}

export function getAppidAppIdTenantIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppidAppIdTenantIdIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAppidAppIdTenantIdHelloQueryKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello'] as const
}

export function getAppidAppIdTenantIdHelloQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdHelloQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].hello.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdHello<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppidAppIdTenantIdHelloQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAppidAppIdTenantIdHello<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdTenantIdHelloMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdTenantIdHello<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdHelloMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAppidAppIdTenantIdHello<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppidAppIdTenantIdHelloMutationOptions<
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

export function getAppidAppIdTelemetryQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/telemetry', keyArgs] as const
}

export function getAppidAppIdTelemetryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTelemetryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].telemetry.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTelemetry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppidAppIdTelemetryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAppidAppIdTenantIdUsersCountQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users/count', keyArgs] as const
}

export function getAppidAppIdTenantIdUsersCountQueryOptions<
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
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdUsersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].users.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdUsersCount<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdUsersCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdUsersCountActiveQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/users/count/active', keyArgs] as const
}

export function getAppidAppIdUsersCountActiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdUsersCountActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].users.count.active.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdUsersCountActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['users']['count']['active']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdUsersCountActiveQueryKey>
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
      ...getAppidAppIdUsersCountActiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdTenantIdUsersQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users', keyArgs] as const
}

export function getAppidAppIdTenantIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdUserRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdUserRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAppidAppIdUserSearchTagsQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/user/search/tags', keyArgs] as const
}

export function getAppidAppIdUserSearchTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdUserSearchTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].user.search.tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdUserSearchTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdUserSearchTagsQueryKey>
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
      ...getAppidAppIdUserSearchTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdEeFeatureflagQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/ee/featureflag', keyArgs] as const
}

export function getAppidAppIdEeFeatureflagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdEeFeatureflagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].ee.featureflag.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdEeFeatureflag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdEeFeatureflagQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdEeLicenseQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/ee/license', keyArgs] as const
}

export function getAppidAppIdEeLicenseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdEeLicenseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].ee.license.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdEeLicense<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppidAppIdEeLicenseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAppidAppIdEeLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdEeLicenseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAppidAppIdEeLicense<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppidAppIdEeLicenseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAppidAppIdUserIdQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/user/id', keyArgs] as const
}

export function getAppidAppIdUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].user.id.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppidAppIdUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAppidAppIdTenantIdUsersByAccountinfoQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users/by-accountinfo', keyArgs] as const
}

export function getAppidAppIdTenantIdUsersByAccountinfoQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdUsersByAccountinfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].users['by-accountinfo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdUsersByAccountinfo<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdUsersByAccountinfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdRequestsStatsQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/requests/stats', keyArgs] as const
}

export function getAppidAppIdRequestsStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRequestsStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].requests.stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRequestsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRequestsStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutRecipeMultitenancyConnectionuridomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeMultitenancyConnectionuridomainMutationOptions<
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

export function injectPutRecipeMultitenancyConnectionuridomainV2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeMultitenancyConnectionuridomainV2MutationOptions<
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

export function injectPostRecipeMultitenancyConnectionuridomainRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeMultitenancyConnectionuridomainRemoveMutationOptions<
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

export function getRecipeMultitenancyConnectionuridomainListQueryKey(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/connectionuridomain/list', keyArgs] as const
}

export function getRecipeMultitenancyConnectionuridomainListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeMultitenancyConnectionuridomainListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.multitenancy.connectionuridomain.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecipeMultitenancyConnectionuridomainList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRecipeMultitenancyConnectionuridomainListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRecipeMultitenancyConnectionuridomainListV2QueryKey(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/connectionuridomain/list/v2', keyArgs] as const
}

export function getRecipeMultitenancyConnectionuridomainListV2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeMultitenancyConnectionuridomainListV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.multitenancy.connectionuridomain.list.v2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecipeMultitenancyConnectionuridomainListV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRecipeMultitenancyConnectionuridomainListV2QueryKey>
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
      ...getRecipeMultitenancyConnectionuridomainListV2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutRecipeMultitenancyApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.recipe.multitenancy.app.$put>,
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
    const mutationDefaults = getPutRecipeMultitenancyAppMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutRecipeMultitenancyAppV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.v2.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.recipe.multitenancy.app.v2.$put>,
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
    const mutationDefaults = getPutRecipeMultitenancyAppV2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRecipeMultitenancyAppRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeMultitenancyAppRemoveMutationOptions<
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

export function getRecipeMultitenancyAppListQueryKey(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/app/list', keyArgs] as const
}

export function getRecipeMultitenancyAppListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeMultitenancyAppListQueryKey>
  >({
    queryKey: getRecipeMultitenancyAppListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.multitenancy.app.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecipeMultitenancyAppList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.multitenancy.app.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipeMultitenancyAppListQueryKey>
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
      ...getRecipeMultitenancyAppListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRecipeMultitenancyAppListV2QueryKey(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/app/list/v2', keyArgs] as const
}

export function getRecipeMultitenancyAppListV2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRecipeMultitenancyAppListV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipe.multitenancy.app.list.v2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecipeMultitenancyAppListV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRecipeMultitenancyAppListV2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdRecipeMultitenancyTenant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeMultitenancyTenantMutationOptions<
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

export function injectPutAppidAppIdRecipeMultitenancyTenantV2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeMultitenancyTenantV2MutationOptions<
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

export function getAppidAppIdTenantIdRecipeMultitenancyTenantQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant', keyArgs] as const
}

export function getAppidAppIdTenantIdRecipeMultitenancyTenantQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeMultitenancyTenantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeMultitenancyTenant<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeMultitenancyTenantQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/v2',
    keyArgs,
  ] as const
}

export function getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.v2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeMultitenancyTenantV2<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeMultitenancyTenantV2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/dashboard/tenant/core-config',
    keyArgs,
  ] as const
}

export function getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>']['<tenantId>'].recipe.dashboard.tenant['core-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdTenantIdRecipeDashboardTenantCoreConfig<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeMultitenancyTenantRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeMultitenancyTenantRemoveMutationOptions<
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

export function getAppidAppIdRecipeMultitenancyTenantListQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/list', keyArgs] as const
}

export function getAppidAppIdRecipeMultitenancyTenantListQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeMultitenancyTenantListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.multitenancy.tenant.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeMultitenancyTenantList<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeMultitenancyTenantListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAppidAppIdRecipeMultitenancyTenantListV2QueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/list/v2', keyArgs] as const
}

export function getAppidAppIdRecipeMultitenancyTenantListV2QueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeMultitenancyTenantListV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.multitenancy.tenant.list.v2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeMultitenancyTenantListV2<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeMultitenancyTenantListV2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdparty<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeMultitenancyTenantUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserMutationOptions<
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

export function injectPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveMutationOptions<
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

export function getAppidAppIdRecipeOauthClientsQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients', keyArgs] as const
}

export function getAppidAppIdRecipeOauthClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeOauthClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.clients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeOauthClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeOauthClientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdRecipeOauthClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeOauthClientsMutationOptions<
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

export function injectPostAppidAppIdRecipeOauthClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeOauthClientsMutationOptions<
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

export function getAppidAppIdRecipeOauthClientsListQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients/list', keyArgs] as const
}

export function getAppidAppIdRecipeOauthClientsListQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeOauthClientsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.clients.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeOauthClientsList<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeOauthClientsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeOauthClientsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeOauthClientsRemoveMutationOptions<
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

export function getAppidAppIdRecipeOauthAuthRequestsConsentQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/consent', keyArgs] as const
}

export function getAppidAppIdRecipeOauthAuthRequestsConsentQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeOauthAuthRequestsConsentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.consent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeOauthAuthRequestsConsent<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeOauthAuthRequestsConsentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdRecipeOauthAuthRequestsConsentAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsConsentAcceptMutationOptions<
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

export function injectPutAppidAppIdRecipeOauthAuthRequestsConsentReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsConsentRejectMutationOptions<
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

export function getAppidAppIdRecipeOauthAuthRequestsLoginQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/login', keyArgs] as const
}

export function getAppidAppIdRecipeOauthAuthRequestsLoginQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeOauthAuthRequestsLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.requests.login.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeOauthAuthRequestsLogin<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeOauthAuthRequestsLoginQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAppidAppIdRecipeOauthAuthRequestsLoginAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLoginAcceptMutationOptions<
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

export function injectPutAppidAppIdRecipeOauthAuthRequestsLoginReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLoginRejectMutationOptions<
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

export function injectPutAppidAppIdRecipeOauthAuthRequestsLogoutAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLogoutAcceptMutationOptions<
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

export function injectPutAppidAppIdRecipeOauthAuthRequestsLogoutReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppidAppIdRecipeOauthAuthRequestsLogoutRejectMutationOptions<
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

export function injectPostAppidAppIdRecipeOauthSessionRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeOauthSessionRevokeMutationOptions<
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

export function injectPostAppidAppIdRecipeOauthTokenRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeOauthTokenRevokeMutationOptions<
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

export function injectPostAppidAppIdRecipeOauthTokensRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeOauthTokensRevokeMutationOptions<
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

export function getAppidAppIdRecipeOauthAuthQueryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth', keyArgs] as const
}

export function getAppidAppIdRecipeOauthAuthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeOauthAuthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.auth.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeOauthAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAppidAppIdRecipeOauthAuthQueryKey>
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
      ...getAppidAppIdRecipeOauthAuthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeOauthToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeOauthTokenMutationOptions<
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

export function getAppidAppIdRecipeOauthSessionsLogoutQueryKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/sessions/logout', keyArgs] as const
}

export function getAppidAppIdRecipeOauthSessionsLogoutQueryOptions<
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
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAppidAppIdRecipeOauthSessionsLogoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['appid-<appId>'].recipe.oauth.sessions.logout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppidAppIdRecipeOauthSessionsLogout<
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
  args: () => InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAppidAppIdRecipeOauthSessionsLogoutQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAppidAppIdRecipeOauthIntrospect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppidAppIdRecipeOauthIntrospectMutationOptions<
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
