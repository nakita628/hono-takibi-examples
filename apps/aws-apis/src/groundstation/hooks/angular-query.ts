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

export function getAgentKey() {
  return ['agent'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getContactKey() {
  return ['contact'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDataflowEndpointGroupKey() {
  return ['dataflowEndpointGroup'] as const
}

export function getEphemeridesKey() {
  return ['ephemerides'] as const
}

export function getEphemerisKey() {
  return ['ephemeris'] as const
}

export function getGroundstationKey() {
  return ['groundstation'] as const
}

export function getMinuteUsageKey() {
  return ['minute-usage'] as const
}

export function getMissionprofileKey() {
  return ['missionprofile'] as const
}

export function getSatelliteKey() {
  return ['satellite'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getContactContactIdQueryKey(
  args: InferRequestType<(typeof client.contact)[':contactId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['contact', '/contact/:contactId', keyArgs] as const
}

export function getContactContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contact)[':contactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactContactIdQueryKey>
  >({
    queryKey: getContactContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contact[':contactId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContactContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contact)[':contactId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactContactIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactContactIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteContactContactIdMutationKey() {
  return ['contact', '/contact/:contactId', 'DELETE'] as const
}

export function getDeleteContactContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contact)[':contactId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contact)[':contactId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactContactIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contact)[':contactId']['$delete']>) {
      return parseResponse(client.contact[':contactId'].$delete(args, options))
    },
  })
}

export function injectDeleteContactContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.contact)[':contactId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.contact)[':contactId']['$delete']>,
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
    const mutationDefaults = getDeleteContactContactIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConfigQueryKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostConfigMutationKey() {
  return ['config', '/config', 'POST'] as const
}

export function getPostConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    InferRequestType<typeof client.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.$post>) {
      return parseResponse(client.config.$post(args, options))
    },
  })
}

export function injectPostConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
        TError,
        InferRequestType<typeof client.config.$post>,
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
    const mutationDefaults = getPostConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDataflowEndpointGroupQueryKey(
  args: InferRequestType<typeof client.dataflowEndpointGroup.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['dataflowEndpointGroup', '/dataflowEndpointGroup', keyArgs] as const
}

export function getDataflowEndpointGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataflowEndpointGroup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataflowEndpointGroupQueryKey>
  >({
    queryKey: getDataflowEndpointGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataflowEndpointGroup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDataflowEndpointGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dataflowEndpointGroup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataflowEndpointGroupQueryKey>
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
      ...getDataflowEndpointGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDataflowEndpointGroupMutationKey() {
  return ['dataflowEndpointGroup', '/dataflowEndpointGroup', 'POST'] as const
}

export function getPostDataflowEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dataflowEndpointGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDataflowEndpointGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dataflowEndpointGroup.$post>) {
      return parseResponse(client.dataflowEndpointGroup.$post(args, options))
    },
  })
}

export function injectPostDataflowEndpointGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataflowEndpointGroup.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dataflowEndpointGroup.$post>,
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
    const mutationDefaults = getPostDataflowEndpointGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEphemerisMutationKey() {
  return ['ephemeris', '/ephemeris', 'POST'] as const
}

export function getPostEphemerisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemeris.$post>>>>>,
    TError,
    InferRequestType<typeof client.ephemeris.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEphemerisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ephemeris.$post>) {
      return parseResponse(client.ephemeris.$post(args, options))
    },
  })
}

export function injectPostEphemeris<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemeris.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ephemeris.$post>,
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
    const mutationDefaults = getPostEphemerisMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMissionprofileQueryKey(
  args: InferRequestType<typeof client.missionprofile.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['missionprofile', '/missionprofile', keyArgs] as const
}

export function getMissionprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.missionprofile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMissionprofileQueryKey>
  >({
    queryKey: getMissionprofileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.missionprofile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMissionprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.missionprofile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMissionprofileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMissionprofileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMissionprofileMutationKey() {
  return ['missionprofile', '/missionprofile', 'POST'] as const
}

export function getPostMissionprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.missionprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMissionprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.missionprofile.$post>) {
      return parseResponse(client.missionprofile.$post(args, options))
    },
  })
}

export function injectPostMissionprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.missionprofile.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.missionprofile.$post>,
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
    const mutationDefaults = getPostMissionprofileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConfigConfigTypeConfigIdQueryKey(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config/:configType/:configId', keyArgs] as const
}

