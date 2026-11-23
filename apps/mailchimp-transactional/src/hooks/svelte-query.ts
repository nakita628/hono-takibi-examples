import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAllowlistsKey() {
  return ['allowlists'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getInboundKey() {
  return ['inbound'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getMctemplatesKey() {
  return ['mctemplates'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getRejectsKey() {
  return ['rejects'] as const
}

export function getSendersKey() {
  return ['senders'] as const
}

export function getSubaccountsKey() {
  return ['subaccounts'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUrlsKey() {
  return ['urls'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getPostAllowlistsAddMutationKey() {
  return ['allowlists', '/allowlists/add', 'POST'] as const
}

export function getPostAllowlistsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.allowlists.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAllowlistsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.allowlists.add.$post>) {
      return parseResponse(client.allowlists.add.$post(args, options))
    },
  })
}

export function createPostAllowlistsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.allowlists.add.$post>,
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
    const mutationDefaults = getPostAllowlistsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAllowlistsListMutationKey() {
  return ['allowlists', '/allowlists/list', 'POST'] as const
}

export function getPostAllowlistsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.allowlists.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAllowlistsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.allowlists.list.$post>) {
      return parseResponse(client.allowlists.list.$post(args, options))
    },
  })
}

export function createPostAllowlistsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.allowlists.list.$post>,
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
    const mutationDefaults = getPostAllowlistsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAllowlistsDeleteMutationKey() {
  return ['allowlists', '/allowlists/delete', 'POST'] as const
}

export function getPostAllowlistsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.allowlists.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAllowlistsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.allowlists.delete.$post>) {
      return parseResponse(client.allowlists.delete.$post(args, options))
    },
  })
}

export function createPostAllowlistsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.allowlists.delete.$post>,
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
    const mutationDefaults = getPostAllowlistsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportsInfoMutationKey() {
  return ['exports', '/exports/info', 'POST'] as const
}

export function getPostExportsInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.info.$post>) {
      return parseResponse(client.exports.info.$post(args, options))
    },
  })
}

export function createPostExportsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exports.info.$post>,
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
    const mutationDefaults = getPostExportsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportsListMutationKey() {
  return ['exports', '/exports/list', 'POST'] as const
}

export function getPostExportsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.list.$post>) {
      return parseResponse(client.exports.list.$post(args, options))
    },
  })
}

export function createPostExportsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exports.list.$post>,
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
    const mutationDefaults = getPostExportsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportsRejectsMutationKey() {
  return ['exports', '/exports/rejects', 'POST'] as const
}

export function getPostExportsRejectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.rejects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.rejects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsRejectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.rejects.$post>) {
      return parseResponse(client.exports.rejects.$post(args, options))
    },
  })
}

export function createPostExportsRejects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.rejects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exports.rejects.$post>,
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
    const mutationDefaults = getPostExportsRejectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportsWhitelistMutationKey() {
  return ['exports', '/exports/whitelist', 'POST'] as const
}

export function getPostExportsWhitelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.whitelist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.whitelist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsWhitelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.whitelist.$post>) {
      return parseResponse(client.exports.whitelist.$post(args, options))
    },
  })
}

export function createPostExportsWhitelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.exports.whitelist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.exports.whitelist.$post>,
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
    const mutationDefaults = getPostExportsWhitelistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportsAllowlistMutationKey() {
  return ['exports', '/exports/allowlist', 'POST'] as const
}

export function getPostExportsAllowlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.allowlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.allowlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsAllowlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.allowlist.$post>) {
      return parseResponse(client.exports.allowlist.$post(args, options))
    },
  })
}

export function createPostExportsAllowlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.exports.allowlist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.exports.allowlist.$post>,
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
    const mutationDefaults = getPostExportsAllowlistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportsActivityMutationKey() {
  return ['exports', '/exports/activity', 'POST'] as const
}

export function getPostExportsActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.activity.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.activity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsActivityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.activity.$post>) {
      return parseResponse(client.exports.activity.$post(args, options))
    },
  })
}

export function createPostExportsActivity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.exports.activity.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.exports.activity.$post>,
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
    const mutationDefaults = getPostExportsActivityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsListMutationKey() {
  return ['ips', '/ips/list', 'POST'] as const
}

export function getPostIpsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.list.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.list.$post>) {
      return parseResponse(client.ips.list.$post(args, options))
    },
  })
}

export function createPostIpsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ips.list.$post>,
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
    const mutationDefaults = getPostIpsListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsInfoMutationKey() {
  return ['ips', '/ips/info', 'POST'] as const
}

export function getPostIpsInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.info.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.info.$post>) {
      return parseResponse(client.ips.info.$post(args, options))
    },
  })
}

export function createPostIpsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ips.info.$post>,
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
    const mutationDefaults = getPostIpsInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsProvisionMutationKey() {
  return ['ips', '/ips/provision', 'POST'] as const
}

export function getPostIpsProvisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.provision.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ips.provision.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsProvisionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.provision.$post>) {
      return parseResponse(client.ips.provision.$post(args, options))
    },
  })
}

export function createPostIpsProvision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.provision.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ips.provision.$post>,
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
    const mutationDefaults = getPostIpsProvisionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsStartWarmupMutationKey() {
  return ['ips', '/ips/start-warmup', 'POST'] as const
}

export function getPostIpsStartWarmupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['start-warmup']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['start-warmup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsStartWarmupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['start-warmup']['$post']>) {
      return parseResponse(client.ips['start-warmup'].$post(args, options))
    },
  })
}

