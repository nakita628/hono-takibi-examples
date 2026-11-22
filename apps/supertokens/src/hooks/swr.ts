import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAppidAppIdRecipeAccountlinkingUserPrimaryCheckKey(
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

export function useGetAppidAppIdRecipeAccountlinkingUserPrimaryCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeAccountlinkingUserPrimaryCheckKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
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
          client['appid-<appId>'].recipe.accountlinking.user.primary.check.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeAccountlinkingUserPrimaryCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeAccountlinkingUserPrimaryCheckKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
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
          client['appid-<appId>'].recipe.accountlinking.user.primary.check.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeAccountlinkingUserLinkCheckKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/link/check', keyArgs] as const
}

export function useGetAppidAppIdRecipeAccountlinkingUserLinkCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeAccountlinkingUserLinkCheckKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
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
          client['appid-<appId>'].recipe.accountlinking.user.link.check.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeAccountlinkingUserLinkCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeAccountlinkingUserLinkCheckKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
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
          client['appid-<appId>'].recipe.accountlinking.user.link.check.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeAccountlinkingUserPrimaryKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/primary', 'POST'] as const
}

export function usePostAppidAppIdRecipeAccountlinkingUserPrimary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeAccountlinkingUserPrimaryKey()
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
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.accountlinking.user.primary.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeAccountlinkingUserLinkKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/link', 'POST'] as const
}

export function usePostAppidAppIdRecipeAccountlinkingUserLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeAccountlinkingUserLinkKey()
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
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.accountlinking.user.link.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeAccountlinkingUserUnlinkKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/accountlinking/user/unlink', 'POST'] as const
}

export function usePostAppidAppIdRecipeAccountlinkingUserUnlink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeAccountlinkingUserUnlinkKey()
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
            (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.accountlinking.user.unlink.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeTotpDeviceKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device', 'PUT'] as const
}

export function usePutAppidAppIdRecipeTotpDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeTotpDeviceKey()
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
            (typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.totp.device.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeTotpDeviceKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device', 'POST'] as const
}

export function usePostAppidAppIdRecipeTotpDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeTotpDeviceKey()
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
            (typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.totp.device.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeTotpDeviceListKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device/list', keyArgs] as const
}

export function useGetAppidAppIdRecipeTotpDeviceList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeTotpDeviceListKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.totp.device.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeTotpDeviceList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeTotpDeviceListKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.totp.device.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipeTotpDeviceImportKey() {
  return ['recipe', '/recipe/totp/device/import', 'POST'] as const
}

export function usePostRecipeTotpDeviceImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.totp.device.import.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.totp.device.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeTotpDeviceImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipe.totp.device.import.$post> },
      ) => parseResponse(client.recipe.totp.device.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeTotpDeviceRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/totp/device/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeTotpDeviceRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeTotpDeviceRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>'].recipe.totp.device.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeTotpVerifyKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/totp/verify', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeTotpVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeTotpVerifyKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.totp.verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeTotpDeviceVerifyKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/totp/device/verify', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeTotpDeviceVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeTotpDeviceVerifyKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.totp.device.verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeUseridMapKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/map', keyArgs] as const
}

export function useGetAppidAppIdRecipeUseridMap<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
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
        ? getGetAppidAppIdRecipeUseridMapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.userid.map.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeUseridMap<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
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
        ? getGetAppidAppIdRecipeUseridMapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.userid.map.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeUseridMapKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/map', 'POST'] as const
}

export function usePostAppidAppIdRecipeUseridMap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeUseridMapKey()
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
            (typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.userid.map.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeUseridMapRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/map/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeUseridMapRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeUseridMapRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>'].recipe.userid.map.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeUseridExternalUserIdInfoKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/userid/external-user-id-info', 'PUT'] as const
}

