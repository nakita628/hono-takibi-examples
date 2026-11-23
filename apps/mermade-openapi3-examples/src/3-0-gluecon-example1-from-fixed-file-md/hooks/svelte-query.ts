import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFilesKey() {
  return ['files'] as const
}

export function getPutFilesFilenameMutationKey() {
  return ['files', '/files/:filename', 'PUT'] as const
}

export function getPutFilesFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':filename']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':filename']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesFilenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':filename']['$put']>) {
      return parseResponse(client.files[':filename'].$put(args, options))
    },
  })
}

export function createPutFilesFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':filename']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':filename']['$put']>,
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
    const mutationDefaults = getPutFilesFilenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
