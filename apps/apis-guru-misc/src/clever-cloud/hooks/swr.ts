import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApplicationKey() {
  return ['application'] as const
}

export function getAuthorizeKey() {
  return ['authorize'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getGithubKey() {
  return ['github'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getLogsSocketKey() {
  return ['logs-socket'] as const
}

export function getNewsfeedsKey() {
  return ['newsfeeds'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOpenapiTypeKey() {
  return ['openapi.{type}'] as const
}

export function getOrganisationsKey() {
  return ['organisations'] as const
}

export function getPasswordForgottenKey() {
  return ['password_forgotten'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getSelfKey() {
  return ['self'] as const
}

export function getSummaryKey() {
  return ['summary'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getVendorKey() {
  return ['vendor'] as const
}

export function getGetOpenapiKey() {
  return ['', '//openapi'] as const
}

export function useGetOpenapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApplicationAppIdEnvironmentKey(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
) {
  return ['application', '/application/:appId/environment', args] as const
}

export function useGetApplicationAppIdEnvironment<TError = unknown>(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
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
        ? getGetApplicationAppIdEnvironmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.application[':appId'].environment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationAppIdEnvironment<TError = unknown>(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
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
        ? getGetApplicationAppIdEnvironmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.application[':appId'].environment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApplicationAppIdEnvironmentKey() {
  return ['application', '/application/:appId/environment', 'PUT'] as const
}

export function usePutApplicationAppIdEnvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.application)[':appId']['environment']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApplicationAppIdEnvironmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.application)[':appId']['environment']['$put']> },
      ) => parseResponse(client.application[':appId'].environment.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizeKey() {
  return ['authorize', '/authorize', 'POST'] as const
}

export function usePostAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.authorize.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsEventSocketKey() {
  return ['events', '/events/event-socket'] as const
}

export function useGetEventsEventSocket<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsEventSocketKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events['event-socket'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventSocket<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsEventSocketKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events['event-socket'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGithubKey() {
  return ['github', '/github'] as const
}

export function useGetGithub<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithub<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGithubApplicationsKey() {
  return ['github', '/github/applications'] as const
}

export function useGetGithubApplications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubApplicationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.applications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubApplications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubApplicationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.applications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGithubCallbackKey(
  args: InferRequestType<typeof client.github.callback.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['github', '/github/callback', keyArgs] as const
}

export function useGetGithubCallback<TError = unknown>(
  args: InferRequestType<typeof client.github.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubCallbackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubCallback<TError = unknown>(
  args: InferRequestType<typeof client.github.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubCallbackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGithubEmailsKey() {
  return ['github', '/github/emails'] as const
}

export function useGetGithubEmails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubEmailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.emails.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubEmails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubEmailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.emails.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGithubKeysKey() {
  return ['github', '/github/keys'] as const
}

export function useGetGithubKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGithubLinkKey(args: InferRequestType<typeof client.github.link.$get>) {
  return ['github', '/github/link', args] as const
}

export function useGetGithubLink<TError = unknown>(
  args: InferRequestType<typeof client.github.link.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubLinkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubLink<TError = unknown>(
  args: InferRequestType<typeof client.github.link.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubLinkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGithubLinkKey() {
  return ['github', '/github/link', 'DELETE'] as const
}

export function useDeleteGithubLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGithubLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.github.link.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGithubLoginKey(args: InferRequestType<typeof client.github.login.$get>) {
  return ['github', '/github/login', args] as const
}

export function useGetGithubLogin<TError = unknown>(
  args: InferRequestType<typeof client.github.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubLogin<TError = unknown>(
  args: InferRequestType<typeof client.github.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGithubRedeployKey() {
  return ['github', '/github/redeploy', 'POST'] as const
}

export function usePostGithubRedeploy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.redeploy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.github.redeploy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGithubRedeployKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.github.redeploy.$post> }) =>
        parseResponse(client.github.redeploy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGithubSignupKey(args: InferRequestType<typeof client.github.signup.$get>) {
  return ['github', '/github/signup', args] as const
}

export function useGetGithubSignup<TError = unknown>(
  args: InferRequestType<typeof client.github.signup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubSignupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.signup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubSignup<TError = unknown>(
  args: InferRequestType<typeof client.github.signup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubSignupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.signup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGithubSignupKey() {
  return ['github', '/github/signup', 'POST'] as const
}

export function usePostGithubSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.github.signup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGithubSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.github.signup.$post> }) =>
        parseResponse(client.github.signup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGithubUsernameKey() {
  return ['github', '/github/username'] as const
}

export function useGetGithubUsername<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubUsernameKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.username.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGithubUsername<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGithubUsernameKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.github.username.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsSocketAppIdKey(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
) {
  return ['logs-socket', '/logs-socket/:appId', args] as const
}

export function useGetLogsSocketAppId<TError = unknown>(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
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
        ? getGetLogsSocketAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['logs-socket'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsSocketAppId<TError = unknown>(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
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
        ? getGetLogsSocketAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['logs-socket'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsDrainsKey() {
  return ['logs', '/logs/drains'] as const
}

export function useGetLogsDrains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsDrainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.drains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsDrains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsDrainsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.drains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLogsDrainsDrainIdKey() {
  return ['logs', '/logs/drains/:drainId', 'PUT'] as const
}

export function usePutLogsDrainsDrainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs.drains)[':drainId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLogsDrainsDrainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.logs.drains)[':drainId']['$put']> },
      ) => parseResponse(client.logs.drains[':drainId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsLogsChunkedAppIdKey(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
) {
  return ['logs', '/logs/logs-chunked/:appId', args] as const
}

export function useGetLogsLogsChunkedAppId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
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
        ? getGetLogsLogsChunkedAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs['logs-chunked'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsLogsChunkedAppId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
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
        ? getGetLogsLogsChunkedAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs['logs-chunked'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsLogsSocketAppIdKey(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
) {
  return ['logs', '/logs/logs-socket/:appId', args] as const
}

export function useGetLogsLogsSocketAppId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
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
        ? getGetLogsLogsSocketAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs['logs-socket'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsLogsSocketAppId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
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
        ? getGetLogsLogsSocketAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs['logs-socket'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsAppIdKey(args: InferRequestType<(typeof client.logs)[':appId']['$get']>) {
  return ['logs', '/logs/:appId', args] as const
}

export function useGetLogsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsAppIdDrainsKey(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
) {
  return ['logs', '/logs/:appId/drains', args] as const
}

export function useGetLogsAppIdDrains<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
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
        ? getGetLogsAppIdDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].drains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsAppIdDrains<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
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
        ? getGetLogsAppIdDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].drains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLogsAppIdDrainsKey() {
  return ['logs', '/logs/:appId/drains', 'POST'] as const
}

export function usePostLogsAppIdDrains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogsAppIdDrainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.logs)[':appId']['drains']['$post']> },
      ) => parseResponse(client.logs[':appId'].drains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsAppIdDrainsIdOrUrlKey(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
) {
  return ['logs', '/logs/:appId/drains/:idOrUrl', args] as const
}

export function useGetLogsAppIdDrainsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
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
        ? getGetLogsAppIdDrainsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].drains[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsAppIdDrainsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
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
        ? getGetLogsAppIdDrainsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].drains[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLogsAppIdDrainsIdOrUrlKey() {
  return ['logs', '/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function useDeleteLogsAppIdDrainsIdOrUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLogsAppIdDrainsIdOrUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>
        },
      ) => parseResponse(client.logs[':appId'].drains[':idOrUrl'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsAppIdSseKey(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
) {
  return ['logs', '/logs/:appId/sse', args] as const
}

export function useGetLogsAppIdSse<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsAppIdSseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].sse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsAppIdSse<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsAppIdSseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':appId'].sse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewsfeedsBlogKey() {
  return ['newsfeeds', '/newsfeeds/blog'] as const
}

export function useGetNewsfeedsBlog<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewsfeedsBlogKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.newsfeeds.blog.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewsfeedsBlog<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNewsfeedsBlogKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.newsfeeds.blog.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNewsfeedsEngineeringKey() {
  return ['newsfeeds', '/newsfeeds/engineering'] as const
}

export function useGetNewsfeedsEngineering<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsfeedsEngineeringKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.newsfeeds.engineering.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNewsfeedsEngineering<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNewsfeedsEngineeringKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.newsfeeds.engineering.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsEmailhooksOwnerIdKey(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
) {
  return ['notifications', '/notifications/emailhooks/:ownerId', args] as const
}

export function useGetNotificationsEmailhooksOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
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
        ? getGetNotificationsEmailhooksOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.emailhooks[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsEmailhooksOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
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
        ? getGetNotificationsEmailhooksOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.emailhooks[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsEmailhooksOwnerIdKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId', 'POST'] as const
}

export function usePostNotificationsEmailhooksOwnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsEmailhooksOwnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']> },
      ) => parseResponse(client.notifications.emailhooks[':ownerId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNotificationsEmailhooksOwnerIdIdKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'PUT'] as const
}

export function usePutNotificationsEmailhooksOwnerIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsEmailhooksOwnerIdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>
        },
      ) =>
        parseResponse(client.notifications.emailhooks[':ownerId'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationsEmailhooksOwnerIdIdKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'DELETE'] as const
}

export function useDeleteNotificationsEmailhooksOwnerIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsEmailhooksOwnerIdIdKey()
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
            (typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.notifications.emailhooks[':ownerId'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsInfoEventsKey() {
  return ['notifications', '/notifications/info/events'] as const
}

export function useGetNotificationsInfoEvents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsInfoEventsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.info.events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsInfoEvents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsInfoEventsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.info.events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsInfoWebhookformatsKey() {
  return ['notifications', '/notifications/info/webhookformats'] as const
}

export function useGetNotificationsInfoWebhookformats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsInfoWebhookformatsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.info.webhookformats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsInfoWebhookformats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsInfoWebhookformatsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.info.webhookformats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsWebhooksOwnerIdKey(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
) {
  return ['notifications', '/notifications/webhooks/:ownerId', args] as const
}

export function useGetNotificationsWebhooksOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
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
        ? getGetNotificationsWebhooksOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.webhooks[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsWebhooksOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
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
        ? getGetNotificationsWebhooksOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.webhooks[':ownerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsWebhooksOwnerIdKey() {
  return ['notifications', '/notifications/webhooks/:ownerId', 'POST'] as const
}

export function usePostNotificationsWebhooksOwnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsWebhooksOwnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']> },
      ) => parseResponse(client.notifications.webhooks[':ownerId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNotificationsWebhooksOwnerIdIdKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'PUT'] as const
}

export function usePutNotificationsWebhooksOwnerIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsWebhooksOwnerIdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>
        },
      ) => parseResponse(client.notifications.webhooks[':ownerId'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationsWebhooksOwnerIdIdKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'DELETE'] as const
}

export function useDeleteNotificationsWebhooksOwnerIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsWebhooksOwnerIdIdKey()
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
            (typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.notifications.webhooks[':ownerId'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthAccessTokenKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function usePostOauthAccessToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.access_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAccessTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.access_token.$post> }) =>
        parseResponse(client.oauth.access_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthAccessTokenQueryKey() {
  return ['oauth', '/oauth/access_token_query', 'POST'] as const
}

export function usePostOauthAccessTokenQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token_query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.access_token_query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAccessTokenQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.oauth.access_token_query.$post> },
      ) => parseResponse(client.oauth.access_token_query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthAuthorizeKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['oauth', '/oauth/authorize', keyArgs] as const
}

export function useGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthAuthorizeKey() {
  return ['oauth', '/oauth/authorize', 'POST'] as const
}

export function usePostOauthAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.authorize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.authorize.$post> }) =>
        parseResponse(client.oauth.authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthRequestTokenKey() {
  return ['oauth', '/oauth/request_token', 'POST'] as const
}

export function usePostOauthRequestToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.request_token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRequestTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.request_token.$post> }) =>
        parseResponse(client.oauth.request_token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthRequestTokenQueryKey() {
  return ['oauth', '/oauth/request_token_query', 'POST'] as const
}

export function usePostOauthRequestTokenQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token_query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.request_token_query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRequestTokenQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.oauth.request_token_query.$post> },
      ) => parseResponse(client.oauth.request_token_query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthRightsKey() {
  return ['oauth', '/oauth/rights'] as const
}

export function useGetOauthRights<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthRightsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.rights.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthRights<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthRightsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.rights.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenapiType2Key(
  args: InferRequestType<(typeof client)['openapi.{type}']['$get']>,
) {
  return ['openapi.{type}', '/openapi.{type}', args] as const
}

export function useGetOpenapiType2<TError = unknown>(
  args: InferRequestType<(typeof client)['openapi.{type}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOpenapiType2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.{type}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapiType2<TError = unknown>(
  args: InferRequestType<(typeof client)['openapi.{type}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOpenapiType2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.{type}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsKey(args: InferRequestType<typeof client.organisations.$get>) {
  return ['organisations', '/organisations', args] as const
}

export function useGetOrganisations<TError = unknown>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisations<TError = unknown>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsKey() {
  return ['organisations', '/organisations', 'POST'] as const
}

export function usePostOrganisations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organisations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organisations.$post> }) =>
        parseResponse(client.organisations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdKey(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
) {
  return ['organisations', '/organisations/:id', args] as const
}

export function useGetOrganisationsId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
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
        ? getGetOrganisationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
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
        ? getGetOrganisationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdKey() {
  return ['organisations', '/organisations/:id', 'PUT'] as const
}

export function usePutOrganisationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organisations)[':id']['$put']> },
      ) => parseResponse(client.organisations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdKey() {
  return ['organisations', '/organisations/:id', 'DELETE'] as const
}

export function useDeleteOrganisationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organisations)[':id']['$delete']> },
      ) => parseResponse(client.organisations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonprovidersKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
) {
  return ['organisations', '/organisations/:id/addonproviders', args] as const
}

export function useGetOrganisationsIdAddonproviders<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
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
        ? getGetOrganisationsIdAddonprovidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addonproviders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonproviders<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
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
        ? getGetOrganisationsIdAddonprovidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addonproviders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdAddonprovidersKey() {
  return ['organisations', '/organisations/:id/addonproviders', 'POST'] as const
}

export function usePostOrganisationsIdAddonproviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdAddonprovidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>
        },
      ) => parseResponse(client.organisations[':id'].addonproviders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonprovidersProviderIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', args] as const
}

export function useGetOrganisationsIdAddonprovidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonprovidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdAddonprovidersProviderIdKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'PUT'] as const
}

export function usePutOrganisationsIdAddonprovidersProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdAddonprovidersProviderIdKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'DELETE'] as const
}

export function useDeleteOrganisationsIdAddonprovidersProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdAddonprovidersProviderIdKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonprovidersProviderIdFeaturesKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/features', args] as const
}

export function useGetOrganisationsIdAddonprovidersProviderIdFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].features.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonprovidersProviderIdFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].features.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdAddonprovidersProviderIdFeaturesKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features',
    'POST',
  ] as const
}

export function usePostOrganisationsIdAddonprovidersProviderIdFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdAddonprovidersProviderIdFeaturesKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].features.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features/:featureId',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].features[':featureId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonprovidersProviderIdPlansKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/plans', args] as const
}

