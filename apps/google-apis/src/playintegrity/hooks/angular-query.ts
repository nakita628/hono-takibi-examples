import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostV1PackageNameDecodeIntegrityToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PackageNameDecodeIntegrityTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
