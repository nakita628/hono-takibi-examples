import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2_0Key() {
  return ['2.0'] as const
}

export function get20UsersUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>>,
) {
  return ['2.0', '/2.0/users/:username', toValue(args)] as const
}

export function get20UsersUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20UsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2.0'].users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20UsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20UsersUsernameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20UsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2.0'].users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20RepositoriesUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>
  >,
) {
  return ['2.0', '/2.0/repositories/:username', toValue(args)] as const
}

export function get20RepositoriesUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20RepositoriesUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2.0'].repositories[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20RepositoriesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20RepositoriesUsernameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20RepositoriesUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2.0'].repositories[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20RepositoriesUsernameSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
  >,
) {
  return ['2.0', '/2.0/repositories/:username/:slug', toValue(args)] as const
}

export function get20RepositoriesUsernameSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20RepositoriesUsernameSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2.0'].repositories[':username'][':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20RepositoriesUsernameSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20RepositoriesUsernameSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20RepositoriesUsernameSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2.0'].repositories[':username'][':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20RepositoriesUsernameSlugPullrequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
    >
  >,
) {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests', toValue(args)] as const
}

export function get20RepositoriesUsernameSlugPullrequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20RepositoriesUsernameSlugPullrequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2.0'].repositories[':username'][':slug'].pullrequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20RepositoriesUsernameSlugPullrequests<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20RepositoriesUsernameSlugPullrequestsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20RepositoriesUsernameSlugPullrequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2.0'].repositories[':username'][':slug'].pullrequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20RepositoriesUsernameSlugPullrequestsPidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
    >
  >,
) {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests/:pid', toValue(args)] as const
}

export function get20RepositoriesUsernameSlugPullrequestsPidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20RepositoriesUsernameSlugPullrequestsPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20RepositoriesUsernameSlugPullrequestsPid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20RepositoriesUsernameSlugPullrequestsPidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20RepositoriesUsernameSlugPullrequestsPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePost20RepositoriesUsernameSlugPullrequestsPidMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20RepositoriesUsernameSlugPullrequestsPidMergeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