export function useGetOrganisationsIdAddonprovidersProviderIdPlans<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonprovidersProviderIdPlans<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdAddonprovidersProviderIdPlansKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/plans', 'POST'] as const
}

export function usePostOrganisationsIdAddonprovidersProviderIdPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdAddonprovidersProviderIdPlansKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonprovidersProviderIdPlansPlanIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    args,
  ] as const
}

export function useGetOrganisationsIdAddonprovidersProviderIdPlansPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdPlansPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonprovidersProviderIdPlansPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdPlansPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'PUT',
  ] as const
}

export function usePutOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'PUT',
  ] as const
}

export function usePutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
            ':featureName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
            ':featureName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonprovidersProviderIdSsoKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/sso', args] as const
}

export function useGetOrganisationsIdAddonprovidersProviderIdSso<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdSsoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].sso.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonprovidersProviderIdSso<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdSsoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].sso.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonprovidersProviderIdTagsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/tags', args] as const
}

export function useGetOrganisationsIdAddonprovidersProviderIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonprovidersProviderIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonprovidersProviderIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdAddonprovidersProviderIdTestersKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/testers', 'POST'] as const
}

export function usePostOrganisationsIdAddonprovidersProviderIdTesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdAddonprovidersProviderIdTestersKey()
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
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addonproviders[':providerId'].testers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons', args] as const
}

export function useGetOrganisationsIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
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
        ? getGetOrganisationsIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
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
        ? getGetOrganisationsIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdAddonsKey() {
  return ['organisations', '/organisations/:id/addons', 'POST'] as const
}

export function usePostOrganisationsIdAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organisations)[':id']['addons']['$post']> },
      ) => parseResponse(client.organisations[':id'].addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganisationsIdAddonsPreordersKey() {
  return ['organisations', '/organisations/:id/addons/preorders', 'POST'] as const
}

export function usePostOrganisationsIdAddonsPreorders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdAddonsPreordersKey()
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
            (typeof client.organisations)[':id']['addons']['preorders']['$post']
          >
        },
      ) => parseResponse(client.organisations[':id'].addons.preorders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId', args] as const
}

export function useGetOrganisationsIdAddonsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
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
        ? getGetOrganisationsIdAddonsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addons[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
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
        ? getGetOrganisationsIdAddonsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addons[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdAddonsAddonIdKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'PUT'] as const
}

export function usePutOrganisationsIdAddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdAddonsAddonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>
        },
      ) => parseResponse(client.organisations[':id'].addons[':addonId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdAddonsAddonIdKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'DELETE'] as const
}

export function useDeleteOrganisationsIdAddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdAddonsAddonIdKey()
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
            (typeof client.organisations)[':id']['addons'][':addonId']['$delete']
          >
        },
      ) =>
        parseResponse(client.organisations[':id'].addons[':addonId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdApplicationsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/applications', args] as const
}

export function useGetOrganisationsIdAddonsAddonIdApplications<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].applications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdApplications<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].applications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdEnvKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/env', args] as const
}

export function useGetOrganisationsIdAddonsAddonIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
            >
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
        ? getGetOrganisationsIdAddonsAddonIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addons[':addonId'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
            >
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
        ? getGetOrganisationsIdAddonsAddonIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addons[':addonId'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdInstancesKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/instances', args] as const
}

export function useGetOrganisationsIdAddonsAddonIdInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdInstancesInstanceIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addons/:addonId/instances/:instanceId',
    args,
  ] as const
}

export function useGetOrganisationsIdAddonsAddonIdInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].instances[':instanceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].instances[':instanceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdMigrationsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', args] as const
}

export function useGetOrganisationsIdAddonsAddonIdMigrations<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].migrations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdMigrations<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].migrations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdAddonsAddonIdMigrationsKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', 'POST'] as const
}

export function usePostOrganisationsIdAddonsAddonIdMigrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdAddonsAddonIdMigrationsKey()
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
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].migrations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdMigrationsMigrationIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addons/:addonId/migrations/:migrationId',
    args,
  ] as const
}

export function useGetOrganisationsIdAddonsAddonIdMigrationsMigrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdMigrationsMigrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].migrations[':migrationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdMigrationsMigrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
              >
            >
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
        ? getGetOrganisationsIdAddonsAddonIdMigrationsMigrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].migrations[':migrationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdSsoKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/sso', args] as const
}

export function useGetOrganisationsIdAddonsAddonIdSso<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
            >
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
        ? getGetOrganisationsIdAddonsAddonIdSsoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addons[':addonId'].sso.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdSso<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
            >
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
        ? getGetOrganisationsIdAddonsAddonIdSsoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].addons[':addonId'].sso.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdAddonsAddonIdTagsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/tags', args] as const
}

export function useGetOrganisationsIdAddonsAddonIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
            >
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
        ? getGetOrganisationsIdAddonsAddonIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdAddonsAddonIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
            >
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
        ? getGetOrganisationsIdAddonsAddonIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdAddonsAddonIdTagsTagKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function usePutOrganisationsIdAddonsAddonIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdAddonsAddonIdTagsTagKey()
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
            (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].tags[':tag'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdAddonsAddonIdTagsTagKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function useDeleteOrganisationsIdAddonsAddonIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdAddonsAddonIdTagsTagKey()
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
            (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].addons[':addonId'].tags[':tag'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsKey(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
) {
  return ['organisations', '/organisations/:id/applications', args] as const
}

export function useGetOrganisationsIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
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
        ? getGetOrganisationsIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
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
        ? getGetOrganisationsIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdApplicationsKey() {
  return ['organisations', '/organisations/:id/applications', 'POST'] as const
}

export function usePostOrganisationsIdApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organisations)[':id']['applications']['$post']> },
      ) => parseResponse(client.organisations[':id'].applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdKey(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
) {
  return ['organisations', '/organisations/:id/applications/:appId', args] as const
}

export function useGetOrganisationsIdApplicationsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
            >
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
        ? getGetOrganisationsIdApplicationsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].applications[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
            >
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
        ? getGetOrganisationsIdApplicationsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].applications[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['$put']
          >
        },
      ) =>
        parseResponse(client.organisations[':id'].applications[':appId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'DELETE'] as const
}

export function useDeleteOrganisationsIdApplicationsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdAddonsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/addons', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdAddons<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].addons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdAddons<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].addons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdApplicationsAppIdAddonsKey() {
  return ['organisations', '/organisations/:id/applications/:appId/addons', 'POST'] as const
}

export function usePostOrganisationsIdApplicationsAppIdAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdApplicationsAppIdAddonsKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].addons.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdAddonsEnvKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/addons/env', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdAddonsEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdAddonsEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].addons.env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdAddonsEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdAddonsEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].addons.env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/addons/:addonId',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdAddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].addons[':addonId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdBranchKey() {
  return ['organisations', '/organisations/:id/applications/:appId/branch', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppIdBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdBranchKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].branch.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdBranchesKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/branches', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].branches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdBranches<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].branches.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdBuildflavorKey() {
  return ['organisations', '/organisations/:id/applications/:appId/buildflavor', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppIdBuildflavor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdBuildflavorKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].buildflavor.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdDependenciesKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependencies', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdDependencies<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdDependencies<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdDependenciesEnvKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependencies/env', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdDependenciesEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDependenciesEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies.env.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdDependenciesEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDependenciesEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies.env.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'PUT',
  ] as const
}

export function usePutOrganisationsIdApplicationsAppIdDependenciesDependencyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdDependentsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependents', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdDependents<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDependentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdDependents<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDependentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].dependents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdDeploymentsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/deployments', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments/:deploymentId',
    args,
  ] as const
}

export function useGetOrganisationsIdApplicationsAppIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].deployments[':deploymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdDeploymentsDeploymentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].deployments[':deploymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].deployments[
            ':deploymentId'
          ].instances.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdEnvKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/env', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdEnvKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppIdEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdEnvKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].env.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdEnvEnvNameKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppIdEnvEnvName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdEnvEnvNameKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].env[':envName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'DELETE'] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdEnvEnvName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].env[':envName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdExposedEnvKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/exposed_env', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdExposedEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdExposedEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].exposed_env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdExposedEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdExposedEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].exposed_env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdExposedEnvKey() {
  return ['organisations', '/organisations/:id/applications/:appId/exposed_env', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppIdExposedEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdExposedEnvKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].exposed_env.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdInstancesKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/instances', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdApplicationsAppIdInstancesKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'POST'] as const
}

export function usePostOrganisationsIdApplicationsAppIdInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdApplicationsAppIdInstancesKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].instances.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdInstancesKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'DELETE'] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdInstancesKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].instances.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdInstancesInstanceIdKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/instances/:instanceId',
    args,
  ] as const
}

export function useGetOrganisationsIdApplicationsAppIdInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].instances[':instanceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdInstancesInstanceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].instances[':instanceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdTagsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/tags', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdTagsTagKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdTagsTagKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].tags[':tag'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdTagsTagKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdTagsTagKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].tags[':tag'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdVhostsKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdVhosts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdVhostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdVhosts<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdVhostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdApplicationsAppIdVhostsFavouriteKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts/favourite', args] as const
}

export function useGetOrganisationsIdApplicationsAppIdVhostsFavourite<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdVhostsFavouriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.favourite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdApplicationsAppIdVhostsFavourite<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
              >
            >
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
        ? getGetOrganisationsIdApplicationsAppIdVhostsFavouriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.favourite.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdVhostsFavouriteKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'PUT',
  ] as const
}

export function usePutOrganisationsIdApplicationsAppIdVhostsFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdVhostsFavouriteKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.favourite.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdVhostsFavourite<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts.favourite.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganisationsIdApplicationsAppIdVhostsDomainKey() {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function usePutOrganisationsIdApplicationsAppIdVhostsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdApplicationsAppIdVhostsDomainKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts[':domain'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsDomainKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/:domain',
    'DELETE',
  ] as const
}

export function useDeleteOrganisationsIdApplicationsAppIdVhostsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdApplicationsAppIdVhostsDomainKey()
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
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].applications[':appId'].vhosts[':domain'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganisationsIdAvatarKey() {
  return ['organisations', '/organisations/:id/avatar', 'PUT'] as const
}

export function usePutOrganisationsIdAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['avatar']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']> },
      ) => parseResponse(client.organisations[':id'].avatar.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdConsumersKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumers', args] as const
}

export function useGetOrganisationsIdConsumers<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
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
        ? getGetOrganisationsIdConsumersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].consumers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdConsumers<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
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
        ? getGetOrganisationsIdConsumersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].consumers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdConsumersKey() {
  return ['organisations', '/organisations/:id/consumers', 'POST'] as const
}

export function usePostOrganisationsIdConsumers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdConsumersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']> },
      ) => parseResponse(client.organisations[':id'].consumers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdConsumersKeyKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumers/:key', args] as const
}

export function useGetOrganisationsIdConsumersKey<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
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
        ? getGetOrganisationsIdConsumersKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].consumers[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdConsumersKey<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
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
        ? getGetOrganisationsIdConsumersKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].consumers[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdConsumersKeyKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'PUT'] as const
}

export function usePutOrganisationsIdConsumersKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdConsumersKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>
        },
      ) => parseResponse(client.organisations[':id'].consumers[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdConsumersKeyKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'DELETE'] as const
}

export function useDeleteOrganisationsIdConsumersKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdConsumersKeyKey()
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
            (typeof client.organisations)[':id']['consumers'][':key']['$delete']
          >
        },
      ) => parseResponse(client.organisations[':id'].consumers[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdConsumersKeySecretKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/consumers/:key/secret', args] as const
}

export function useGetOrganisationsIdConsumersKeySecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
              >
            >
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
        ? getGetOrganisationsIdConsumersKeySecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].consumers[':key'].secret.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdConsumersKeySecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
              >
            >
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
        ? getGetOrganisationsIdConsumersKeySecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].consumers[':key'].secret.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdConsumptionsKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumptions', args] as const
}

export function useGetOrganisationsIdConsumptions<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
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
        ? getGetOrganisationsIdConsumptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].consumptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdConsumptions<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
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
        ? getGetOrganisationsIdConsumptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].consumptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdCreditsKey(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
) {
  return ['organisations', '/organisations/:id/credits', args] as const
}