export function getConfigConfigTypeConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigConfigTypeConfigIdQueryKey>
  >({
    queryKey: getConfigConfigTypeConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config[':configType'][':configId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConfigConfigTypeConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConfigConfigTypeConfigIdQueryKey>
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
      ...getConfigConfigTypeConfigIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutConfigConfigTypeConfigIdMutationKey() {
  return ['config', '/config/:configType/:configId', 'PUT'] as const
}

export function getPutConfigConfigTypeConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigConfigTypeConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>,
    ) {
      return parseResponse(client.config[':configType'][':configId'].$put(args, options))
    },
  })
}

export function injectPutConfigConfigTypeConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>,
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
    const mutationDefaults = getPutConfigConfigTypeConfigIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteConfigConfigTypeConfigIdMutationKey() {
  return ['config', '/config/:configType/:configId', 'DELETE'] as const
}

export function getDeleteConfigConfigTypeConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConfigConfigTypeConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>,
    ) {
      return parseResponse(client.config[':configType'][':configId'].$delete(args, options))
    },
  })
}

export function injectDeleteConfigConfigTypeConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.config)[':configType'][':configId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>,
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
    const mutationDefaults = getDeleteConfigConfigTypeConfigIdMutationOptions<
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

export function getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey(
  args: InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'dataflowEndpointGroup',
    '/dataflowEndpointGroup/:dataflowEndpointGroupId',
    keyArgs,
  ] as const
}

export function getDataflowEndpointGroupDataflowEndpointGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey>
  >({
    queryKey: getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDataflowEndpointGroupDataflowEndpointGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataflowEndpointGroupDataflowEndpointGroupIdQueryKey>
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
      ...getDataflowEndpointGroupDataflowEndpointGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationKey() {
  return [
    'dataflowEndpointGroup',
    '/dataflowEndpointGroup/:dataflowEndpointGroupId',
    'DELETE',
  ] as const
}

export function getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDataflowEndpointGroupDataflowEndpointGroupId<
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
                  (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
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
    const mutationDefaults = getDeleteDataflowEndpointGroupDataflowEndpointGroupIdMutationOptions<
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

export function getEphemerisEphemerisIdQueryKey(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ephemeris', '/ephemeris/:ephemerisId', keyArgs] as const
}

export function getEphemerisEphemerisIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEphemerisEphemerisIdQueryKey>
  >({
    queryKey: getEphemerisEphemerisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ephemeris[':ephemerisId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEphemerisEphemerisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEphemerisEphemerisIdQueryKey>
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
      ...getEphemerisEphemerisIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEphemerisEphemerisIdMutationKey() {
  return ['ephemeris', '/ephemeris/:ephemerisId', 'PUT'] as const
}

export function getPutEphemerisEphemerisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEphemerisEphemerisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>) {
      return parseResponse(client.ephemeris[':ephemerisId'].$put(args, options))
    },
  })
}

export function injectPutEphemerisEphemerisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>,
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
    const mutationDefaults = getPutEphemerisEphemerisIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEphemerisEphemerisIdMutationKey() {
  return ['ephemeris', '/ephemeris/:ephemerisId', 'DELETE'] as const
}

export function getDeleteEphemerisEphemerisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEphemerisEphemerisIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>) {
      return parseResponse(client.ephemeris[':ephemerisId'].$delete(args, options))
    },
  })
}

export function injectDeleteEphemerisEphemerisId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ephemeris)[':ephemerisId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>,
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
    const mutationDefaults = getDeleteEphemerisEphemerisIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMissionprofileMissionProfileIdQueryKey(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['missionprofile', '/missionprofile/:missionProfileId', keyArgs] as const
}

export function getMissionprofileMissionProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMissionprofileMissionProfileIdQueryKey>
  >({
    queryKey: getMissionprofileMissionProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.missionprofile[':missionProfileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMissionprofileMissionProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMissionprofileMissionProfileIdQueryKey>
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
      ...getMissionprofileMissionProfileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutMissionprofileMissionProfileIdMutationKey() {
  return ['missionprofile', '/missionprofile/:missionProfileId', 'PUT'] as const
}

export function getPutMissionprofileMissionProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMissionprofileMissionProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>,
    ) {
      return parseResponse(client.missionprofile[':missionProfileId'].$put(args, options))
    },
  })
}

export function injectPutMissionprofileMissionProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>,
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
    const mutationDefaults = getPutMissionprofileMissionProfileIdMutationOptions<
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

