import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePostIndexPhpOcmShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexPhpOcmSharesMutationOptions<TError, TOnMutateResult>(
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

export function usePostIndexPhpOcmNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexPhpOcmNotificationsMutationOptions<TError, TOnMutateResult>(
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
