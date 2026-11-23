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

export function getAdminKey() {
  return ['admin'] as const
}

export function getDetectorKey() {
  return ['detector'] as const
}

export function getInvitationKey() {
  return ['invitation'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getDetectorDetectorIdAdministratorQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/administrator', keyArgs] as const
}

export function getDetectorDetectorIdAdministratorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdAdministratorQueryKey>
  >({
    queryKey: getDetectorDetectorIdAdministratorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].administrator.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdAdministrator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdAdministratorQueryKey>
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
      ...getDetectorDetectorIdAdministratorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdAdministratorMutationKey() {
  return ['detector', '/detector/:detectorId/administrator', 'POST'] as const
}

export function getPostDetectorDetectorIdAdministratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdAdministratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].administrator.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdAdministrator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdAdministratorMutationOptions<
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

export function getDetectorDetectorIdMasterQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/master', keyArgs] as const
}

export function getDetectorDetectorIdMasterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdMasterQueryKey>
  >({
    queryKey: getDetectorDetectorIdMasterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].master.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdMaster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['master']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdMasterQueryKey>
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
      ...getDetectorDetectorIdMasterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdMasterMutationKey() {
  return ['detector', '/detector/:detectorId/master', 'POST'] as const
}

export function getPostDetectorDetectorIdMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['master']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].master.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMaster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['master']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMasterMutationOptions<
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

export function getPostDetectorDetectorIdFindingsArchiveMutationKey() {
  return ['detector', '/detector/:detectorId/findings/archive', 'POST'] as const
}

export function getPostDetectorDetectorIdFindingsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFindingsArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['findings']['archive']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].findings.archive.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFindingsArchive<
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
                ReturnType<(typeof client.detector)[':detectorId']['findings']['archive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['findings']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFindingsArchiveMutationOptions<
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

export function getDetectorQueryKey(args: InferRequestType<typeof client.detector.$get>) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector', keyArgs] as const
}

export function getDetectorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.detector.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDetectorQueryKey>
  >({
    queryKey: getDetectorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDetector<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.detector.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDetectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDetectorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDetectorMutationKey() {
  return ['detector', '/detector', 'POST'] as const
}

export function getPostDetectorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$post>>>>>,
    TError,
    InferRequestType<typeof client.detector.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.detector.$post>) {
      return parseResponse(client.detector.$post(args, options))
    },
  })
}

export function injectPostDetector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.detector.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDetectorDetectorIdFilterQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/filter', keyArgs] as const
}

export function getDetectorDetectorIdFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdFilterQueryKey>
  >({
    queryKey: getDetectorDetectorIdFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].filter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['filter']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdFilterQueryKey>
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
      ...getDetectorDetectorIdFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdFilterMutationKey() {
  return ['detector', '/detector/:detectorId/filter', 'POST'] as const
}

export function getPostDetectorDetectorIdFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['filter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].filter.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['filter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFilterMutationOptions<
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

export function getDetectorDetectorIdIpsetQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/ipset', keyArgs] as const
}

export function getDetectorDetectorIdIpsetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdIpsetQueryKey>
  >({
    queryKey: getDetectorDetectorIdIpsetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].ipset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdIpset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdIpsetQueryKey>
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
      ...getDetectorDetectorIdIpsetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdIpsetMutationKey() {
  return ['detector', '/detector/:detectorId/ipset', 'POST'] as const
}

export function getPostDetectorDetectorIdIpsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdIpsetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].ipset.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdIpset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdIpsetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDetectorDetectorIdMemberQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/member', keyArgs] as const
}