export function createPostIpsStartWarmup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['start-warmup']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['start-warmup']['$post']>,
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
    const mutationDefaults = getPostIpsStartWarmupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsCancelWarmupMutationKey() {
  return ['ips', '/ips/cancel-warmup', 'POST'] as const
}

export function getPostIpsCancelWarmupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['cancel-warmup']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['cancel-warmup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsCancelWarmupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['cancel-warmup']['$post']>) {
      return parseResponse(client.ips['cancel-warmup'].$post(args, options))
    },
  })
}

export function createPostIpsCancelWarmup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['cancel-warmup']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['cancel-warmup']['$post']>,
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
    const mutationDefaults = getPostIpsCancelWarmupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsSetPoolMutationKey() {
  return ['ips', '/ips/set-pool', 'POST'] as const
}

export function getPostIpsSetPoolMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['set-pool']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['set-pool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsSetPoolMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['set-pool']['$post']>) {
      return parseResponse(client.ips['set-pool'].$post(args, options))
    },
  })
}

export function createPostIpsSetPool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['set-pool']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['set-pool']['$post']>,
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
    const mutationDefaults = getPostIpsSetPoolMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsDeleteMutationKey() {
  return ['ips', '/ips/delete', 'POST'] as const
}

export function getPostIpsDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.delete.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.delete.$post>) {
      return parseResponse(client.ips.delete.$post(args, options))
    },
  })
}

export function createPostIpsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ips.delete.$post>,
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
    const mutationDefaults = getPostIpsDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsListPoolsMutationKey() {
  return ['ips', '/ips/list-pools', 'POST'] as const
}

export function getPostIpsListPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['list-pools']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['list-pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsListPoolsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['list-pools']['$post']>) {
      return parseResponse(client.ips['list-pools'].$post(args, options))
    },
  })
}

export function createPostIpsListPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['list-pools']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['list-pools']['$post']>,
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
    const mutationDefaults = getPostIpsListPoolsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsPoolInfoMutationKey() {
  return ['ips', '/ips/pool-info', 'POST'] as const
}

export function getPostIpsPoolInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['pool-info']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['pool-info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsPoolInfoMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['pool-info']['$post']>) {
      return parseResponse(client.ips['pool-info'].$post(args, options))
    },
  })
}

export function createPostIpsPoolInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['pool-info']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['pool-info']['$post']>,
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
    const mutationDefaults = getPostIpsPoolInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsCreatePoolMutationKey() {
  return ['ips', '/ips/create-pool', 'POST'] as const
}

export function getPostIpsCreatePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['create-pool']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['create-pool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsCreatePoolMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['create-pool']['$post']>) {
      return parseResponse(client.ips['create-pool'].$post(args, options))
    },
  })
}

export function createPostIpsCreatePool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['create-pool']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['create-pool']['$post']>,
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
    const mutationDefaults = getPostIpsCreatePoolMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsDeletePoolMutationKey() {
  return ['ips', '/ips/delete-pool', 'POST'] as const
}

export function getPostIpsDeletePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['delete-pool']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['delete-pool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsDeletePoolMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['delete-pool']['$post']>) {
      return parseResponse(client.ips['delete-pool'].$post(args, options))
    },
  })
}

export function createPostIpsDeletePool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['delete-pool']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['delete-pool']['$post']>,
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
    const mutationDefaults = getPostIpsDeletePoolMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsCheckCustomDnsMutationKey() {
  return ['ips', '/ips/check-custom-dns', 'POST'] as const
}

export function getPostIpsCheckCustomDnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['check-custom-dns']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['check-custom-dns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsCheckCustomDnsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['check-custom-dns']['$post']>) {
      return parseResponse(client.ips['check-custom-dns'].$post(args, options))
    },
  })
}

export function createPostIpsCheckCustomDns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ips)['check-custom-dns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['check-custom-dns']['$post']>,
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
    const mutationDefaults = getPostIpsCheckCustomDnsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIpsSetCustomDnsMutationKey() {
  return ['ips', '/ips/set-custom-dns', 'POST'] as const
}

export function getPostIpsSetCustomDnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['set-custom-dns']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ips)['set-custom-dns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsSetCustomDnsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)['set-custom-dns']['$post']>) {
      return parseResponse(client.ips['set-custom-dns'].$post(args, options))
    },
  })
}

export function createPostIpsSetCustomDns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ips)['set-custom-dns']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)['set-custom-dns']['$post']>,
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
    const mutationDefaults = getPostIpsSetCustomDnsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundDomainsMutationKey() {
  return ['inbound', '/inbound/domains', 'POST'] as const
}

export function getPostInboundDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.domains.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inbound.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inbound.domains.$post>) {
      return parseResponse(client.inbound.domains.$post(args, options))
    },
  })
}

export function createPostInboundDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.domains.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.inbound.domains.$post>,
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
    const mutationDefaults = getPostInboundDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundAddDomainMutationKey() {
  return ['inbound', '/inbound/add-domain', 'POST'] as const
}

export function getPostInboundAddDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['add-domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbound)['add-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundAddDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbound)['add-domain']['$post']>) {
      return parseResponse(client.inbound['add-domain'].$post(args, options))
    },
  })
}

