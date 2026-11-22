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

export function getHelloKey() {
  return ['hello'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getTykKey() {
  return ['tyk'] as const
}

export function getListenPathKey() {
  return ['{listen_path}'] as const
}

export function getHelloQueryKey() {
  return ['hello', '/hello'] as const
}

export function getHelloQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHelloQueryKey>
  >({
    queryKey: getHelloQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hello.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHello<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHelloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHelloQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >({
    queryKey: getReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReadyQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTykApisQueryKey() {
  return ['tyk', '/tyk/apis'] as const
}

export function getTykApisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykApisQueryKey>
  >({
    queryKey: getTykApisQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykApis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTykApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykApisQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostTykApisMutationKey() {
  return ['tyk', '/tyk/apis', 'POST'] as const
}

export function getPostTykApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.apis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.apis.$post>) {
      return parseResponse(client.tyk.apis.$post(args, options))
    },
  })
}

export function injectPostTykApis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.apis.$post>,
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
    const mutationDefaults = getPostTykApisMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykApisApiIDQueryKey(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/apis/:apiID', args] as const
}

export function getTykApisApiIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisApiIDQueryKey>
  >({
    queryKey: getTykApisApiIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis[':apiID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykApisApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykApisApiIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykApisApiIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTykApisApiIDMutationKey() {
  return ['tyk', '/tyk/apis/:apiID', 'PUT'] as const
}

export function getPutTykApisApiIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykApisApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>) {
      return parseResponse(client.tyk.apis[':apiID'].$put(args, options))
    },
  })
}

export function injectPutTykApisApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>,
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
    const mutationDefaults = getPutTykApisApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykApisApiIDMutationKey() {
  return ['tyk', '/tyk/apis/:apiID', 'DELETE'] as const
}

export function getDeleteTykApisApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykApisApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.apis[':apiID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykApisApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>,
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
    const mutationDefaults = getDeleteTykApisApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykApisApiIDVersionsQueryKey(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>,
) {
  return ['tyk', '/tyk/apis/:apiID/versions', args] as const
}

export function getTykApisApiIDVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisApiIDVersionsQueryKey>
  >({
    queryKey: getTykApisApiIDVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis[':apiID'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykApisApiIDVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykApisApiIDVersionsQueryKey>
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
      ...getTykApisApiIDVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTykApisOasQueryKey(args: InferRequestType<typeof client.tyk.apis.oas.$get>) {
  return ['tyk', '/tyk/apis/oas', args] as const
}

export function getTykApisOasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tyk.apis.oas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykApisOasQueryKey>
  >({
    queryKey: getTykApisOasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis.oas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykApisOas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tyk.apis.oas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTykApisOasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykApisOasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTykApisOasMutationKey() {
  return ['tyk', '/tyk/apis/oas', 'POST'] as const
}

export function getPostTykApisOasMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.apis.oas.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykApisOasMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.apis.oas.$post>) {
      return parseResponse(client.tyk.apis.oas.$post(args, options))
    },
  })
}

export function injectPostTykApisOas<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.apis.oas.$post>,
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
    const mutationDefaults = getPostTykApisOasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykApisOasApiIDQueryKey(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/apis/oas/:apiID', args] as const
}

export function getTykApisOasApiIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasApiIDQueryKey>
  >({
    queryKey: getTykApisOasApiIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis.oas[':apiID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykApisOasApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykApisOasApiIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykApisOasApiIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTykApisOasApiIDMutationKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'PUT'] as const
}

export function getPutTykApisOasApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykApisOasApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>) {
      return parseResponse(client.tyk.apis.oas[':apiID'].$put(args, options))
    },
  })
}

export function injectPutTykApisOasApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>,
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
    const mutationDefaults = getPutTykApisOasApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykApisOasApiIDMutationKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'DELETE'] as const
}

export function getDeleteTykApisOasApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykApisOasApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.apis.oas[':apiID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykApisOasApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>,
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
    const mutationDefaults = getDeleteTykApisOasApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchTykApisOasApiIDMutationKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'PATCH'] as const
}