export function getDeleteMissionprofileMissionProfileIdMutationKey() {
  return ['missionprofile', '/missionprofile/:missionProfileId', 'DELETE'] as const
}

export function getDeleteMissionprofileMissionProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMissionprofileMissionProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>,
    ) {
      return parseResponse(client.missionprofile[':missionProfileId'].$delete(args, options))
    },
  })
}

export function injectDeleteMissionprofileMissionProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.missionprofile)[':missionProfileId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>,
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
    const mutationDefaults = getDeleteMissionprofileMissionProfileIdMutationOptions<
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

export function getAgentAgentIdConfigurationQueryKey(
  args: InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['agent', '/agent/:agentId/configuration', keyArgs] as const
}

export function getAgentAgentIdConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentAgentIdConfigurationQueryKey>
  >({
    queryKey: getAgentAgentIdConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent[':agentId'].configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAgentAgentIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agent)[':agentId']['configuration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentAgentIdConfigurationQueryKey>
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
      ...getAgentAgentIdConfigurationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostMinuteUsageMutationKey() {
  return ['minute-usage', '/minute-usage', 'POST'] as const
}

export function getPostMinuteUsageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['minute-usage']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['minute-usage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMinuteUsageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['minute-usage']['$post']>) {
      return parseResponse(client['minute-usage'].$post(args, options))
    },
  })
}

export function injectPostMinuteUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['minute-usage']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['minute-usage']['$post']>,
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
    const mutationDefaults = getPostMinuteUsageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSatelliteSatelliteIdQueryKey(
  args: InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['satellite', '/satellite/:satelliteId', keyArgs] as const
}

export function getSatelliteSatelliteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSatelliteSatelliteIdQueryKey>
  >({
    queryKey: getSatelliteSatelliteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.satellite[':satelliteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSatelliteSatelliteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.satellite)[':satelliteId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSatelliteSatelliteIdQueryKey>
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
      ...getSatelliteSatelliteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function injectPostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.$post>,
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
    const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEphemeridesMutationKey() {
  return ['ephemerides', '/ephemerides', 'POST'] as const
}

export function getPostEphemeridesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemerides.$post>>>>>,
    TError,
    InferRequestType<typeof client.ephemerides.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEphemeridesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ephemerides.$post>) {
      return parseResponse(client.ephemerides.$post(args, options))
    },
  })
}

export function injectPostEphemerides<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ephemerides.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ephemerides.$post>,
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
    const mutationDefaults = getPostEphemeridesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroundstationQueryKey(args: InferRequestType<typeof client.groundstation.$get>) {
  const { header: _, ...keyArgs } = args
  return ['groundstation', '/groundstation', keyArgs] as const
}

export function getGroundstationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groundstation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroundstationQueryKey>
  >({
    queryKey: getGroundstationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groundstation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGroundstation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groundstation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groundstation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroundstationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroundstationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSatelliteQueryKey(args: InferRequestType<typeof client.satellite.$get>) {
  const { header: _, ...keyArgs } = args
  return ['satellite', '/satellite', keyArgs] as const
}

export function getSatelliteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.satellite.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSatelliteQueryKey>
  >({
    queryKey: getSatelliteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.satellite.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSatellite<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.satellite.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.satellite.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSatelliteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSatelliteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAgentMutationKey() {
  return ['agent', '/agent', 'POST'] as const
}

export function getPostAgentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
    TError,
    InferRequestType<typeof client.agent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agent.$post>) {
      return parseResponse(client.agent.$post(args, options))
    },
  })
}

export function injectPostAgent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
        TError,
        InferRequestType<typeof client.agent.$post>,
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
    const mutationDefaults = getPostAgentMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostContactMutationKey() {
  return ['contact', '/contact', 'POST'] as const
}

export function getPostContactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.$post>>>>>,
    TError,
    InferRequestType<typeof client.contact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.$post>) {
      return parseResponse(client.contact.$post(args, options))
    },
  })
}

export function injectPostContact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.$post>>>>>,
        TError,
        InferRequestType<typeof client.contact.$post>,
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
    const mutationDefaults = getPostContactMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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

export function getPutAgentAgentIdMutationKey() {
  return ['agent', '/agent/:agentId', 'PUT'] as const
}

export function getPutAgentAgentIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':agentId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.agent)[':agentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAgentAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agent)[':agentId']['$put']>) {
      return parseResponse(client.agent[':agentId'].$put(args, options))
    },
  })
}

export function injectPutAgentAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':agentId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.agent)[':agentId']['$put']>,
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
    const mutationDefaults = getPutAgentAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