export function createPostInboundAddDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inbound)['add-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inbound)['add-domain']['$post']>,
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
    const mutationDefaults = getPostInboundAddDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundCheckDomainMutationKey() {
  return ['inbound', '/inbound/check-domain', 'POST'] as const
}

export function getPostInboundCheckDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['check-domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbound)['check-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundCheckDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbound)['check-domain']['$post']>) {
      return parseResponse(client.inbound['check-domain'].$post(args, options))
    },
  })
}

export function createPostInboundCheckDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inbound)['check-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inbound)['check-domain']['$post']>,
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
    const mutationDefaults = getPostInboundCheckDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundDeleteDomainMutationKey() {
  return ['inbound', '/inbound/delete-domain', 'POST'] as const
}

export function getPostInboundDeleteDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['delete-domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbound)['delete-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundDeleteDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbound)['delete-domain']['$post']>) {
      return parseResponse(client.inbound['delete-domain'].$post(args, options))
    },
  })
}

export function createPostInboundDeleteDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inbound)['delete-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inbound)['delete-domain']['$post']>,
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
    const mutationDefaults = getPostInboundDeleteDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundRoutesMutationKey() {
  return ['inbound', '/inbound/routes', 'POST'] as const
}

export function getPostInboundRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.routes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inbound.routes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundRoutesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inbound.routes.$post>) {
      return parseResponse(client.inbound.routes.$post(args, options))
    },
  })
}

export function createPostInboundRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.routes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.inbound.routes.$post>,
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
    const mutationDefaults = getPostInboundRoutesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundAddRouteMutationKey() {
  return ['inbound', '/inbound/add-route', 'POST'] as const
}

export function getPostInboundAddRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['add-route']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbound)['add-route']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundAddRouteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbound)['add-route']['$post']>) {
      return parseResponse(client.inbound['add-route'].$post(args, options))
    },
  })
}

export function createPostInboundAddRoute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['add-route']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.inbound)['add-route']['$post']>,
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
    const mutationDefaults = getPostInboundAddRouteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundUpdateRouteMutationKey() {
  return ['inbound', '/inbound/update-route', 'POST'] as const
}

export function getPostInboundUpdateRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['update-route']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbound)['update-route']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundUpdateRouteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbound)['update-route']['$post']>) {
      return parseResponse(client.inbound['update-route'].$post(args, options))
    },
  })
}

export function createPostInboundUpdateRoute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inbound)['update-route']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inbound)['update-route']['$post']>,
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
    const mutationDefaults = getPostInboundUpdateRouteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundDeleteRouteMutationKey() {
  return ['inbound', '/inbound/delete-route', 'POST'] as const
}

export function getPostInboundDeleteRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['delete-route']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbound)['delete-route']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundDeleteRouteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbound)['delete-route']['$post']>) {
      return parseResponse(client.inbound['delete-route'].$post(args, options))
    },
  })
}

export function createPostInboundDeleteRoute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.inbound)['delete-route']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.inbound)['delete-route']['$post']>,
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
    const mutationDefaults = getPostInboundDeleteRouteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInboundSendRawMutationKey() {
  return ['inbound', '/inbound/send-raw', 'POST'] as const
}

export function getPostInboundSendRawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['send-raw']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inbound)['send-raw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInboundSendRawMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inbound)['send-raw']['$post']>) {
      return parseResponse(client.inbound['send-raw'].$post(args, options))
    },
  })
}

export function createPostInboundSendRaw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['send-raw']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.inbound)['send-raw']['$post']>,
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
    const mutationDefaults = getPostInboundSendRawMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMctemplatesInfoMutationKey() {
  return ['mctemplates', '/mctemplates/info', 'POST'] as const
}

export function getPostMctemplatesInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mctemplates.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMctemplatesInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mctemplates.info.$post>) {
      return parseResponse(client.mctemplates.info.$post(args, options))
    },
  })
}

export function createPostMctemplatesInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.info.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mctemplates.info.$post>,
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
    const mutationDefaults = getPostMctemplatesInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMctemplatesListMutationKey() {
  return ['mctemplates', '/mctemplates/list', 'POST'] as const
}

export function getPostMctemplatesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mctemplates.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMctemplatesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mctemplates.list.$post>) {
      return parseResponse(client.mctemplates.list.$post(args, options))
    },
  })
}

export function createPostMctemplatesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mctemplates.list.$post>,
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
    const mutationDefaults = getPostMctemplatesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMctemplatesRenderMutationKey() {
  return ['mctemplates', '/mctemplates/render', 'POST'] as const
}

export function getPostMctemplatesRenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.render.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mctemplates.render.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMctemplatesRenderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mctemplates.render.$post>) {
      return parseResponse(client.mctemplates.render.$post(args, options))
    },
  })
}

export function createPostMctemplatesRender<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.render.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mctemplates.render.$post>,
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
    const mutationDefaults = getPostMctemplatesRenderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMctemplatesTimeSeriesMutationKey() {
  return ['mctemplates', '/mctemplates/time-series', 'POST'] as const
}

export function getPostMctemplatesTimeSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mctemplates)['time-series']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mctemplates)['time-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMctemplatesTimeSeriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mctemplates)['time-series']['$post']>) {
      return parseResponse(client.mctemplates['time-series'].$post(args, options))
    },
  })
}

export function createPostMctemplatesTimeSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mctemplates)['time-series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mctemplates)['time-series']['$post']>,
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
    const mutationDefaults = getPostMctemplatesTimeSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesSendMutationKey() {
  return ['messages', '/messages/send', 'POST'] as const
}

export function getPostMessagesSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.send.$post>) {
      return parseResponse(client.messages.send.$post(args, options))
    },
  })
}