export function getPatchTykApisOasApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTykApisOasApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>) {
      return parseResponse(client.tyk.apis.oas[':apiID'].$patch(args, options))
    },
  })
}

export function injectPatchTykApisOasApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>,
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
    const mutationDefaults = getPatchTykApisOasApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykApisOasApiIDExportQueryKey(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>,
) {
  return ['tyk', '/tyk/apis/oas/:apiID/export', args] as const
}

export function getTykApisOasApiIDExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasApiIDExportQueryKey>
  >({
    queryKey: getTykApisOasApiIDExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis.oas[':apiID'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykApisOasApiIDExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykApisOasApiIDExportQueryKey>
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
      ...getTykApisOasApiIDExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTykApisOasApiIDVersionsQueryKey(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>,
) {
  return ['tyk', '/tyk/apis/oas/:apiID/versions', args] as const
}

export function getTykApisOasApiIDVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasApiIDVersionsQueryKey>
  >({
    queryKey: getTykApisOasApiIDVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis.oas[':apiID'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykApisOasApiIDVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykApisOasApiIDVersionsQueryKey>
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
      ...getTykApisOasApiIDVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTykApisOasExportQueryKey(
  args: InferRequestType<typeof client.tyk.apis.oas.export.$get>,
) {
  return ['tyk', '/tyk/apis/oas/export', args] as const
}

export function getTykApisOasExportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tyk.apis.oas.export.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasExportQueryKey>
  >({
    queryKey: getTykApisOasExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.apis.oas.export.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykApisOasExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tyk.apis.oas.export.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykApisOasExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykApisOasExportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTykApisOasImportMutationKey() {
  return ['tyk', '/tyk/apis/oas/import', 'POST'] as const
}

export function getPostTykApisOasImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.apis.oas.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykApisOasImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.apis.oas.import.$post>) {
      return parseResponse(client.tyk.apis.oas.import.$post(args, options))
    },
  })
}

export function injectPostTykApisOasImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tyk.apis.oas.import.$post>,
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
    const mutationDefaults = getPostTykApisOasImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykMcpsQueryKey() {
  return ['tyk', '/tyk/mcps'] as const
}

export function getTykMcpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykMcpsQueryKey>
  >({
    queryKey: getTykMcpsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.mcps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykMcps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTykMcpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykMcpsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostTykMcpsMutationKey() {
  return ['tyk', '/tyk/mcps', 'POST'] as const
}

export function getPostTykMcpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.mcps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykMcpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.mcps.$post>) {
      return parseResponse(client.tyk.mcps.$post(args, options))
    },
  })
}

export function injectPostTykMcps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.mcps.$post>,
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
    const mutationDefaults = getPostTykMcpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykMcpsApiIDQueryKey(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/mcps/:apiID', args] as const
}

export function getTykMcpsApiIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykMcpsApiIDQueryKey>
  >({
    queryKey: getTykMcpsApiIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.mcps[':apiID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykMcpsApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykMcpsApiIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykMcpsApiIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTykMcpsApiIDMutationKey() {
  return ['tyk', '/tyk/mcps/:apiID', 'PUT'] as const
}

export function getPutTykMcpsApiIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykMcpsApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>) {
      return parseResponse(client.tyk.mcps[':apiID'].$put(args, options))
    },
  })
}

export function injectPutTykMcpsApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>,
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
    const mutationDefaults = getPutTykMcpsApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykMcpsApiIDMutationKey() {
  return ['tyk', '/tyk/mcps/:apiID', 'DELETE'] as const
}

