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
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getAnythingApiKeyQueryKey() {
  return ['anything', '/anything/apiKey'] as const
}

export function getAnythingApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingApiKeyQueryKey>
  >({
    queryKey: getAnythingApiKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.apiKey.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnythingApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingApiKeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutAnythingApiKeyMutationKey() {
  return ['anything', '/anything/apiKey', 'PUT'] as const
}

export function getPutAnythingApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingApiKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.apiKey.$put(undefined, options))
    },
  })
}

export function injectPutAnythingApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$put>>>>
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
    const mutationDefaults = getPutAnythingApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingApiKeyMutationKey() {
  return ['anything', '/anything/apiKey', 'POST'] as const
}

export function getPostAnythingApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingApiKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.apiKey.$post(undefined, options))
    },
  })
}

export function injectPostAnythingApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.apiKey.$post>>>>
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
    const mutationDefaults = getPostAnythingApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingBasicMutationKey() {
  return ['anything', '/anything/basic', 'POST'] as const
}

export function getPostAnythingBasicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.basic.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingBasicMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.basic.$post(undefined, options))
    },
  })
}

export function injectPostAnythingBasic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.basic.$post>>>>
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
    const mutationDefaults = getPostAnythingBasicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutAnythingBearerMutationKey() {
  return ['anything', '/anything/bearer', 'PUT'] as const
}

export function getPutAnythingBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.bearer.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingBearerMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.bearer.$put(undefined, options))
    },
  })
}

export function injectPutAnythingBearer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.bearer.$put>>>>
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
    const mutationDefaults = getPutAnythingBearerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingBearerMutationKey() {
  return ['anything', '/anything/bearer', 'POST'] as const
}

export function getPostAnythingBearerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.bearer.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingBearerMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.bearer.$post(undefined, options))
    },
  })
}

export function injectPostAnythingBearer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.bearer.$post>>>>
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
    const mutationDefaults = getPostAnythingBearerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnythingOauth2QueryKey() {
  return ['anything', '/anything/oauth2'] as const
}

export function getAnythingOauth2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingOauth2QueryKey>
  >({
    queryKey: getAnythingOauth2QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.oauth2.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnythingOauth2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingOauth2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingOauth2QueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutAnythingOauth2MutationKey() {
  return ['anything', '/anything/oauth2', 'PUT'] as const
}

export function getPutAnythingOauth2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingOauth2MutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.oauth2.$put(undefined, options))
    },
  })
}

export function injectPutAnythingOauth2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$put>>>>
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
    const mutationDefaults = getPutAnythingOauth2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingOauth2MutationKey() {
  return ['anything', '/anything/oauth2', 'POST'] as const
}

export function getPostAnythingOauth2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingOauth2MutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.oauth2.$post(undefined, options))
    },
  })
}

export function injectPostAnythingOauth2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$post>>>>
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
    const mutationDefaults = getPostAnythingOauth2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAnythingOauth2MutationKey() {
  return ['anything', '/anything/oauth2', 'DELETE'] as const
}

export function getDeleteAnythingOauth2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnythingOauth2MutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.oauth2.$delete(undefined, options))
    },
  })
}

export function injectDeleteAnythingOauth2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$delete>>>
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
    const mutationDefaults = getDeleteAnythingOauth2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAnythingOauth2MutationKey() {
  return ['anything', '/anything/oauth2', 'PATCH'] as const
}

export function getPatchAnythingOauth2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$patch>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingOauth2MutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.oauth2.$patch(undefined, options))
    },
  })
}

export function injectPatchAnythingOauth2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.oauth2.$patch>>>
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
    const mutationDefaults = getPatchAnythingOauth2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingOpenIdConnectMutationKey() {
  return ['anything', '/anything/openIdConnect', 'POST'] as const
}

export function getPostAnythingOpenIdConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.openIdConnect.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingOpenIdConnectMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.openIdConnect.$post(undefined, options))
    },
  })
}

export function injectPostAnythingOpenIdConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.openIdConnect.$post>>>
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
    const mutationDefaults = getPostAnythingOpenIdConnectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingNoAuthMutationKey() {
  return ['anything', '/anything/no-auth', 'POST'] as const
}

export function getPostAnythingNoAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['no-auth']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingNoAuthMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything['no-auth'].$post(undefined, options))
    },
  })
}

export function injectPostAnythingNoAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['no-auth']['$post']>>>
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
    const mutationDefaults = getPostAnythingNoAuthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnythingOptionalAuthQueryKey() {
  return ['anything', '/anything/optional-auth'] as const
}

export function getAnythingOptionalAuthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['optional-auth']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['optional-auth']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingOptionalAuthQueryKey>
  >({
    queryKey: getAnythingOptionalAuthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything['optional-auth'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingOptionalAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['optional-auth']['$get']>>>
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
              Awaited<ReturnType<(typeof client.anything)['optional-auth']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingOptionalAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingOptionalAuthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostStatus401MutationKey() {
  return ['status', '/status/401', 'POST'] as const
}

export function getPostStatus401MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$post']>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostStatus401MutationKey(),
    async mutationFn() {
      return parseResponse(client.status['401'].$post(undefined, options))
    },
  })
}

export function injectPostStatus401<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)['401']['$post']>>>
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
    const mutationDefaults = getPostStatus401MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
