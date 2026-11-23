import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getOpenapiQueryKey() {
  return ['', '//openapi'] as const
}

export function getOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiQueryKey>
  >({
    queryKey: getOpenapiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApplicationAppIdEnvironmentQueryKey(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
) {
  return ['application', '/application/:appId/environment', args] as const
}

export function getApplicationAppIdEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationAppIdEnvironmentQueryKey>
  >({
    queryKey: getApplicationAppIdEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.application[':appId'].environment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApplicationAppIdEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationAppIdEnvironmentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApplicationAppIdEnvironmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutApplicationAppIdEnvironmentMutationKey() {
  return ['application', '/application/:appId/environment', 'PUT'] as const
}

export function getPutApplicationAppIdEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationAppIdEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
    ) {
      return parseResponse(client.application[':appId'].environment.$put(args, options))
    },
  })
}

export function injectPutApplicationAppIdEnvironment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
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
    const mutationDefaults = getPutApplicationAppIdEnvironmentMutationOptions<
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

export function getPostAuthorizeMutationKey() {
  return ['authorize', '/authorize', 'POST'] as const
}

export function getPostAuthorizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizeMutationKey(),
    async mutationFn() {
      return parseResponse(client.authorize.$post(undefined, options))
    },
  })
}

export function injectPostAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostAuthorizeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEventsEventSocketQueryKey() {
  return ['events', '/events/event-socket'] as const
}

export function getEventsEventSocketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventSocketQueryKey>
  >({
    queryKey: getEventsEventSocketQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events['event-socket'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventsEventSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventSocketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsEventSocketQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getGithubQueryKey() {
  return ['github', '/github'] as const
}

export function getGithubQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubQueryKey>
  >({
    queryKey: getGithubQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithub<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGithubQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getGithubApplicationsQueryKey() {
  return ['github', '/github/applications'] as const
}

export function getGithubApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubApplicationsQueryKey>
  >({
    queryKey: getGithubApplicationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGithubApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGithubApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubApplicationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getGithubCallbackQueryKey(
  args: InferRequestType<typeof client.github.callback.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['github', '/github/callback', keyArgs] as const
}

export function getGithubCallbackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.callback.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubCallbackQueryKey>
  >({
    queryKey: getGithubCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.callback.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithubCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.github.callback.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubCallbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubCallbackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGithubEmailsQueryKey() {
  return ['github', '/github/emails'] as const
}

export function getGithubEmailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubEmailsQueryKey>
  >({
    queryKey: getGithubEmailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithubEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubEmailsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getGithubKeysQueryKey() {
  return ['github', '/github/keys'] as const
}

export function getGithubKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubKeysQueryKey>
  >({
    queryKey: getGithubKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithubKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getGithubLinkQueryKey(args: InferRequestType<typeof client.github.link.$get>) {
  return ['github', '/github/link', args] as const
}

export function getGithubLinkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.link.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubLinkQueryKey>
  >({
    queryKey: getGithubLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.link.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithubLink<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.github.link.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubLinkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubLinkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteGithubLinkMutationKey() {
  return ['github', '/github/link', 'DELETE'] as const
}

export function getDeleteGithubLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteGithubLinkMutationKey(),
    async mutationFn() {
      return parseResponse(client.github.link.$delete(undefined, options))
    },
  })
}

export function injectDeleteGithubLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$delete>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteGithubLinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGithubLoginQueryKey(args: InferRequestType<typeof client.github.login.$get>) {
  return ['github', '/github/login', args] as const
}

export function getGithubLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubLoginQueryKey>
  >({
    queryKey: getGithubLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithubLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.github.login.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubLoginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGithubRedeployMutationKey() {
  return ['github', '/github/redeploy', 'POST'] as const
}

export function getPostGithubRedeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.redeploy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.github.redeploy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGithubRedeployMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.github.redeploy.$post>) {
      return parseResponse(client.github.redeploy.$post(args, options))
    },
  })
}

export function injectPostGithubRedeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.redeploy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.github.redeploy.$post>,
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
    const mutationDefaults = getPostGithubRedeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGithubSignupQueryKey(args: InferRequestType<typeof client.github.signup.$get>) {
  return ['github', '/github/signup', args] as const
}

export function getGithubSignupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.signup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubSignupQueryKey>
  >({
    queryKey: getGithubSignupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.signup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithubSignup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.github.signup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubSignupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubSignupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGithubSignupMutationKey() {
  return ['github', '/github/signup', 'POST'] as const
}

export function getPostGithubSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.github.signup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGithubSignupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.github.signup.$post>) {
      return parseResponse(client.github.signup.$post(args, options))
    },
  })
}

export function injectPostGithubSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.github.signup.$post>,
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
    const mutationDefaults = getPostGithubSignupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGithubUsernameQueryKey() {
  return ['github', '/github/username'] as const
}

export function getGithubUsernameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubUsernameQueryKey>
  >({
    queryKey: getGithubUsernameQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.username.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGithubUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGithubUsernameQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLogsSocketAppIdQueryKey(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
) {
  return ['logs-socket', '/logs-socket/:appId', args] as const
}

export function getLogsSocketAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsSocketAppIdQueryKey>
  >({
    queryKey: getLogsSocketAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['logs-socket'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsSocketAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsSocketAppIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLogsDrainsQueryKey() {
  return ['logs', '/logs/drains'] as const
}

export function getLogsDrainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsDrainsQueryKey>
  >({
    queryKey: getLogsDrainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.drains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogsDrains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsDrainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutLogsDrainsDrainIdMutationKey() {
  return ['logs', '/logs/drains/:drainId', 'PUT'] as const
}

export function getPutLogsDrainsDrainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs.drains)[':drainId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLogsDrainsDrainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>) {
      return parseResponse(client.logs.drains[':drainId'].$put(args, options))
    },
  })
}

export function injectPutLogsDrainsDrainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs.drains)[':drainId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>,
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
    const mutationDefaults = getPutLogsDrainsDrainIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLogsLogsChunkedAppIdQueryKey(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
) {
  return ['logs', '/logs/logs-chunked/:appId', args] as const
}

export function getLogsLogsChunkedAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogsChunkedAppIdQueryKey>
  >({
    queryKey: getLogsLogsChunkedAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs['logs-chunked'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLogsLogsChunkedAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogsChunkedAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLogsLogsChunkedAppIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLogsLogsSocketAppIdQueryKey(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
) {
  return ['logs', '/logs/logs-socket/:appId', args] as const
}

export function getLogsLogsSocketAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogsSocketAppIdQueryKey>
  >({
    queryKey: getLogsLogsSocketAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs['logs-socket'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLogsLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogsSocketAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsLogsSocketAppIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLogsAppIdQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['$get']>,
) {
  return ['logs', '/logs/:appId', args] as const
}

export function getLogsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.logs)[':appId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdQueryKey>
  >({
    queryKey: getLogsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)[':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsAppIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLogsAppIdDrainsQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
) {
  return ['logs', '/logs/:appId/drains', args] as const
}

export function getLogsAppIdDrainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdDrainsQueryKey>
  >({
    queryKey: getLogsAppIdDrainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].drains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsAppIdDrainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostLogsAppIdDrainsMutationKey() {
  return ['logs', '/logs/:appId/drains', 'POST'] as const
}

export function getPostLogsAppIdDrainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLogsAppIdDrainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>) {
      return parseResponse(client.logs[':appId'].drains.$post(args, options))
    },
  })
}

export function injectPostLogsAppIdDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>,
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
    const mutationDefaults = getPostLogsAppIdDrainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLogsAppIdDrainsIdOrUrlQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
) {
  return ['logs', '/logs/:appId/drains/:idOrUrl', args] as const
}

export function getLogsAppIdDrainsIdOrUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdDrainsIdOrUrlQueryKey>
  >({
    queryKey: getLogsAppIdDrainsIdOrUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].drains[':idOrUrl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdDrainsIdOrUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLogsAppIdDrainsIdOrUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteLogsAppIdDrainsIdOrUrlMutationKey() {
  return ['logs', '/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function getDeleteLogsAppIdDrainsIdOrUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogsAppIdDrainsIdOrUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    ) {
      return parseResponse(client.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
    },
  })
}

export function injectDeleteLogsAppIdDrainsIdOrUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
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
    const mutationDefaults = getDeleteLogsAppIdDrainsIdOrUrlMutationOptions<
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

export function getLogsAppIdSseQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
) {
  return ['logs', '/logs/:appId/sse', args] as const
}

export function getLogsAppIdSseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdSseQueryKey>
  >({
    queryKey: getLogsAppIdSseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].sse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogsAppIdSse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdSseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsAppIdSseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNewsfeedsBlogQueryKey() {
  return ['newsfeeds', '/newsfeeds/blog'] as const
}

export function getNewsfeedsBlogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNewsfeedsBlogQueryKey>
  >({
    queryKey: getNewsfeedsBlogQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.newsfeeds.blog.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNewsfeedsBlog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewsfeedsBlogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNewsfeedsBlogQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getNewsfeedsEngineeringQueryKey() {
  return ['newsfeeds', '/newsfeeds/engineering'] as const
}

export function getNewsfeedsEngineeringQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsfeedsEngineeringQueryKey>
  >({
    queryKey: getNewsfeedsEngineeringQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.newsfeeds.engineering.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNewsfeedsEngineering<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsfeedsEngineeringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNewsfeedsEngineeringQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getNotificationsEmailhooksOwnerIdQueryKey(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
) {
  return ['notifications', '/notifications/emailhooks/:ownerId', args] as const
}

export function getNotificationsEmailhooksOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsEmailhooksOwnerIdQueryKey>
  >({
    queryKey: getNotificationsEmailhooksOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.emailhooks[':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsEmailhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsEmailhooksOwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationsEmailhooksOwnerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNotificationsEmailhooksOwnerIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId', 'POST'] as const
}

export function getPostNotificationsEmailhooksOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsEmailhooksOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
    ) {
      return parseResponse(client.notifications.emailhooks[':ownerId'].$post(args, options))
    },
  })
}

export function injectPostNotificationsEmailhooksOwnerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
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
    const mutationDefaults = getPostNotificationsEmailhooksOwnerIdMutationOptions<
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

export function getPutNotificationsEmailhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'PUT'] as const
}

export function getPutNotificationsEmailhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsEmailhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
    ) {
      return parseResponse(client.notifications.emailhooks[':ownerId'][':id'].$put(args, options))
    },
  })
}

export function injectPutNotificationsEmailhooksOwnerIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
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
    const mutationDefaults = getPutNotificationsEmailhooksOwnerIdIdMutationOptions<
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

export function getDeleteNotificationsEmailhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'DELETE'] as const
}

export function getDeleteNotificationsEmailhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsEmailhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.notifications.emailhooks[':ownerId'][':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteNotificationsEmailhooksOwnerIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteNotificationsEmailhooksOwnerIdIdMutationOptions<
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

export function getNotificationsInfoEventsQueryKey() {
  return ['notifications', '/notifications/info/events'] as const
}

export function getNotificationsInfoEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsInfoEventsQueryKey>
  >({
    queryKey: getNotificationsInfoEventsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.info.events.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsInfoEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsInfoEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsInfoEventsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getNotificationsInfoWebhookformatsQueryKey() {
  return ['notifications', '/notifications/info/webhookformats'] as const
}

export function getNotificationsInfoWebhookformatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsInfoWebhookformatsQueryKey>
  >({
    queryKey: getNotificationsInfoWebhookformatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.info.webhookformats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsInfoWebhookformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsInfoWebhookformatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationsInfoWebhookformatsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNotificationsWebhooksOwnerIdQueryKey(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
) {
  return ['notifications', '/notifications/webhooks/:ownerId', args] as const
}

export function getNotificationsWebhooksOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsWebhooksOwnerIdQueryKey>
  >({
    queryKey: getNotificationsWebhooksOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.webhooks[':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationsWebhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsWebhooksOwnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationsWebhooksOwnerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNotificationsWebhooksOwnerIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId', 'POST'] as const
}

export function getPostNotificationsWebhooksOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsWebhooksOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'].$post(args, options))
    },
  })
}

export function injectPostNotificationsWebhooksOwnerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
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
    const mutationDefaults = getPostNotificationsWebhooksOwnerIdMutationOptions<
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

export function getPutNotificationsWebhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'PUT'] as const
}

export function getPutNotificationsWebhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsWebhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'][':id'].$put(args, options))
    },
  })
}

export function injectPutNotificationsWebhooksOwnerIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
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
    const mutationDefaults = getPutNotificationsWebhooksOwnerIdIdMutationOptions<
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

export function getDeleteNotificationsWebhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'DELETE'] as const
}

export function getDeleteNotificationsWebhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsWebhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteNotificationsWebhooksOwnerIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteNotificationsWebhooksOwnerIdIdMutationOptions<
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

export function getPostOauthAccessTokenMutationKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function getPostOauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token.$post>) {
      return parseResponse(client.oauth.access_token.$post(args, options))
    },
  })
}

export function injectPostOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.access_token.$post>,
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
    const mutationDefaults = getPostOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthAccessTokenQueryMutationKey() {
  return ['oauth', '/oauth/access_token_query', 'POST'] as const
}

export function getPostOauthAccessTokenQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token_query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token_query.$post>) {
      return parseResponse(client.oauth.access_token_query.$post(args, options))
    },
  })
}

export function injectPostOauthAccessTokenQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token_query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.access_token_query.$post>,
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
    const mutationDefaults = getPostOauthAccessTokenQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['oauth', '/oauth/authorize', keyArgs] as const
}

export function getOauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >({
    queryKey: getOauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.oauth.authorize.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthAuthorizeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostOauthAuthorizeMutationKey() {
  return ['oauth', '/oauth/authorize', 'POST'] as const
}

export function getPostOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.authorize.$post>) {
      return parseResponse(client.oauth.authorize.$post(args, options))
    },
  })
}

export function injectPostOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.authorize.$post>,
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
    const mutationDefaults = getPostOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthRequestTokenMutationKey() {
  return ['oauth', '/oauth/request_token', 'POST'] as const
}

export function getPostOauthRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.request_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRequestTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.request_token.$post>) {
      return parseResponse(client.oauth.request_token.$post(args, options))
    },
  })
}

export function injectPostOauthRequestToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.request_token.$post>,
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
    const mutationDefaults = getPostOauthRequestTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOauthRequestTokenQueryMutationKey() {
  return ['oauth', '/oauth/request_token_query', 'POST'] as const
}

export function getPostOauthRequestTokenQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token_query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.request_token_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRequestTokenQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.request_token_query.$post>) {
      return parseResponse(client.oauth.request_token_query.$post(args, options))
    },
  })
}

export function injectPostOauthRequestTokenQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token_query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.request_token_query.$post>,
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
    const mutationDefaults = getPostOauthRequestTokenQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOauthRightsQueryKey() {
  return ['oauth', '/oauth/rights'] as const
}

export function getOauthRightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthRightsQueryKey>
  >({
    queryKey: getOauthRightsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.rights.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOauthRights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthRightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthRightsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getOpenapiType2QueryKey(
  args: InferRequestType<(typeof client)['openapi.:type']['$get']>,
) {
  return ['openapi.:type', '/openapi.:type', args] as const
}

export function getOpenapiType2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['openapi.:type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiType2QueryKey>
  >({
    queryKey: getOpenapiType2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.:type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOpenapiType2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['openapi.:type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.:type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiType2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiType2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrganisationsQueryKey(args: InferRequestType<typeof client.organisations.$get>) {
  return ['organisations', '/organisations', args] as const
}

export function getOrganisationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organisations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsQueryKey>
  >({
    queryKey: getOrganisationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organisations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganisationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostOrganisationsMutationKey() {
  return ['organisations', '/organisations', 'POST'] as const
}

export function getPostOrganisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organisations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organisations.$post>) {
      return parseResponse(client.organisations.$post(args, options))
    },
  })
}

export function injectPostOrganisations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organisations.$post>,
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
    const mutationDefaults = getPostOrganisationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganisationsIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
) {
  return ['organisations', '/organisations/:id', args] as const
}

export function getOrganisationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdQueryKey>
  >({
    queryKey: getOrganisationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrganisationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganisationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutOrganisationsIdMutationKey() {
  return ['organisations', '/organisations/:id', 'PUT'] as const
}

export function getPutOrganisationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':id']['$put']>) {
      return parseResponse(client.organisations[':id'].$put(args, options))
    },
  })
}

export function injectPutOrganisationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['$put']>,
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
    const mutationDefaults = getPutOrganisationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteOrganisationsIdMutationKey() {
  return ['organisations', '/organisations/:id', 'DELETE'] as const
}

export function getDeleteOrganisationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':id']['$delete']>) {
      return parseResponse(client.organisations[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteOrganisationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteOrganisationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonprovidersQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
) {
  return ['organisations', '/organisations/:id/addonproviders', args] as const
}

export function getOrganisationsIdAddonprovidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonprovidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdAddonprovidersMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addonproviders.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdAddonproviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdAddonprovidersMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonprovidersProviderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdAddonprovidersProviderIdMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'PUT'] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonprovidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdAddonprovidersProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdAddonprovidersProviderIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdAddonprovidersProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdAddonprovidersProviderIdMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/features', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdFeaturesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonprovidersProviderIdFeatures<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonprovidersProviderIdFeaturesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features',
    'POST',
  ] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features.$post(args, options),
      )
    },
  })
}

export function injectPostOrganisationsIdAddonprovidersProviderIdFeatures<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
        >,
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
    const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features/:featureId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features[':featureId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdPlansQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/plans', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdPlansQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonprovidersProviderIdPlans<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonprovidersProviderIdPlansQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdAddonprovidersProviderIdPlansMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/plans', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans.$post(args, options),
      )
    },
  })
}

export function injectPostOrganisationsIdAddonprovidersProviderIdPlans<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
        >,
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
    const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdPlansMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey(
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

export function getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
        >,
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
    const mutationDefaults =
      getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
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

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
          ':featureName'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
        >,
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
    const mutationDefaults =
      getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
          ':featureName'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdSsoQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/sso', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdSsoQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdSsoQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].sso.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonprovidersProviderIdSso<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdSsoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonprovidersProviderIdSsoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonprovidersProviderIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/tags', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdTagsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdTagsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonprovidersProviderIdTags<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonprovidersProviderIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdAddonprovidersProviderIdTestersMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/testers', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].testers.$post(args, options),
      )
    },
  })
}

export function injectPostOrganisationsIdAddonprovidersProviderIdTesters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
        >,
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
    const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdTestersMutationOptions<
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

export function getOrganisationsIdAddonsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons', args] as const
}

export function getOrganisationsIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdAddonsMutationKey() {
  return ['organisations', '/organisations/:id/addons', 'POST'] as const
}

export function getPostOrganisationsIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addons.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdAddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdAddonsPreordersMutationKey() {
  return ['organisations', '/organisations/:id/addons/preorders', 'POST'] as const
}

export function getPostOrganisationsIdAddonsPreordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsPreordersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addons.preorders.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdAddonsPreorders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdAddonsPreordersMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId', args] as const
}

export function getOrganisationsIdAddonsAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdAddonsAddonIdMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'PUT'] as const
}