export function useGetOrganisationsIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
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
        ? getGetOrganisationsIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdCredits<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
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
        ? getGetOrganisationsIdCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdDeploymentsKey(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
) {
  return ['organisations', '/organisations/:id/deployments', args] as const
}

export function useGetOrganisationsIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
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
        ? getGetOrganisationsIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
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
        ? getGetOrganisationsIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdInstancesKey(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
) {
  return ['organisations', '/organisations/:id/instances', args] as const
}

export function useGetOrganisationsIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
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
        ? getGetOrganisationsIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
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
        ? getGetOrganisationsIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdMembersKey(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
) {
  return ['organisations', '/organisations/:id/members', args] as const
}

export function useGetOrganisationsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
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
        ? getGetOrganisationsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
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
        ? getGetOrganisationsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdMembersKey() {
  return ['organisations', '/organisations/:id/members', 'POST'] as const
}

export function usePostOrganisationsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organisations)[':id']['members']['$post']> },
      ) => parseResponse(client.organisations[':id'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganisationsIdMembersUserIdKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'PUT'] as const
}

export function usePutOrganisationsIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>
        },
      ) => parseResponse(client.organisations[':id'].members[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdMembersUserIdKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'DELETE'] as const
}

export function useDeleteOrganisationsIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdMembersUserIdKey()
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
            (typeof client.organisations)[':id']['members'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(client.organisations[':id'].members[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentInfoKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
) {
  return ['organisations', '/organisations/:id/payment-info', args] as const
}

export function useGetOrganisationsIdPaymentInfo<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
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
        ? getGetOrganisationsIdPaymentInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id']['payment-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentInfo<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
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
        ? getGetOrganisationsIdPaymentInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id']['payment-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsBillingsKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/billings', args] as const
}

export function useGetOrganisationsIdPaymentsBillings<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
            >
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
        ? getGetOrganisationsIdPaymentsBillingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].payments.billings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsBillings<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
            >
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
        ? getGetOrganisationsIdPaymentsBillingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].payments.billings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdPaymentsBillingsKey() {
  return ['organisations', '/organisations/:id/payments/billings', 'POST'] as const
}

export function usePostOrganisationsIdPaymentsBillings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdPaymentsBillingsKey()
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
            (typeof client.organisations)[':id']['payments']['billings']['$post']
          >
        },
      ) => parseResponse(client.organisations[':id'].payments.billings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsBillingsUnpaidKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/unpaid', args] as const
}

export function useGetOrganisationsIdPaymentsBillingsUnpaid<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsBillingsUnpaidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.billings.unpaid.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsBillingsUnpaid<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsBillingsUnpaidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.billings.unpaid.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsBillingsBidKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid', args] as const
}

export function useGetOrganisationsIdPaymentsBillingsBid<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsBillingsBidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.billings[':bid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsBillingsBid<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsBillingsBidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.billings[':bid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdPaymentsBillingsBidKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'PUT'] as const
}

export function usePutOrganisationsIdPaymentsBillingsBid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdPaymentsBillingsBidKey()
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
            (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].payments.billings[':bid'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdPaymentsBillingsBidKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'DELETE'] as const
}

export function useDeleteOrganisationsIdPaymentsBillingsBid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdPaymentsBillingsBidKey()
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
            (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].payments.billings[':bid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsBillingsBidPdfKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid.pdf', args] as const
}

export function useGetOrganisationsIdPaymentsBillingsBidPdf<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsBillingsBidPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.billings[':bid.pdf'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsBillingsBidPdf<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsBillingsBidPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.billings[':bid.pdf'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsFullpricePriceKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/fullprice/:price', args] as const
}

export function useGetOrganisationsIdPaymentsFullpricePrice<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsFullpricePriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.fullprice[':price'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsFullpricePrice<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsFullpricePriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.fullprice[':price'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsMethodsKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/methods', args] as const
}

export function useGetOrganisationsIdPaymentsMethods<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
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
        ? getGetOrganisationsIdPaymentsMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].payments.methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsMethods<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
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
        ? getGetOrganisationsIdPaymentsMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].payments.methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganisationsIdPaymentsMethodsKey() {
  return ['organisations', '/organisations/:id/payments/methods', 'POST'] as const
}

export function usePostOrganisationsIdPaymentsMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganisationsIdPaymentsMethodsKey()
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
            (typeof client.organisations)[':id']['payments']['methods']['$post']
          >
        },
      ) => parseResponse(client.organisations[':id'].payments.methods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsMethodsDefaultKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/methods/default', args] as const
}

export function useGetOrganisationsIdPaymentsMethodsDefault<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsMethodsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.methods.default.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsMethodsDefault<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
              >
            >
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
        ? getGetOrganisationsIdPaymentsMethodsDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.methods.default.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdPaymentsMethodsDefaultKey() {
  return ['organisations', '/organisations/:id/payments/methods/default', 'PUT'] as const
}

export function usePutOrganisationsIdPaymentsMethodsDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['default']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdPaymentsMethodsDefaultKey()
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
            (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].payments.methods.default.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganisationsIdPaymentsMethodsMIdKey() {
  return ['organisations', '/organisations/:id/payments/methods/:mId', 'DELETE'] as const
}

export function useDeleteOrganisationsIdPaymentsMethodsMId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdPaymentsMethodsMIdKey()
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
            (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].payments.methods[':mId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsMonthlyinvoiceKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice', args] as const
}

export function useGetOrganisationsIdPaymentsMonthlyinvoice<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
            >
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
        ? getGetOrganisationsIdPaymentsMonthlyinvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.monthlyinvoice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsMonthlyinvoice<TError = unknown>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
            >
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
        ? getGetOrganisationsIdPaymentsMonthlyinvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organisations[':id'].payments.monthlyinvoice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditKey() {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function usePutOrganisationsIdPaymentsMonthlyinvoiceMaxcredit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditKey()
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
            (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organisations[':id'].payments.monthlyinvoice.maxcredit.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsIdPaymentsRecurringKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/recurring', args] as const
}

export function useGetOrganisationsIdPaymentsRecurring<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
            >
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
        ? getGetOrganisationsIdPaymentsRecurringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].payments.recurring.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsIdPaymentsRecurring<TError = unknown>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
            >
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
        ? getGetOrganisationsIdPaymentsRecurringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations[':id'].payments.recurring.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganisationsIdPaymentsRecurringKey() {
  return ['organisations', '/organisations/:id/payments/recurring', 'DELETE'] as const
}

