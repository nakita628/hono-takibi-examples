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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1DevicesQueryKey(
  args: InferRequestType<typeof client.v1beta1.devices.$get>,
) {
  return ['v1beta1', '/v1beta1/devices', args] as const
}

export function getV1beta1DevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1DevicesQueryKey>
  >({
    queryKey: getV1beta1DevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.devices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1DevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1DevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1beta1DevicesMutationKey() {
  return ['v1beta1', '/v1beta1/devices', 'POST'] as const
}

export function getPostV1beta1DevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.devices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1beta1.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1DevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta1.devices.$post>) {
      return parseResponse(client.v1beta1.devices.$post(args, options))
    },
  })
}

export function injectPostV1beta1Devices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.devices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1beta1.devices.$post>,
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
    const mutationDefaults = getPostV1beta1DevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1GroupsQueryKey(
  args: InferRequestType<typeof client.v1beta1.groups.$get>,
) {
  return ['v1beta1', '/v1beta1/groups', args] as const
}

export function getV1beta1GroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1GroupsQueryKey>
  >({
    queryKey: getV1beta1GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Groups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1GroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1GroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1beta1GroupsMutationKey() {
  return ['v1beta1', '/v1beta1/groups', 'POST'] as const
}

export function getPostV1beta1GroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1beta1.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1GroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta1.groups.$post>) {
      return parseResponse(client.v1beta1.groups.$post(args, options))
    },
  })
}

export function injectPostV1beta1Groups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1beta1.groups.$post>,
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
    const mutationDefaults = getPostV1beta1GroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1GroupsLookupQueryKey(
  args: InferRequestType<(typeof client.v1beta1)['groups:lookup']['$get']>,
) {
  return ['v1beta1', '/v1beta1/groups:lookup', args] as const
}