export function getPutOrganisationsIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].addons[':addonId'].$put(args, options))
    },
  })
}

export function injectPutOrganisationsIdAddonsAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
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
    const mutationDefaults = getPutOrganisationsIdAddonsAddonIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonsAddonIdMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].addons[':addonId'].$delete(args, options))
    },
  })
}

export function injectDeleteOrganisationsIdAddonsAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
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
    const mutationDefaults = getDeleteOrganisationsIdAddonsAddonIdMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdApplicationsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/applications', args] as const
}

export function getOrganisationsIdAddonsAddonIdApplicationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdApplicationsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdApplications<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdApplicationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonsAddonIdEnvQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/env', args] as const
}

export function getOrganisationsIdAddonsAddonIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdEnvQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdEnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonsAddonIdInstancesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/instances', args] as const
}

export function getOrganisationsIdAddonsAddonIdInstancesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdInstances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey(
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

export function getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdInstancesInstanceId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonsAddonIdMigrationsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', args] as const
}

export function getOrganisationsIdAddonsAddonIdMigrationsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdMigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdMigrations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdMigrationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdAddonsAddonIdMigrationsMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', 'POST'] as const
}

export function getPostOrganisationsIdAddonsAddonIdMigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsAddonIdMigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations.$post(args, options),
      )
    },
  })
}

export function injectPostOrganisationsIdAddonsAddonIdMigrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
        >,
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
    const mutationDefaults = getPostOrganisationsIdAddonsAddonIdMigrationsMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey(
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

export function getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations[':migrationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdMigrationsMigrationId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonsAddonIdSsoQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/sso', args] as const
}

export function getOrganisationsIdAddonsAddonIdSsoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdSsoQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].sso.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdSsoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdSsoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdAddonsAddonIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/tags', args] as const
}

export function getOrganisationsIdAddonsAddonIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdTagsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdAddonsAddonIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdAddonsAddonIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function getPutOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags[':tag'].$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdAddonsAddonIdTagsTag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
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

export function getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags[':tag'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdAddonsAddonIdTagsTag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
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

export function getOrganisationsIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
) {
  return ['organisations', '/organisations/:id/applications', args] as const
}

export function getOrganisationsIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdApplicationsMutationKey() {
  return ['organisations', '/organisations/:id/applications', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].applications.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdApplicationsMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
) {
  return ['organisations', '/organisations/:id/applications/:appId', args] as const
}

export function getOrganisationsIdApplicationsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdApplicationsAppIdMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['$put']
      >,
    ) {
      return parseResponse(client.organisations[':id'].applications[':appId'].$put(args, options))
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>,
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
    const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdAddonsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/addons', args] as const
}

export function getOrganisationsIdApplicationsAppIdAddonsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdAddons<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdAddonsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdApplicationsAppIdAddonsMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/addons', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsAppIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsAppIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.$post(args, options),
      )
    },
  })
}

export function injectPostOrganisationsIdApplicationsAppIdAddons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
        >,
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
    const mutationDefaults = getPostOrganisationsIdApplicationsAppIdAddonsMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/addons/env', args] as const
}

export function getOrganisationsIdApplicationsAppIdAddonsEnvQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdAddonsEnv<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdAddonsEnvQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/addons/:addonId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons[':addonId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdAddonsAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdBranchMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/branch', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].branch.$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdBranch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdBranchMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdBranchesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/branches', args] as const
}

export function getOrganisationsIdApplicationsAppIdBranchesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdBranchesQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdBranches<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdBranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdBranchesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdApplicationsAppIdBuildflavorMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/buildflavor', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdBuildflavorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdBuildflavorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].buildflavor.$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdBuildflavor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdBuildflavorMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdDependenciesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependencies', args] as const
}

export function getOrganisationsIdApplicationsAppIdDependenciesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdDependencies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdDependenciesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependencies/env', args] as const
}

export function getOrganisationsIdApplicationsAppIdDependenciesEnvQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdDependenciesEnv<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdDependenciesEnvQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdDependenciesDependencyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
        >,
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
    const mutationDefaults =
      getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdDependentsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependents', args] as const
}

export function getOrganisationsIdApplicationsAppIdDependentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependentsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDependentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdDependents<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdDependentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdApplicationsAppIdDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/deployments', args] as const
}

export function getOrganisationsIdApplicationsAppIdDeploymentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdDeployments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdDeploymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey(
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

export function getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments[
          ':deploymentId'
        ].instances.$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/env', args] as const
}

export function getOrganisationsIdApplicationsAppIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdEnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdApplicationsAppIdEnvMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env.$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdEnv<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdEnvMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env[':envName'].$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdEnvEnvName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env[':envName'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdEnvEnvName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdExposedEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/exposed_env', args] as const
}

export function getOrganisationsIdApplicationsAppIdExposedEnvQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdExposedEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdExposedEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].exposed_env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdExposedEnv<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdExposedEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdExposedEnvQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdApplicationsAppIdExposedEnvMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/exposed_env', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdExposedEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdExposedEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].exposed_env.$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdExposedEnv<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdExposedEnvMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdInstancesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/instances', args] as const
}

export function getOrganisationsIdApplicationsAppIdInstancesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdInstances<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdInstancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdApplicationsAppIdInstancesMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$post(args, options),
      )
    },
  })
}

export function injectPostOrganisationsIdApplicationsAppIdInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
        >,
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
    const mutationDefaults = getPostOrganisationsIdApplicationsAppIdInstancesMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdInstancesMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdInstancesMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey(
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

export function getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdApplicationsAppIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/tags', args] as const
}

export function getOrganisationsIdApplicationsAppIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdTagsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdApplicationsAppIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags[':tag'].$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdTagsTag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags[':tag'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdTagsTag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdVhostsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts', args] as const
}

export function getOrganisationsIdApplicationsAppIdVhostsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdVhostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdVhosts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdVhostsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts/favourite', args] as const
}

export function getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdApplicationsAppIdVhostsFavourite<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdVhostsFavourite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdVhostsFavourite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts[':domain'].$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdApplicationsAppIdVhostsDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/:domain',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts[':domain'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdApplicationsAppIdVhostsDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
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

export function getPutOrganisationsIdAvatarMutationKey() {
  return ['organisations', '/organisations/:id/avatar', 'PUT'] as const
}

export function getPutOrganisationsIdAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['avatar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].avatar.$put(args, options))
    },
  })
}

export function injectPutOrganisationsIdAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['avatar']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
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
    const mutationDefaults = getPutOrganisationsIdAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrganisationsIdConsumersQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumers', args] as const
}

export function getOrganisationsIdConsumersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersQueryKey>
  >({
    queryKey: getOrganisationsIdConsumersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdConsumers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdConsumersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdConsumersMutationKey() {
  return ['organisations', '/organisations/:id/consumers', 'POST'] as const
}

export function getPostOrganisationsIdConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdConsumersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdConsumers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdConsumersMutationOptions<
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

export function getOrganisationsIdConsumersKeyQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumers/:key', args] as const
}

export function getOrganisationsIdConsumersKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersKeyQueryKey>
  >({
    queryKey: getOrganisationsIdConsumersKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumers[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdConsumersKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdConsumersKeyMutationKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'PUT'] as const
}

export function getPutOrganisationsIdConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdConsumersKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers[':key'].$put(args, options))
    },
  })
}

export function injectPutOrganisationsIdConsumersKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
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
    const mutationDefaults = getPutOrganisationsIdConsumersKeyMutationOptions<
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

export function getDeleteOrganisationsIdConsumersKeyMutationKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'DELETE'] as const
}

export function getDeleteOrganisationsIdConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdConsumersKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers[':key'].$delete(args, options))
    },
  })
}

export function injectDeleteOrganisationsIdConsumersKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
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
    const mutationDefaults = getDeleteOrganisationsIdConsumersKeyMutationOptions<
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

export function getOrganisationsIdConsumersKeySecretQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/consumers/:key/secret', args] as const
}

export function getOrganisationsIdConsumersKeySecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersKeySecretQueryKey>
  >({
    queryKey: getOrganisationsIdConsumersKeySecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumers[':key'].secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersKeySecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdConsumersKeySecretQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdConsumptionsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumptions', args] as const
}

export function getOrganisationsIdConsumptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumptionsQueryKey>
  >({
    queryKey: getOrganisationsIdConsumptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdConsumptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdConsumptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdCreditsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
) {
  return ['organisations', '/organisations/:id/credits', args] as const
}

export function getOrganisationsIdCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdCreditsQueryKey>
  >({
    queryKey: getOrganisationsIdCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
) {
  return ['organisations', '/organisations/:id/deployments', args] as const
}

export function getOrganisationsIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdDeploymentsQueryKey>
  >({
    queryKey: getOrganisationsIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdInstancesQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
) {
  return ['organisations', '/organisations/:id/instances', args] as const
}

export function getOrganisationsIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdInstancesQueryKey>
  >({
    queryKey: getOrganisationsIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdMembersQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
) {
  return ['organisations', '/organisations/:id/members', args] as const
}

export function getOrganisationsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdMembersQueryKey>
  >({
    queryKey: getOrganisationsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdMembersMutationKey() {
  return ['organisations', '/organisations/:id/members', 'POST'] as const
}

export function getPostOrganisationsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].members.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdMembersUserIdMutationKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'PUT'] as const
}

export function getPutOrganisationsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].members[':userId'].$put(args, options))
    },
  })
}

export function injectPutOrganisationsIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
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
    const mutationDefaults = getPutOrganisationsIdMembersUserIdMutationOptions<
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

export function getDeleteOrganisationsIdMembersUserIdMutationKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].members[':userId'].$delete(args, options))
    },
  })
}

export function injectDeleteOrganisationsIdMembersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
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
    const mutationDefaults = getDeleteOrganisationsIdMembersUserIdMutationOptions<
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

export function getOrganisationsIdPaymentInfoQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
) {
  return ['organisations', '/organisations/:id/payment-info', args] as const
}

export function getOrganisationsIdPaymentInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentInfoQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id']['payment-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdPaymentsBillingsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/billings', args] as const
}

export function getOrganisationsIdPaymentsBillingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsBillings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsBillingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdPaymentsBillingsMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings', 'POST'] as const
}

export function getPostOrganisationsIdPaymentsBillingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdPaymentsBillingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].payments.billings.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdPaymentsBillings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdPaymentsBillingsMutationOptions<
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

export function getOrganisationsIdPaymentsBillingsUnpaidQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/unpaid', args] as const
}

export function getOrganisationsIdPaymentsBillingsUnpaidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsUnpaidQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsUnpaidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings.unpaid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsBillingsUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsUnpaidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsBillingsUnpaidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdPaymentsBillingsBidQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid', args] as const
}

export function getOrganisationsIdPaymentsBillingsBidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsBidQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsBidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsBidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsBillingsBidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdPaymentsBillingsBidMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdPaymentsBillingsBid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdPaymentsBillingsBidMutationOptions<
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

export function getDeleteOrganisationsIdPaymentsBillingsBidMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdPaymentsBillingsBid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdPaymentsBillingsBidMutationOptions<
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

export function getOrganisationsIdPaymentsBillingsBidPdfQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid.pdf', args] as const
}

export function getOrganisationsIdPaymentsBillingsBidPdfQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsBidPdfQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsBidPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid.pdf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsBillingsBidPdf<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsBidPdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsBillingsBidPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdPaymentsFullpricePriceQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/fullprice/:price', args] as const
}

export function getOrganisationsIdPaymentsFullpricePriceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsFullpricePriceQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsFullpricePriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.fullprice[':price'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsFullpricePrice<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsFullpricePriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsFullpricePriceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOrganisationsIdPaymentsMethodsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/methods', args] as const
}

export function getOrganisationsIdPaymentsMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMethodsQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostOrganisationsIdPaymentsMethodsMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods', 'POST'] as const
}

export function getPostOrganisationsIdPaymentsMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdPaymentsMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].payments.methods.$post(args, options))
    },
  })
}

export function injectPostOrganisationsIdPaymentsMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
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
    const mutationDefaults = getPostOrganisationsIdPaymentsMethodsMutationOptions<
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

export function getOrganisationsIdPaymentsMethodsDefaultQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/methods/default', args] as const
}

export function getOrganisationsIdPaymentsMethodsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMethodsDefaultQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsMethodsDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.methods.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMethodsDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsMethodsDefaultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdPaymentsMethodsDefaultMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods/default', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsMethodsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsMethodsDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
      >,
    ) {
      return parseResponse(client.organisations[':id'].payments.methods.default.$put(args, options))
    },
  })
}

export function injectPutOrganisationsIdPaymentsMethodsDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdPaymentsMethodsDefaultMutationOptions<
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

export function getDeleteOrganisationsIdPaymentsMethodsMIdMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods/:mId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsMethodsMIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsMethodsMIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.methods[':mId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteOrganisationsIdPaymentsMethodsMId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
        >,
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
    const mutationDefaults = getDeleteOrganisationsIdPaymentsMethodsMIdMutationOptions<
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

export function getOrganisationsIdPaymentsMonthlyinvoiceQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice', args] as const
}

export function getOrganisationsIdPaymentsMonthlyinvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMonthlyinvoiceQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsMonthlyinvoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.monthlyinvoice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMonthlyinvoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsMonthlyinvoiceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationKey() {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.monthlyinvoice.maxcredit.$put(args, options),
      )
    },
  })
}

export function injectPutOrganisationsIdPaymentsMonthlyinvoiceMaxcredit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
        >,
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
    const mutationDefaults = getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationOptions<
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

export function getOrganisationsIdPaymentsRecurringQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/recurring', args] as const
}

export function getOrganisationsIdPaymentsRecurringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsRecurringQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsRecurringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.recurring.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrganisationsIdPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organisations)[':id']['payments']['recurring']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsRecurringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganisationsIdPaymentsRecurringQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteOrganisationsIdPaymentsRecurringMutationKey() {
  return ['organisations', '/organisations/:id/payments/recurring', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsRecurringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsRecurringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['recurring']['$delete']
      >,
    ) {
      return parseResponse(client.organisations[':id'].payments.recurring.$delete(args, options))
    },
  })
}

export function injectDeleteOrganisationsIdPaymentsRecurring<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>,
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
    const mutationDefaults = getDeleteOrganisationsIdPaymentsRecurringMutationOptions<
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

export function getPasswordForgottenQueryKey() {
  return ['password_forgotten', '/password_forgotten'] as const
}

export function getPasswordForgottenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordForgottenQueryKey>
  >({
    queryKey: getPasswordForgottenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.password_forgotten.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPasswordForgotten<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPasswordForgottenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPasswordForgottenQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostPasswordForgottenMutationKey() {
  return ['password_forgotten', '/password_forgotten', 'POST'] as const
}

export function getPostPasswordForgottenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.password_forgotten.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordForgottenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.password_forgotten.$post>) {
      return parseResponse(client.password_forgotten.$post(args, options))
    },
  })
}

export function injectPostPasswordForgotten<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.password_forgotten.$post>,
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
    const mutationDefaults = getPostPasswordForgottenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPasswordForgottenKeyQueryKey(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
) {
  return ['password_forgotten', '/password_forgotten/:key', args] as const
}

export function getPasswordForgottenKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordForgottenKeyQueryKey>
  >({
    queryKey: getPasswordForgottenKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.password_forgotten[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPasswordForgottenKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPasswordForgottenKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPasswordForgottenKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostPasswordForgottenKeyMutationKey() {
  return ['password_forgotten', '/password_forgotten/:key', 'POST'] as const
}

export function getPostPasswordForgottenKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.password_forgotten)[':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordForgottenKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.password_forgotten)[':key']['$post']>) {
      return parseResponse(client.password_forgotten[':key'].$post(args, options))
    },
  })
}

export function injectPostPasswordForgottenKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.password_forgotten)[':key']['$post']>,
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
    const mutationDefaults = getPostPasswordForgottenKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentsAssetsPayButtonTokenButtonPngQueryKey(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
) {
  return ['payments', '/payments/assets/pay_button/:token/button.png', args] as const
}