export function usePutAppidAppIdRecipeUseridExternalUserIdInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeUseridExternalUserIdInfoKey()
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
            (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.userid['external-user-id-info'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeCheckKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/code/check', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodeCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSigninupCodeCheckKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signinup.code.check.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeConsumeKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/signinup/code/consume',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodeConsume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSigninupCodeConsumeKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signinup.code.consume.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/code', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSigninupCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSigninupCodeKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signinup.code.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodeRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/code/remove', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodeRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSigninupCodeRemoveKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signinup.code.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeSigninupCodesKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup/codes', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeSigninupCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeSigninupCodesKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeSigninupCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeSigninupCodesKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSigninupCodesRemoveKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/signinup/codes/remove',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeSigninupCodesRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSigninupCodesRemoveKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeUserKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀⠀', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeUser<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
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
        ? getGetAppidAppIdTenantIdRecipeUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeUser<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
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
        ? getGetAppidAppIdTenantIdRecipeUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdTenantIdRecipeUserKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀⠀', 'PUT'] as const
}

export function usePutAppidAppIdTenantIdRecipeUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdTenantIdRecipeUserKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSigninKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signin', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSignin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSigninKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSignupKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signup', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSignupKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signup.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeUser2Key(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeUser2<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
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
        ? getGetAppidAppIdTenantIdRecipeUser2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].recipe.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeUser2<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
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
        ? getGetAppidAppIdTenantIdRecipeUser2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].recipe.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdTenantIdRecipeUser2Key() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user', 'PUT'] as const
}

export function usePutAppidAppIdTenantIdRecipeUser2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdTenantIdRecipeUser2Key()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>']['<tenantId>'].recipe.user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/password/reset/token',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordResetToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.token.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/password/reset', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserPasswordResetKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordhashImportKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/passwordhash/import',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordhashImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserPasswordhashImportKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.passwordhash.import.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/password/reset/token/consume',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.token.consume.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSigninupKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/signinup', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSigninup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSigninupKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.signinup.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeUser3Key(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user⠀', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeUser3<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
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
        ? getGetAppidAppIdTenantIdRecipeUser3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe['user⠀'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeUser3<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
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
        ? getGetAppidAppIdTenantIdRecipeUser3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe['user⠀'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeUsersByEmailKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/users/by-email', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeUsersByEmail<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeUsersByEmailKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.users['by-email'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeUsersByEmail<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeUsersByEmailKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.users['by-email'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/email/verify/token',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeUserEmailVerifyToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.token.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/user/email/verify/token/remove',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.token.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserEmailVerifyKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/email/verify', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeUserEmailVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserEmailVerifyKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeUserEmailVerifyKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/user/email/verify', keyArgs] as const
}

export function useGetAppidAppIdRecipeUserEmailVerify<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeUserEmailVerifyKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.user.email.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeUserEmailVerify<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeUserEmailVerifyKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.user.email.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeUserEmailVerifyRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/user/email/verify/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeUserEmailVerifyRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeUserEmailVerifyRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.user.email.verify.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeUserMetadataKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/user/metadata', keyArgs] as const
}

export function useGetAppidAppIdRecipeUserMetadata<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
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
        ? getGetAppidAppIdRecipeUserMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.user.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeUserMetadata<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
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
        ? getGetAppidAppIdRecipeUserMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.user.metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeUserMetadataKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/user/metadata', 'PUT'] as const
}

export function usePutAppidAppIdRecipeUserMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeUserMetadataKey()
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
            (typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.user.metadata.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeUserMetadataRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/user/metadata/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeUserMetadataRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeUserMetadataRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.user.metadata.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdTenantIdRecipeUserRoleKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/role', 'PUT'] as const
}

export function usePutAppidAppIdTenantIdRecipeUserRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdTenantIdRecipeUserRoleKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.role.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeUserRoleRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/role/remove', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeUserRoleRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeUserRoleRemoveKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.user.role.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeUserRolesKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/user/roles', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeUserRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeUserRolesKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.user.roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeUserRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeUserRolesKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.user.roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeRoleUsersKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/role/users', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeRoleUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeRoleUsersKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.role.users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeRoleUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeRoleUsersKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.role.users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeRoleKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/role', 'PUT'] as const
}

export function usePutAppidAppIdRecipeRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['$put']> },
      ) => parseResponse(client['appid-<appId>'].recipe.role.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeRolePermissionsKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/role/permissions', keyArgs] as const
}

export function useGetAppidAppIdRecipeRolePermissions<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
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
        ? getGetAppidAppIdRecipeRolePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.role.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeRolePermissions<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
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
        ? getGetAppidAppIdRecipeRolePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.role.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeRolePermissionsRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/role/permissions/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeRolePermissionsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeRolePermissionsRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.role.permissions.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipePermissionRolesKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/permission/roles', keyArgs] as const
}

export function useGetAppidAppIdRecipePermissionRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
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
        ? getGetAppidAppIdRecipePermissionRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.permission.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipePermissionRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
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
        ? getGetAppidAppIdRecipePermissionRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.permission.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeRoleRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/role/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeRoleRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeRoleRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.role.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeRolesKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/roles', keyArgs] as const
}

export function useGetAppidAppIdRecipeRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
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
        ? getGetAppidAppIdRecipeRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].recipe.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
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
        ? getGetAppidAppIdRecipeRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].recipe.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSessionKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/session', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSessionKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.session.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeSessionKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/session', keyArgs] as const
}

export function useGetAppidAppIdRecipeSession<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
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
        ? getGetAppidAppIdRecipeSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].recipe.session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeSession<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
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
        ? getGetAppidAppIdRecipeSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].recipe.session.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeSessionRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/session/remove', 'POST'] as const
}

export function usePostAppidAppIdTenantIdRecipeSessionRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeSessionRemoveKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.session.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeSessionVerifyKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/verify', 'POST'] as const
}

export function usePostAppidAppIdRecipeSessionVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeSessionVerifyKey()
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
            (typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.session.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeSessionRefreshKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/refresh', 'POST'] as const
}

export function usePostAppidAppIdRecipeSessionRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeSessionRefreshKey()
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
            (typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.session.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeSessionUserKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/session/user', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeSessionUser<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeSessionUserKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.session.user.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeSessionUser<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeSessionUserKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.session.user.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeSessionRegenerateKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/regenerate', 'POST'] as const
}

export function usePostAppidAppIdRecipeSessionRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeSessionRegenerateKey()
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
            (typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>'].recipe.session.regenerate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeSessionDataKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/session/data', keyArgs] as const
}

export function useGetAppidAppIdRecipeSessionData<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
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
        ? getGetAppidAppIdRecipeSessionDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.session.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeSessionData<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
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
        ? getGetAppidAppIdRecipeSessionDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.session.data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeSessionDataKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/session/data', 'PUT'] as const
}

export function usePutAppidAppIdRecipeSessionData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeSessionDataKey()
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
            (typeof client)['appid-<appId>']['recipe']['session']['data']['$put']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.session.data.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeJwtKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/jwt', 'POST'] as const
}

export function usePostAppidAppIdRecipeJwt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeJwtKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']> },
      ) => parseResponse(client['appid-<appId>'].recipe.jwt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeJwtJwksKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/jwt/jwks', keyArgs] as const
}

export function useGetAppidAppIdRecipeJwtJwks<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
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
        ? getGetAppidAppIdRecipeJwtJwksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].recipe.jwt.jwks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeJwtJwks<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
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
        ? getGetAppidAppIdRecipeJwtJwksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].recipe.jwt.jwks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdWellKnownJwksJsonKey() {
  return ['appid-<appId>', '/appid-<appId>/.well-known/jwks.json'] as const
}

export function useGetAppidAppIdWellKnownJwksJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppidAppIdWellKnownJwksJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['appid-<appId>']['.well-known']['jwks.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdWellKnownJwksJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppidAppIdWellKnownJwksJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['.well-known']['jwks.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['appid-<appId>']['.well-known']['jwks.json'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeJwtDataKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/jwt/data', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeJwtData<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeJwtDataKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeJwtData<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeJwtDataKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdTenantIdRecipeJwtDataKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/jwt/data', 'PUT'] as const
}

export function usePutAppidAppIdTenantIdRecipeJwtData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdTenantIdRecipeJwtDataKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeDashboardUserKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user', 'PUT'] as const
}

export function usePutAppidAppIdRecipeDashboardUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeDashboardUserKey()
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
            (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.dashboard.user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeDashboardUserKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user', 'POST'] as const
}

export function usePostAppidAppIdRecipeDashboardUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeDashboardUserKey()
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
            (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.dashboard.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppidAppIdRecipeDashboardUserKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user', 'DELETE'] as const
}

export function useDeleteAppidAppIdRecipeDashboardUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppidAppIdRecipeDashboardUserKey()
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
            (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.dashboard.user.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeDashboardUsersKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/users', keyArgs] as const
}

export function useGetAppidAppIdRecipeDashboardUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
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
        ? getGetAppidAppIdRecipeDashboardUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.dashboard.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeDashboardUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
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
        ? getGetAppidAppIdRecipeDashboardUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.dashboard.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeDashboardSessionVerifyKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/session/verify', 'POST'] as const
}

export function usePostAppidAppIdRecipeDashboardSessionVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeDashboardSessionVerifyKey()
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
            (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.dashboard.session.verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppidAppIdRecipeDashboardSessionKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/session', 'DELETE'] as const
}

export function useDeleteAppidAppIdRecipeDashboardSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppidAppIdRecipeDashboardSessionKey()
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
            (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>'].recipe.dashboard.session.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeDashboardSigninKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/signin', 'POST'] as const
}

export function usePostAppidAppIdRecipeDashboardSignin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeDashboardSigninKey()
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
            (typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.dashboard.signin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeDashboardUserSessionsKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/dashboard/user/sessions', keyArgs] as const
}

export function useGetAppidAppIdRecipeDashboardUserSessions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeDashboardUserSessionsKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
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
          client['appid-<appId>'].recipe.dashboard.user.sessions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeDashboardUserSessions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeDashboardUserSessionsKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
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
          client['appid-<appId>'].recipe.dashboard.user.sessions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdApiversionKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/apiversion', keyArgs] as const
}

export function useGetAppidAppIdApiversion<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
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
        ? getGetAppidAppIdApiversionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].apiversion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdApiversion<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
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
        ? getGetAppidAppIdApiversionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['apiversion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].apiversion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function useGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAppidAppIdTenantIdIndexKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/'] as const
}

export function useGetAppidAppIdTenantIdIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppidAppIdTenantIdIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppidAppIdTenantIdIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdHelloKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello'] as const
}

export function useGetAppidAppIdTenantIdHello<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppidAppIdTenantIdHelloKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].hello.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdHello<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppidAppIdTenantIdHelloKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].hello.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdTenantIdHelloKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello', 'PUT'] as const
}

export function usePutAppidAppIdTenantIdHello<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$put']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdTenantIdHelloKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].hello.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdHelloKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello', 'POST'] as const
}

export function usePostAppidAppIdTenantIdHello<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdHelloKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].hello.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppidAppIdTenantIdHelloKey() {
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/hello', 'DELETE'] as const
}

export function useDeleteAppidAppIdTenantIdHello<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['hello']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppidAppIdTenantIdHelloKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].hello.$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTelemetryKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/telemetry', keyArgs] as const
}

export function useGetAppidAppIdTelemetry<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
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
        ? getGetAppidAppIdTelemetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].telemetry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTelemetry<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
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
        ? getGetAppidAppIdTelemetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['telemetry']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].telemetry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdUsersCountKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users/count', keyArgs] as const
}