export function createPostMessagesSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.send.$post>,
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
    const mutationDefaults = getPostMessagesSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesSendTemplateMutationKey() {
  return ['messages', '/messages/send-template', 'POST'] as const
}

export function getPostMessagesSendTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['send-template']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)['send-template']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesSendTemplateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)['send-template']['$post']>) {
      return parseResponse(client.messages['send-template'].$post(args, options))
    },
  })
}

export function createPostMessagesSendTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)['send-template']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)['send-template']['$post']>,
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
    const mutationDefaults = getPostMessagesSendTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesSendMcTemplateMutationKey() {
  return ['messages', '/messages/send-mc-template', 'POST'] as const
}

export function getPostMessagesSendMcTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['send-mc-template']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)['send-mc-template']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesSendMcTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)['send-mc-template']['$post']>,
    ) {
      return parseResponse(client.messages['send-mc-template'].$post(args, options))
    },
  })
}

export function createPostMessagesSendMcTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)['send-mc-template']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)['send-mc-template']['$post']>,
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
    const mutationDefaults = getPostMessagesSendMcTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesSearchMutationKey() {
  return ['messages', '/messages/search', 'POST'] as const
}

export function getPostMessagesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.search.$post>) {
      return parseResponse(client.messages.search.$post(args, options))
    },
  })
}

export function createPostMessagesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.search.$post>,
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
    const mutationDefaults = getPostMessagesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesSearchTimeSeriesMutationKey() {
  return ['messages', '/messages/search-time-series', 'POST'] as const
}

export function getPostMessagesSearchTimeSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['search-time-series']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)['search-time-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesSearchTimeSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)['search-time-series']['$post']>,
    ) {
      return parseResponse(client.messages['search-time-series'].$post(args, options))
    },
  })
}

export function createPostMessagesSearchTimeSeries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)['search-time-series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)['search-time-series']['$post']>,
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
    const mutationDefaults = getPostMessagesSearchTimeSeriesMutationOptions<
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

export function getPostMessagesInfoMutationKey() {
  return ['messages', '/messages/info', 'POST'] as const
}

export function getPostMessagesInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.info.$post>) {
      return parseResponse(client.messages.info.$post(args, options))
    },
  })
}

export function createPostMessagesInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.info.$post>,
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
    const mutationDefaults = getPostMessagesInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesContentMutationKey() {
  return ['messages', '/messages/content', 'POST'] as const
}

export function getPostMessagesContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.content.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.content.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesContentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.content.$post>) {
      return parseResponse(client.messages.content.$post(args, options))
    },
  })
}

export function createPostMessagesContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.content.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messages.content.$post>,
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
    const mutationDefaults = getPostMessagesContentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesParseMutationKey() {
  return ['messages', '/messages/parse', 'POST'] as const
}

export function getPostMessagesParseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.parse.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.parse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesParseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.parse.$post>) {
      return parseResponse(client.messages.parse.$post(args, options))
    },
  })
}

export function createPostMessagesParse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.parse.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.messages.parse.$post>,
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
    const mutationDefaults = getPostMessagesParseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesSendRawMutationKey() {
  return ['messages', '/messages/send-raw', 'POST'] as const
}

export function getPostMessagesSendRawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)['send-raw']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)['send-raw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesSendRawMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)['send-raw']['$post']>) {
      return parseResponse(client.messages['send-raw'].$post(args, options))
    },
  })
}

export function createPostMessagesSendRaw<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.messages)['send-raw']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)['send-raw']['$post']>,
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
    const mutationDefaults = getPostMessagesSendRawMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesListScheduledMutationKey() {
  return ['messages', '/messages/list-scheduled', 'POST'] as const
}

export function getPostMessagesListScheduledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['list-scheduled']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)['list-scheduled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesListScheduledMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)['list-scheduled']['$post']>) {
      return parseResponse(client.messages['list-scheduled'].$post(args, options))
    },
  })
}

export function createPostMessagesListScheduled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)['list-scheduled']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)['list-scheduled']['$post']>,
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
    const mutationDefaults = getPostMessagesListScheduledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesCancelScheduledMutationKey() {
  return ['messages', '/messages/cancel-scheduled', 'POST'] as const
}

export function getPostMessagesCancelScheduledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['cancel-scheduled']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)['cancel-scheduled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesCancelScheduledMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)['cancel-scheduled']['$post']>,
    ) {
      return parseResponse(client.messages['cancel-scheduled'].$post(args, options))
    },
  })
}

export function createPostMessagesCancelScheduled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.messages)['cancel-scheduled']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)['cancel-scheduled']['$post']>,
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
    const mutationDefaults = getPostMessagesCancelScheduledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesRescheduleMutationKey() {
  return ['messages', '/messages/reschedule', 'POST'] as const
}

export function getPostMessagesRescheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.reschedule.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messages.reschedule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesRescheduleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.reschedule.$post>) {
      return parseResponse(client.messages.reschedule.$post(args, options))
    },
  })
}

export function createPostMessagesReschedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messages.reschedule.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messages.reschedule.$post>,
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
    const mutationDefaults = getPostMessagesRescheduleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesSendSmsMutationKey() {
  return ['messages', '/messages/send-sms', 'POST'] as const
}