export function useDeleteOrganisationsIdPaymentsRecurring<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganisationsIdPaymentsRecurringKey()
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
            (typeof client.organisations)[':id']['payments']['recurring']['$delete']
          >
        },
      ) =>
        parseResponse(client.organisations[':id'].payments.recurring.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPasswordForgottenKey() {
  return ['password_forgotten', '/password_forgotten'] as const
}

export function useGetPasswordForgotten<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPasswordForgottenKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.password_forgotten.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPasswordForgotten<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPasswordForgottenKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.password_forgotten.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPasswordForgottenKey() {
  return ['password_forgotten', '/password_forgotten', 'POST'] as const
}

export function usePostPasswordForgotten<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.password_forgotten.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPasswordForgottenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.password_forgotten.$post> }) =>
        parseResponse(client.password_forgotten.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPasswordForgottenKeyKey(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
) {
  return ['password_forgotten', '/password_forgotten/:key', args] as const
}

export function useGetPasswordForgottenKey<TError = unknown>(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
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
        ? getGetPasswordForgottenKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.password_forgotten[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPasswordForgottenKey<TError = unknown>(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
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
        ? getGetPasswordForgottenKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.password_forgotten[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPasswordForgottenKeyKey() {
  return ['password_forgotten', '/password_forgotten/:key', 'POST'] as const
}

export function usePostPasswordForgottenKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.password_forgotten)[':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPasswordForgottenKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.password_forgotten)[':key']['$post']> },
      ) => parseResponse(client.password_forgotten[':key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsAssetsPayButtonTokenButtonPngKey(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
) {
  return ['payments', '/payments/assets/pay_button/:token/button.png', args] as const
}

export function useGetPaymentsAssetsPayButtonTokenButtonPng<TError = unknown>(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
            >
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
        ? getGetPaymentsAssetsPayButtonTokenButtonPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.payments.assets.pay_button[':token']['button.png'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsAssetsPayButtonTokenButtonPng<TError = unknown>(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
            >
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
        ? getGetPaymentsAssetsPayButtonTokenButtonPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.payments.assets.pay_button[':token']['button.png'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentsCouponsNameKey(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
) {
  return ['payments', '/payments/coupons/:name', args] as const
}

export function useGetPaymentsCouponsName<TError = unknown>(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
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
        ? getGetPaymentsCouponsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.coupons[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsCouponsName<TError = unknown>(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
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
        ? getGetPaymentsCouponsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.coupons[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentsProvidersKey() {
  return ['payments', '/payments/providers'] as const
}

export function useGetPaymentsProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentsTokensStripeKey() {
  return ['payments', '/payments/tokens/stripe'] as const
}

export function useGetPaymentsTokensStripe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentsTokensStripeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.tokens.stripe.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsTokensStripe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentsTokensStripeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.tokens.stripe.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentsBidEndStripeKey() {
  return ['payments', '/payments/:bid/end/stripe', 'POST'] as const
}

export function usePostPaymentsBidEndStripe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':bid']['end']['stripe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsBidEndStripeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']> },
      ) => parseResponse(client.payments[':bid'].end.stripe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsAddonprovidersKey() {
  return ['products', '/products/addonproviders'] as const
}

export function useGetProductsAddonproviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsAddonprovidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.addonproviders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsAddonproviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsAddonprovidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.addonproviders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsAddonprovidersProviderIdKey(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
) {
  return ['products', '/products/addonproviders/:provider_id', args] as const
}

export function useGetProductsAddonprovidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
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
        ? getGetProductsAddonprovidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.addonproviders[':provider_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsAddonprovidersProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
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
        ? getGetProductsAddonprovidersProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.addonproviders[':provider_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsAddonprovidersProviderIdVersionsKey(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
) {
  return ['products', '/products/addonproviders/:provider_id/versions', args] as const
}

export function useGetProductsAddonprovidersProviderIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
              >
            >
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
        ? getGetProductsAddonprovidersProviderIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.products.addonproviders[':provider_id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsAddonprovidersProviderIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
              >
            >
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
        ? getGetProductsAddonprovidersProviderIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.products.addonproviders[':provider_id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProductsCountriesKey() {
  return ['products', '/products/countries'] as const
}

export function useGetProductsCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsCountrycodesKey() {
  return ['products', '/products/countrycodes'] as const
}

export function useGetProductsCountrycodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsCountrycodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.countrycodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsCountrycodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductsCountrycodesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.countrycodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsInstancesKey(
  args: InferRequestType<typeof client.products.instances.$get>,
) {
  return ['products', '/products/instances', args] as const
}

export function useGetProductsInstances<TError = unknown>(
  args: InferRequestType<typeof client.products.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
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
        ? getGetProductsInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsInstances<TError = unknown>(
  args: InferRequestType<typeof client.products.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
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
        ? getGetProductsInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsInstancesTypeVersionKey(
  args: InferRequestType<(typeof client.products.instances)[':type-{version}']['$get']>,
) {
  return ['products', '/products/instances/:type-{version}', args] as const
}

export function useGetProductsInstancesTypeVersion<TError = unknown>(
  args: InferRequestType<(typeof client.products.instances)[':type-{version}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
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
        ? getGetProductsInstancesTypeVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.instances[':type-{version}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsInstancesTypeVersion<TError = unknown>(
  args: InferRequestType<(typeof client.products.instances)[':type-{version}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
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
        ? getGetProductsInstancesTypeVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.products.instances[':type-{version}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsMfaKindsKey() {
  return ['products', '/products/mfa_kinds'] as const
}

export function useGetProductsMfaKinds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsMfaKindsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.mfa_kinds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsMfaKinds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsMfaKindsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.mfa_kinds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsPackagesKey(
  args: InferRequestType<typeof client.products.packages.$get>,
) {
  return ['products', '/products/packages', args] as const
}

export function useGetProductsPackages<TError = unknown>(
  args: InferRequestType<typeof client.products.packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
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
        ? getGetProductsPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsPackages<TError = unknown>(
  args: InferRequestType<typeof client.products.packages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
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
        ? getGetProductsPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsPricesKey() {
  return ['products', '/products/prices'] as const
}

export function useGetProductsPrices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsPricesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.prices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsPrices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsPricesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.prices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductsZonesKey() {
  return ['products', '/products/zones'] as const
}

export function useGetProductsZones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsZonesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.zones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsZones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsZonesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products.zones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfKey() {
  return ['self', '/self'] as const
}

export function useGetSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetSelfKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetSelfKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfKey() {
  return ['self', '/self', 'PUT'] as const
}

export function usePutSelf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.self.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.self.$put> }) =>
        parseResponse(client.self.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfKey() {
  return ['self', '/self', 'DELETE'] as const
}

export function useDeleteSelf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.self.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfAddonsKey() {
  return ['self', '/self/addons'] as const
}

export function useGetSelfAddons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfAddonsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfAddons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfAddonsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfAddonsKey() {
  return ['self', '/self/addons', 'POST'] as const
}

export function usePostSelfAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.self.addons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.self.addons.$post> }) =>
        parseResponse(client.self.addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSelfAddonsPreordersKey() {
  return ['self', '/self/addons/preorders', 'POST'] as const
}

export function usePostSelfAddonsPreorders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.preorders.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.self.addons.preorders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfAddonsPreordersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.self.addons.preorders.$post> },
      ) => parseResponse(client.self.addons.preorders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfAddonsAddonIdKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
) {
  return ['self', '/self/addons/:addonId', args] as const
}

export function useGetSelfAddonsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
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
        ? getGetSelfAddonsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfAddonsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
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
        ? getGetSelfAddonsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfAddonsAddonIdKey() {
  return ['self', '/self/addons/:addonId', 'PUT'] as const
}

export function usePutSelfAddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.addons)[':addonId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfAddonsAddonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.addons)[':addonId']['$put']> },
      ) => parseResponse(client.self.addons[':addonId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfAddonsAddonIdKey() {
  return ['self', '/self/addons/:addonId', 'DELETE'] as const
}

export function useDeleteSelfAddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfAddonsAddonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.addons)[':addonId']['$delete']> },
      ) => parseResponse(client.self.addons[':addonId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfAddonsAddonIdApplicationsKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
) {
  return ['self', '/self/addons/:addonId/applications', args] as const
}

export function useGetSelfAddonsAddonIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
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
        ? getGetSelfAddonsAddonIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.addons[':addonId'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfAddonsAddonIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
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
        ? getGetSelfAddonsAddonIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.addons[':addonId'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfAddonsAddonIdEnvKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
) {
  return ['self', '/self/addons/:addonId/env', args] as const
}

export function useGetSelfAddonsAddonIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
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
        ? getGetSelfAddonsAddonIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfAddonsAddonIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
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
        ? getGetSelfAddonsAddonIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfAddonsAddonIdPlanKey() {
  return ['self', '/self/addons/:addonId/plan', 'PUT'] as const
}

export function usePutSelfAddonsAddonIdPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['plan']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfAddonsAddonIdPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']> },
      ) => parseResponse(client.self.addons[':addonId'].plan.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfAddonsAddonIdSsoKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
) {
  return ['self', '/self/addons/:addonId/sso', args] as const
}

export function useGetSelfAddonsAddonIdSso<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
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
        ? getGetSelfAddonsAddonIdSsoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].sso.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfAddonsAddonIdSso<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
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
        ? getGetSelfAddonsAddonIdSsoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].sso.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfAddonsAddonIdTagsKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
) {
  return ['self', '/self/addons/:addonId/tags', args] as const
}

export function useGetSelfAddonsAddonIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
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
        ? getGetSelfAddonsAddonIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfAddonsAddonIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
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
        ? getGetSelfAddonsAddonIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.addons[':addonId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfAddonsAddonIdTagsTagKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function usePutSelfAddonsAddonIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfAddonsAddonIdTagsTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>
        },
      ) => parseResponse(client.self.addons[':addonId'].tags[':tag'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfAddonsAddonIdTagsTagKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function useDeleteSelfAddonsAddonIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfAddonsAddonIdTagsTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>
        },
      ) => parseResponse(client.self.addons[':addonId'].tags[':tag'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsKey() {
  return ['self', '/self/applications'] as const
}

export function useGetSelfApplications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfApplicationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfApplicationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfApplicationsKey() {
  return ['self', '/self/applications', 'POST'] as const
}

export function usePostSelfApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.self.applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.self.applications.$post> }) =>
        parseResponse(client.self.applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
) {
  return ['self', '/self/applications/:appId', args] as const
}

export function useGetSelfApplicationsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
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
        ? getGetSelfApplicationsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
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
        ? getGetSelfApplicationsAppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdKey() {
  return ['self', '/self/applications/:appId', 'PUT'] as const
}

export function usePutSelfApplicationsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.applications)[':appId']['$put']> },
      ) => parseResponse(client.self.applications[':appId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdKey() {
  return ['self', '/self/applications/:appId', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.applications)[':appId']['$delete']> },
      ) => parseResponse(client.self.applications[':appId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdAddonsKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
) {
  return ['self', '/self/applications/:appId/addons', args] as const
}

export function useGetSelfApplicationsAppIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
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
        ? getGetSelfApplicationsAppIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
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
        ? getGetSelfApplicationsAppIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfApplicationsAppIdAddonsKey() {
  return ['self', '/self/applications/:appId/addons', 'POST'] as const
}

export function usePostSelfApplicationsAppIdAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfApplicationsAppIdAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>
        },
      ) => parseResponse(client.self.applications[':appId'].addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdAddonsEnvKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
) {
  return ['self', '/self/applications/:appId/addons/env', args] as const
}

export function useGetSelfApplicationsAppIdAddonsEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
            >
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
        ? getGetSelfApplicationsAppIdAddonsEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].addons.env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdAddonsEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
            >
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
        ? getGetSelfApplicationsAppIdAddonsEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].addons.env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdAddonsAddonIdKey() {
  return ['self', '/self/applications/:appId/addons/:addonId', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppIdAddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdAddonsAddonIdKey()
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
            (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].addons[':addonId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdBranchKey() {
  return ['self', '/self/applications/:appId/branch', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['branch']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdBranchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']> },
      ) => parseResponse(client.self.applications[':appId'].branch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdBranchesKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
) {
  return ['self', '/self/applications/:appId/branches', args] as const
}

export function useGetSelfApplicationsAppIdBranches<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
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
        ? getGetSelfApplicationsAppIdBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdBranches<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
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
        ? getGetSelfApplicationsAppIdBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdBuildflavorKey() {
  return ['self', '/self/applications/:appId/buildflavor', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdBuildflavor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdBuildflavorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>
        },
      ) => parseResponse(client.self.applications[':appId'].buildflavor.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdDependenciesKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
) {
  return ['self', '/self/applications/:appId/dependencies', args] as const
}

export function useGetSelfApplicationsAppIdDependencies<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
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
        ? getGetSelfApplicationsAppIdDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].dependencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdDependencies<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
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
        ? getGetSelfApplicationsAppIdDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].dependencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdDependenciesEnvKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/dependencies/env', args] as const
}

export function useGetSelfApplicationsAppIdDependenciesEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
            >
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
        ? getGetSelfApplicationsAppIdDependenciesEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].dependencies.env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdDependenciesEnv<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
            >
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
        ? getGetSelfApplicationsAppIdDependenciesEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].dependencies.env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdDependenciesDependencyIdKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdDependenciesDependencyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdDependenciesDependencyIdKey()
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
            (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].dependencies[':dependencyId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdDependenciesDependencyIdKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppIdDependenciesDependencyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdDependenciesDependencyIdKey()
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
            (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].dependencies[':dependencyId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdDependentsKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
) {
  return ['self', '/self/applications/:appId/dependents', args] as const
}

export function useGetSelfApplicationsAppIdDependents<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
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
        ? getGetSelfApplicationsAppIdDependentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].dependents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdDependents<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
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
        ? getGetSelfApplicationsAppIdDependentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].dependents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdDeploymentsKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
) {
  return ['self', '/self/applications/:appId/deployments', args] as const
}

export function useGetSelfApplicationsAppIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
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
        ? getGetSelfApplicationsAppIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
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
        ? getGetSelfApplicationsAppIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdDeploymentsDeploymentIdKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/deployments/:deploymentId', args] as const
}

export function useGetSelfApplicationsAppIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
              >
            >
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
        ? getGetSelfApplicationsAppIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
              >
            >
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
        ? getGetSelfApplicationsAppIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesKey() {
  return [
    'self',
    '/self/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function useDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesKey()
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
            (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].deployments[':deploymentId'].instances.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdEnvKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
) {
  return ['self', '/self/applications/:appId/env', args] as const
}

export function useGetSelfApplicationsAppIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
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
        ? getGetSelfApplicationsAppIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications[':appId'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
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
        ? getGetSelfApplicationsAppIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications[':appId'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdEnvKey() {
  return ['self', '/self/applications/:appId/env', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdEnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']> },
      ) => parseResponse(client.self.applications[':appId'].env.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdEnvEnvNameKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdEnvEnvName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdEnvEnvNameKey()
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
            (typeof client.self.applications)[':appId']['env'][':envName']['$put']
          >
        },
      ) =>
        parseResponse(client.self.applications[':appId'].env[':envName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdEnvEnvNameKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppIdEnvEnvName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdEnvEnvNameKey()
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
            (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].env[':envName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdExposedEnvKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
) {
  return ['self', '/self/applications/:appId/exposed_env', args] as const
}

export function useGetSelfApplicationsAppIdExposedEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
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
        ? getGetSelfApplicationsAppIdExposedEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].exposed_env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdExposedEnv<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
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
        ? getGetSelfApplicationsAppIdExposedEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].exposed_env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdExposedEnvKey() {
  return ['self', '/self/applications/:appId/exposed_env', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdExposedEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdExposedEnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>
        },
      ) => parseResponse(client.self.applications[':appId'].exposed_env.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdInstancesKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
) {
  return ['self', '/self/applications/:appId/instances', args] as const
}

export function useGetSelfApplicationsAppIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
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
        ? getGetSelfApplicationsAppIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdInstances<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
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
        ? getGetSelfApplicationsAppIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfApplicationsAppIdInstancesKey() {
  return ['self', '/self/applications/:appId/instances', 'POST'] as const
}

export function usePostSelfApplicationsAppIdInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfApplicationsAppIdInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>
        },
      ) => parseResponse(client.self.applications[':appId'].instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdInstancesKey() {
  return ['self', '/self/applications/:appId/instances', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppIdInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>
        },
      ) => parseResponse(client.self.applications[':appId'].instances.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdInstancesInstanceIdKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/instances/:instanceId', args] as const
}

export function useGetSelfApplicationsAppIdInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
              >
            >
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
        ? getGetSelfApplicationsAppIdInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].instances[':instanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
              >
            >
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
        ? getGetSelfApplicationsAppIdInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].instances[':instanceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdTagsKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
) {
  return ['self', '/self/applications/:appId/tags', args] as const
}

export function useGetSelfApplicationsAppIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
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
        ? getGetSelfApplicationsAppIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications[':appId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
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
        ? getGetSelfApplicationsAppIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.applications[':appId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdTagsTagKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdTagsTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>
        },
      ) => parseResponse(client.self.applications[':appId'].tags[':tag'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdTagsTagKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppIdTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdTagsTagKey()
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
            (typeof client.self.applications)[':appId']['tags'][':tag']['$delete']
          >
        },
      ) =>
        parseResponse(client.self.applications[':appId'].tags[':tag'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdVhostsKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
) {
  return ['self', '/self/applications/:appId/vhosts', args] as const
}

export function useGetSelfApplicationsAppIdVhosts<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
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
        ? getGetSelfApplicationsAppIdVhostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].vhosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdVhosts<TError = unknown>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
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
        ? getGetSelfApplicationsAppIdVhostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.applications[':appId'].vhosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfApplicationsAppIdVhostsFavouriteKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/vhosts/favourite', args] as const
}

export function useGetSelfApplicationsAppIdVhostsFavourite<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
            >
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
        ? getGetSelfApplicationsAppIdVhostsFavouriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].vhosts.favourite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfApplicationsAppIdVhostsFavourite<TError = unknown>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
            >
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
        ? getGetSelfApplicationsAppIdVhostsFavouriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.self.applications[':appId'].vhosts.favourite.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdVhostsFavouriteKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdVhostsFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdVhostsFavouriteKey()
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
            (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
          >
        },
      ) =>
        parseResponse(client.self.applications[':appId'].vhosts.favourite.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdVhostsFavouriteKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppIdVhostsFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdVhostsFavouriteKey()
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
            (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].vhosts.favourite.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSelfApplicationsAppIdVhostsDomainKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function usePutSelfApplicationsAppIdVhostsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfApplicationsAppIdVhostsDomainKey()
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
            (typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].vhosts[':domain'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfApplicationsAppIdVhostsDomainKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'DELETE'] as const
}