export function getDeleteTykMcpsApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykMcpsApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.mcps[':apiID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykMcpsApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>,
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
    const mutationDefaults = getDeleteTykMcpsApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykCacheApiIDMutationKey() {
  return ['tyk', '/tyk/cache/:apiID', 'DELETE'] as const
}

export function getDeleteTykCacheApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.cache)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCacheApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.cache[':apiID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykCacheApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.cache)[':apiID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>,
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
    const mutationDefaults = getDeleteTykCacheApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykCacheJwksApiIDMutationKey() {
  return ['tyk', '/tyk/cache/jwks/:apiID', 'DELETE'] as const
}

export function getDeleteTykCacheJwksApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCacheJwksApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.cache.jwks[':apiID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykCacheJwksApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>,
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
    const mutationDefaults = getDeleteTykCacheJwksApiIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykCacheJwksMutationKey() {
  return ['tyk', '/tyk/cache/jwks', 'DELETE'] as const
}

export function getDeleteTykCacheJwksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.cache.jwks.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCacheJwksMutationKey(),
    async mutationFn() {
      return parseResponse(client.tyk.cache.jwks.$delete(undefined, options))
    },
  })
}

export function injectDeleteTykCacheJwks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.cache.jwks.$delete>>>
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
    const mutationDefaults = getDeleteTykCacheJwksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykCertsQueryKey(args: InferRequestType<typeof client.tyk.certs.$get>) {
  return ['tyk', '/tyk/certs', args] as const
}

export function getTykCertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tyk.certs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykCertsQueryKey>
  >({
    queryKey: getTykCertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.certs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykCerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tyk.certs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTykCertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykCertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTykCertsMutationKey() {
  return ['tyk', '/tyk/certs', 'POST'] as const
}

export function getPostTykCertsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.certs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykCertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.certs.$post>) {
      return parseResponse(client.tyk.certs.$post(args, options))
    },
  })
}

export function injectPostTykCerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.certs.$post>,
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
    const mutationDefaults = getPostTykCertsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykCertsCertIDQueryKey(
  args: InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>,
) {
  return ['tyk', '/tyk/certs/:certID', args] as const
}

export function getTykCertsCertIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykCertsCertIDQueryKey>
  >({
    queryKey: getTykCertsCertIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.certs[':certID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykCertsCertID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykCertsCertIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykCertsCertIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteTykCertsCertIDMutationKey() {
  return ['tyk', '/tyk/certs/:certID', 'DELETE'] as const
}

export function getDeleteTykCertsCertIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCertsCertIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>) {
      return parseResponse(client.tyk.certs[':certID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykCertsCertID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>,
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
    const mutationDefaults = getDeleteTykCertsCertIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTykDebugMutationKey() {
  return ['tyk', '/tyk/debug', 'POST'] as const
}

export function getPostTykDebugMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.debug.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.debug.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykDebugMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.debug.$post>) {
      return parseResponse(client.tyk.debug.$post(args, options))
    },
  })
}

export function injectPostTykDebug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.debug.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.debug.$post>,
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
    const mutationDefaults = getPostTykDebugMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykKeysQueryKey() {
  return ['tyk', '/tyk/keys'] as const
}

export function getTykKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykKeysQueryKey>
  >({
    queryKey: getTykKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTykKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostTykKeysMutationKey() {
  return ['tyk', '/tyk/keys', 'POST'] as const
}

export function getPostTykKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.keys.$post>) {
      return parseResponse(client.tyk.keys.$post(args, options))
    },
  })
}

export function injectPostTykKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.keys.$post>,
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
    const mutationDefaults = getPostTykKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykKeysKeyIDQueryKey(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>,
) {
  return ['tyk', '/tyk/keys/:keyID', args] as const
}

export function getTykKeysKeyIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykKeysKeyIDQueryKey>
  >({
    queryKey: getTykKeysKeyIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.keys[':keyID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykKeysKeyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykKeysKeyIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykKeysKeyIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTykKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/:keyID', 'PUT'] as const
}

export function getPutTykKeysKeyIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>) {
      return parseResponse(client.tyk.keys[':keyID'].$put(args, options))
    },
  })
}

export function injectPutTykKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>,
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
    const mutationDefaults = getPutTykKeysKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTykKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/:keyID', 'POST'] as const
}