export function getPostMessagesSendSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)['send-sms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)['send-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesSendSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)['send-sms']['$post']>) {
      return parseResponse(client.messages['send-sms'].$post(args, options))
    },
  })
}

export function createPostMessagesSendSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.messages)['send-sms']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.messages)['send-sms']['$post']>,
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
    const mutationDefaults = getPostMessagesSendSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMetadataListMutationKey() {
  return ['metadata', '/metadata/list', 'POST'] as const
}

export function getPostMetadataListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metadata.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.list.$post>) {
      return parseResponse(client.metadata.list.$post(args, options))
    },
  })
}

export function createPostMetadataList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.metadata.list.$post>,
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
    const mutationDefaults = getPostMetadataListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMetadataAddMutationKey() {
  return ['metadata', '/metadata/add', 'POST'] as const
}

export function getPostMetadataAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metadata.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.add.$post>) {
      return parseResponse(client.metadata.add.$post(args, options))
    },
  })
}

export function createPostMetadataAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.metadata.add.$post>,
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
    const mutationDefaults = getPostMetadataAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMetadataUpdateMutationKey() {
  return ['metadata', '/metadata/update', 'POST'] as const
}

export function getPostMetadataUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metadata.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.update.$post>) {
      return parseResponse(client.metadata.update.$post(args, options))
    },
  })
}

export function createPostMetadataUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.update.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.metadata.update.$post>,
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
    const mutationDefaults = getPostMetadataUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMetadataDeleteMutationKey() {
  return ['metadata', '/metadata/delete', 'POST'] as const
}

export function getPostMetadataDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.metadata.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.delete.$post>) {
      return parseResponse(client.metadata.delete.$post(args, options))
    },
  })
}

export function createPostMetadataDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.metadata.delete.$post>,
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
    const mutationDefaults = getPostMetadataDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRejectsAddMutationKey() {
  return ['rejects', '/rejects/add', 'POST'] as const
}

export function getPostRejectsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.add.$post>>>>>,
    TError,
    InferRequestType<typeof client.rejects.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRejectsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rejects.add.$post>) {
      return parseResponse(client.rejects.add.$post(args, options))
    },
  })
}

export function createPostRejectsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.rejects.add.$post>,
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
    const mutationDefaults = getPostRejectsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRejectsAddSmsMutationKey() {
  return ['rejects', '/rejects/add-sms', 'POST'] as const
}

export function getPostRejectsAddSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['add-sms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rejects)['add-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRejectsAddSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rejects)['add-sms']['$post']>) {
      return parseResponse(client.rejects['add-sms'].$post(args, options))
    },
  })
}

export function createPostRejectsAddSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['add-sms']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rejects)['add-sms']['$post']>,
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
    const mutationDefaults = getPostRejectsAddSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRejectsListMutationKey() {
  return ['rejects', '/rejects/list', 'POST'] as const
}

export function getPostRejectsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rejects.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRejectsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rejects.list.$post>) {
      return parseResponse(client.rejects.list.$post(args, options))
    },
  })
}

export function createPostRejectsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.rejects.list.$post>,
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
    const mutationDefaults = getPostRejectsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRejectsListSmsMutationKey() {
  return ['rejects', '/rejects/list-sms', 'POST'] as const
}

export function getPostRejectsListSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['list-sms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rejects)['list-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRejectsListSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rejects)['list-sms']['$post']>) {
      return parseResponse(client.rejects['list-sms'].$post(args, options))
    },
  })
}

export function createPostRejectsListSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['list-sms']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rejects)['list-sms']['$post']>,
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
    const mutationDefaults = getPostRejectsListSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRejectsDeleteMutationKey() {
  return ['rejects', '/rejects/delete', 'POST'] as const
}

export function getPostRejectsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rejects.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRejectsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rejects.delete.$post>) {
      return parseResponse(client.rejects.delete.$post(args, options))
    },
  })
}

export function createPostRejectsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.rejects.delete.$post>,
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
    const mutationDefaults = getPostRejectsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRejectsDeleteSmsMutationKey() {
  return ['rejects', '/rejects/delete-sms', 'POST'] as const
}

export function getPostRejectsDeleteSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['delete-sms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rejects)['delete-sms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRejectsDeleteSmsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rejects)['delete-sms']['$post']>) {
      return parseResponse(client.rejects['delete-sms'].$post(args, options))
    },
  })
}

export function createPostRejectsDeleteSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rejects)['delete-sms']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rejects)['delete-sms']['$post']>,
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
    const mutationDefaults = getPostRejectsDeleteSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersListMutationKey() {
  return ['senders', '/senders/list', 'POST'] as const
}

export function getPostSendersListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.senders.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.senders.list.$post>) {
      return parseResponse(client.senders.list.$post(args, options))
    },
  })
}

export function createPostSendersList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.senders.list.$post>,
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
    const mutationDefaults = getPostSendersListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersDomainsMutationKey() {
  return ['senders', '/senders/domains', 'POST'] as const
}

export function getPostSendersDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.senders.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.senders.domains.$post>) {
      return parseResponse(client.senders.domains.$post(args, options))
    },
  })
}

export function createPostSendersDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.senders.domains.$post>,
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
    const mutationDefaults = getPostSendersDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersAddDomainMutationKey() {
  return ['senders', '/senders/add-domain', 'POST'] as const
}