export function getDetectorDetectorIdMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdMemberQueryKey>
  >({
    queryKey: getDetectorDetectorIdMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].member.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['member']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdMemberQueryKey>
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
      ...getDetectorDetectorIdMemberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdMemberMutationKey() {
  return ['detector', '/detector/:detectorId/member', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].member.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMember<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['member']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMemberMutationOptions<
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

export function getDetectorDetectorIdPublishingDestinationQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/publishingDestination', keyArgs] as const
}

export function getDetectorDetectorIdPublishingDestinationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdPublishingDestinationQueryKey>
  >({
    queryKey: getDetectorDetectorIdPublishingDestinationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].publishingDestination.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdPublishingDestination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdPublishingDestinationQueryKey>
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
      ...getDetectorDetectorIdPublishingDestinationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdPublishingDestinationMutationKey() {
  return ['detector', '/detector/:detectorId/publishingDestination', 'POST'] as const
}

export function getPostDetectorDetectorIdPublishingDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdPublishingDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['publishingDestination']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].publishingDestination.$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdPublishingDestination<
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
                  (typeof client.detector)[':detectorId']['publishingDestination']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdPublishingDestinationMutationOptions<
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

export function getPostDetectorDetectorIdFindingsCreateMutationKey() {
  return ['detector', '/detector/:detectorId/findings/create', 'POST'] as const
}

export function getPostDetectorDetectorIdFindingsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['create']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFindingsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['findings']['create']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].findings.create.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFindingsCreate<
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
                ReturnType<(typeof client.detector)[':detectorId']['findings']['create']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['findings']['create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFindingsCreateMutationOptions<
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

export function getDetectorDetectorIdThreatintelsetQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/threatintelset', keyArgs] as const
}

export function getDetectorDetectorIdThreatintelsetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdThreatintelsetQueryKey>
  >({
    queryKey: getDetectorDetectorIdThreatintelsetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].threatintelset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdThreatintelset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdThreatintelsetQueryKey>
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
      ...getDetectorDetectorIdThreatintelsetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdThreatintelsetMutationKey() {
  return ['detector', '/detector/:detectorId/threatintelset', 'POST'] as const
}

export function getPostDetectorDetectorIdThreatintelsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdThreatintelsetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].threatintelset.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdThreatintelset<
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
                ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdThreatintelsetMutationOptions<
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

export function getPostInvitationDeclineMutationKey() {
  return ['invitation', '/invitation/decline', 'POST'] as const
}

export function getPostInvitationDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.decline.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitation.decline.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationDeclineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitation.decline.$post>) {
      return parseResponse(client.invitation.decline.$post(args, options))
    },
  })
}

export function injectPostInvitationDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitation.decline.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitation.decline.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvitationDeclineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDetectorDetectorIdQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId', keyArgs] as const
}

export function getDetectorDetectorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdQueryKey>
  >({
    queryKey: getDetectorDetectorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDetectorDetectorIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDetectorDetectorIdMutationKey() {
  return ['detector', '/detector/:detectorId', 'POST'] as const
}

export function getPostDetectorDetectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.detector)[':detectorId']['$post']>) {
      return parseResponse(client.detector[':detectorId'].$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteDetectorDetectorIdMutationKey() {
  return ['detector', '/detector/:detectorId', 'DELETE'] as const
}

export function getDeleteDetectorDetectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDetectorDetectorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.detector)[':detectorId']['$delete']>) {
      return parseResponse(client.detector[':detectorId'].$delete(args, options))
    },
  })
}

export function injectDeleteDetectorDetectorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDetectorDetectorIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDetectorDetectorIdFilterFilterNameQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/filter/:filterName', keyArgs] as const
}

export function getDetectorDetectorIdFilterFilterNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdFilterFilterNameQueryKey>
  >({
    queryKey: getDetectorDetectorIdFilterFilterNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].filter[':filterName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdFilterFilterName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.detector)[':detectorId']['filter'][':filterName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdFilterFilterNameQueryKey>
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
      ...getDetectorDetectorIdFilterFilterNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdFilterFilterNameMutationKey() {
  return ['detector', '/detector/:detectorId/filter/:filterName', 'POST'] as const
}

export function getPostDetectorDetectorIdFilterFilterNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFilterFilterNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['filter'][':filterName']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].filter[':filterName'].$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdFilterFilterName<
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
                  (typeof client.detector)[':detectorId']['filter'][':filterName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFilterFilterNameMutationOptions<
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

export function getDeleteDetectorDetectorIdFilterFilterNameMutationKey() {
  return ['detector', '/detector/:detectorId/filter/:filterName', 'DELETE'] as const
}

export function getDeleteDetectorDetectorIdFilterFilterNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDetectorDetectorIdFilterFilterNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].filter[':filterName'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDetectorDetectorIdFilterFilterName<
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
                  (typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']
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
    const mutationDefaults = getDeleteDetectorDetectorIdFilterFilterNameMutationOptions<
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

export function getDetectorDetectorIdIpsetIpSetIdQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/ipset/:ipSetId', keyArgs] as const
}

export function getDetectorDetectorIdIpsetIpSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdIpsetIpSetIdQueryKey>
  >({
    queryKey: getDetectorDetectorIdIpsetIpSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].ipset[':ipSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdIpsetIpSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdIpsetIpSetIdQueryKey>
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
      ...getDetectorDetectorIdIpsetIpSetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdIpsetIpSetIdMutationKey() {
  return ['detector', '/detector/:detectorId/ipset/:ipSetId', 'POST'] as const
}

export function getPostDetectorDetectorIdIpsetIpSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdIpsetIpSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdIpsetIpSetId<
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
                ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdIpsetIpSetIdMutationOptions<
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

export function getDeleteDetectorDetectorIdIpsetIpSetIdMutationKey() {
  return ['detector', '/detector/:detectorId/ipset/:ipSetId', 'DELETE'] as const
}

export function getDeleteDetectorDetectorIdIpsetIpSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDetectorDetectorIdIpsetIpSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$delete(args, options))
    },
  })
}

export function injectDeleteDetectorDetectorIdIpsetIpSetId<
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
                ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDetectorDetectorIdIpsetIpSetIdMutationOptions<
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

export function getPostInvitationDeleteMutationKey() {
  return ['invitation', '/invitation/delete', 'POST'] as const
}

export function getPostInvitationDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.invitation.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitationDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invitation.delete.$post>) {
      return parseResponse(client.invitation.delete.$post(args, options))
    },
  })
}

export function injectPostInvitationDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invitation.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.invitation.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvitationDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdMemberDeleteMutationKey() {
  return ['detector', '/detector/:detectorId/member/delete', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].member.delete.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMemberDelete<
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
                ReturnType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMemberDeleteMutationOptions<
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

export function getDetectorDetectorIdPublishingDestinationDestinationIdQueryKey(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'detector',
    '/detector/:detectorId/publishingDestination/:destinationId',
    keyArgs,
  ] as const
}

