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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1ActionsServiceIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>,
) {
  return ['api', '/api/v1/actions/:serviceId', args] as const
}

export function getApiV1ActionsServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActionsServiceIdQueryKey>
  >({
    queryKey: getApiV1ActionsServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.actions[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ActionsServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ActionsServiceIdQueryKey>
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
      ...getApiV1ActionsServiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ActionsServiceIdActionIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>,
) {
  return ['api', '/api/v1/actions/:serviceId/:actionId', args] as const
}

export function getApiV1ActionsServiceIdActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActionsServiceIdActionIdQueryKey>
  >({
    queryKey: getApiV1ActionsServiceIdActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.actions[':serviceId'][':actionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ActionsServiceIdActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ActionsServiceIdActionIdQueryKey>
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
      ...getApiV1ActionsServiceIdActionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1ActionsServiceIdActionIdExecMutationKey() {
  return ['api', '/api/v1/actions/:serviceId/:actionId/exec', 'POST'] as const
}

export function getPostApiV1ActionsServiceIdActionIdExecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ActionsServiceIdActionIdExecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.actions[':serviceId'][':actionId'].exec.$post(args, options),
      )
    },
  })
}

export function injectPostApiV1ActionsServiceIdActionIdExec<
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
                  (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
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
    const mutationDefaults = getPostApiV1ActionsServiceIdActionIdExecMutationOptions<
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

export function getApiV1ActionsServiceIdActionIdHelpQueryKey(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>,
) {
  return ['api', '/api/v1/actions/:serviceId/:actionId/help', args] as const
}

export function getApiV1ActionsServiceIdActionIdHelpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActionsServiceIdActionIdHelpQueryKey>
  >({
    queryKey: getApiV1ActionsServiceIdActionIdHelpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.actions[':serviceId'][':actionId'].help.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ActionsServiceIdActionIdHelp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ActionsServiceIdActionIdHelpQueryKey>
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
      ...getApiV1ActionsServiceIdActionIdHelpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1LoginQueryKey() {
  return ['api', '/api/v1/login'] as const
}

export function getApiV1LoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1LoginQueryKey>
  >({
    queryKey: getApiV1LoginQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Login<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LoginQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1LogoutQueryKey() {
  return ['api', '/api/v1/logout'] as const
}

export function getApiV1LogoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogoutQueryKey>
  >({
    queryKey: getApiV1LogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Logout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LogoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ServicesQueryKey() {
  return ['api', '/api/v1/services'] as const
}

export function getApiV1ServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServicesQueryKey>
  >({
    queryKey: getApiV1ServicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ServicesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1ServicesMutationKey() {
  return ['api', '/api/v1/services', 'POST'] as const
}

export function getPostApiV1ServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.services.$post>) {
      return parseResponse(client.api.v1.services.$post(args, options))
    },
  })
}

export function injectPostApiV1Services<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.services.$post>,
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
    const mutationDefaults = getPostApiV1ServicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ServicesServiceIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>,
) {
  return ['api', '/api/v1/services/:serviceId', args] as const
}

export function getApiV1ServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServicesServiceIdQueryKey>
  >({
    queryKey: getApiV1ServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.services[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ServicesServiceIdQueryKey>
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
      ...getApiV1ServicesServiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiV1ServicesServiceIdMutationKey() {
  return ['api', '/api/v1/services/:serviceId', 'DELETE'] as const
}

export function getDeleteApiV1ServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.services[':serviceId'].$delete(args, options))
    },
  })
}

export function injectDeleteApiV1ServicesServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1ServicesServiceIdMutationOptions<
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