export function useGetAppidAppIdTenantIdUsersCount<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
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
        ? getGetAppidAppIdTenantIdUsersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdUsersCount<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
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
        ? getGetAppidAppIdTenantIdUsersCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].users.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdUsersCountActiveKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/users/count/active', keyArgs] as const
}

export function useGetAppidAppIdUsersCountActive<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
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
        ? getGetAppidAppIdUsersCountActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].users.count.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdUsersCountActive<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
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
        ? getGetAppidAppIdUsersCountActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].users.count.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdUsersKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users', keyArgs] as const
}

export function useGetAppidAppIdTenantIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
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
        ? getGetAppidAppIdTenantIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
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
        ? getGetAppidAppIdTenantIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>']['<tenantId>'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdUserRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/user/remove', 'POST'] as const
}

export function usePostAppidAppIdUserRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['user']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdUserRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['appid-<appId>']['user']['remove']['$post']> },
      ) => parseResponse(client['appid-<appId>'].user.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdUserSearchTagsKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/user/search/tags', keyArgs] as const
}

export function useGetAppidAppIdUserSearchTags<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
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
        ? getGetAppidAppIdUserSearchTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].user.search.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdUserSearchTags<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
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
        ? getGetAppidAppIdUserSearchTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].user.search.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdEeFeatureflagKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/ee/featureflag', keyArgs] as const
}

export function useGetAppidAppIdEeFeatureflag<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
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
        ? getGetAppidAppIdEeFeatureflagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].ee.featureflag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdEeFeatureflag<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
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
        ? getGetAppidAppIdEeFeatureflagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].ee.featureflag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdEeLicenseKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/ee/license', keyArgs] as const
}

export function useGetAppidAppIdEeLicense<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
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
        ? getGetAppidAppIdEeLicenseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].ee.license.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdEeLicense<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
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
        ? getGetAppidAppIdEeLicenseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].ee.license.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdEeLicenseKey() {
  return ['appid-<appId>', '/appid-<appId>/ee/license', 'PUT'] as const
}

export function usePutAppidAppIdEeLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdEeLicenseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$put']> },
      ) => parseResponse(client['appid-<appId>'].ee.license.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppidAppIdEeLicenseKey() {
  return ['appid-<appId>', '/appid-<appId>/ee/license', 'DELETE'] as const
}

export function useDeleteAppidAppIdEeLicense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppidAppIdEeLicenseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$delete']> },
      ) => parseResponse(client['appid-<appId>'].ee.license.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdUserIdKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/user/id', keyArgs] as const
}

export function useGetAppidAppIdUserId<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
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
        ? getGetAppidAppIdUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].user.id.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdUserId<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
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
        ? getGetAppidAppIdUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['user']['id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].user.id.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdUsersByAccountinfoKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/users/by-accountinfo', keyArgs] as const
}

export function useGetAppidAppIdTenantIdUsersByAccountinfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdUsersByAccountinfoKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
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
          client['appid-<appId>']['<tenantId>'].users['by-accountinfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdUsersByAccountinfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdUsersByAccountinfoKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
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
          client['appid-<appId>']['<tenantId>'].users['by-accountinfo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdRequestsStatsKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/requests/stats', keyArgs] as const
}

export function useGetAppidAppIdRequestsStats<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
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
        ? getGetAppidAppIdRequestsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].requests.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRequestsStats<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
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
        ? getGetAppidAppIdRequestsStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['appid-<appId>'].requests.stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRecipeMultitenancyConnectionuridomainKey() {
  return ['recipe', '/recipe/multitenancy/connectionuridomain', 'PUT'] as const
}

