import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function usePutFilesFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFilesFilenameMutationOptions<TError, TOnMutateResult>(
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