export function getDetectorDetectorIdPublishingDestinationDestinationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdPublishingDestinationDestinationIdQueryKey>
  >({
    queryKey: getDetectorDetectorIdPublishingDestinationDestinationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].publishingDestination[':destinationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdPublishingDestinationDestinationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdPublishingDestinationDestinationIdQueryKey>
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
      ...getDetectorDetectorIdPublishingDestinationDestinationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdPublishingDestinationDestinationIdMutationKey() {
  return ['detector', '/detector/:detectorId/publishingDestination/:destinationId', 'POST'] as const
}

export function getPostDetectorDetectorIdPublishingDestinationDestinationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdPublishingDestinationDestinationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].publishingDestination[':destinationId'].$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdPublishingDestinationDestinationId<
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
                  (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
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
      getPostDetectorDetectorIdPublishingDestinationDestinationIdMutationOptions<
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

export function getDeleteDetectorDetectorIdPublishingDestinationDestinationIdMutationKey() {
  return [
    'detector',
    '/detector/:detectorId/publishingDestination/:destinationId',
    'DELETE',
  ] as const
}

export function getDeleteDetectorDetectorIdPublishingDestinationDestinationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDetectorDetectorIdPublishingDestinationDestinationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].publishingDestination[':destinationId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteDetectorDetectorIdPublishingDestinationDestinationId<
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
                  (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
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
      getDeleteDetectorDetectorIdPublishingDestinationDestinationIdMutationOptions<
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

export function getDetectorDetectorIdThreatintelsetThreatIntelSetIdQueryKey(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/threatintelset/:threatIntelSetId', keyArgs] as const
}

export function getDetectorDetectorIdThreatintelsetThreatIntelSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdThreatintelsetThreatIntelSetIdQueryKey>
  >({
    queryKey: getDetectorDetectorIdThreatintelsetThreatIntelSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdThreatintelsetThreatIntelSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdThreatintelsetThreatIntelSetIdQueryKey>
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
      ...getDetectorDetectorIdThreatintelsetThreatIntelSetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationKey() {
  return ['detector', '/detector/:detectorId/threatintelset/:threatIntelSetId', 'POST'] as const
}

export function getPostDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdThreatintelsetThreatIntelSetId<
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
                  (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationOptions<
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

export function getDeleteDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationKey() {
  return ['detector', '/detector/:detectorId/threatintelset/:threatIntelSetId', 'DELETE'] as const
}

export function getDeleteDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDetectorDetectorIdThreatintelsetThreatIntelSetId<
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
                  (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
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
      getDeleteDetectorDetectorIdThreatintelsetThreatIntelSetIdMutationOptions<
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

export function getPostDetectorDetectorIdMalwareScansMutationKey() {
  return ['detector', '/detector/:detectorId/malware-scans', 'POST'] as const
}

export function getPostDetectorDetectorIdMalwareScansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMalwareScansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId']['malware-scans'].$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMalwareScans<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMalwareScansMutationOptions<
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

export function getDetectorDetectorIdAdminQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/admin', keyArgs] as const
}

export function getDetectorDetectorIdAdminQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdAdminQueryKey>
  >({
    queryKey: getDetectorDetectorIdAdminQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId'].admin.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.detector)[':detectorId']['admin']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdAdminQueryKey>
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
      ...getDetectorDetectorIdAdminQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdAdminMutationKey() {
  return ['detector', '/detector/:detectorId/admin', 'POST'] as const
}

export function getPostDetectorDetectorIdAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['admin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdAdminMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].admin.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['admin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdAdminMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDisableMutationKey() {
  return ['admin', '/admin/disable', 'POST'] as const
}

export function getPostAdminDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.disable.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.disable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDisableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.disable.$post>) {
      return parseResponse(client.admin.disable.$post(args, options))
    },
  })
}

export function injectPostAdminDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.disable.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.disable.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdAdministratorDisassociateMutationKey() {
  return ['detector', '/detector/:detectorId/administrator/disassociate', 'POST'] as const
}

export function getPostDetectorDetectorIdAdministratorDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdAdministratorDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].administrator.disassociate.$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdAdministratorDisassociate<
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
                  (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdAdministratorDisassociateMutationOptions<
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

export function getPostDetectorDetectorIdMasterDisassociateMutationKey() {
  return ['detector', '/detector/:detectorId/master/disassociate', 'POST'] as const
}

export function getPostDetectorDetectorIdMasterDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['master']['disassociate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['master']['disassociate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMasterDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['master']['disassociate']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].master.disassociate.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMasterDisassociate<
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
                  (typeof client.detector)[':detectorId']['master']['disassociate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['master']['disassociate']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdMasterDisassociateMutationOptions<
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

export function getPostDetectorDetectorIdMemberDisassociateMutationKey() {
  return ['detector', '/detector/:detectorId/member/disassociate', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['member']['disassociate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['disassociate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['member']['disassociate']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].member.disassociate.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMemberDisassociate<
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
                  (typeof client.detector)[':detectorId']['member']['disassociate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['member']['disassociate']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdMemberDisassociateMutationOptions<
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

export function getPostAdminEnableMutationKey() {
  return ['admin', '/admin/enable', 'POST'] as const
}

export function getPostAdminEnableMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.enable.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.enable.$post>) {
      return parseResponse(client.admin.enable.$post(args, options))
    },
  })
}

export function injectPostAdminEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.enable.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.enable.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdCoverageStatisticsMutationKey() {
  return ['detector', '/detector/:detectorId/coverage/statistics', 'POST'] as const
}

export function getPostDetectorDetectorIdCoverageStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['coverage']['statistics']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['coverage']['statistics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdCoverageStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['coverage']['statistics']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].coverage.statistics.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdCoverageStatistics<
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
                  (typeof client.detector)[':detectorId']['coverage']['statistics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['coverage']['statistics']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdCoverageStatisticsMutationOptions<
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

export function getPostDetectorDetectorIdFindingsGetMutationKey() {
  return ['detector', '/detector/:detectorId/findings/get', 'POST'] as const
}

export function getPostDetectorDetectorIdFindingsGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFindingsGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].findings.get.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFindingsGet<
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
                ReturnType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFindingsGetMutationOptions<
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

export function getPostDetectorDetectorIdFindingsStatisticsMutationKey() {
  return ['detector', '/detector/:detectorId/findings/statistics', 'POST'] as const
}

export function getPostDetectorDetectorIdFindingsStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['statistics']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['statistics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFindingsStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['findings']['statistics']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].findings.statistics.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFindingsStatistics<
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
                  (typeof client.detector)[':detectorId']['findings']['statistics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['findings']['statistics']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdFindingsStatisticsMutationOptions<
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

export function getInvitationCountQueryKey(
  args: InferRequestType<typeof client.invitation.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['invitation', '/invitation/count', keyArgs] as const
}

export function getInvitationCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitation.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvitationCountQueryKey>
  >({
    queryKey: getInvitationCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitation.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInvitationCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitation.count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDetectorDetectorIdMalwareScanSettingsQueryKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/malware-scan-settings', keyArgs] as const
}

export function getDetectorDetectorIdMalwareScanSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDetectorDetectorIdMalwareScanSettingsQueryKey>
  >({
    queryKey: getDetectorDetectorIdMalwareScanSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.detector[':detectorId']['malware-scan-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDetectorDetectorIdMalwareScanSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.detector)[':detectorId']['malware-scan-settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDetectorDetectorIdMalwareScanSettingsQueryKey>
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
      ...getDetectorDetectorIdMalwareScanSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDetectorDetectorIdMalwareScanSettingsMutationKey() {
  return ['detector', '/detector/:detectorId/malware-scan-settings', 'POST'] as const
}

export function getPostDetectorDetectorIdMalwareScanSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMalwareScanSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['malware-scan-settings']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId']['malware-scan-settings'].$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdMalwareScanSettings<
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
                  (typeof client.detector)[':detectorId']['malware-scan-settings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMalwareScanSettingsMutationOptions<
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

export function getPostDetectorDetectorIdMemberDetectorGetMutationKey() {
  return ['detector', '/detector/:detectorId/member/detector/get', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberDetectorGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['member']['detector']['get']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['detector']['get']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberDetectorGetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['member']['detector']['get']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].member.detector.get.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMemberDetectorGet<
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
                  (typeof client.detector)[':detectorId']['member']['detector']['get']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['member']['detector']['get']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdMemberDetectorGetMutationOptions<
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

export function getPostDetectorDetectorIdMemberGetMutationKey() {
  return ['detector', '/detector/:detectorId/member/get', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['get']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['get']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['member']['get']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].member.get.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMemberGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['get']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['member']['get']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMemberGetMutationOptions<
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

export function getPostDetectorDetectorIdFreeTrialDaysRemainingMutationKey() {
  return ['detector', '/detector/:detectorId/freeTrial/daysRemaining', 'POST'] as const
}

export function getPostDetectorDetectorIdFreeTrialDaysRemainingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFreeTrialDaysRemainingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].freeTrial.daysRemaining.$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdFreeTrialDaysRemaining<
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
                  (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdFreeTrialDaysRemainingMutationOptions<
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

export function getPostDetectorDetectorIdUsageStatisticsMutationKey() {
  return ['detector', '/detector/:detectorId/usage/statistics', 'POST'] as const
}

export function getPostDetectorDetectorIdUsageStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['usage']['statistics']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['usage']['statistics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdUsageStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['usage']['statistics']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].usage.statistics.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdUsageStatistics<
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
                ReturnType<(typeof client.detector)[':detectorId']['usage']['statistics']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['usage']['statistics']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdUsageStatisticsMutationOptions<
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

export function getPostDetectorDetectorIdMemberInviteMutationKey() {
  return ['detector', '/detector/:detectorId/member/invite', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].member.invite.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMemberInvite<
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
                ReturnType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMemberInviteMutationOptions<
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

export function getPostDetectorDetectorIdCoverageMutationKey() {
  return ['detector', '/detector/:detectorId/coverage', 'POST'] as const
}

export function getPostDetectorDetectorIdCoverageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['coverage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['coverage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdCoverageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['coverage']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].coverage.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdCoverage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['coverage']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['coverage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdCoverageMutationOptions<
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

export function getPostDetectorDetectorIdFindingsMutationKey() {
  return ['detector', '/detector/:detectorId/findings', 'POST'] as const
}

export function getPostDetectorDetectorIdFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['findings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].findings.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.detector)[':detectorId']['findings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['findings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFindingsMutationOptions<
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

export function getInvitationQueryKey(args: InferRequestType<typeof client.invitation.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invitation', '/invitation', keyArgs] as const
}

export function getInvitationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invitation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvitationQueryKey>
  >({
    queryKey: getInvitationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invitation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInvitation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invitation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvitationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdminQueryKey(args: InferRequestType<typeof client.admin.$get>) {
  const { header: _, ...keyArgs } = args
  return ['admin', '/admin', keyArgs] as const
}

export function getAdminQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminQueryKey>
  >({
    queryKey: getAdminQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdmin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdminQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminQueryOptions<TData, TError>(args(), clientOptions), ...query }
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
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
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >
        | undefined,
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

export function getPostDetectorDetectorIdMemberStartMutationKey() {
  return ['detector', '/detector/:detectorId/member/start', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['member']['start']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].member.start.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMemberStart<
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
                ReturnType<(typeof client.detector)[':detectorId']['member']['start']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['member']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMemberStartMutationOptions<
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

export function getPostDetectorDetectorIdMemberStopMutationKey() {
  return ['detector', '/detector/:detectorId/member/stop', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>,
    ) {
      return parseResponse(client.detector[':detectorId'].member.stop.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdMemberStop<
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
                ReturnType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdMemberStopMutationOptions<
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

export function getPostDetectorDetectorIdFindingsUnarchiveMutationKey() {
  return ['detector', '/detector/:detectorId/findings/unarchive', 'POST'] as const
}

export function getPostDetectorDetectorIdFindingsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['unarchive']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFindingsUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['findings']['unarchive']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].findings.unarchive.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFindingsUnarchive<
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
                  (typeof client.detector)[':detectorId']['findings']['unarchive']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['findings']['unarchive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFindingsUnarchiveMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
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
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
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

export function getPostDetectorDetectorIdFindingsFeedbackMutationKey() {
  return ['detector', '/detector/:detectorId/findings/feedback', 'POST'] as const
}

export function getPostDetectorDetectorIdFindingsFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['feedback']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdFindingsFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['findings']['feedback']['$post']
      >,
    ) {
      return parseResponse(client.detector[':detectorId'].findings.feedback.$post(args, options))
    },
  })
}

export function injectPostDetectorDetectorIdFindingsFeedback<
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
                ReturnType<(typeof client.detector)[':detectorId']['findings']['feedback']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.detector)[':detectorId']['findings']['feedback']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectorDetectorIdFindingsFeedbackMutationOptions<
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

export function getPostDetectorDetectorIdMemberDetectorUpdateMutationKey() {
  return ['detector', '/detector/:detectorId/member/detector/update', 'POST'] as const
}

export function getPostDetectorDetectorIdMemberDetectorUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDetectorDetectorIdMemberDetectorUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.detector[':detectorId'].member.detector.update.$post(args, options),
      )
    },
  })
}

export function injectPostDetectorDetectorIdMemberDetectorUpdate<
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
                  (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
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
    const mutationDefaults = getPostDetectorDetectorIdMemberDetectorUpdateMutationOptions<
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
