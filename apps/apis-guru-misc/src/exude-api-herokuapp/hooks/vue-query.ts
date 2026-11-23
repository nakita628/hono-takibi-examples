import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getExudeKey() {
  return ['exude'] as const
}

export function getPostExudeTypeDataMutationKey() {
  return ['exude', '/exude/:type/data', 'POST'] as const
}

export function getPostExudeTypeDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exude)[':type']['data']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.exude)[':type']['data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExudeTypeDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.exude)[':type']['data']['$post']>) {
      return parseResponse(client.exude[':type'].data.$post(args, options))
    },
  })
}

export function usePostExudeTypeData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exude)[':type']['data']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.exude)[':type']['data']['$post']>,
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
  const mutationDefaults = getPostExudeTypeDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostExudeTypeFileMutationKey() {
  return ['exude', '/exude/:type/file', 'POST'] as const
}

export function getPostExudeTypeFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exude)[':type']['file']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.exude)[':type']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExudeTypeFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.exude)[':type']['file']['$post']>) {
      return parseResponse(client.exude[':type'].file.$post(args, options))
    },
  })
}

export function usePostExudeTypeFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exude)[':type']['file']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.exude)[':type']['file']['$post']>,
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
  const mutationDefaults = getPostExudeTypeFileMutationOptions<TError, TOnMutateResult>(
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