export function getPostSendersAddDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['add-domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.senders)['add-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersAddDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)['add-domain']['$post']>) {
      return parseResponse(client.senders['add-domain'].$post(args, options))
    },
  })
}

export function createPostSendersAddDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.senders)['add-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.senders)['add-domain']['$post']>,
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
    const mutationDefaults = getPostSendersAddDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersCheckDomainMutationKey() {
  return ['senders', '/senders/check-domain', 'POST'] as const
}

export function getPostSendersCheckDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['check-domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.senders)['check-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersCheckDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)['check-domain']['$post']>) {
      return parseResponse(client.senders['check-domain'].$post(args, options))
    },
  })
}

export function createPostSendersCheckDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.senders)['check-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.senders)['check-domain']['$post']>,
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
    const mutationDefaults = getPostSendersCheckDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersVerifyDomainMutationKey() {
  return ['senders', '/senders/verify-domain', 'POST'] as const
}

export function getPostSendersVerifyDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['verify-domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.senders)['verify-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersVerifyDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)['verify-domain']['$post']>) {
      return parseResponse(client.senders['verify-domain'].$post(args, options))
    },
  })
}

export function createPostSendersVerifyDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.senders)['verify-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.senders)['verify-domain']['$post']>,
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
    const mutationDefaults = getPostSendersVerifyDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersInfoMutationKey() {
  return ['senders', '/senders/info', 'POST'] as const
}

export function getPostSendersInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.senders.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.senders.info.$post>) {
      return parseResponse(client.senders.info.$post(args, options))
    },
  })
}

export function createPostSendersInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.senders.info.$post>,
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
    const mutationDefaults = getPostSendersInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersTimeSeriesMutationKey() {
  return ['senders', '/senders/time-series', 'POST'] as const
}

export function getPostSendersTimeSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['time-series']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.senders)['time-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersTimeSeriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)['time-series']['$post']>) {
      return parseResponse(client.senders['time-series'].$post(args, options))
    },
  })
}

export function createPostSendersTimeSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.senders)['time-series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.senders)['time-series']['$post']>,
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
    const mutationDefaults = getPostSendersTimeSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSendersDeleteDomainMutationKey() {
  return ['senders', '/senders/delete-domain', 'POST'] as const
}

export function getPostSendersDeleteDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['delete-domain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.senders)['delete-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersDeleteDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)['delete-domain']['$post']>) {
      return parseResponse(client.senders['delete-domain'].$post(args, options))
    },
  })
}

export function createPostSendersDeleteDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.senders)['delete-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.senders)['delete-domain']['$post']>,
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
    const mutationDefaults = getPostSendersDeleteDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubaccountsListMutationKey() {
  return ['subaccounts', '/subaccounts/list', 'POST'] as const
}

export function getPostSubaccountsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subaccounts.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.list.$post>) {
      return parseResponse(client.subaccounts.list.$post(args, options))
    },
  })
}

export function createPostSubaccountsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subaccounts.list.$post>,
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
    const mutationDefaults = getPostSubaccountsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubaccountsAddMutationKey() {
  return ['subaccounts', '/subaccounts/add', 'POST'] as const
}

export function getPostSubaccountsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subaccounts.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.add.$post>) {
      return parseResponse(client.subaccounts.add.$post(args, options))
    },
  })
}

export function createPostSubaccountsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subaccounts.add.$post>,
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
    const mutationDefaults = getPostSubaccountsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubaccountsInfoMutationKey() {
  return ['subaccounts', '/subaccounts/info', 'POST'] as const
}

export function getPostSubaccountsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subaccounts.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.info.$post>) {
      return parseResponse(client.subaccounts.info.$post(args, options))
    },
  })
}

export function createPostSubaccountsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.info.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subaccounts.info.$post>,
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
    const mutationDefaults = getPostSubaccountsInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubaccountsUpdateMutationKey() {
  return ['subaccounts', '/subaccounts/update', 'POST'] as const
}

export function getPostSubaccountsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subaccounts.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.update.$post>) {
      return parseResponse(client.subaccounts.update.$post(args, options))
    },
  })
}

export function createPostSubaccountsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subaccounts.update.$post>,
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
    const mutationDefaults = getPostSubaccountsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubaccountsDeleteMutationKey() {
  return ['subaccounts', '/subaccounts/delete', 'POST'] as const
}

export function getPostSubaccountsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subaccounts.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.delete.$post>) {
      return parseResponse(client.subaccounts.delete.$post(args, options))
    },
  })
}

export function createPostSubaccountsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subaccounts.delete.$post>,
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
    const mutationDefaults = getPostSubaccountsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubaccountsPauseMutationKey() {
  return ['subaccounts', '/subaccounts/pause', 'POST'] as const
}

export function getPostSubaccountsPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.pause.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subaccounts.pause.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsPauseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.pause.$post>) {
      return parseResponse(client.subaccounts.pause.$post(args, options))
    },
  })
}

export function createPostSubaccountsPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.pause.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subaccounts.pause.$post>,
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
    const mutationDefaults = getPostSubaccountsPauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubaccountsResumeMutationKey() {
  return ['subaccounts', '/subaccounts/resume', 'POST'] as const
}

export function getPostSubaccountsResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.resume.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subaccounts.resume.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountsResumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccounts.resume.$post>) {
      return parseResponse(client.subaccounts.resume.$post(args, options))
    },
  })
}

