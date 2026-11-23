import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getGetIndexPhpAppsOauth2AuthorizeKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>,
) {
  return ['index.php', '/index.php/apps/oauth2/authorize', args] as const
}

export function useGetIndexPhpAppsOauth2Authorize<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
          >
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
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsOauth2AuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.oauth2.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsOauth2Authorize<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
          >
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
    enabled !== false
      ? customKey === undefined
        ? getGetIndexPhpAppsOauth2AuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.oauth2.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIndexPhpAppsOauth2ApiV1TokenKey() {
  return ['index.php', '/index.php/apps/oauth2/api/v1/token', 'POST'] as const
}

export function usePostIndexPhpAppsOauth2ApiV1Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexPhpAppsOauth2ApiV1TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']
          >
        },
      ) => parseResponse(client['index.php'].apps.oauth2.api.v1.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
