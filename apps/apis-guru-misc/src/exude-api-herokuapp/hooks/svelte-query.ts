import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createPostExudeTypeData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExudeTypeDataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostExudeTypeFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExudeTypeFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