export function getPostTykKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>) {
      return parseResponse(client.tyk.keys[':keyID'].$post(args, options))
    },
  })
}

export function injectPostTykKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>,
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
    const mutationDefaults = getPostTykKeysKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/:keyID', 'DELETE'] as const
}

export function getDeleteTykKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>) {
      return parseResponse(client.tyk.keys[':keyID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>,
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
    const mutationDefaults = getDeleteTykKeysKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTykKeysCreateMutationKey() {
  return ['tyk', '/tyk/keys/create', 'POST'] as const
}

export function getPostTykKeysCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.keys.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.keys.create.$post>) {
      return parseResponse(client.tyk.keys.create.$post(args, options))
    },
  })
}

export function injectPostTykKeysCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.keys.create.$post>,
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
    const mutationDefaults = getPostTykKeysCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTykKeysPolicyKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/policy/:keyID', 'POST'] as const
}

export function getPostTykKeysPolicyKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.keys.policy)[':keyID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysPolicyKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>) {
      return parseResponse(client.tyk.keys.policy[':keyID'].$post(args, options))
    },
  })
}

export function injectPostTykKeysPolicyKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.keys.policy)[':keyID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>,
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
    const mutationDefaults = getPostTykKeysPolicyKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTykKeysPreviewMutationKey() {
  return ['tyk', '/tyk/keys/preview', 'POST'] as const
}

export function getPostTykKeysPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.keys.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.keys.preview.$post>) {
      return parseResponse(client.tyk.keys.preview.$post(args, options))
    },
  })
}

export function injectPostTykKeysPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tyk.keys.preview.$post>,
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
    const mutationDefaults = getPostTykKeysPreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykOauthClientsApiIDQueryKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID', args] as const
}

export function getTykOauthClientsApiIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApiIDQueryKey>
  >({
    queryKey: getTykOauthClientsApiIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykOauthClientsApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykOauthClientsApiIDQueryKey>
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
      ...getTykOauthClientsApiIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTykOauthClientsApiIDKeyNameQueryKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', args] as const
}

export function getTykOauthClientsApiIDKeyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApiIDKeyNameQueryKey>
  >({
    queryKey: getTykOauthClientsApiIDKeyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'][':keyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykOauthClientsApiIDKeyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykOauthClientsApiIDKeyNameQueryKey>
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
      ...getTykOauthClientsApiIDKeyNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutTykOauthClientsApiIDKeyNameMutationKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', 'PUT'] as const
}

export function getPutTykOauthClientsApiIDKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykOauthClientsApiIDKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>,
    ) {
      return parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$put(args, options))
    },
  })
}

export function injectPutTykOauthClientsApiIDKeyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>,
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
    const mutationDefaults = getPutTykOauthClientsApiIDKeyNameMutationOptions<
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

export function getDeleteTykOauthClientsApiIDKeyNameMutationKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', 'DELETE'] as const
}

export function getDeleteTykOauthClientsApiIDKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOauthClientsApiIDKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>,
    ) {
      return parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$delete(args, options))
    },
  })
}

export function injectDeleteTykOauthClientsApiIDKeyName<
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
                ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>,
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
    const mutationDefaults = getDeleteTykOauthClientsApiIDKeyNameMutationOptions<
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

export function getPutTykOauthClientsApiIDKeyNameRotateMutationKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName/rotate', 'PUT'] as const
}

export function getPutTykOauthClientsApiIDKeyNameRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykOauthClientsApiIDKeyNameRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']
      >,
    ) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'][':keyName'].rotate.$put(args, options),
      )
    },
  })
}

export function injectPutTykOauthClientsApiIDKeyNameRotate<
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
                  (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>,
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
    const mutationDefaults = getPutTykOauthClientsApiIDKeyNameRotateMutationOptions<
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

export function getTykOauthClientsApiIDKeyNameTokensQueryKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName/tokens', args] as const
}

export function getTykOauthClientsApiIDKeyNameTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApiIDKeyNameTokensQueryKey>
  >({
    queryKey: getTykOauthClientsApiIDKeyNameTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'][':keyName'].tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykOauthClientsApiIDKeyNameTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykOauthClientsApiIDKeyNameTokensQueryKey>
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
      ...getTykOauthClientsApiIDKeyNameTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTykOauthClientsApisAppIDQueryKey(
  args: InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>,
) {
  return ['tyk', '/tyk/oauth/clients/apis/:appID', args] as const
}

export function getTykOauthClientsApisAppIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApisAppIDQueryKey>
  >({
    queryKey: getTykOauthClientsApisAppIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.oauth.clients.apis[':appID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykOauthClientsApisAppID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykOauthClientsApisAppIDQueryKey>
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
      ...getTykOauthClientsApisAppIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostTykOauthClientsCreateMutationKey() {
  return ['tyk', '/tyk/oauth/clients/create', 'POST'] as const
}

export function getPostTykOauthClientsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.clients.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.clients.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOauthClientsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.clients.create.$post>) {
      return parseResponse(client.tyk.oauth.clients.create.$post(args, options))
    },
  })
}

export function injectPostTykOauthClientsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.clients.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tyk.oauth.clients.create.$post>,
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
    const mutationDefaults = getPostTykOauthClientsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykOauthRefreshKeyNameMutationKey() {
  return ['tyk', '/tyk/oauth/refresh/:keyName', 'DELETE'] as const
}

export function getDeleteTykOauthRefreshKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOauthRefreshKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>,
    ) {
      return parseResponse(client.tyk.oauth.refresh[':keyName'].$delete(args, options))
    },
  })
}

export function injectDeleteTykOauthRefreshKeyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>,
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
    const mutationDefaults = getDeleteTykOauthRefreshKeyNameMutationOptions<
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

export function getPostTykOauthRevokeMutationKey() {
  return ['tyk', '/tyk/oauth/revoke', 'POST'] as const
}

export function getPostTykOauthRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.revoke.$post>) {
      return parseResponse(client.tyk.oauth.revoke.$post(args, options))
    },
  })
}

export function injectPostTykOauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tyk.oauth.revoke.$post>,
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
    const mutationDefaults = getPostTykOauthRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTykOauthRevokeAllMutationKey() {
  return ['tyk', '/tyk/oauth/revoke_all', 'POST'] as const
}

export function getPostTykOauthRevokeAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke_all.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.revoke_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOauthRevokeAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.revoke_all.$post>) {
      return parseResponse(client.tyk.oauth.revoke_all.$post(args, options))
    },
  })
}

export function injectPostTykOauthRevokeAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke_all.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tyk.oauth.revoke_all.$post>,
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
    const mutationDefaults = getPostTykOauthRevokeAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykOauthTokensMutationKey() {
  return ['tyk', '/tyk/oauth/tokens', 'DELETE'] as const
}

export function getDeleteTykOauthTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.tokens.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.tokens.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOauthTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.tokens.$delete>) {
      return parseResponse(client.tyk.oauth.tokens.$delete(args, options))
    },
  })
}

export function injectDeleteTykOauthTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.tokens.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tyk.oauth.tokens.$delete>,
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
    const mutationDefaults = getDeleteTykOauthTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykOrgKeysQueryKey(args: InferRequestType<typeof client.tyk.org.keys.$get>) {
  return ['tyk', '/tyk/org/keys', args] as const
}

export function getTykOrgKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tyk.org.keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykOrgKeysQueryKey>
  >({
    queryKey: getTykOrgKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.org.keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykOrgKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tyk.org.keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTykOrgKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykOrgKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTykOrgKeysKeyIDQueryKey(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>,
) {
  return ['tyk', '/tyk/org/keys/:keyID', args] as const
}

export function getTykOrgKeysKeyIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOrgKeysKeyIDQueryKey>
  >({
    queryKey: getTykOrgKeysKeyIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.org.keys[':keyID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykOrgKeysKeyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykOrgKeysKeyIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykOrgKeysKeyIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTykOrgKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'PUT'] as const
}

export function getPutTykOrgKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykOrgKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>) {
      return parseResponse(client.tyk.org.keys[':keyID'].$put(args, options))
    },
  })
}