export function useDeleteSelfApplicationsAppIdVhostsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfApplicationsAppIdVhostsDomainKey()
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
            (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.self.applications[':appId'].vhosts[':domain'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSelfAvatarKey() {
  return ['self', '/self/avatar', 'PUT'] as const
}

export function usePutSelfAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.avatar.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.self.avatar.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.self.avatar.$put> }) =>
        parseResponse(client.self.avatar.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSelfChangePasswordKey() {
  return ['self', '/self/change_password', 'PUT'] as const
}

export function usePutSelfChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.change_password.$put>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.self.change_password.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfCliTokensKey(args: InferRequestType<typeof client.self.cli_tokens.$get>) {
  return ['self', '/self/cli_tokens', args] as const
}

export function useGetSelfCliTokens<TError = unknown>(
  args: InferRequestType<typeof client.self.cli_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfCliTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.cli_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfCliTokens<TError = unknown>(
  args: InferRequestType<typeof client.self.cli_tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfCliTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.cli_tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfConfirmationEmailKey() {
  return ['self', '/self/confirmation_email'] as const
}

export function useGetSelfConfirmationEmail<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfConfirmationEmailKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.confirmation_email.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfConfirmationEmail<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfConfirmationEmailKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.confirmation_email.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfConsumersKey() {
  return ['self', '/self/consumers'] as const
}

export function useGetSelfConsumers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfConsumersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfConsumers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfConsumersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfConsumersKey() {
  return ['self', '/self/consumers', 'POST'] as const
}

export function usePostSelfConsumers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.self.consumers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfConsumersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.self.consumers.$post> }) =>
        parseResponse(client.self.consumers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfConsumersKeyKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
) {
  return ['self', '/self/consumers/:key', args] as const
}

export function useGetSelfConsumersKey<TError = unknown>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
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
        ? getGetSelfConsumersKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumers[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfConsumersKey<TError = unknown>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
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
        ? getGetSelfConsumersKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumers[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfConsumersKeyKey() {
  return ['self', '/self/consumers/:key', 'PUT'] as const
}

export function usePutSelfConsumersKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.consumers)[':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfConsumersKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.consumers)[':key']['$put']> },
      ) => parseResponse(client.self.consumers[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfConsumersKeyKey() {
  return ['self', '/self/consumers/:key', 'DELETE'] as const
}

export function useDeleteSelfConsumersKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.consumers)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfConsumersKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.consumers)[':key']['$delete']> },
      ) => parseResponse(client.self.consumers[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfConsumersKeySecretKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
) {
  return ['self', '/self/consumers/:key/secret', args] as const
}

export function useGetSelfConsumersKeySecret<TError = unknown>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
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
        ? getGetSelfConsumersKeySecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumers[':key'].secret.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfConsumersKeySecret<TError = unknown>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
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
        ? getGetSelfConsumersKeySecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumers[':key'].secret.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfConsumptionsKey(
  args: InferRequestType<typeof client.self.consumptions.$get>,
) {
  return ['self', '/self/consumptions', args] as const
}

export function useGetSelfConsumptions<TError = unknown>(
  args: InferRequestType<typeof client.self.consumptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
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
        ? getGetSelfConsumptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfConsumptions<TError = unknown>(
  args: InferRequestType<typeof client.self.consumptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
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
        ? getGetSelfConsumptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.consumptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfCreditsKey() {
  return ['self', '/self/credits'] as const
}

export function useGetSelfCredits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfCreditsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.credits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfCredits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfCreditsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.credits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfEmailsKey() {
  return ['self', '/self/emails'] as const
}

export function useGetSelfEmails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfEmailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.emails.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfEmails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfEmailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.emails.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfEmailsEmailKey() {
  return ['self', '/self/emails/:email', 'PUT'] as const
}

export function usePutSelfEmailsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.emails)[':email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfEmailsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.emails)[':email']['$put']> },
      ) => parseResponse(client.self.emails[':email'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfEmailsEmailKey() {
  return ['self', '/self/emails/:email', 'DELETE'] as const
}

export function useDeleteSelfEmailsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.emails)[':email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfEmailsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.emails)[':email']['$delete']> },
      ) => parseResponse(client.self.emails[':email'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfIdKey() {
  return ['self', '/self/id'] as const
}

export function useGetSelfId<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfIdKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.id.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfId<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfIdKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.id.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfInstancesKey() {
  return ['self', '/self/instances'] as const
}

export function useGetSelfInstances<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfInstancesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.instances.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfInstances<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfInstancesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.instances.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfKeysKey() {
  return ['self', '/self/keys'] as const
}

export function useGetSelfKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfKeysKeyKey() {
  return ['self', '/self/keys/:key', 'PUT'] as const
}

export function usePutSelfKeysKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.keys)[':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfKeysKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.keys)[':key']['$put']> },
      ) => parseResponse(client.self.keys[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfKeysKeyKey() {
  return ['self', '/self/keys/:key', 'DELETE'] as const
}

export function useDeleteSelfKeysKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.keys)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfKeysKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.keys)[':key']['$delete']> },
      ) => parseResponse(client.self.keys[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSelfMfaKindKey() {
  return ['self', '/self/mfa/:kind', 'PUT'] as const
}

export function usePutSelfMfaKind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.mfa)[':kind']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfMfaKindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.mfa)[':kind']['$put']> },
      ) => parseResponse(client.self.mfa[':kind'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSelfMfaKindKey() {
  return ['self', '/self/mfa/:kind', 'POST'] as const
}

export function usePostSelfMfaKind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.mfa)[':kind']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfMfaKindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.mfa)[':kind']['$post']> },
      ) => parseResponse(client.self.mfa[':kind'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfMfaKindKey() {
  return ['self', '/self/mfa/:kind', 'DELETE'] as const
}

export function useDeleteSelfMfaKind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfMfaKindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.mfa)[':kind']['$delete']> },
      ) => parseResponse(client.self.mfa[':kind'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfMfaKindBackupcodesKey(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
) {
  return ['self', '/self/mfa/:kind/backupcodes', args] as const
}

export function useGetSelfMfaKindBackupcodes<TError = unknown>(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
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
        ? getGetSelfMfaKindBackupcodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.mfa[':kind'].backupcodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfMfaKindBackupcodes<TError = unknown>(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
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
        ? getGetSelfMfaKindBackupcodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.mfa[':kind'].backupcodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfMfaKindConfirmationKey() {
  return ['self', '/self/mfa/:kind/confirmation', 'POST'] as const
}

export function usePostSelfMfaKindConfirmation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfMfaKindConfirmationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']> },
      ) => parseResponse(client.self.mfa[':kind'].confirmation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfPaymentInfoKey() {
  return ['self', '/self/payment-info'] as const
}

export function useGetSelfPaymentInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfPaymentInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self['payment-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfPaymentInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self['payment-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfPaymentsBillingsKey() {
  return ['self', '/self/payments/billings'] as const
}

export function useGetSelfPaymentsBillings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsBillingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.billings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsBillings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsBillingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.billings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfPaymentsBillingsKey() {
  return ['self', '/self/payments/billings', 'POST'] as const
}

export function usePostSelfPaymentsBillings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfPaymentsBillingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.self.payments.billings.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfPaymentsBillingsBidKey(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
) {
  return ['self', '/self/payments/billings/:bid', args] as const
}

export function useGetSelfPaymentsBillingsBid<TError = unknown>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
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
        ? getGetSelfPaymentsBillingsBidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.billings[':bid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsBillingsBid<TError = unknown>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
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
        ? getGetSelfPaymentsBillingsBidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.billings[':bid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfPaymentsBillingsBidKey() {
  return ['self', '/self/payments/billings/:bid', 'PUT'] as const
}

export function usePutSelfPaymentsBillingsBid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfPaymentsBillingsBidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']> },
      ) => parseResponse(client.self.payments.billings[':bid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfPaymentsBillingsBidKey() {
  return ['self', '/self/payments/billings/:bid', 'DELETE'] as const
}

export function useDeleteSelfPaymentsBillingsBid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfPaymentsBillingsBidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']> },
      ) => parseResponse(client.self.payments.billings[':bid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfPaymentsBillingsBidPdfKey(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
) {
  return ['self', '/self/payments/billings/:bid.pdf', args] as const
}

export function useGetSelfPaymentsBillingsBidPdf<TError = unknown>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
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
        ? getGetSelfPaymentsBillingsBidPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.payments.billings[':bid.pdf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsBillingsBidPdf<TError = unknown>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
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
        ? getGetSelfPaymentsBillingsBidPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.payments.billings[':bid.pdf'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfPaymentsFullpricePriceKey(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
) {
  return ['self', '/self/payments/fullprice/:price', args] as const
}

export function useGetSelfPaymentsFullpricePrice<TError = unknown>(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
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
        ? getGetSelfPaymentsFullpricePriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.fullprice[':price'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsFullpricePrice<TError = unknown>(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
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
        ? getGetSelfPaymentsFullpricePriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.fullprice[':price'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfPaymentsMethodsKey() {
  return ['self', '/self/payments/methods'] as const
}

export function useGetSelfPaymentsMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSelfPaymentsMethodsKey() {
  return ['self', '/self/payments/methods', 'POST'] as const
}

export function usePostSelfPaymentsMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelfPaymentsMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.self.payments.methods.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfPaymentsMethodsDefaultKey() {
  return ['self', '/self/payments/methods/default'] as const
}

export function useGetSelfPaymentsMethodsDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsMethodsDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.payments.methods.default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsMethodsDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsMethodsDefaultKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.self.payments.methods.default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfPaymentsMethodsDefaultKey() {
  return ['self', '/self/payments/methods/default', 'PUT'] as const
}

export function usePutSelfPaymentsMethodsDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$put>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfPaymentsMethodsDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.self.payments.methods.default.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfPaymentsMethodsMIdKey() {
  return ['self', '/self/payments/methods/:mId', 'DELETE'] as const
}

export function useDeleteSelfPaymentsMethodsMId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.methods)[':mId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfPaymentsMethodsMIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']> },
      ) => parseResponse(client.self.payments.methods[':mId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfPaymentsMonthlyinvoiceKey() {
  return ['self', '/self/payments/monthlyinvoice'] as const
}

export function useGetSelfPaymentsMonthlyinvoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsMonthlyinvoiceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.monthlyinvoice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsMonthlyinvoice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsMonthlyinvoiceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.monthlyinvoice.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSelfPaymentsMonthlyinvoiceMaxcreditKey() {
  return ['self', '/self/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function usePutSelfPaymentsMonthlyinvoiceMaxcredit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.maxcredit.$put>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSelfPaymentsMonthlyinvoiceMaxcreditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.self.payments.monthlyinvoice.maxcredit.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfPaymentsRecurringKey() {
  return ['self', '/self/payments/recurring'] as const
}

export function useGetSelfPaymentsRecurring<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsRecurringKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.recurring.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsRecurring<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsRecurringKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.recurring.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSelfPaymentsRecurringKey() {
  return ['self', '/self/payments/recurring', 'DELETE'] as const
}

export function useDeleteSelfPaymentsRecurring<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$delete>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfPaymentsRecurringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.self.payments.recurring.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfPaymentsTokensStripeKey() {
  return ['self', '/self/payments/tokens/stripe'] as const
}

export function useGetSelfPaymentsTokensStripe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsTokensStripeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.tokens.stripe.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfPaymentsTokensStripe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSelfPaymentsTokensStripeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.payments.tokens.stripe.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelfTokensKey() {
  return ['self', '/self/tokens'] as const
}

export function useGetSelfTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelfTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSelfTokensKey() {
  return ['self', '/self/tokens', 'DELETE'] as const
}

export function useDeleteSelfTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.self.tokens.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSelfTokensTokenKey() {
  return ['self', '/self/tokens/:token', 'DELETE'] as const
}

export function useDeleteSelfTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.tokens)[':token']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.self.tokens)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSelfTokensTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.self.tokens)[':token']['$delete']> },
      ) => parseResponse(client.self.tokens[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSelfValidateEmailKey(
  args: InferRequestType<typeof client.self.validate_email.$get>,
) {
  return ['self', '/self/validate_email', args] as const
}

export function useGetSelfValidateEmail<TError = unknown>(
  args: InferRequestType<typeof client.self.validate_email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
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
        ? getGetSelfValidateEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.validate_email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSelfValidateEmail<TError = unknown>(
  args: InferRequestType<typeof client.self.validate_email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
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
        ? getGetSelfValidateEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.self.validate_email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSummaryKey() {
  return ['summary', '/summary'] as const
}

export function useGetSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function useGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdApplicationsKey(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
) {
  return ['users', '/users/:id/applications', args] as const
}

export function useGetUsersIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
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
        ? getGetUsersIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
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
        ? getGetUsersIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdGitInfoKey(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
) {
  return ['users', '/users/:userId/git-info', args] as const
}

export function useGetUsersUserIdGitInfo<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
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
        ? getGetUsersUserIdGitInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId']['git-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdGitInfo<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
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
        ? getGetUsersUserIdGitInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId']['git-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProvidersAddonMatomoResourcesKey() {
  return ['v2', '/v2/providers/addon-matomo/resources', 'POST'] as const
}

export function usePostV2ProvidersAddonMatomoResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProvidersAddonMatomoResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>
        },
      ) => parseResponse(client.v2.providers['addon-matomo'].resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ProvidersAddonMatomoResourcesMatomoIdKey() {
  return ['v2', '/v2/providers/addon-matomo/resources/:matomoId', 'DELETE'] as const
}

export function useDeleteV2ProvidersAddonMatomoResourcesMatomoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProvidersAddonMatomoResourcesMatomoIdKey()
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
            (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.providers['addon-matomo'].resources[':matomoId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3LogsAppIdKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
) {
  return ['v3', '/v3/logs/:appId', args] as const
}

export function useGetV3LogsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3LogsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LogsAppId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3LogsAppIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3LogsAppIdDrainsKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/drains', args] as const
}

export function useGetV3LogsAppIdDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
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
        ? getGetV3LogsAppIdDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId'].drains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LogsAppIdDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
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
        ? getGetV3LogsAppIdDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId'].drains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3LogsAppIdDrainsKey() {
  return ['v3', '/v3/logs/:appId/drains', 'POST'] as const
}

export function usePostV3LogsAppIdDrains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3LogsAppIdDrainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']> },
      ) => parseResponse(client.v3.logs[':appId'].drains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3LogsAppIdDrainsIdOrUrlKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', args] as const
}

export function useGetV3LogsAppIdDrainsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
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
        ? getGetV3LogsAppIdDrainsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LogsAppIdDrainsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
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
        ? getGetV3LogsAppIdDrainsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3LogsAppIdDrainsIdOrUrlKey() {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function useDeleteV3LogsAppIdDrainsIdOrUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3LogsAppIdDrainsIdOrUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>
        },
      ) => parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3LogsAppIdLogsChunkedKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/logs-chunked', args] as const
}

export function useGetV3LogsAppIdLogsChunked<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
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
        ? getGetV3LogsAppIdLogsChunkedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId']['logs-chunked'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LogsAppIdLogsChunked<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
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
        ? getGetV3LogsAppIdLogsChunkedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId']['logs-chunked'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3LogsAppIdLogsSocketKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/logs-socket', args] as const
}

export function useGetV3LogsAppIdLogsSocket<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
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
        ? getGetV3LogsAppIdLogsSocketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId']['logs-socket'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LogsAppIdLogsSocket<TError = unknown>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
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
        ? getGetV3LogsAppIdLogsSocketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.logs[':appId']['logs-socket'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4AddonProvidersAddonMatomoAddonsMatomoIdKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/addons/:matomoId', args] as const
}

export function useGetV4AddonProvidersAddonMatomoAddonsMatomoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
              >
            >
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
        ? getGetV4AddonProvidersAddonMatomoAddonsMatomoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['addon-matomo'].addons[':matomoId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AddonProvidersAddonMatomoAddonsMatomoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
              >
            >
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
        ? getGetV4AddonProvidersAddonMatomoAddonsMatomoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['addon-matomo'].addons[':matomoId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4AddonProvidersAddonMatomoTokenValidateKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/token/validate', args] as const
}

export function useGetV4AddonProvidersAddonMatomoTokenValidate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
              >
            >
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
        ? getGetV4AddonProvidersAddonMatomoTokenValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['addon-matomo'].token.validate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AddonProvidersAddonMatomoTokenValidate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
              >
            >
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
        ? getGetV4AddonProvidersAddonMatomoTokenValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['addon-matomo'].token.validate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId',
    args,
  ] as const
}

export function useGetV4AddonProvidersConfigProviderAddonsConfigurationProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
              >
            >
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
        ? getGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AddonProvidersConfigProviderAddonsConfigurationProviderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
              >
            >
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
        ? getGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
) {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env',
    args,
  ] as const
}