export function getPaymentsAssetsPayButtonTokenButtonPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsAssetsPayButtonTokenButtonPngQueryKey>
  >({
    queryKey: getPaymentsAssetsPayButtonTokenButtonPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.assets.pay_button[':token']['button.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentsAssetsPayButtonTokenButtonPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsAssetsPayButtonTokenButtonPngQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPaymentsAssetsPayButtonTokenButtonPngQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPaymentsCouponsNameQueryKey(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
) {
  return ['payments', '/payments/coupons/:name', args] as const
}

export function getPaymentsCouponsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsCouponsNameQueryKey>
  >({
    queryKey: getPaymentsCouponsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.coupons[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentsCouponsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsCouponsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsCouponsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPaymentsProvidersQueryKey() {
  return ['payments', '/payments/providers'] as const
}

export function getPaymentsProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsProvidersQueryKey>
  >({
    queryKey: getPaymentsProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentsProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPaymentsTokensStripeQueryKey() {
  return ['payments', '/payments/tokens/stripe'] as const
}

export function getPaymentsTokensStripeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsTokensStripeQueryKey>
  >({
    queryKey: getPaymentsTokensStripeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.tokens.stripe.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentsTokensStripe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsTokensStripeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsTokensStripeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostPaymentsBidEndStripeMutationKey() {
  return ['payments', '/payments/:bid/end/stripe', 'POST'] as const
}

export function getPostPaymentsBidEndStripeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':bid']['end']['stripe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsBidEndStripeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
    ) {
      return parseResponse(client.payments[':bid'].end.stripe.$post(args, options))
    },
  })
}

export function injectPostPaymentsBidEndStripe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments)[':bid']['end']['stripe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
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
    const mutationDefaults = getPostPaymentsBidEndStripeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProductsAddonprovidersQueryKey() {
  return ['products', '/products/addonproviders'] as const
}

export function getProductsAddonprovidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersQueryKey>
  >({
    queryKey: getProductsAddonprovidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.addonproviders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsAddonprovidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getProductsAddonprovidersProviderIdQueryKey(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
) {
  return ['products', '/products/addonproviders/:provider_id', args] as const
}

export function getProductsAddonprovidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersProviderIdQueryKey>
  >({
    queryKey: getProductsAddonprovidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.addonproviders[':provider_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersProviderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProductsAddonprovidersProviderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProductsAddonprovidersProviderIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
) {
  return ['products', '/products/addonproviders/:provider_id/versions', args] as const
}

export function getProductsAddonprovidersProviderIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersProviderIdVersionsQueryKey>
  >({
    queryKey: getProductsAddonprovidersProviderIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.addonproviders[':provider_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsAddonprovidersProviderIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersProviderIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProductsAddonprovidersProviderIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getProductsCountriesQueryKey() {
  return ['products', '/products/countries'] as const
}

export function getProductsCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsCountriesQueryKey>
  >({
    queryKey: getProductsCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getProductsCountrycodesQueryKey() {
  return ['products', '/products/countrycodes'] as const
}

export function getProductsCountrycodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsCountrycodesQueryKey>
  >({
    queryKey: getProductsCountrycodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.countrycodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsCountrycodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsCountrycodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsCountrycodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getProductsInstancesQueryKey(
  args: InferRequestType<typeof client.products.instances.$get>,
) {
  return ['products', '/products/instances', args] as const
}

export function getProductsInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsInstancesQueryKey>
  >({
    queryKey: getProductsInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.instances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsInstancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductsInstancesTypeVersionQueryKey(
  args: InferRequestType<(typeof client.products.instances)[':type-:version']['$get']>,
) {
  return ['products', '/products/instances/:type-:version', args] as const
}

export function getProductsInstancesTypeVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.instances)[':type-:version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsInstancesTypeVersionQueryKey>
  >({
    queryKey: getProductsInstancesTypeVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.instances[':type-:version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsInstancesTypeVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products.instances)[':type-:version']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products.instances)[':type-:version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsInstancesTypeVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProductsInstancesTypeVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProductsMfaKindsQueryKey() {
  return ['products', '/products/mfa_kinds'] as const
}

export function getProductsMfaKindsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsMfaKindsQueryKey>
  >({
    queryKey: getProductsMfaKindsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.mfa_kinds.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductsMfaKinds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsMfaKindsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsMfaKindsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getProductsPackagesQueryKey(
  args: InferRequestType<typeof client.products.packages.$get>,
) {
  return ['products', '/products/packages', args] as const
}

export function getProductsPackagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.packages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsPackagesQueryKey>
  >({
    queryKey: getProductsPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.packages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductsPackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.packages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsPackagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsPackagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductsPricesQueryKey() {
  return ['products', '/products/prices'] as const
}

export function getProductsPricesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsPricesQueryKey>
  >({
    queryKey: getProductsPricesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.prices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductsPrices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsPricesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getProductsZonesQueryKey() {
  return ['products', '/products/zones'] as const
}

export function getProductsZonesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsZonesQueryKey>
  >({
    queryKey: getProductsZonesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.zones.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductsZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsZonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsZonesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSelfQueryKey() {
  return ['self', '/self'] as const
}

export function getSelfQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfQueryKey>
  >({
    queryKey: getSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutSelfMutationKey() {
  return ['self', '/self', 'PUT'] as const
}

export function getPutSelfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$put>>>>>,
    TError,
    InferRequestType<typeof client.self.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.$put>) {
      return parseResponse(client.self.$put(args, options))
    },
  })
}

export function injectPutSelf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$put>>>>>,
        TError,
        InferRequestType<typeof client.self.$put>,
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
    const mutationDefaults = getPutSelfMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfMutationKey() {
  return ['self', '/self', 'DELETE'] as const
}

export function getDeleteSelfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.$delete(undefined, options))
    },
  })
}

export function injectDeleteSelf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$delete>>>>>,
        TError,
        void,
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
    const mutationDefaults = getDeleteSelfMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfAddonsQueryKey() {
  return ['self', '/self/addons'] as const
}

export function getSelfAddonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsQueryKey>
  >({
    queryKey: getSelfAddonsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfAddonsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSelfAddonsMutationKey() {
  return ['self', '/self/addons', 'POST'] as const
}

export function getPostSelfAddonsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$post>>>>>,
    TError,
    InferRequestType<typeof client.self.addons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfAddonsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.addons.$post>) {
      return parseResponse(client.self.addons.$post(args, options))
    },
  })
}

export function injectPostSelfAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.self.addons.$post>,
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
    const mutationDefaults = getPostSelfAddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSelfAddonsPreordersMutationKey() {
  return ['self', '/self/addons/preorders', 'POST'] as const
}

export function getPostSelfAddonsPreordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.preorders.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.self.addons.preorders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfAddonsPreordersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.addons.preorders.$post>) {
      return parseResponse(client.self.addons.preorders.$post(args, options))
    },
  })
}

export function injectPostSelfAddonsPreorders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.preorders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.self.addons.preorders.$post>,
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
    const mutationDefaults = getPostSelfAddonsPreordersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfAddonsAddonIdQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
) {
  return ['self', '/self/addons/:addonId', args] as const
}

export function getSelfAddonsAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfAddonsAddonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutSelfAddonsAddonIdMutationKey() {
  return ['self', '/self/addons/:addonId', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.addons)[':addonId']['$put']>) {
      return parseResponse(client.self.addons[':addonId'].$put(args, options))
    },
  })
}

export function injectPutSelfAddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['$put']>,
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
    const mutationDefaults = getPutSelfAddonsAddonIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfAddonsAddonIdMutationKey() {
  return ['self', '/self/addons/:addonId', 'DELETE'] as const
}

export function getDeleteSelfAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfAddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>) {
      return parseResponse(client.self.addons[':addonId'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfAddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>,
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
    const mutationDefaults = getDeleteSelfAddonsAddonIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfAddonsAddonIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
) {
  return ['self', '/self/addons/:addonId/applications', args] as const
}

export function getSelfAddonsAddonIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdApplicationsQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfAddonsAddonIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfAddonsAddonIdApplicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfAddonsAddonIdEnvQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
) {
  return ['self', '/self/addons/:addonId/env', args] as const
}

export function getSelfAddonsAddonIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdEnvQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfAddonsAddonIdEnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfAddonsAddonIdPlanMutationKey() {
  return ['self', '/self/addons/:addonId/plan', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['plan']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].plan.$put(args, options))
    },
  })
}

export function injectPutSelfAddonsAddonIdPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['plan']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
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
    const mutationDefaults = getPutSelfAddonsAddonIdPlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfAddonsAddonIdSsoQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
) {
  return ['self', '/self/addons/:addonId/sso', args] as const
}

export function getSelfAddonsAddonIdSsoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdSsoQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].sso.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdSsoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfAddonsAddonIdSsoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfAddonsAddonIdTagsQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
) {
  return ['self', '/self/addons/:addonId/tags', args] as const
}

export function getSelfAddonsAddonIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdTagsQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfAddonsAddonIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfAddonsAddonIdTagsTagMutationKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].tags[':tag'].$put(args, options))
    },
  })
}

export function injectPutSelfAddonsAddonIdTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
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
    const mutationDefaults = getPutSelfAddonsAddonIdTagsTagMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfAddonsAddonIdTagsTagMutationKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function getDeleteSelfAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].tags[':tag'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfAddonsAddonIdTagsTag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
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
    const mutationDefaults = getDeleteSelfAddonsAddonIdTagsTagMutationOptions<
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

export function getSelfApplicationsQueryKey() {
  return ['self', '/self/applications'] as const
}

export function getSelfApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsQueryKey>
  >({
    queryKey: getSelfApplicationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfApplicationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSelfApplicationsMutationKey() {
  return ['self', '/self/applications', 'POST'] as const
}

export function getPostSelfApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.self.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.applications.$post>) {
      return parseResponse(client.self.applications.$post(args, options))
    },
  })
}

export function injectPostSelfApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.self.applications.$post>,
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
    const mutationDefaults = getPostSelfApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfApplicationsAppIdQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
) {
  return ['self', '/self/applications/:appId', args] as const
}

export function getSelfApplicationsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdMutationKey() {
  return ['self', '/self/applications/:appId', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.applications)[':appId']['$put']>) {
      return parseResponse(client.self.applications[':appId'].$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfApplicationsAppIdMutationKey() {
  return ['self', '/self/applications/:appId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
    ) {
      return parseResponse(client.self.applications[':appId'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfApplicationsAppIdAddonsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
) {
  return ['self', '/self/applications/:appId/addons', args] as const
}

export function getSelfApplicationsAppIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdAddonsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdAddonsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSelfApplicationsAppIdAddonsMutationKey() {
  return ['self', '/self/applications/:appId/addons', 'POST'] as const
}

export function getPostSelfApplicationsAppIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsAppIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
    ) {
      return parseResponse(client.self.applications[':appId'].addons.$post(args, options))
    },
  })
}

export function injectPostSelfApplicationsAppIdAddons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
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
    const mutationDefaults = getPostSelfApplicationsAppIdAddonsMutationOptions<
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

export function getSelfApplicationsAppIdAddonsEnvQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
) {
  return ['self', '/self/applications/:appId/addons/env', args] as const
}

export function getSelfApplicationsAppIdAddonsEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdAddonsEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdAddonsEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].addons.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdAddonsEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.self.applications)[':appId']['addons']['env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdAddonsEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdAddonsEnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteSelfApplicationsAppIdAddonsAddonIdMutationKey() {
  return ['self', '/self/applications/:appId/addons/:addonId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].addons[':addonId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteSelfApplicationsAppIdAddonsAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
        >,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdAddonsAddonIdMutationOptions<
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

export function getPutSelfApplicationsAppIdBranchMutationKey() {
  return ['self', '/self/applications/:appId/branch', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['branch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].branch.$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdBranch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['branch']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdBranchMutationOptions<
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

export function getSelfApplicationsAppIdBranchesQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
) {
  return ['self', '/self/applications/:appId/branches', args] as const
}

export function getSelfApplicationsAppIdBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdBranchesQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdBranchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdBranchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdBuildflavorMutationKey() {
  return ['self', '/self/applications/:appId/buildflavor', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdBuildflavorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdBuildflavorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].buildflavor.$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdBuildflavor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdBuildflavorMutationOptions<
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

export function getSelfApplicationsAppIdDependenciesQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
) {
  return ['self', '/self/applications/:appId/dependencies', args] as const
}

export function getSelfApplicationsAppIdDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependenciesQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].dependencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdDependenciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfApplicationsAppIdDependenciesEnvQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/dependencies/env', args] as const
}

export function getSelfApplicationsAppIdDependenciesEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependenciesEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDependenciesEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].dependencies.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdDependenciesEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependenciesEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdDependenciesEnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].dependencies[':dependencyId'].$put(args, options),
      )
    },
  })
}