export function injectPutTykOrgKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>,
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
    const mutationDefaults = getPutTykOrgKeysKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTykOrgKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'POST'] as const
}

export function getPostTykOrgKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOrgKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>) {
      return parseResponse(client.tyk.org.keys[':keyID'].$post(args, options))
    },
  })
}

export function injectPostTykOrgKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>,
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
    const mutationDefaults = getPostTykOrgKeysKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykOrgKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'DELETE'] as const
}

export function getDeleteTykOrgKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOrgKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>) {
      return parseResponse(client.tyk.org.keys[':keyID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykOrgKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>,
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
    const mutationDefaults = getDeleteTykOrgKeysKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykPoliciesQueryKey() {
  return ['tyk', '/tyk/policies'] as const
}

export function getTykPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykPoliciesQueryKey>
  >({
    queryKey: getTykPoliciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.policies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTykPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykPoliciesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostTykPoliciesMutationKey() {
  return ['tyk', '/tyk/policies', 'POST'] as const
}

export function getPostTykPoliciesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.policies.$post>) {
      return parseResponse(client.tyk.policies.$post(args, options))
    },
  })
}

export function injectPostTykPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tyk.policies.$post>,
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
    const mutationDefaults = getPostTykPoliciesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykPoliciesPolIDQueryKey(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>,
) {
  return ['tyk', '/tyk/policies/:polID', args] as const
}

export function getTykPoliciesPolIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykPoliciesPolIDQueryKey>
  >({
    queryKey: getTykPoliciesPolIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.policies[':polID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTykPoliciesPolID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTykPoliciesPolIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykPoliciesPolIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTykPoliciesPolIDMutationKey() {
  return ['tyk', '/tyk/policies/:polID', 'PUT'] as const
}

export function getPutTykPoliciesPolIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykPoliciesPolIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>) {
      return parseResponse(client.tyk.policies[':polID'].$put(args, options))
    },
  })
}

export function injectPutTykPoliciesPolID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>,
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
    const mutationDefaults = getPutTykPoliciesPolIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTykPoliciesPolIDMutationKey() {
  return ['tyk', '/tyk/policies/:polID', 'DELETE'] as const
}

export function getDeleteTykPoliciesPolIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykPoliciesPolIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>) {
      return parseResponse(client.tyk.policies[':polID'].$delete(args, options))
    },
  })
}

export function injectDeleteTykPoliciesPolID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>,
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
    const mutationDefaults = getDeleteTykPoliciesPolIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykReloadQueryKey(args: InferRequestType<typeof client.tyk.reload.$get>) {
  return ['tyk', '/tyk/reload', args] as const
}

export function getTykReloadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tyk.reload.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykReloadQueryKey>
  >({
    queryKey: getTykReloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.reload.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykReload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tyk.reload.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTykReloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykReloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTykReloadGroupQueryKey() {
  return ['tyk', '/tyk/reload/group'] as const
}

export function getTykReloadGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTykReloadGroupQueryKey>
  >({
    queryKey: getTykReloadGroupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.reload.group.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykReloadGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTykReloadGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykReloadGroupQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostListenPathTykBatchMutationKey() {
  return [':listen_path', '/:listen_path/tyk/batch', 'POST'] as const
}

export function getPostListenPathTykBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':listen_path']['tyk']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListenPathTykBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>,
    ) {
      return parseResponse(client[':listen_path'].tyk.batch.$post(args, options))
    },
  })
}

export function injectPostListenPathTykBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':listen_path']['tyk']['batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>,
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
    const mutationDefaults = getPostListenPathTykBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTykSchemaQueryKey(args: InferRequestType<typeof client.tyk.schema.$get>) {
  return ['tyk', '/tyk/schema', args] as const
}

export function getTykSchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tyk.schema.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykSchemaQueryKey>
  >({
    queryKey: getTykSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tyk.schema.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTykSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tyk.schema.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTykSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTykSchemaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