export function createPostSubaccountsResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.resume.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subaccounts.resume.$post>,
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
    const mutationDefaults = getPostSubaccountsResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsListMutationKey() {
  return ['tags', '/tags/list', 'POST'] as const
}

export function getPostTagsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.list.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.list.$post>) {
      return parseResponse(client.tags.list.$post(args, options))
    },
  })
}

export function createPostTagsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tags.list.$post>,
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
    const mutationDefaults = getPostTagsListMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsDeleteMutationKey() {
  return ['tags', '/tags/delete', 'POST'] as const
}

export function getPostTagsDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.delete.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.delete.$post>) {
      return parseResponse(client.tags.delete.$post(args, options))
    },
  })
}

export function createPostTagsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tags.delete.$post>,
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
    const mutationDefaults = getPostTagsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsInfoMutationKey() {
  return ['tags', '/tags/info', 'POST'] as const
}

export function getPostTagsInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.info.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.info.$post>) {
      return parseResponse(client.tags.info.$post(args, options))
    },
  })
}

export function createPostTagsInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tags.info.$post>,
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
    const mutationDefaults = getPostTagsInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsTimeSeriesMutationKey() {
  return ['tags', '/tags/time-series', 'POST'] as const
}

export function getPostTagsTimeSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['time-series']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)['time-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsTimeSeriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)['time-series']['$post']>) {
      return parseResponse(client.tags['time-series'].$post(args, options))
    },
  })
}

export function createPostTagsTimeSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['time-series']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)['time-series']['$post']>,
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
    const mutationDefaults = getPostTagsTimeSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsAllTimeSeriesMutationKey() {
  return ['tags', '/tags/all-time-series', 'POST'] as const
}

export function getPostTagsAllTimeSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['all-time-series']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)['all-time-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsAllTimeSeriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)['all-time-series']['$post']>) {
      return parseResponse(client.tags['all-time-series'].$post(args, options))
    },
  })
}

export function createPostTagsAllTimeSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)['all-time-series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)['all-time-series']['$post']>,
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
    const mutationDefaults = getPostTagsAllTimeSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesAddMutationKey() {
  return ['templates', '/templates/add', 'POST'] as const
}

export function getPostTemplatesAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.add.$post>) {
      return parseResponse(client.templates.add.$post(args, options))
    },
  })
}

export function createPostTemplatesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.add.$post>,
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
    const mutationDefaults = getPostTemplatesAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesInfoMutationKey() {
  return ['templates', '/templates/info', 'POST'] as const
}

export function getPostTemplatesInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.info.$post>) {
      return parseResponse(client.templates.info.$post(args, options))
    },
  })
}

export function createPostTemplatesInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.info.$post>,
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
    const mutationDefaults = getPostTemplatesInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesUpdateMutationKey() {
  return ['templates', '/templates/update', 'POST'] as const
}

export function getPostTemplatesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.update.$post>) {
      return parseResponse(client.templates.update.$post(args, options))
    },
  })
}

export function createPostTemplatesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.templates.update.$post>,
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
    const mutationDefaults = getPostTemplatesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesPublishMutationKey() {
  return ['templates', '/templates/publish', 'POST'] as const
}

export function getPostTemplatesPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.publish.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.publish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesPublishMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.publish.$post>) {
      return parseResponse(client.templates.publish.$post(args, options))
    },
  })
}

export function createPostTemplatesPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.publish.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.templates.publish.$post>,
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
    const mutationDefaults = getPostTemplatesPublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesDeleteMutationKey() {
  return ['templates', '/templates/delete', 'POST'] as const
}

export function getPostTemplatesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.delete.$post>) {
      return parseResponse(client.templates.delete.$post(args, options))
    },
  })
}

export function createPostTemplatesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.templates.delete.$post>,
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
    const mutationDefaults = getPostTemplatesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesListMutationKey() {
  return ['templates', '/templates/list', 'POST'] as const
}

export function getPostTemplatesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.list.$post>) {
      return parseResponse(client.templates.list.$post(args, options))
    },
  })
}

export function createPostTemplatesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.list.$post>,
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
    const mutationDefaults = getPostTemplatesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesTimeSeriesMutationKey() {
  return ['templates', '/templates/time-series', 'POST'] as const
}

export function getPostTemplatesTimeSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)['time-series']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)['time-series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTimeSeriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)['time-series']['$post']>) {
      return parseResponse(client.templates['time-series'].$post(args, options))
    },
  })
}

export function createPostTemplatesTimeSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)['time-series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)['time-series']['$post']>,
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
    const mutationDefaults = getPostTemplatesTimeSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTemplatesRenderMutationKey() {
  return ['templates', '/templates/render', 'POST'] as const
}

export function getPostTemplatesRenderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.render.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.render.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesRenderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.render.$post>) {
      return parseResponse(client.templates.render.$post(args, options))
    },
  })
}

export function createPostTemplatesRender<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.render.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.templates.render.$post>,
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
    const mutationDefaults = getPostTemplatesRenderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUrlsTrackingDomainsMutationKey() {
  return ['urls', '/urls/tracking-domains', 'POST'] as const
}

export function getPostUrlsTrackingDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.urls)['tracking-domains']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.urls)['tracking-domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUrlsTrackingDomainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.urls)['tracking-domains']['$post']>) {
      return parseResponse(client.urls['tracking-domains'].$post(args, options))
    },
  })
}

