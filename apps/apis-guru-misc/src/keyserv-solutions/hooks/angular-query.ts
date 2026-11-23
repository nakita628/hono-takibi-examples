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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1KeysApiCurrentSerialQueryKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Current/:serial', args] as const
}

export function getV1KeysApiCurrentSerialQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KeysApiCurrentSerialQueryKey>
  >({
    queryKey: getV1KeysApiCurrentSerialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.KeysApi.Current[':serial'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1KeysApiCurrentSerial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1KeysApiCurrentSerialQueryKey>
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
      ...getV1KeysApiCurrentSerialQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1KeysApiCustomSerialQueryKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Custom/:serial', args] as const
}

export function getV1KeysApiCustomSerialQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KeysApiCustomSerialQueryKey>
  >({
    queryKey: getV1KeysApiCustomSerialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.KeysApi.Custom[':serial'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1KeysApiCustomSerial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1KeysApiCustomSerialQueryKey>
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
      ...getV1KeysApiCustomSerialQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1KeysApiExpirySerialQueryKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Expiry/:serial', args] as const
}

export function getV1KeysApiExpirySerialQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KeysApiExpirySerialQueryKey>
  >({
    queryKey: getV1KeysApiExpirySerialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.KeysApi.Expiry[':serial'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1KeysApiExpirySerial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1KeysApiExpirySerialQueryKey>
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
      ...getV1KeysApiExpirySerialQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1KeysApiFindSerialQueryKey(
  args: InferRequestType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>,
) {
  return ['v1', '/v1/KeysApi/Find/:serial', args] as const
}

export function getV1KeysApiFindSerialQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KeysApiFindSerialQueryKey>
  >({
    queryKey: getV1KeysApiFindSerialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.KeysApi.Find[':serial'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1KeysApiFindSerial<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1KeysApiFindSerialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1KeysApiFindSerialQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ProductsApiMutationKey() {
  return ['v1', '/v1/ProductsApi', 'POST'] as const
}

export function getPostV1ProductsApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.ProductsApi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsApiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ProductsApi.$post>) {
      return parseResponse(client.v1.ProductsApi.$post(args, options))
    },
  })
}

export function injectPostV1ProductsApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.ProductsApi.$post>,
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
    const mutationDefaults = getPostV1ProductsApiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1ProductsApiMutationKey() {
  return ['v1', '/v1/ProductsApi', 'PATCH'] as const
}

export function getPatchV1ProductsApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.$patch>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.ProductsApi.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProductsApiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ProductsApi.$patch>) {
      return parseResponse(client.v1.ProductsApi.$patch(args, options))
    },
  })
}

export function injectPatchV1ProductsApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.$patch>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.ProductsApi.$patch>,
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
    const mutationDefaults = getPatchV1ProductsApiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProductsApiCountMutationKey() {
  return ['v1', '/v1/ProductsApi/Count', 'POST'] as const
}

export function getPostV1ProductsApiCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Count.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.ProductsApi.Count.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsApiCountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ProductsApi.Count.$post>) {
      return parseResponse(client.v1.ProductsApi.Count.$post(args, options))
    },
  })
}

export function injectPostV1ProductsApiCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Count.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.ProductsApi.Count.$post>,
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
    const mutationDefaults = getPostV1ProductsApiCountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProductsApiFindMutationKey() {
  return ['v1', '/v1/ProductsApi/Find', 'POST'] as const
}

export function getPostV1ProductsApiFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Find.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.ProductsApi.Find.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsApiFindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ProductsApi.Find.$post>) {
      return parseResponse(client.v1.ProductsApi.Find.$post(args, options))
    },
  })
}

export function injectPostV1ProductsApiFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Find.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.ProductsApi.Find.$post>,
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
    const mutationDefaults = getPostV1ProductsApiFindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProductsApiListMutationKey() {
  return ['v1', '/v1/ProductsApi/List', 'POST'] as const
}

export function getPostV1ProductsApiListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.List.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.ProductsApi.List.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsApiListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ProductsApi.List.$post>) {
      return parseResponse(client.v1.ProductsApi.List.$post(args, options))
    },
  })
}

export function injectPostV1ProductsApiList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.List.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.ProductsApi.List.$post>,
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
    const mutationDefaults = getPostV1ProductsApiListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProductsApiSaveMutationKey() {
  return ['v1', '/v1/ProductsApi/Save', 'POST'] as const
}

export function getPostV1ProductsApiSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Save.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.ProductsApi.Save.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsApiSaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ProductsApi.Save.$post>) {
      return parseResponse(client.v1.ProductsApi.Save.$post(args, options))
    },
  })
}

export function injectPostV1ProductsApiSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ProductsApi.Save.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.ProductsApi.Save.$post>,
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
    const mutationDefaults = getPostV1ProductsApiSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProductsApiSerialMutationKey() {
  return ['v1', '/v1/ProductsApi/:serial', 'POST'] as const
}

export function getPostV1ProductsApiSerialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ProductsApi)[':serial']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProductsApiSerialMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$post']>) {
      return parseResponse(client.v1.ProductsApi[':serial'].$post(args, options))
    },
  })
}

