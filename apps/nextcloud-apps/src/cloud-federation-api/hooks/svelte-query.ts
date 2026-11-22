import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getPostIndexPhpOcmSharesMutationKey() {
  return ['index.php', '/index.php/ocm/shares', 'POST'] as const
}

export function getPostIndexPhpOcmSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['ocm']['shares']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['ocm']['shares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpOcmSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['index.php']['ocm']['shares']['$post']>,
    ) {
      return parseResponse(client['index.php'].ocm.shares.$post(args, options))
    },
  })
}

export function createPostIndexPhpOcmShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['ocm']['shares']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['index.php']['ocm']['shares']['$post']>,
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
    const mutationDefaults = getPostIndexPhpOcmSharesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIndexPhpOcmNotificationsMutationKey() {
  return ['index.php', '/index.php/ocm/notifications', 'POST'] as const
}

export function getPostIndexPhpOcmNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['index.php']['ocm']['notifications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['index.php']['ocm']['notifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpOcmNotificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['index.php']['ocm']['notifications']['$post']>,
    ) {
      return parseResponse(client['index.php'].ocm.notifications.$post(args, options))
    },
  })
}

export function createPostIndexPhpOcmNotifications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['index.php']['ocm']['notifications']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['index.php']['ocm']['notifications']['$post']>,
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
    const mutationDefaults = getPostIndexPhpOcmNotificationsMutationOptions<
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
