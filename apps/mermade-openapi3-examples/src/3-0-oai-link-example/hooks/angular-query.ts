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

export function get_2_0Key() {
  return ['2.0'] as const
}

export function get20UsersUsernameQueryKey(
  args: InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>,
) {
  return ['2.0', '/2.0/users/:username', args] as const
}

export function get20UsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20UsersUsernameQueryKey>
  >({
    queryKey: get20UsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2.0'].users[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject20UsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20UsersUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get20UsersUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get20RepositoriesUsernameQueryKey(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>,
) {
  return ['2.0', '/2.0/repositories/:username', args] as const
}

export function get20RepositoriesUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20RepositoriesUsernameQueryKey>
  >({
    queryKey: get20RepositoriesUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2.0'].repositories[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject20RepositoriesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20RepositoriesUsernameQueryKey>
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
      ...get20RepositoriesUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get20RepositoriesUsernameSlugQueryKey(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>,
) {
  return ['2.0', '/2.0/repositories/:username/:slug', args] as const
}

export function get20RepositoriesUsernameSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20RepositoriesUsernameSlugQueryKey>
  >({
    queryKey: get20RepositoriesUsernameSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2.0'].repositories[':username'][':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject20RepositoriesUsernameSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20RepositoriesUsernameSlugQueryKey>
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
      ...get20RepositoriesUsernameSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get20RepositoriesUsernameSlugPullrequestsQueryKey(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
  >,
) {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests', args] as const
}

export function get20RepositoriesUsernameSlugPullrequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20RepositoriesUsernameSlugPullrequestsQueryKey>
  >({
    queryKey: get20RepositoriesUsernameSlugPullrequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2.0'].repositories[':username'][':slug'].pullrequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject20RepositoriesUsernameSlugPullrequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20RepositoriesUsernameSlugPullrequestsQueryKey>
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
      ...get20RepositoriesUsernameSlugPullrequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get20RepositoriesUsernameSlugPullrequestsPidQueryKey(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
  >,
) {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests/:pid', args] as const
}

export function get20RepositoriesUsernameSlugPullrequestsPidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20RepositoriesUsernameSlugPullrequestsPidQueryKey>
  >({
    queryKey: get20RepositoriesUsernameSlugPullrequestsPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject20RepositoriesUsernameSlugPullrequestsPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20RepositoriesUsernameSlugPullrequestsPidQueryKey>
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
      ...get20RepositoriesUsernameSlugPullrequestsPidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPost20RepositoriesUsernameSlugPullrequestsPidMergeMutationKey() {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests/:pid/merge', 'POST'] as const
}

export function getPost20RepositoriesUsernameSlugPullrequestsPidMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20RepositoriesUsernameSlugPullrequestsPidMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
      >,
    ) {
      return parseResponse(
        client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].merge.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPost20RepositoriesUsernameSlugPullrequestsPidMerge<
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
                    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
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
    const mutationDefaults = getPost20RepositoriesUsernameSlugPullrequestsPidMergeMutationOptions<
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