export function injectPostV1ProductsApiSerial<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ProductsApi)[':serial']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$post']>,
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
    const mutationDefaults = getPostV1ProductsApiSerialMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ProductsApiSerialMutationKey() {
  return ['v1', '/v1/ProductsApi/:serial', 'DELETE'] as const
}

export function getDeleteV1ProductsApiSerialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.ProductsApi)[':serial']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProductsApiSerialMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$delete']>) {
      return parseResponse(client.v1.ProductsApi[':serial'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ProductsApiSerial<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.ProductsApi)[':serial']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProductsApiSerialMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutV1SubscriptionsApiMutationKey() {
  return ['v1', '/v1/SubscriptionsApi', 'PUT'] as const
}

export function getPutV1SubscriptionsApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscriptionsApiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.$put>) {
      return parseResponse(client.v1.SubscriptionsApi.$put(args, options))
    },
  })
}

export function injectPutV1SubscriptionsApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.$put>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.$put>,
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
    const mutationDefaults = getPutV1SubscriptionsApiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1SubscriptionsApiMutationKey() {
  return ['v1', '/v1/SubscriptionsApi', 'POST'] as const
}

export function getPostV1SubscriptionsApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.$post>) {
      return parseResponse(client.v1.SubscriptionsApi.$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsApiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1SubscriptionsApiCountMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/Count', 'POST'] as const
}

export function getPostV1SubscriptionsApiCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Count.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.Count.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiCountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.Count.$post>) {
      return parseResponse(client.v1.SubscriptionsApi.Count.$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApiCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Count.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.Count.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsApiCountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1SubscriptionsApiDisableMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/Disable', 'POST'] as const
}

export function getPostV1SubscriptionsApiDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Disable.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$post>) {
      return parseResponse(client.v1.SubscriptionsApi.Disable.$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApiDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Disable.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsApiDisableMutationOptions<
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

export function getPatchV1SubscriptionsApiDisableMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/Disable', 'PATCH'] as const
}

export function getPatchV1SubscriptionsApiDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Disable.$patch>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SubscriptionsApiDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$patch>) {
      return parseResponse(client.v1.SubscriptionsApi.Disable.$patch(args, options))
    },
  })
}

export function injectPatchV1SubscriptionsApiDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Disable.$patch>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$patch>,
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
    const mutationDefaults = getPatchV1SubscriptionsApiDisableMutationOptions<
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

export function getPostV1SubscriptionsApiEnableMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/Enable', 'POST'] as const
}

export function getPostV1SubscriptionsApiEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Enable.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$post>) {
      return parseResponse(client.v1.SubscriptionsApi.Enable.$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApiEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Enable.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsApiEnableMutationOptions<
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

export function getPatchV1SubscriptionsApiEnableMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/Enable', 'PATCH'] as const
}

export function getPatchV1SubscriptionsApiEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Enable.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SubscriptionsApiEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$patch>) {
      return parseResponse(client.v1.SubscriptionsApi.Enable.$patch(args, options))
    },
  })
}

export function injectPatchV1SubscriptionsApiEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Enable.$patch>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$patch>,
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
    const mutationDefaults = getPatchV1SubscriptionsApiEnableMutationOptions<
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

export function getPostV1SubscriptionsApiFindMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/Find', 'POST'] as const
}

export function getPostV1SubscriptionsApiFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Find.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.Find.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiFindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.Find.$post>) {
      return parseResponse(client.v1.SubscriptionsApi.Find.$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApiFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Find.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.Find.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsApiFindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1SubscriptionsApiListMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/List', 'POST'] as const
}

export function getPostV1SubscriptionsApiListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.List.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.List.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.List.$post>) {
      return parseResponse(client.v1.SubscriptionsApi.List.$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApiList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.List.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.List.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsApiListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1SubscriptionsApiSaveMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/Save', 'POST'] as const
}

export function getPostV1SubscriptionsApiSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Save.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.SubscriptionsApi.Save.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiSaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.SubscriptionsApi.Save.$post>) {
      return parseResponse(client.v1.SubscriptionsApi.Save.$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApiSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.SubscriptionsApi.Save.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.SubscriptionsApi.Save.$post>,
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
    const mutationDefaults = getPostV1SubscriptionsApiSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1SubscriptionsApiSerialMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/:serial', 'POST'] as const
}

export function getPostV1SubscriptionsApiSerialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscriptionsApiSerialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>,
    ) {
      return parseResponse(client.v1.SubscriptionsApi[':serial'].$post(args, options))
    },
  })
}

export function injectPostV1SubscriptionsApiSerial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>,
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
    const mutationDefaults = getPostV1SubscriptionsApiSerialMutationOptions<
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

export function getDeleteV1SubscriptionsApiSerialMutationKey() {
  return ['v1', '/v1/SubscriptionsApi/:serial', 'DELETE'] as const
}

export function getDeleteV1SubscriptionsApiSerialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SubscriptionsApiSerialMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>,
    ) {
      return parseResponse(client.v1.SubscriptionsApi[':serial'].$delete(args, options))
    },
  })
}

export function injectDeleteV1SubscriptionsApiSerial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>,
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
    const mutationDefaults = getDeleteV1SubscriptionsApiSerialMutationOptions<
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