export function usePutRecipeMultitenancyConnectionuridomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeMultitenancyConnectionuridomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.$put> },
      ) => parseResponse(client.recipe.multitenancy.connectionuridomain.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRecipeMultitenancyConnectionuridomainV2Key() {
  return ['recipe', '/recipe/multitenancy/connectionuridomain/v2', 'PUT'] as const
}

export function usePutRecipeMultitenancyConnectionuridomainV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeMultitenancyConnectionuridomainV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put> },
      ) =>
        parseResponse(client.recipe.multitenancy.connectionuridomain.v2.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipeMultitenancyConnectionuridomainRemoveKey() {
  return ['recipe', '/recipe/multitenancy/connectionuridomain/remove', 'POST'] as const
}

export function usePostRecipeMultitenancyConnectionuridomainRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeMultitenancyConnectionuridomainRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>
        },
      ) =>
        parseResponse(
          client.recipe.multitenancy.connectionuridomain.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeMultitenancyConnectionuridomainListKey(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/connectionuridomain/list', keyArgs] as const
}

export function useGetRecipeMultitenancyConnectionuridomainList<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
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
        ? getGetRecipeMultitenancyConnectionuridomainListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.recipe.multitenancy.connectionuridomain.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeMultitenancyConnectionuridomainList<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
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
        ? getGetRecipeMultitenancyConnectionuridomainListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.recipe.multitenancy.connectionuridomain.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeMultitenancyConnectionuridomainListV2Key(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/connectionuridomain/list/v2', keyArgs] as const
}

export function useGetRecipeMultitenancyConnectionuridomainListV2<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
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
        ? getGetRecipeMultitenancyConnectionuridomainListV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.recipe.multitenancy.connectionuridomain.list.v2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeMultitenancyConnectionuridomainListV2<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
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
        ? getGetRecipeMultitenancyConnectionuridomainListV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.recipe.multitenancy.connectionuridomain.list.v2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRecipeMultitenancyAppKey() {
  return ['recipe', '/recipe/multitenancy/app', 'PUT'] as const
}

export function usePutRecipeMultitenancyApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.multitenancy.app.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeMultitenancyAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipe.multitenancy.app.$put> },
      ) => parseResponse(client.recipe.multitenancy.app.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRecipeMultitenancyAppV2Key() {
  return ['recipe', '/recipe/multitenancy/app/v2', 'PUT'] as const
}

export function usePutRecipeMultitenancyAppV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.v2.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.multitenancy.app.v2.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecipeMultitenancyAppV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipe.multitenancy.app.v2.$put> },
      ) => parseResponse(client.recipe.multitenancy.app.v2.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipeMultitenancyAppRemoveKey() {
  return ['recipe', '/recipe/multitenancy/app/remove', 'POST'] as const
}

export function usePostRecipeMultitenancyAppRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipe.multitenancy.app.remove.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipe.multitenancy.app.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipeMultitenancyAppRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipe.multitenancy.app.remove.$post> },
      ) => parseResponse(client.recipe.multitenancy.app.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipeMultitenancyAppListKey(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/app/list', keyArgs] as const
}

export function useGetRecipeMultitenancyAppList<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
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
        ? getGetRecipeMultitenancyAppListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.multitenancy.app.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeMultitenancyAppList<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
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
        ? getGetRecipeMultitenancyAppListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.multitenancy.app.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipeMultitenancyAppListV2Key(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipe', '/recipe/multitenancy/app/list/v2', keyArgs] as const
}

export function useGetRecipeMultitenancyAppListV2<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>
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
        ? getGetRecipeMultitenancyAppListV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.multitenancy.app.list.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipeMultitenancyAppListV2<TError = unknown>(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>
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
        ? getGetRecipeMultitenancyAppListV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.recipe.multitenancy.app.list.v2.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipe.multitenancy.app.list.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeMultitenancyTenantKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant', 'PUT'] as const
}

export function usePutAppidAppIdRecipeMultitenancyTenant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeMultitenancyTenantKey()
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
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>'].recipe.multitenancy.tenant.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeMultitenancyTenantV2Key() {
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/v2', 'PUT'] as const
}