export function useGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
              >
            >
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
        ? getGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['config-provider'].addons[
            ':configurationProviderId'
          ].env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
              >
            >
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
        ? getGetV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4['addon-providers']['config-provider'].addons[
            ':configurationProviderId'
          ].env.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvKey() {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env',
    'PUT',
  ] as const
}

export function usePutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvKey()
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
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v4['addon-providers']['config-provider'].addons[
            ':configurationProviderId'
          ].env.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
) {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', args] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsKey() {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', 'POST'] as const
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsKey()
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
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId',
    'DELETE',
  ] as const
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdKey()
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
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers',
    'POST',
  ] as const
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersKey()
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
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
            'external-peers'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers/:peerId',
    'DELETE',
  ] as const
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdKey()
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
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
            'external-peers'
          ][':peerId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members',
    'POST',
  ] as const
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersKey()
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
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members[':memberId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members[':memberId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId',
    'DELETE',
  ] as const
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdKey()
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
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].members[':memberId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].peers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].peers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId',
    'DELETE',
  ] as const
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdKey()
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
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].wireguard.configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].wireguard.configuration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration/stream',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStream<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].wireguard.configuration.stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStream<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
            ':peerId'
          ].wireguard.configuration.stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/stream',
    args,
  ] as const
}

export function useGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStream<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStream<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
              >
            >
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
        ? getGetV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.networkgroups.organisations[':ownerId'].networkgroups[
            ':networkGroupId'
          ].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVendorAddonsKey() {
  return ['vendor', '/vendor//addons', 'POST'] as const
}

export function usePostVendorAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.addons.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVendorAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.vendor.addons.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVendorAppsAddonIdLogscollectorKey(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
) {
  return ['vendor', '/vendor//apps/:addonId/logscollector', args] as const
}

export function useGetVendorAppsAddonIdLogscollector<TError = unknown>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
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
        ? getGetVendorAppsAddonIdLogscollectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vendor.apps[':addonId'].logscollector.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVendorAppsAddonIdLogscollector<TError = unknown>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
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
        ? getGetVendorAppsAddonIdLogscollectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vendor.apps[':addonId'].logscollector.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVendorAppsKey(args: InferRequestType<typeof client.vendor.apps.$get>) {
  return ['vendor', '/vendor/apps', args] as const
}

export function useGetVendorApps<TError = unknown>(
  args: InferRequestType<typeof client.vendor.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVendorAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vendor.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVendorApps<TError = unknown>(
  args: InferRequestType<typeof client.vendor.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVendorAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vendor.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVendorAppsAddonIdKey(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
) {
  return ['vendor', '/vendor/apps/:addonId', args] as const
}

export function useGetVendorAppsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
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
        ? getGetVendorAppsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vendor.apps[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVendorAppsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
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
        ? getGetVendorAppsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vendor.apps[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVendorAppsAddonIdKey() {
  return ['vendor', '/vendor/apps/:addonId', 'PUT'] as const
}

export function usePutVendorAppsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVendorAppsAddonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']> },
      ) => parseResponse(client.vendor.apps[':addonId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVendorAppsAddonIdConsumptionsKey() {
  return ['vendor', '/vendor/apps/:addonId/consumptions', 'POST'] as const
}

export function usePostVendorAppsAddonIdConsumptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVendorAppsAddonIdConsumptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>
        },
      ) => parseResponse(client.vendor.apps[':addonId'].consumptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVendorAppsAddonIdMigrationCallbackKey() {
  return ['vendor', '/vendor/apps/:addonId/migration_callback', 'PUT'] as const
}

export function usePutVendorAppsAddonIdMigrationCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVendorAppsAddonIdMigrationCallbackKey()
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
            (typeof client.vendor.apps)[':addonId']['migration_callback']['$put']
          >
        },
      ) =>
        parseResponse(client.vendor.apps[':addonId'].migration_callback.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