export function getV1beta1GroupsLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)['groups:lookup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)['groups:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)['groups:lookup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1GroupsLookupQueryKey>
  >({
    queryKey: getV1beta1GroupsLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1['groups:lookup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1GroupsLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)['groups:lookup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)['groups:lookup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['groups:lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1GroupsLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1GroupsLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1beta1GroupsSearchQueryKey(
  args: InferRequestType<(typeof client.v1beta1)['groups:search']['$get']>,
) {
  return ['v1beta1', '/v1beta1/groups:search', args] as const
}

export function getV1beta1GroupsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)['groups:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)['groups:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)['groups:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1GroupsSearchQueryKey>
  >({
    queryKey: getV1beta1GroupsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1['groups:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1GroupsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)['groups:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)['groups:search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['groups:search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1GroupsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1GroupsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1beta1InboundSamlSsoProfilesQueryKey(
  args: InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>,
) {
  return ['v1beta1', '/v1beta1/inboundSamlSsoProfiles', args] as const
}

export function getV1beta1InboundSamlSsoProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1InboundSamlSsoProfilesQueryKey>
  >({
    queryKey: getV1beta1InboundSamlSsoProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.inboundSamlSsoProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1InboundSamlSsoProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1InboundSamlSsoProfilesQueryKey>
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
      ...getV1beta1InboundSamlSsoProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1InboundSamlSsoProfilesMutationKey() {
  return ['v1beta1', '/v1beta1/inboundSamlSsoProfiles', 'POST'] as const
}

export function getPostV1beta1InboundSamlSsoProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1beta1.inboundSamlSsoProfiles.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1InboundSamlSsoProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$post>) {
      return parseResponse(client.v1beta1.inboundSamlSsoProfiles.$post(args, options))
    },
  })
}

export function injectPostV1beta1InboundSamlSsoProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1beta1.inboundSamlSsoProfiles.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$post>,
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
    const mutationDefaults = getPostV1beta1InboundSamlSsoProfilesMutationOptions<
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

export function getV1beta1InboundSsoAssignmentsQueryKey(
  args: InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$get>,
) {
  return ['v1beta1', '/v1beta1/inboundSsoAssignments', args] as const
}

export function getV1beta1InboundSsoAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.inboundSsoAssignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.inboundSsoAssignments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1InboundSsoAssignmentsQueryKey>
  >({
    queryKey: getV1beta1InboundSsoAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.inboundSsoAssignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1InboundSsoAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.inboundSsoAssignments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1beta1.inboundSsoAssignments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1InboundSsoAssignmentsQueryKey>
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
      ...getV1beta1InboundSsoAssignmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1InboundSsoAssignmentsMutationKey() {
  return ['v1beta1', '/v1beta1/inboundSsoAssignments', 'POST'] as const
}

export function getPostV1beta1InboundSsoAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.inboundSsoAssignments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1InboundSsoAssignmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$post>) {
      return parseResponse(client.v1beta1.inboundSsoAssignments.$post(args, options))
    },
  })
}

export function injectPostV1beta1InboundSsoAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1beta1.inboundSsoAssignments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$post>,
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
    const mutationDefaults = getPostV1beta1InboundSsoAssignmentsMutationOptions<
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

export function getV1beta1NameQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function getV1beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >({
    queryKey: getV1beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function getDeleteV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>) {
      return parseResponse(client.v1beta1[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1beta1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function getPatchV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>) {
      return parseResponse(client.v1beta1[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1beta1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameApproveMutationKey() {
  return ['v1beta1', '/v1beta1/:name:approve', 'POST'] as const
}

export function getPostV1beta1NameApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:approve']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameApproveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:approve']['$post']>) {
      return parseResponse(client.v1beta1[':name:approve'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:approve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:approve']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameApproveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameBlockMutationKey() {
  return ['v1beta1', '/v1beta1/:name:block', 'POST'] as const
}

export function getPostV1beta1NameBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:block']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameBlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:block']['$post']>) {
      return parseResponse(client.v1beta1[':name:block'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:block']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:block']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameCancelMutationKey() {
  return ['v1beta1', '/v1beta1/:name:cancel', 'POST'] as const
}

export function getPostV1beta1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameCancelWipeMutationKey() {
  return ['v1beta1', '/v1beta1/:name:cancelWipe', 'POST'] as const
}

export function getPostV1beta1NameCancelWipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:cancelWipe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:cancelWipe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameCancelWipeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:cancelWipe']['$post']>) {
      return parseResponse(client.v1beta1[':name:cancelWipe'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameCancelWipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:cancelWipe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:cancelWipe']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameCancelWipeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1NameIsInvitableUserQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name:isInvitableUser', args] as const
}

export function getV1beta1NameIsInvitableUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameIsInvitableUserQueryKey>
  >({
    queryKey: getV1beta1NameIsInvitableUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name:isInvitableUser'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1NameIsInvitableUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameIsInvitableUserQueryKey>
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
      ...getV1beta1NameIsInvitableUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1NameModifyMembershipRolesMutationKey() {
  return ['v1beta1', '/v1beta1/:name:modifyMembershipRoles', 'POST'] as const
}

export function getPostV1beta1NameModifyMembershipRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:modifyMembershipRoles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:modifyMembershipRoles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameModifyMembershipRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:modifyMembershipRoles']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:modifyMembershipRoles'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameModifyMembershipRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:modifyMembershipRoles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:modifyMembershipRoles']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameModifyMembershipRolesMutationOptions<
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

export function getPostV1beta1NameMoveMutationKey() {
  return ['v1beta1', '/v1beta1/:name:move', 'POST'] as const
}

export function getPostV1beta1NameMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:move']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameMoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:move']['$post']>) {
      return parseResponse(client.v1beta1[':name:move'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:move']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:move']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameSendMutationKey() {
  return ['v1beta1', '/v1beta1/:name:send', 'POST'] as const
}

export function getPostV1beta1NameSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:send']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:send']['$post']>) {
      return parseResponse(client.v1beta1[':name:send'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:send']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:send']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameWipeMutationKey() {
  return ['v1beta1', '/v1beta1/:name:wipe', 'POST'] as const
}

export function getPostV1beta1NameWipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:wipe']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:wipe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameWipeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:wipe']['$post']>) {
      return parseResponse(client.v1beta1[':name:wipe'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameWipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:wipe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:wipe']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameWipeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1ParentDeviceUsersQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/deviceUsers', args] as const
}

export function getV1beta1ParentDeviceUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentDeviceUsersQueryKey>
  >({
    queryKey: getV1beta1ParentDeviceUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].deviceUsers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentDeviceUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentDeviceUsersQueryKey>
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
      ...getV1beta1ParentDeviceUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentIdpCredentialsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/idpCredentials', args] as const
}

export function getV1beta1ParentIdpCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentIdpCredentialsQueryKey>
  >({
    queryKey: getV1beta1ParentIdpCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].idpCredentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentIdpCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentIdpCredentialsQueryKey>
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
      ...getV1beta1ParentIdpCredentialsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1ParentIdpCredentialsAddMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/idpCredentials:add', 'POST'] as const
}

export function getPostV1beta1ParentIdpCredentialsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['idpCredentials:add']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials:add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentIdpCredentialsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials:add']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['idpCredentials:add'].$post(args, options))
    },
  })
}

export function injectPostV1beta1ParentIdpCredentialsAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['idpCredentials:add']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials:add']['$post']>,
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
    const mutationDefaults = getPostV1beta1ParentIdpCredentialsAddMutationOptions<
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

export function getV1beta1ParentMembershipsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/memberships', args] as const
}

export function getV1beta1ParentMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentMembershipsQueryKey>
  >({
    queryKey: getV1beta1ParentMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentMembershipsQueryKey>
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
      ...getV1beta1ParentMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1ParentMembershipsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/memberships', 'POST'] as const
}

export function getPostV1beta1ParentMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].memberships.$post(args, options))
    },
  })
}