export function usePutAppidAppIdRecipeMultitenancyTenantV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeMultitenancyTenantV2Key()
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
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.multitenancy.tenant.v2.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeMultitenancyTenantKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant', keyArgs] as const
}

export function useGetAppidAppIdTenantIdRecipeMultitenancyTenant<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeMultitenancyTenantKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeMultitenancyTenant<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeMultitenancyTenantKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeMultitenancyTenantV2Key(
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

export function useGetAppidAppIdTenantIdRecipeMultitenancyTenantV2<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeMultitenancyTenantV2Key(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.v2.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeMultitenancyTenantV2<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeMultitenancyTenantV2Key(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.v2.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdTenantIdRecipeDashboardTenantCoreConfigKey(
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

export function useGetAppidAppIdTenantIdRecipeDashboardTenantCoreConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeDashboardTenantCoreConfigKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.dashboard.tenant['core-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdTenantIdRecipeDashboardTenantCoreConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdTenantIdRecipeDashboardTenantCoreConfigKey(args)
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
                (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
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
          client['appid-<appId>']['<tenantId>'].recipe.dashboard.tenant['core-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeMultitenancyTenantRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeMultitenancyTenantRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeMultitenancyTenantRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.multitenancy.tenant.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeMultitenancyTenantListKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/list', keyArgs] as const
}

export function useGetAppidAppIdRecipeMultitenancyTenantList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeMultitenancyTenantListKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
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
          client['appid-<appId>'].recipe.multitenancy.tenant.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeMultitenancyTenantList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeMultitenancyTenantListKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
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
          client['appid-<appId>'].recipe.multitenancy.tenant.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeMultitenancyTenantListV2Key(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/multitenancy/tenant/list/v2', keyArgs] as const
}

export function useGetAppidAppIdRecipeMultitenancyTenantListV2<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeMultitenancyTenantListV2Key(args)
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
                (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
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
          client['appid-<appId>'].recipe.multitenancy.tenant.list.v2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeMultitenancyTenantListV2<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeMultitenancyTenantListV2Key(args)
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
                (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
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
          client['appid-<appId>'].recipe.multitenancy.tenant.list.v2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty',
    'PUT',
  ] as const
}

export function usePutAppidAppIdTenantIdRecipeMultitenancyConfigThirdparty<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.config.thirdparty.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty/remove',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.config.thirdparty.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeMultitenancyTenantUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.user.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user/remove',
    'POST',
  ] as const
}

export function usePostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveKey()
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
            (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.user.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeOauthClientsKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients', keyArgs] as const
}

export function useGetAppidAppIdRecipeOauthClients<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
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
        ? getGetAppidAppIdRecipeOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.oauth.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeOauthClients<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
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
        ? getGetAppidAppIdRecipeOauthClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.oauth.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeOauthClientsKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients', 'PUT'] as const
}

export function usePutAppidAppIdRecipeOauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeOauthClientsKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.oauth.clients.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeOauthClientsKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients', 'POST'] as const
}

export function usePostAppidAppIdRecipeOauthClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeOauthClientsKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.oauth.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeOauthClientsListKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients/list', keyArgs] as const
}

export function useGetAppidAppIdRecipeOauthClientsList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthClientsListKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.oauth.clients.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeOauthClientsList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthClientsListKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.oauth.clients.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeOauthClientsRemoveKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/clients/remove', 'POST'] as const
}

export function usePostAppidAppIdRecipeOauthClientsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeOauthClientsRemoveKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.clients.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeOauthAuthRequestsConsentKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/consent', keyArgs] as const
}

export function useGetAppidAppIdRecipeOauthAuthRequestsConsent<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthAuthRequestsConsentKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
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
          client['appid-<appId>'].recipe.oauth.auth.requests.consent.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeOauthAuthRequestsConsent<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthAuthRequestsConsentKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
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
          client['appid-<appId>'].recipe.oauth.auth.requests.consent.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeOauthAuthRequestsConsentAcceptKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/consent/accept',
    'PUT',
  ] as const
}