export function createPostUrlsTrackingDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.urls)['tracking-domains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.urls)['tracking-domains']['$post']>,
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
    const mutationDefaults = getPostUrlsTrackingDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUrlsAddTrackingDomainMutationKey() {
  return ['urls', '/urls/add-tracking-domain', 'POST'] as const
}

export function getPostUrlsAddTrackingDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.urls)['add-tracking-domain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.urls)['add-tracking-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUrlsAddTrackingDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.urls)['add-tracking-domain']['$post']>) {
      return parseResponse(client.urls['add-tracking-domain'].$post(args, options))
    },
  })
}

export function createPostUrlsAddTrackingDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.urls)['add-tracking-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.urls)['add-tracking-domain']['$post']>,
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
    const mutationDefaults = getPostUrlsAddTrackingDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUrlsCheckTrackingDomainMutationKey() {
  return ['urls', '/urls/check-tracking-domain', 'POST'] as const
}

export function getPostUrlsCheckTrackingDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.urls)['check-tracking-domain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.urls)['check-tracking-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUrlsCheckTrackingDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.urls)['check-tracking-domain']['$post']>,
    ) {
      return parseResponse(client.urls['check-tracking-domain'].$post(args, options))
    },
  })
}

export function createPostUrlsCheckTrackingDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.urls)['check-tracking-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.urls)['check-tracking-domain']['$post']>,
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
    const mutationDefaults = getPostUrlsCheckTrackingDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUrlsDeleteTrackingDomainMutationKey() {
  return ['urls', '/urls/delete-tracking-domain', 'POST'] as const
}

export function getPostUrlsDeleteTrackingDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.urls)['delete-tracking-domain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.urls)['delete-tracking-domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUrlsDeleteTrackingDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.urls)['delete-tracking-domain']['$post']>,
    ) {
      return parseResponse(client.urls['delete-tracking-domain'].$post(args, options))
    },
  })
}

export function createPostUrlsDeleteTrackingDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.urls)['delete-tracking-domain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.urls)['delete-tracking-domain']['$post']>,
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
    const mutationDefaults = getPostUrlsDeleteTrackingDomainMutationOptions<
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

export function getPostUsersInfoMutationKey() {
  return ['users', '/users/info', 'POST'] as const
}

export function getPostUsersInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.info.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.info.$post>) {
      return parseResponse(client.users.info.$post(args, options))
    },
  })
}

export function createPostUsersInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.info.$post>,
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
    const mutationDefaults = getPostUsersInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersPingMutationKey() {
  return ['users', '/users/ping', 'POST'] as const
}

export function getPostUsersPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ping.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.ping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersPingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.ping.$post>) {
      return parseResponse(client.users.ping.$post(args, options))
    },
  })
}

export function createPostUsersPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ping.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.ping.$post>,
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
    const mutationDefaults = getPostUsersPingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersPing2MutationKey() {
  return ['users', '/users/ping2', 'POST'] as const
}

export function getPostUsersPing2MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ping2.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.ping2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersPing2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.ping2.$post>) {
      return parseResponse(client.users.ping2.$post(args, options))
    },
  })
}

export function createPostUsersPing2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ping2.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.ping2.$post>,
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
    const mutationDefaults = getPostUsersPing2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersSendersMutationKey() {
  return ['users', '/users/senders', 'POST'] as const
}

export function getPostUsersSendersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.senders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.senders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.senders.$post>) {
      return parseResponse(client.users.senders.$post(args, options))
    },
  })
}

export function createPostUsersSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.senders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.senders.$post>,
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
    const mutationDefaults = getPostUsersSendersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksListMutationKey() {
  return ['webhooks', '/webhooks/list', 'POST'] as const
}

export function getPostWebhooksListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.list.$post>) {
      return parseResponse(client.webhooks.list.$post(args, options))
    },
  })
}

export function createPostWebhooksList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.list.$post>,
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
    const mutationDefaults = getPostWebhooksListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksAddMutationKey() {
  return ['webhooks', '/webhooks/add', 'POST'] as const
}

export function getPostWebhooksAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.add.$post>) {
      return parseResponse(client.webhooks.add.$post(args, options))
    },
  })
}

export function createPostWebhooksAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.add.$post>,
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
    const mutationDefaults = getPostWebhooksAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksInfoMutationKey() {
  return ['webhooks', '/webhooks/info', 'POST'] as const
}

export function getPostWebhooksInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.info.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.info.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.info.$post>) {
      return parseResponse(client.webhooks.info.$post(args, options))
    },
  })
}

export function createPostWebhooksInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.info.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.info.$post>,
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
    const mutationDefaults = getPostWebhooksInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksUpdateMutationKey() {
  return ['webhooks', '/webhooks/update', 'POST'] as const
}

export function getPostWebhooksUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.update.$post>) {
      return parseResponse(client.webhooks.update.$post(args, options))
    },
  })
}

export function createPostWebhooksUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.update.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.update.$post>,
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
    const mutationDefaults = getPostWebhooksUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksDeleteMutationKey() {
  return ['webhooks', '/webhooks/delete', 'POST'] as const
}

export function getPostWebhooksDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.delete.$post>) {
      return parseResponse(client.webhooks.delete.$post(args, options))
    },
  })
}

export function createPostWebhooksDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.delete.$post>,
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
    const mutationDefaults = getPostWebhooksDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
