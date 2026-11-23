import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormsKey() {
  return ['forms'] as const
}

export function getGetFormsKey(args: InferRequestType<typeof client.forms.$get>) {
  return ['forms', '/forms', args] as const
}

export function useGetForms<TError = unknown>(
  args: InferRequestType<typeof client.forms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.forms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetForms<TError = unknown>(
  args: InferRequestType<typeof client.forms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFormsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.forms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFormsFormNameKey(
  args: InferRequestType<(typeof client.forms)[':form_name']['$get']>,
) {
  return ['forms', '/forms/:form_name', args] as const
}

export function useGetFormsFormName<TError = unknown>(
  args: InferRequestType<(typeof client.forms)[':form_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormsFormNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forms[':form_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormsFormName<TError = unknown>(
  args: InferRequestType<(typeof client.forms)[':form_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFormsFormNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forms[':form_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