export function usePutAppidAppIdRecipeOauthAuthRequestsConsentAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeOauthAuthRequestsConsentAcceptKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.consent.accept.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeOauthAuthRequestsConsentRejectKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/consent/reject',
    'PUT',
  ] as const
}

export function usePutAppidAppIdRecipeOauthAuthRequestsConsentReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeOauthAuthRequestsConsentRejectKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.consent.reject.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeOauthAuthRequestsLoginKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/login', keyArgs] as const
}

export function useGetAppidAppIdRecipeOauthAuthRequestsLogin<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthAuthRequestsLoginKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
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
          client['appid-<appId>'].recipe.oauth.auth.requests.login.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeOauthAuthRequestsLogin<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthAuthRequestsLoginKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
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
          client['appid-<appId>'].recipe.oauth.auth.requests.login.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLoginAcceptKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/login/accept', 'PUT'] as const
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLoginAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeOauthAuthRequestsLoginAcceptKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.login.accept.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLoginRejectKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth/requests/login/reject', 'PUT'] as const
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLoginReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeOauthAuthRequestsLoginRejectKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.login.reject.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLogoutAcceptKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/logout/accept',
    'PUT',
  ] as const
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLogoutAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeOauthAuthRequestsLogoutAcceptKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.logout.accept.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAppidAppIdRecipeOauthAuthRequestsLogoutRejectKey() {
  return [
    'appid-<appId>',
    '/appid-<appId>/recipe/oauth/auth/requests/logout/reject',
    'PUT',
  ] as const
}

export function usePutAppidAppIdRecipeOauthAuthRequestsLogoutReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppidAppIdRecipeOauthAuthRequestsLogoutRejectKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.auth.requests.logout.reject.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeOauthSessionRevokeKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/session/revoke', 'POST'] as const
}

export function usePostAppidAppIdRecipeOauthSessionRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeOauthSessionRevokeKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client['appid-<appId>'].recipe.oauth.session.revoke.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeOauthTokenRevokeKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/token/revoke', 'POST'] as const
}

export function usePostAppidAppIdRecipeOauthTokenRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeOauthTokenRevokeKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>'].recipe.oauth.token.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeOauthTokensRevokeKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/tokens/revoke', 'POST'] as const
}

export function usePostAppidAppIdRecipeOauthTokensRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeOauthTokensRevokeKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(client['appid-<appId>'].recipe.oauth.tokens.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeOauthAuthKey(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/auth', keyArgs] as const
}

export function useGetAppidAppIdRecipeOauthAuth<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
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
        ? getGetAppidAppIdRecipeOauthAuthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.oauth.auth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeOauthAuth<TError = unknown>(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
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
        ? getGetAppidAppIdRecipeOauthAuthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['appid-<appId>'].recipe.oauth.auth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeOauthTokenKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/token', 'POST'] as const
}

export function usePostAppidAppIdRecipeOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeOauthTokenKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppidAppIdRecipeOauthSessionsLogoutKey(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/sessions/logout', keyArgs] as const
}

export function useGetAppidAppIdRecipeOauthSessionsLogout<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthSessionsLogoutKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
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
          client['appid-<appId>'].recipe.oauth.sessions.logout.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppidAppIdRecipeOauthSessionsLogout<TError = unknown>(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAppidAppIdRecipeOauthSessionsLogoutKey(args)
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
                (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
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
          client['appid-<appId>'].recipe.oauth.sessions.logout.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAppidAppIdRecipeOauthIntrospectKey() {
  return ['appid-<appId>', '/appid-<appId>/recipe/oauth/introspect', 'POST'] as const
}

export function usePostAppidAppIdRecipeOauthIntrospect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppidAppIdRecipeOauthIntrospectKey()
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
            (typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']
          >
        },
      ) => parseResponse(client['appid-<appId>'].recipe.oauth.introspect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