export function injectPostV1beta1ParentMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$post']>,
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
    const mutationDefaults = getPostV1beta1ParentMembershipsMutationOptions<
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

export function getV1beta1ParentMembershipsCheckTransitiveMembershipQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/memberships:checkTransitiveMembership', args] as const
}

export function getV1beta1ParentMembershipsCheckTransitiveMembershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentMembershipsCheckTransitiveMembershipQueryKey>
  >({
    queryKey: getV1beta1ParentMembershipsCheckTransitiveMembershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['memberships:checkTransitiveMembership'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentMembershipsCheckTransitiveMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentMembershipsCheckTransitiveMembershipQueryKey>
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
      ...getV1beta1ParentMembershipsCheckTransitiveMembershipQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentMembershipsGetMembershipGraphQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/memberships:getMembershipGraph', args] as const
}

export function getV1beta1ParentMembershipsGetMembershipGraphQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentMembershipsGetMembershipGraphQueryKey>
  >({
    queryKey: getV1beta1ParentMembershipsGetMembershipGraphQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['memberships:getMembershipGraph'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentMembershipsGetMembershipGraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentMembershipsGetMembershipGraphQueryKey>
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
      ...getV1beta1ParentMembershipsGetMembershipGraphQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentMembershipsLookupQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/memberships:lookup', args] as const
}

export function getV1beta1ParentMembershipsLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentMembershipsLookupQueryKey>
  >({
    queryKey: getV1beta1ParentMembershipsLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['memberships:lookup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentMembershipsLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentMembershipsLookupQueryKey>
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
      ...getV1beta1ParentMembershipsLookupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentMembershipsSearchDirectGroupsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/memberships:searchDirectGroups', args] as const
}

export function getV1beta1ParentMembershipsSearchDirectGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentMembershipsSearchDirectGroupsQueryKey>
  >({
    queryKey: getV1beta1ParentMembershipsSearchDirectGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['memberships:searchDirectGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentMembershipsSearchDirectGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentMembershipsSearchDirectGroupsQueryKey>
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
      ...getV1beta1ParentMembershipsSearchDirectGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentMembershipsSearchTransitiveGroupsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/memberships:searchTransitiveGroups', args] as const
}

export function getV1beta1ParentMembershipsSearchTransitiveGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentMembershipsSearchTransitiveGroupsQueryKey>
  >({
    queryKey: getV1beta1ParentMembershipsSearchTransitiveGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['memberships:searchTransitiveGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentMembershipsSearchTransitiveGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentMembershipsSearchTransitiveGroupsQueryKey>
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
      ...getV1beta1ParentMembershipsSearchTransitiveGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentMembershipsSearchTransitiveMembershipsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/memberships:searchTransitiveMemberships', args] as const
}

export function getV1beta1ParentMembershipsSearchTransitiveMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentMembershipsSearchTransitiveMembershipsQueryKey>
  >({
    queryKey: getV1beta1ParentMembershipsSearchTransitiveMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['memberships:searchTransitiveMemberships'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentMembershipsSearchTransitiveMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentMembershipsSearchTransitiveMembershipsQueryKey>
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
      ...getV1beta1ParentMembershipsSearchTransitiveMembershipsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentUserinvitationsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/userinvitations', args] as const
}

export function getV1beta1ParentUserinvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentUserinvitationsQueryKey>
  >({
    queryKey: getV1beta1ParentUserinvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].userinvitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentUserinvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentUserinvitationsQueryKey>
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
      ...getV1beta1ParentUserinvitationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentLookupQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent:lookup']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent:lookup', args] as const
}

export function getV1beta1ParentLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent:lookup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent:lookup']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentLookupQueryKey>
  >({
    queryKey: getV1beta1ParentLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent:lookup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent:lookup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent:lookup']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent:lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1ParentLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
