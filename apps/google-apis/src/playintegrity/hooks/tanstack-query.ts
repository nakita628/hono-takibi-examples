import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1PackageNameDecodeIntegrityTokenMutationKey() {
  return ['v1', '/v1/:packageName:decodeIntegrityToken', 'POST'] as const
}

export function getPostV1PackageNameDecodeIntegrityTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackageNameDecodeIntegrityTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>,
    ) {
      return parseResponse(client.v1[':packageName:decodeIntegrityToken'].$post(args, options))
    },
  })
}

export function usePostV1PackageNameDecodeIntegrityToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1PackageNameDecodeIntegrityTokenMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