export function injectPutSelfApplicationsAppIdDependenciesDependencyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
        >,
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
    const mutationDefaults = getPutSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].dependencies[':dependencyId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteSelfApplicationsAppIdDependenciesDependencyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
        >,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getSelfApplicationsAppIdDependentsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
) {
  return ['self', '/self/applications/:appId/dependents', args] as const
}

export function getSelfApplicationsAppIdDependentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependentsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDependentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].dependents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdDependentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfApplicationsAppIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
) {
  return ['self', '/self/applications/:appId/deployments', args] as const
}

export function getSelfApplicationsAppIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDeploymentsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/deployments/:deploymentId', args] as const
}

export function getSelfApplicationsAppIdDeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey() {
  return [
    'self',
    '/self/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].deployments[':deploymentId'].instances.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
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

export function getSelfApplicationsAppIdEnvQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
) {
  return ['self', '/self/applications/:appId/env', args] as const
}

export function getSelfApplicationsAppIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdEnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdEnvMutationKey() {
  return ['self', '/self/applications/:appId/env', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].env.$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdEnv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdEnvMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdEnvEnvNameMutationKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['env'][':envName']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].env[':envName'].$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdEnvEnvName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getDeleteSelfApplicationsAppIdEnvEnvNameMutationKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].env[':envName'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteSelfApplicationsAppIdEnvEnvName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getSelfApplicationsAppIdExposedEnvQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
) {
  return ['self', '/self/applications/:appId/exposed_env', args] as const
}

export function getSelfApplicationsAppIdExposedEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdExposedEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdExposedEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].exposed_env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdExposedEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdExposedEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdExposedEnvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdExposedEnvMutationKey() {
  return ['self', '/self/applications/:appId/exposed_env', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdExposedEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdExposedEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].exposed_env.$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdExposedEnv<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdExposedEnvMutationOptions<
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

export function getSelfApplicationsAppIdInstancesQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
) {
  return ['self', '/self/applications/:appId/instances', args] as const
}

export function getSelfApplicationsAppIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdInstancesQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSelfApplicationsAppIdInstancesMutationKey() {
  return ['self', '/self/applications/:appId/instances', 'POST'] as const
}

export function getPostSelfApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
    ) {
      return parseResponse(client.self.applications[':appId'].instances.$post(args, options))
    },
  })
}

export function injectPostSelfApplicationsAppIdInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
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
    const mutationDefaults = getPostSelfApplicationsAppIdInstancesMutationOptions<
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

export function getDeleteSelfApplicationsAppIdInstancesMutationKey() {
  return ['self', '/self/applications/:appId/instances', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
    ) {
      return parseResponse(client.self.applications[':appId'].instances.$delete(args, options))
    },
  })
}

export function injectDeleteSelfApplicationsAppIdInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['instances']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdInstancesMutationOptions<
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

export function getSelfApplicationsAppIdInstancesInstanceIdQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/instances/:instanceId', args] as const
}

export function getSelfApplicationsAppIdInstancesInstanceIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdInstancesInstanceIdQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdInstancesInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdInstancesInstanceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getSelfApplicationsAppIdTagsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
) {
  return ['self', '/self/applications/:appId/tags', args] as const
}

export function getSelfApplicationsAppIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdTagsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdTagsTagMutationKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].tags[':tag'].$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdTagsTag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdTagsTagMutationOptions<
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

export function getDeleteSelfApplicationsAppIdTagsTagMutationKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].tags[':tag'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfApplicationsAppIdTagsTag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdTagsTagMutationOptions<
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

export function getSelfApplicationsAppIdVhostsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
) {
  return ['self', '/self/applications/:appId/vhosts', args] as const
}

export function getSelfApplicationsAppIdVhostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdVhostsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdVhostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdVhosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdVhostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdVhostsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfApplicationsAppIdVhostsFavouriteQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/vhosts/favourite', args] as const
}

export function getSelfApplicationsAppIdVhostsFavouriteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdVhostsFavouriteQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdVhostsFavouriteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.favourite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfApplicationsAppIdVhostsFavourite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdVhostsFavouriteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfApplicationsAppIdVhostsFavouriteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfApplicationsAppIdVhostsFavouriteMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].vhosts.favourite.$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdVhostsFavourite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
        >,
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
    const mutationDefaults = getPutSelfApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getDeleteSelfApplicationsAppIdVhostsFavouriteMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.favourite.$delete(args, options),
      )
    },
  })
}

export function injectDeleteSelfApplicationsAppIdVhostsFavourite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
        >,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getPutSelfApplicationsAppIdVhostsDomainMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].vhosts[':domain'].$put(args, options))
    },
  })
}

export function injectPutSelfApplicationsAppIdVhostsDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>,
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
    const mutationDefaults = getPutSelfApplicationsAppIdVhostsDomainMutationOptions<
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

export function getDeleteSelfApplicationsAppIdVhostsDomainMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].vhosts[':domain'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteSelfApplicationsAppIdVhostsDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
        >,
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
    const mutationDefaults = getDeleteSelfApplicationsAppIdVhostsDomainMutationOptions<
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

export function getPutSelfAvatarMutationKey() {
  return ['self', '/self/avatar', 'PUT'] as const
}

export function getPutSelfAvatarMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.avatar.$put>>>>>,
    TError,
    InferRequestType<typeof client.self.avatar.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAvatarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.avatar.$put>) {
      return parseResponse(client.self.avatar.$put(args, options))
    },
  })
}

export function injectPutSelfAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.avatar.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.self.avatar.$put>,
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
    const mutationDefaults = getPutSelfAvatarMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutSelfChangePasswordMutationKey() {
  return ['self', '/self/change_password', 'PUT'] as const
}

export function getPutSelfChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.change_password.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfChangePasswordMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.change_password.$put(undefined, options))
    },
  })
}

export function injectPutSelfChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.change_password.$put>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPutSelfChangePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfCliTokensQueryKey(
  args: InferRequestType<typeof client.self.cli_tokens.$get>,
) {
  return ['self', '/self/cli_tokens', args] as const
}

export function getSelfCliTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.self.cli_tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfCliTokensQueryKey>
  >({
    queryKey: getSelfCliTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.cli_tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfCliTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.self.cli_tokens.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfCliTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfCliTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSelfConfirmationEmailQueryKey() {
  return ['self', '/self/confirmation_email'] as const
}

export function getSelfConfirmationEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConfirmationEmailQueryKey>
  >({
    queryKey: getSelfConfirmationEmailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.confirmation_email.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfConfirmationEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConfirmationEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfConfirmationEmailQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSelfConsumersQueryKey() {
  return ['self', '/self/consumers'] as const
}

export function getSelfConsumersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersQueryKey>
  >({
    queryKey: getSelfConsumersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfConsumersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSelfConsumersMutationKey() {
  return ['self', '/self/consumers', 'POST'] as const
}

export function getPostSelfConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.self.consumers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfConsumersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.consumers.$post>) {
      return parseResponse(client.self.consumers.$post(args, options))
    },
  })
}

export function injectPostSelfConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.self.consumers.$post>,
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
    const mutationDefaults = getPostSelfConsumersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfConsumersKeyQueryKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
) {
  return ['self', '/self/consumers/:key', args] as const
}

export function getSelfConsumersKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersKeyQueryKey>
  >({
    queryKey: getSelfConsumersKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumers[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfConsumersKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutSelfConsumersKeyMutationKey() {
  return ['self', '/self/consumers/:key', 'PUT'] as const
}

export function getPutSelfConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.consumers)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfConsumersKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.consumers)[':key']['$put']>) {
      return parseResponse(client.self.consumers[':key'].$put(args, options))
    },
  })
}

export function injectPutSelfConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.consumers)[':key']['$put']>,
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
    const mutationDefaults = getPutSelfConsumersKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfConsumersKeyMutationKey() {
  return ['self', '/self/consumers/:key', 'DELETE'] as const
}

export function getDeleteSelfConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.consumers)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfConsumersKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.consumers)[':key']['$delete']>) {
      return parseResponse(client.self.consumers[':key'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.consumers)[':key']['$delete']>,
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
    const mutationDefaults = getDeleteSelfConsumersKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfConsumersKeySecretQueryKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
) {
  return ['self', '/self/consumers/:key/secret', args] as const
}

export function getSelfConsumersKeySecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersKeySecretQueryKey>
  >({
    queryKey: getSelfConsumersKeySecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumers[':key'].secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersKeySecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfConsumersKeySecretQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfConsumptionsQueryKey(
  args: InferRequestType<typeof client.self.consumptions.$get>,
) {
  return ['self', '/self/consumptions', args] as const
}

export function getSelfConsumptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.self.consumptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumptionsQueryKey>
  >({
    queryKey: getSelfConsumptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfConsumptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.self.consumptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfConsumptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSelfCreditsQueryKey() {
  return ['self', '/self/credits'] as const
}

export function getSelfCreditsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfCreditsQueryKey>
  >({
    queryKey: getSelfCreditsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.credits.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfCreditsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSelfEmailsQueryKey() {
  return ['self', '/self/emails'] as const
}

export function getSelfEmailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfEmailsQueryKey>
  >({
    queryKey: getSelfEmailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfEmailsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutSelfEmailsEmailMutationKey() {
  return ['self', '/self/emails/:email', 'PUT'] as const
}

export function getPutSelfEmailsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.emails)[':email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfEmailsEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.emails)[':email']['$put']>) {
      return parseResponse(client.self.emails[':email'].$put(args, options))
    },
  })
}

export function injectPutSelfEmailsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.emails)[':email']['$put']>,
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
    const mutationDefaults = getPutSelfEmailsEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfEmailsEmailMutationKey() {
  return ['self', '/self/emails/:email', 'DELETE'] as const
}

export function getDeleteSelfEmailsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.emails)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfEmailsEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.emails)[':email']['$delete']>) {
      return parseResponse(client.self.emails[':email'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfEmailsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.emails)[':email']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.emails)[':email']['$delete']>,
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
    const mutationDefaults = getDeleteSelfEmailsEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfIdQueryKey() {
  return ['self', '/self/id'] as const
}

export function getSelfIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfIdQueryKey>
  >({
    queryKey: getSelfIdQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.id.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelfIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfIdQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSelfInstancesQueryKey() {
  return ['self', '/self/instances'] as const
}

export function getSelfInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfInstancesQueryKey>
  >({
    queryKey: getSelfInstancesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.instances.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfInstancesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSelfKeysQueryKey() {
  return ['self', '/self/keys'] as const
}

export function getSelfKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfKeysQueryKey>
  >({
    queryKey: getSelfKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutSelfKeysKeyMutationKey() {
  return ['self', '/self/keys/:key', 'PUT'] as const
}

export function getPutSelfKeysKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.keys)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfKeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.keys)[':key']['$put']>) {
      return parseResponse(client.self.keys[':key'].$put(args, options))
    },
  })
}

export function injectPutSelfKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.keys)[':key']['$put']>,
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
    const mutationDefaults = getPutSelfKeysKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfKeysKeyMutationKey() {
  return ['self', '/self/keys/:key', 'DELETE'] as const
}

export function getDeleteSelfKeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.keys)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfKeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.keys)[':key']['$delete']>) {
      return parseResponse(client.self.keys[':key'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.keys)[':key']['$delete']>,
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
    const mutationDefaults = getDeleteSelfKeysKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'PUT'] as const
}

