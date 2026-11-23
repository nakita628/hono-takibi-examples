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

export function getVersionV1VersionKey() {
  return ['version.v1.Version'] as const
}

export function getPostVersionV1VersionVersionMutationKey() {
  return ['version.v1.Version', '/version.v1.Version/Version', 'POST'] as const
}

export function getPostVersionV1VersionVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['version.v1.Version']['Version']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['version.v1.Version']['Version']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionV1VersionVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['version.v1.Version']['Version']['$post']>,
    ) {
      return parseResponse(client['version.v1.Version'].Version.$post(args, options))
    },
  })
}

export function injectPostVersionV1VersionVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['version.v1.Version']['Version']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['version.v1.Version']['Version']['$post']>,
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
    const mutationDefaults = getPostVersionV1VersionVersionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