export function getPutSelfMfaKindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$put']>) {
      return parseResponse(client.self.mfa[':kind'].$put(args, options))
    },
  })
}

export function injectPutSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['$put']>,
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
    const mutationDefaults = getPutSelfMfaKindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'POST'] as const
}

export function getPostSelfMfaKindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$post']>) {
      return parseResponse(client.self.mfa[':kind'].$post(args, options))
    },
  })
}

export function injectPostSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['$post']>,
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
    const mutationDefaults = getPostSelfMfaKindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'DELETE'] as const
}

export function getDeleteSelfMfaKindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>) {
      return parseResponse(client.self.mfa[':kind'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>,
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
    const mutationDefaults = getDeleteSelfMfaKindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfMfaKindBackupcodesQueryKey(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
) {
  return ['self', '/self/mfa/:kind/backupcodes', args] as const
}

export function getSelfMfaKindBackupcodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfMfaKindBackupcodesQueryKey>
  >({
    queryKey: getSelfMfaKindBackupcodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.mfa[':kind'].backupcodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfMfaKindBackupcodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfMfaKindBackupcodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfMfaKindBackupcodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSelfMfaKindConfirmationMutationKey() {
  return ['self', '/self/mfa/:kind/confirmation', 'POST'] as const
}

export function getPostSelfMfaKindConfirmationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfMfaKindConfirmationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
    ) {
      return parseResponse(client.self.mfa[':kind'].confirmation.$post(args, options))
    },
  })
}

export function injectPostSelfMfaKindConfirmation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
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
    const mutationDefaults = getPostSelfMfaKindConfirmationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfPaymentInfoQueryKey() {
  return ['self', '/self/payment-info'] as const
}

export function getSelfPaymentInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentInfoQueryKey>
  >({
    queryKey: getSelfPaymentInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self['payment-info'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfPaymentInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSelfPaymentsBillingsQueryKey() {
  return ['self', '/self/payments/billings'] as const
}

export function getSelfPaymentsBillingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsQueryKey>
  >({
    queryKey: getSelfPaymentsBillingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.billings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsBillings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfPaymentsBillingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSelfPaymentsBillingsMutationKey() {
  return ['self', '/self/payments/billings', 'POST'] as const
}

export function getPostSelfPaymentsBillingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSelfPaymentsBillingsMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.billings.$post(undefined, options))
    },
  })
}

export function injectPostSelfPaymentsBillings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostSelfPaymentsBillingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfPaymentsBillingsBidQueryKey(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
) {
  return ['self', '/self/payments/billings/:bid', args] as const
}

export function getSelfPaymentsBillingsBidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsBidQueryKey>
  >({
    queryKey: getSelfPaymentsBillingsBidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.billings[':bid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsBidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfPaymentsBillingsBidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSelfPaymentsBillingsBidMutationKey() {
  return ['self', '/self/payments/billings/:bid', 'PUT'] as const
}

export function getPutSelfPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
    ) {
      return parseResponse(client.self.payments.billings[':bid'].$put(args, options))
    },
  })
}

export function injectPutSelfPaymentsBillingsBid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
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
    const mutationDefaults = getPutSelfPaymentsBillingsBidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfPaymentsBillingsBidMutationKey() {
  return ['self', '/self/payments/billings/:bid', 'DELETE'] as const
}

export function getDeleteSelfPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
    ) {
      return parseResponse(client.self.payments.billings[':bid'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfPaymentsBillingsBid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
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
    const mutationDefaults = getDeleteSelfPaymentsBillingsBidMutationOptions<
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

export function getSelfPaymentsBillingsBidPdfQueryKey(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
) {
  return ['self', '/self/payments/billings/:bid.pdf', args] as const
}

export function getSelfPaymentsBillingsBidPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsBidPdfQueryKey>
  >({
    queryKey: getSelfPaymentsBillingsBidPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.billings[':bid.pdf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsBillingsBidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsBidPdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfPaymentsBillingsBidPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfPaymentsFullpricePriceQueryKey(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
) {
  return ['self', '/self/payments/fullprice/:price', args] as const
}

export function getSelfPaymentsFullpricePriceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsFullpricePriceQueryKey>
  >({
    queryKey: getSelfPaymentsFullpricePriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.fullprice[':price'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsFullpricePrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsFullpricePriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSelfPaymentsFullpricePriceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSelfPaymentsMethodsQueryKey() {
  return ['self', '/self/payments/methods'] as const
}

export function getSelfPaymentsMethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMethodsQueryKey>
  >({
    queryKey: getSelfPaymentsMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.methods.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfPaymentsMethodsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSelfPaymentsMethodsMutationKey() {
  return ['self', '/self/payments/methods', 'POST'] as const
}

export function getPostSelfPaymentsMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSelfPaymentsMethodsMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.methods.$post(undefined, options))
    },
  })
}

export function injectPostSelfPaymentsMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostSelfPaymentsMethodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfPaymentsMethodsDefaultQueryKey() {
  return ['self', '/self/payments/methods/default'] as const
}

export function getSelfPaymentsMethodsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMethodsDefaultQueryKey>
  >({
    queryKey: getSelfPaymentsMethodsDefaultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.methods.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMethodsDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfPaymentsMethodsDefaultQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutSelfPaymentsMethodsDefaultMutationKey() {
  return ['self', '/self/payments/methods/default', 'PUT'] as const
}

export function getPutSelfPaymentsMethodsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$put>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsMethodsDefaultMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.methods.default.$put(undefined, options))
    },
  })
}

export function injectPutSelfPaymentsMethodsDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.methods.default.$put>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPutSelfPaymentsMethodsDefaultMutationOptions<
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

export function getDeleteSelfPaymentsMethodsMIdMutationKey() {
  return ['self', '/self/payments/methods/:mId', 'DELETE'] as const
}

export function getDeleteSelfPaymentsMethodsMIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.methods)[':mId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsMethodsMIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
    ) {
      return parseResponse(client.self.payments.methods[':mId'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfPaymentsMethodsMId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.methods)[':mId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
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
    const mutationDefaults = getDeleteSelfPaymentsMethodsMIdMutationOptions<
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

export function getSelfPaymentsMonthlyinvoiceQueryKey() {
  return ['self', '/self/payments/monthlyinvoice'] as const
}

export function getSelfPaymentsMonthlyinvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMonthlyinvoiceQueryKey>
  >({
    queryKey: getSelfPaymentsMonthlyinvoiceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.monthlyinvoice.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMonthlyinvoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfPaymentsMonthlyinvoiceQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationKey() {
  return ['self', '/self/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.maxcredit.$put>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.monthlyinvoice.maxcredit.$put(undefined, options))
    },
  })
}

export function injectPutSelfPaymentsMonthlyinvoiceMaxcredit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.maxcredit.$put>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationOptions<
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

export function getSelfPaymentsRecurringQueryKey() {
  return ['self', '/self/payments/recurring'] as const
}

export function getSelfPaymentsRecurringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsRecurringQueryKey>
  >({
    queryKey: getSelfPaymentsRecurringQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.recurring.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsRecurringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfPaymentsRecurringQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteSelfPaymentsRecurringMutationKey() {
  return ['self', '/self/payments/recurring', 'DELETE'] as const
}

export function getDeleteSelfPaymentsRecurringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsRecurringMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.recurring.$delete(undefined, options))
    },
  })
}

export function injectDeleteSelfPaymentsRecurring<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$delete>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteSelfPaymentsRecurringMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfPaymentsTokensStripeQueryKey() {
  return ['self', '/self/payments/tokens/stripe'] as const
}

export function getSelfPaymentsTokensStripeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsTokensStripeQueryKey>
  >({
    queryKey: getSelfPaymentsTokensStripeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.tokens.stripe.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSelfPaymentsTokensStripe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsTokensStripeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfPaymentsTokensStripeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSelfTokensQueryKey() {
  return ['self', '/self/tokens'] as const
}

export function getSelfTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfTokensQueryKey>
  >({
    queryKey: getSelfTokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.tokens.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfTokensQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteSelfTokensMutationKey() {
  return ['self', '/self/tokens', 'DELETE'] as const
}

export function getDeleteSelfTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfTokensMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.tokens.$delete(undefined, options))
    },
  })
}

export function injectDeleteSelfTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$delete>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteSelfTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSelfTokensTokenMutationKey() {
  return ['self', '/self/tokens/:token', 'DELETE'] as const
}

export function getDeleteSelfTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.tokens)[':token']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.tokens)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfTokensTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.tokens)[':token']['$delete']>) {
      return parseResponse(client.self.tokens[':token'].$delete(args, options))
    },
  })
}

export function injectDeleteSelfTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.tokens)[':token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.tokens)[':token']['$delete']>,
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
    const mutationDefaults = getDeleteSelfTokensTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSelfValidateEmailQueryKey(
  args: InferRequestType<typeof client.self.validate_email.$get>,
) {
  return ['self', '/self/validate_email', args] as const
}

export function getSelfValidateEmailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.self.validate_email.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfValidateEmailQueryKey>
  >({
    queryKey: getSelfValidateEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.validate_email.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSelfValidateEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.self.validate_email.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfValidateEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelfValidateEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSummaryQueryKey() {
  return ['summary', '/summary'] as const
}

export function getSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSummaryQueryKey>
  >({
    queryKey: getSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.summary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSummaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function injectPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
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
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
) {
  return ['users', '/users/:id/applications', args] as const
}

export function getUsersIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdApplicationsQueryKey>
  >({
    queryKey: getUsersIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdApplicationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdGitInfoQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
) {
  return ['users', '/users/:userId/git-info', args] as const
}

export function getUsersUserIdGitInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGitInfoQueryKey>
  >({
    queryKey: getUsersUserIdGitInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId']['git-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdGitInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGitInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdGitInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ProvidersAddonMatomoResourcesMutationKey() {
  return ['v2', '/v2/providers/addon-matomo/resources', 'POST'] as const
}

export function getPostV2ProvidersAddonMatomoResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProvidersAddonMatomoResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
    ) {
      return parseResponse(client.v2.providers['addon-matomo'].resources.$post(args, options))
    },
  })
}

export function injectPostV2ProvidersAddonMatomoResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
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
    const mutationDefaults = getPostV2ProvidersAddonMatomoResourcesMutationOptions<
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

export function getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationKey() {
  return ['v2', '/v2/providers/addon-matomo/resources/:matomoId', 'DELETE'] as const
}

export function getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.providers['addon-matomo'].resources[':matomoId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2ProvidersAddonMatomoResourcesMatomoId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
        >,
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
    const mutationDefaults = getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationOptions<
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

export function getV3LogsAppIdQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
) {
  return ['v3', '/v3/logs/:appId', args] as const
}

export function getV3LogsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdQueryKey>
  >({
    queryKey: getV3LogsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV3LogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3LogsAppIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV3LogsAppIdDrainsQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/drains', args] as const
}

export function getV3LogsAppIdDrainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdDrainsQueryKey>
  >({
    queryKey: getV3LogsAppIdDrainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId'].drains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3LogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3LogsAppIdDrainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV3LogsAppIdDrainsMutationKey() {
  return ['v3', '/v3/logs/:appId/drains', 'POST'] as const
}

export function getPostV3LogsAppIdDrainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogsAppIdDrainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>) {
      return parseResponse(client.v3.logs[':appId'].drains.$post(args, options))
    },
  })
}

export function injectPostV3LogsAppIdDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>,
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
    const mutationDefaults = getPostV3LogsAppIdDrainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV3LogsAppIdDrainsIdOrUrlQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', args] as const
}

export function getV3LogsAppIdDrainsIdOrUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdDrainsIdOrUrlQueryKey>
  >({
    queryKey: getV3LogsAppIdDrainsIdOrUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId'].drains[':idOrUrl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3LogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdDrainsIdOrUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3LogsAppIdDrainsIdOrUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV3LogsAppIdDrainsIdOrUrlMutationKey() {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function getDeleteV3LogsAppIdDrainsIdOrUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3LogsAppIdDrainsIdOrUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    ) {
      return parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
    },
  })
}

export function injectDeleteV3LogsAppIdDrainsIdOrUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
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
    const mutationDefaults = getDeleteV3LogsAppIdDrainsIdOrUrlMutationOptions<
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

export function getV3LogsAppIdLogsChunkedQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/logs-chunked', args] as const
}

export function getV3LogsAppIdLogsChunkedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdLogsChunkedQueryKey>
  >({
    queryKey: getV3LogsAppIdLogsChunkedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId']['logs-chunked'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3LogsAppIdLogsChunked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdLogsChunkedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3LogsAppIdLogsChunkedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV3LogsAppIdLogsSocketQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/logs-socket', args] as const
}

export function getV3LogsAppIdLogsSocketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdLogsSocketQueryKey>
  >({
    queryKey: getV3LogsAppIdLogsSocketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId']['logs-socket'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3LogsAppIdLogsSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdLogsSocketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3LogsAppIdLogsSocketQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/addons/:matomoId', args] as const
}

export function getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey>
  >({
    queryKey: getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['addon-matomo'].addons[':matomoId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4AddonProvidersAddonMatomoAddonsMatomoId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV4AddonProvidersAddonMatomoTokenValidateQueryKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/token/validate', args] as const
}

export function getV4AddonProvidersAddonMatomoTokenValidateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersAddonMatomoTokenValidateQueryKey>
  >({
    queryKey: getV4AddonProvidersAddonMatomoTokenValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['addon-matomo'].token.validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4AddonProvidersAddonMatomoTokenValidate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersAddonMatomoTokenValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4AddonProvidersAddonMatomoTokenValidateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey(
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

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey>
  >({
    queryKey: getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV4AddonProvidersConfigProviderAddonsConfigurationProviderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey(
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

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey>
  >({
    queryKey: getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationKey() {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env',
    'PUT',
  ] as const
}

export function getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
      >,
    ) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
        >,
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
    const mutationDefaults =
      getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
) {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', args] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey>
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationKey() {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', 'POST'] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups.$post(args, options),
      )
    },
  })
}

export function injectPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
        >,
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
    const mutationDefaults = getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey>
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationOptions<
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

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers',
    'POST',
  ] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
          'external-peers'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
        >,
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
    const mutationDefaults =
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationOptions<
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

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers/:peerId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
          'external-peers'
        ][':peerId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members',
    'POST',
  ] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].members.$post(args, options),
      )
    },
  })
}

export function injectPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
        >,
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
    const mutationDefaults =
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
          ':memberId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
          ':memberId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey
    >
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].peers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].wireguard.configuration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].wireguard.configuration.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStream<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey(
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey
    >
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].stream.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStream<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostVendorAddonsMutationKey() {
  return ['vendor', '/vendor//addons', 'POST'] as const
}

export function getPostVendorAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.addons.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostVendorAddonsMutationKey(),
    async mutationFn() {
      return parseResponse(client.vendor.addons.$post(undefined, options))
    },
  })
}

export function injectPostVendorAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.addons.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostVendorAddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVendorAppsAddonIdLogscollectorQueryKey(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
) {
  return ['vendor', '/vendor//apps/:addonId/logscollector', args] as const
}

export function getVendorAppsAddonIdLogscollectorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVendorAppsAddonIdLogscollectorQueryKey>
  >({
    queryKey: getVendorAppsAddonIdLogscollectorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vendor.apps[':addonId'].logscollector.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVendorAppsAddonIdLogscollector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsAddonIdLogscollectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVendorAppsAddonIdLogscollectorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getVendorAppsQueryKey(args: InferRequestType<typeof client.vendor.apps.$get>) {
  return ['vendor', '/vendor/apps', args] as const
}

export function getVendorAppsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vendor.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVendorAppsQueryKey>
  >({
    queryKey: getVendorAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vendor.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVendorApps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vendor.apps.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVendorAppsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVendorAppsAddonIdQueryKey(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
) {
  return ['vendor', '/vendor/apps/:addonId', args] as const
}

export function getVendorAppsAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVendorAppsAddonIdQueryKey>
  >({
    queryKey: getVendorAppsAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vendor.apps[':addonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVendorAppsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsAddonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVendorAppsAddonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutVendorAppsAddonIdMutationKey() {
  return ['vendor', '/vendor/apps/:addonId', 'PUT'] as const
}

export function getPutVendorAppsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVendorAppsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>) {
      return parseResponse(client.vendor.apps[':addonId'].$put(args, options))
    },
  })
}

export function injectPutVendorAppsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>,
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
    const mutationDefaults = getPutVendorAppsAddonIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVendorAppsAddonIdConsumptionsMutationKey() {
  return ['vendor', '/vendor/apps/:addonId/consumptions', 'POST'] as const
}

export function getPostVendorAppsAddonIdConsumptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVendorAppsAddonIdConsumptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
    ) {
      return parseResponse(client.vendor.apps[':addonId'].consumptions.$post(args, options))
    },
  })
}

export function injectPostVendorAppsAddonIdConsumptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
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
    const mutationDefaults = getPostVendorAppsAddonIdConsumptionsMutationOptions<
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

export function getPutVendorAppsAddonIdMigrationCallbackMutationKey() {
  return ['vendor', '/vendor/apps/:addonId/migration_callback', 'PUT'] as const
}

export function getPutVendorAppsAddonIdMigrationCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVendorAppsAddonIdMigrationCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
    ) {
      return parseResponse(client.vendor.apps[':addonId'].migration_callback.$put(args, options))
    },
  })
}

export function injectPutVendorAppsAddonIdMigrationCallback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
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
    const mutationDefaults = getPutVendorAppsAddonIdMigrationCallbackMutationOptions<
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
