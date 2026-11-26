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

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV2PromptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.prompts.$get>>,
) {
  return ['v2', '/v2/prompts', toValue(args)] as const
}

export function getV2PromptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.prompts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PromptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.prompts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Prompts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.prompts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>
          >,
          ReturnType<typeof getV2PromptsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PromptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PromptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.prompts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2PromptsMutationKey() {
  return ['v2', '/v2/prompts', 'POST'] as const
}

export function getPostV2PromptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.prompts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PromptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.prompts.$post>) {
      return parseResponse(client.v2.prompts.$post(args, options))
    },
  })
}

export function usePostV2Prompts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.prompts.$post>,
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
  const mutationDefaults = getPostV2PromptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2PromptsPromptIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>>,
) {
  return ['v2', '/v2/prompts/:prompt_id', toValue(args)] as const
}

export function getV2PromptsPromptIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PromptsPromptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.prompts[':prompt_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PromptsPromptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PromptsPromptIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PromptsPromptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PromptsPromptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.prompts[':prompt_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2PromptsPromptIdMutationKey() {
  return ['v2', '/v2/prompts/:prompt_id', 'DELETE'] as const
}

export function getDeleteV2PromptsPromptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PromptsPromptIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$delete']>) {
      return parseResponse(client.v2.prompts[':prompt_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2PromptsPromptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2PromptsPromptIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV2PromptsPromptIdMutationKey() {
  return ['v2', '/v2/prompts/:prompt_id', 'PATCH'] as const
}

export function getPatchV2PromptsPromptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2PromptsPromptIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$patch']>) {
      return parseResponse(client.v2.prompts[':prompt_id'].$patch(args, options))
    },
  })
}

export function usePatchV2PromptsPromptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$patch']>,
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
  const mutationDefaults = getPatchV2PromptsPromptIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2PromptsPromptIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>
  >,
) {
  return ['v2', '/v2/prompts/:prompt_id/versions', toValue(args)] as const
}

export function getV2PromptsPromptIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PromptsPromptIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.prompts[':prompt_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PromptsPromptIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PromptsPromptIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PromptsPromptIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PromptsPromptIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.prompts[':prompt_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2PromptsPromptIdVersionsMutationKey() {
  return ['v2', '/v2/prompts/:prompt_id/versions', 'POST'] as const
}

export function getPostV2PromptsPromptIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PromptsPromptIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>,
    ) {
      return parseResponse(client.v2.prompts[':prompt_id'].versions.$post(args, options))
    },
  })
}

export function usePostV2PromptsPromptIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>,
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
  const mutationDefaults = getPostV2PromptsPromptIdVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2PromptsPromptIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
  >,
) {
  return ['v2', '/v2/prompts/:prompt_id/versions/:version', toValue(args)] as const
}

export function getV2PromptsPromptIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PromptsPromptIdVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.prompts[':prompt_id'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PromptsPromptIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
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
                    (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']
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
                    (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PromptsPromptIdVersionsVersionQueryKey>
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
            ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PromptsPromptIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PromptsPromptIdVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.prompts[':prompt_id'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2PromptsPromptIdVersionsVersionMutationKey() {
  return ['v2', '/v2/prompts/:prompt_id/versions/:version', 'PATCH'] as const
}

export function getPatchV2PromptsPromptIdVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2PromptsPromptIdVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.prompts[':prompt_id'].versions[':version'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2PromptsPromptIdVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']
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
  const mutationDefaults = getPatchV2PromptsPromptIdVersionsVersionMutationOptions<
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

export function getV2SkillsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.skills.$get>>,
) {
  return ['v2', '/v2/skills', toValue(args)] as const
}

export function getV2SkillsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.skills.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SkillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.skills.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Skills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.skills.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>
          >,
          ReturnType<typeof getV2SkillsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SkillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SkillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.skills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2SkillsMutationKey() {
  return ['v2', '/v2/skills', 'POST'] as const
}

export function getPostV2SkillsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.skills.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SkillsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.skills.$post>) {
      return parseResponse(client.v2.skills.$post(args, options))
    },
  })
}

export function usePostV2Skills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.skills.$post>,
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
  const mutationDefaults = getPostV2SkillsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2SkillsSkillIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>>,
) {
  return ['v2', '/v2/skills/:skill_id', toValue(args)] as const
}

export function getV2SkillsSkillIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SkillsSkillIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.skills[':skill_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SkillsSkillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SkillsSkillIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SkillsSkillIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SkillsSkillIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.skills[':skill_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2SkillsSkillIdMutationKey() {
  return ['v2', '/v2/skills/:skill_id', 'DELETE'] as const
}

export function getDeleteV2SkillsSkillIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SkillsSkillIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$delete']>) {
      return parseResponse(client.v2.skills[':skill_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2SkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.skills)[':skill_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2SkillsSkillIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV2SkillsSkillIdMutationKey() {
  return ['v2', '/v2/skills/:skill_id', 'PATCH'] as const
}

export function getPatchV2SkillsSkillIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SkillsSkillIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$patch']>) {
      return parseResponse(client.v2.skills[':skill_id'].$patch(args, options))
    },
  })
}

export function usePatchV2SkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.skills)[':skill_id']['$patch']>,
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
  const mutationDefaults = getPatchV2SkillsSkillIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2SkillsSkillIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>
  >,
) {
  return ['v2', '/v2/skills/:skill_id/versions', toValue(args)] as const
}

export function getV2SkillsSkillIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SkillsSkillIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.skills[':skill_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SkillsSkillIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SkillsSkillIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SkillsSkillIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SkillsSkillIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.skills[':skill_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2SkillsSkillIdVersionsMutationKey() {
  return ['v2', '/v2/skills/:skill_id/versions', 'POST'] as const
}

export function getPostV2SkillsSkillIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SkillsSkillIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>,
    ) {
      return parseResponse(client.v2.skills[':skill_id'].versions.$post(args, options))
    },
  })
}

export function usePostV2SkillsSkillIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>,
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
  const mutationDefaults = getPostV2SkillsSkillIdVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2SkillsSkillIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
  >,
) {
  return ['v2', '/v2/skills/:skill_id/versions/:version', toValue(args)] as const
}

export function getV2SkillsSkillIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SkillsSkillIdVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.skills[':skill_id'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SkillsSkillIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
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
                  ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2SkillsSkillIdVersionsVersionQueryKey>
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
            ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SkillsSkillIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SkillsSkillIdVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.skills[':skill_id'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2SkillsSkillIdVersionsVersionMutationKey() {
  return ['v2', '/v2/skills/:skill_id/versions/:version', 'PATCH'] as const
}

export function getPatchV2SkillsSkillIdVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SkillsSkillIdVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']
      >,
    ) {
      return parseResponse(client.v2.skills[':skill_id'].versions[':version'].$patch(args, options))
    },
  })
}

export function usePatchV2SkillsSkillIdVersionsVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']
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
  const mutationDefaults = getPatchV2SkillsSkillIdVersionsVersionMutationOptions<
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

export function getPostV1AudioSpeechMutationKey() {
  return ['v1', '/v1/audio/speech', 'POST'] as const
}

export function getPostV1AudioSpeechMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.speech.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.audio.speech.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AudioSpeechMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.audio.speech.$post>) {
      return parseResponse(client.v1.audio.speech.$post(args, options))
    },
  })
}

export function usePostV1AudioSpeech<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.speech.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.audio.speech.$post>,
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
  const mutationDefaults = getPostV1AudioSpeechMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
) {
  return ['v1', '/v1/models', toValue(args)] as const
}

export function getV1ModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.models.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
          >,
          ReturnType<typeof getV1ModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ModelsModelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model_id']['$get']>>,
) {
  return ['v1', '/v1/models/:model_id', toValue(args)] as const
}

export function getV1ModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.models[':model_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ModelsModelIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.models[':model_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ModelsModelIdMutationKey() {
  return ['v1', '/v1/models/:model_id', 'DELETE'] as const
}

export function getDeleteV1ModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.models)[':model_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ModelsModelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.models)[':model_id']['$delete']>) {
      return parseResponse(client.v1.models[':model_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.models)[':model_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ModelsModelIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ResponsesMutationKey() {
  return ['v1', '/v1/responses', 'POST'] as const
}

export function getPostV1ResponsesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.responses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.responses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResponsesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.responses.$post>) {
      return parseResponse(client.v1.responses.$post(args, options))
    },
  })
}

export function usePostV1Responses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.responses.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.responses.$post>,
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
  const mutationDefaults = getPostV1ResponsesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ResponsesInputTokensMutationKey() {
  return ['v1', '/v1/responses/input_tokens', 'POST'] as const
}

export function getPostV1ResponsesInputTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responses.input_tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.responses.input_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResponsesInputTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.responses.input_tokens.$post>) {
      return parseResponse(client.v1.responses.input_tokens.$post(args, options))
    },
  })
}

export function usePostV1ResponsesInputTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.responses.input_tokens.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.responses.input_tokens.$post>,
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
  const mutationDefaults = getPostV1ResponsesInputTokensMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ClientSessionsMutationKey() {
  return ['v1', '/v1/client/sessions', 'POST'] as const
}

export function getPostV1ClientSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.client.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.client.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClientSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.client.sessions.$post>) {
      return parseResponse(client.v1.client.sessions.$post(args, options))
    },
  })
}

export function usePostV1ClientSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.client.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.client.sessions.$post>,
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
  const mutationDefaults = getPostV1ClientSessionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ServiceAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['service-accounts']['$get']>>,
) {
  return ['v1', '/v1/service-accounts', toValue(args)] as const
}

export function getV1ServiceAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['service-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServiceAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['service-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServiceAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['service-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ServiceAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServiceAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServiceAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['service-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ServiceAccountsMutationKey() {
  return ['v1', '/v1/service-accounts', 'POST'] as const
}

export function getPostV1ServiceAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['service-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServiceAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['service-accounts']['$post']>) {
      return parseResponse(client.v1['service-accounts'].$post(args, options))
    },
  })
}

export function usePostV1ServiceAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['service-accounts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['service-accounts']['$post']>,
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
  const mutationDefaults = getPostV1ServiceAccountsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ServiceAccountsAssignableRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>
  >,
) {
  return ['v1', '/v1/service-accounts/assignable-roles', toValue(args)] as const
}

export function getV1ServiceAccountsAssignableRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServiceAccountsAssignableRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['service-accounts']['assignable-roles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServiceAccountsAssignableRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>
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
                  ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ServiceAccountsAssignableRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServiceAccountsAssignableRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServiceAccountsAssignableRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['service-accounts']['assignable-roles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ServiceAccountsServiceAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
  >,
) {
  return ['v1', '/v1/service-accounts/:service_account_id', toValue(args)] as const
}

export function getV1ServiceAccountsServiceAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServiceAccountsServiceAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['service-accounts'][':service_account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServiceAccountsServiceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
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
                  ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ServiceAccountsServiceAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServiceAccountsServiceAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServiceAccountsServiceAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['service-accounts'][':service_account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ServiceAccountsServiceAccountIdMutationKey() {
  return ['v1', '/v1/service-accounts/:service_account_id', 'DELETE'] as const
}

export function getDeleteV1ServiceAccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ServiceAccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['service-accounts'][':service_account_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['service-accounts'][':service_account_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ServiceAccountsServiceAccountId<
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
                      (typeof client.v1)['service-accounts'][':service_account_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1)['service-accounts'][':service_account_id']['$delete']
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
  const mutationDefaults = getDeleteV1ServiceAccountsServiceAccountIdMutationOptions<
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

export function getPatchV1ServiceAccountsServiceAccountIdMutationKey() {
  return ['v1', '/v1/service-accounts/:service_account_id', 'PATCH'] as const
}

export function getPatchV1ServiceAccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ServiceAccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['service-accounts'][':service_account_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1['service-accounts'][':service_account_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ServiceAccountsServiceAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)['service-accounts'][':service_account_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$patch']>,
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
  const mutationDefaults = getPatchV1ServiceAccountsServiceAccountIdMutationOptions<
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

export function getV1ServiceAccountsServiceAccountIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']>
  >,
) {
  return ['v1', '/v1/service-accounts/:service_account_id/roles', toValue(args)] as const
}

export function getV1ServiceAccountsServiceAccountIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ServiceAccountsServiceAccountIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['service-accounts'][':service_account_id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ServiceAccountsServiceAccountIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']>
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
                    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
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
                    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ServiceAccountsServiceAccountIdRolesQueryKey>
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
              (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServiceAccountsServiceAccountIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ServiceAccountsServiceAccountIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['service-accounts'][':service_account_id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ServiceAccountsServiceAccountIdRolesMutationKey() {
  return ['v1', '/v1/service-accounts/:service_account_id/roles', 'PUT'] as const
}

export function getPutV1ServiceAccountsServiceAccountIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ServiceAccountsServiceAccountIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['service-accounts'][':service_account_id'].roles.$put(args, options),
      )
    },
  })
}

export function usePutV1ServiceAccountsServiceAccountIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']
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
  const mutationDefaults = getPutV1ServiceAccountsServiceAccountIdRolesMutationOptions<
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

export function getV1ConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.conversations.$get>>,
) {
  return ['v1', '/v1/conversations', toValue(args)] as const
}

export function getV1ConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.conversations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Conversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.conversations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>
            >
          >,
          ReturnType<typeof getV1ConversationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ConversationsMutationKey() {
  return ['v1', '/v1/conversations', 'POST'] as const
}

export function getPostV1ConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.conversations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConversationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.conversations.$post>) {
      return parseResponse(client.v1.conversations.$post(args, options))
    },
  })
}

export function usePostV1Conversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.conversations.$post>,
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
  const mutationDefaults = getPostV1ConversationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ConversationsConversationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>
  >,
) {
  return ['v1', '/v1/conversations/:conversation_id', toValue(args)] as const
}

export function getV1ConversationsConversationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConversationsConversationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.conversations[':conversation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConversationsConversationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConversationsConversationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConversationsConversationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.conversations[':conversation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ConversationsConversationIdMutationKey() {
  return ['v1', '/v1/conversations/:conversation_id', 'POST'] as const
}

export function getPostV1ConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$post']>,
    ) {
      return parseResponse(client.v1.conversations[':conversation_id'].$post(args, options))
    },
  })
}

export function usePostV1ConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$post']>,
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
  const mutationDefaults = getPostV1ConversationsConversationIdMutationOptions<
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

export function getDeleteV1ConversationsConversationIdMutationKey() {
  return ['v1', '/v1/conversations/:conversation_id', 'DELETE'] as const
}

export function getDeleteV1ConversationsConversationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConversationsConversationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$delete']>,
    ) {
      return parseResponse(client.v1.conversations[':conversation_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ConversationsConversationId<
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
                    ReturnType<(typeof client.v1.conversations)[':conversation_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ConversationsConversationIdMutationOptions<
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

export function getV1ConversationsConversationIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
  >,
) {
  return ['v1', '/v1/conversations/:conversation_id/history', toValue(args)] as const
}

export function getV1ConversationsConversationIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConversationsConversationIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.conversations[':conversation_id'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConversationsConversationIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
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
                    (typeof client.v1.conversations)[':conversation_id']['history']['$get']
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
                    (typeof client.v1.conversations)[':conversation_id']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConversationsConversationIdHistoryQueryKey>
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
            ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConversationsConversationIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConversationsConversationIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.conversations[':conversation_id'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConversationsConversationIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
  >,
) {
  return ['v1', '/v1/conversations/:conversation_id/messages', toValue(args)] as const
}

export function getV1ConversationsConversationIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConversationsConversationIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.conversations[':conversation_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConversationsConversationIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
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
                    (typeof client.v1.conversations)[':conversation_id']['messages']['$get']
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
                    (typeof client.v1.conversations)[':conversation_id']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConversationsConversationIdMessagesQueryKey>
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
            ReturnType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConversationsConversationIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConversationsConversationIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.conversations[':conversation_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ConversationsConversationIdRestartMutationKey() {
  return ['v1', '/v1/conversations/:conversation_id/restart', 'POST'] as const
}

export function getPostV1ConversationsConversationIdRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.conversations)[':conversation_id']['restart']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['restart']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConversationsConversationIdRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.conversations)[':conversation_id']['restart']['$post']
      >,
    ) {
      return parseResponse(client.v1.conversations[':conversation_id'].restart.$post(args, options))
    },
  })
}

export function usePostV1ConversationsConversationIdRestart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.conversations)[':conversation_id']['restart']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.conversations)[':conversation_id']['restart']['$post']
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
  const mutationDefaults = getPostV1ConversationsConversationIdRestartMutationOptions<
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

export function getV1AgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.$get>>,
) {
  return ['v1', '/v1/agents', toValue(args)] as const
}

export function getV1AgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
          >,
          ReturnType<typeof getV1AgentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AgentsMutationKey() {
  return ['v1', '/v1/agents', 'POST'] as const
}

export function getPostV1AgentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.agents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.agents.$post>) {
      return parseResponse(client.v1.agents.$post(args, options))
    },
  })
}

export function usePostV1Agents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.agents.$post>,
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
  const mutationDefaults = getPostV1AgentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AgentsPagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.pages.$get>>,
) {
  return ['v1', '/v1/agents/pages', toValue(args)] as const
}

export function getV1AgentsPagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.pages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents.pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.pages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>
            >
          >,
          ReturnType<typeof getV1AgentsPagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents.pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AgentsAgentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>>,
) {
  return ['v1', '/v1/agents/:agent_id', toValue(args)] as const
}

export function getV1AgentsAgentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsAgentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents[':agent_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AgentsAgentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsAgentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsAgentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents[':agent_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AgentsAgentIdMutationKey() {
  return ['v1', '/v1/agents/:agent_id', 'DELETE'] as const
}

export function getDeleteV1AgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$delete']>) {
      return parseResponse(client.v1.agents[':agent_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.agents)[':agent_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AgentsAgentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1AgentsAgentIdMutationKey() {
  return ['v1', '/v1/agents/:agent_id', 'PATCH'] as const
}

export function getPatchV1AgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$patch']>) {
      return parseResponse(client.v1.agents[':agent_id'].$patch(args, options))
    },
  })
}

export function usePatchV1AgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agents)[':agent_id']['$patch']>,
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
  const mutationDefaults = getPatchV1AgentsAgentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1AgentsAgentIdVersionMutationKey() {
  return ['v1', '/v1/agents/:agent_id/version', 'PATCH'] as const
}

export function getPatchV1AgentsAgentIdVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AgentsAgentIdVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>,
    ) {
      return parseResponse(client.v1.agents[':agent_id'].version.$patch(args, options))
    },
  })
}

export function usePatchV1AgentsAgentIdVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>,
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
  const mutationDefaults = getPatchV1AgentsAgentIdVersionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AgentsAgentIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>
  >,
) {
  return ['v1', '/v1/agents/:agent_id/versions', toValue(args)] as const
}

export function getV1AgentsAgentIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsAgentIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents[':agent_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsAgentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AgentsAgentIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsAgentIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsAgentIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents[':agent_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AgentsAgentIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
  >,
) {
  return ['v1', '/v1/agents/:agent_id/versions/:version', toValue(args)] as const
}

export function getV1AgentsAgentIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsAgentIdVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents[':agent_id'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsAgentIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
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
                  ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AgentsAgentIdVersionsVersionQueryKey>
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
            ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsAgentIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsAgentIdVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents[':agent_id'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AgentsAgentIdAliasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>
  >,
) {
  return ['v1', '/v1/agents/:agent_id/aliases', toValue(args)] as const
}

export function getV1AgentsAgentIdAliasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsAgentIdAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents[':agent_id'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsAgentIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AgentsAgentIdAliasesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsAgentIdAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsAgentIdAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents[':agent_id'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AgentsAgentIdAliasesMutationKey() {
  return ['v1', '/v1/agents/:agent_id/aliases', 'PUT'] as const
}

export function getPutV1AgentsAgentIdAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AgentsAgentIdAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>,
    ) {
      return parseResponse(client.v1.agents[':agent_id'].aliases.$put(args, options))
    },
  })
}

export function usePutV1AgentsAgentIdAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>,
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
  const mutationDefaults = getPutV1AgentsAgentIdAliasesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AgentsAgentIdAliasesMutationKey() {
  return ['v1', '/v1/agents/:agent_id/aliases', 'DELETE'] as const
}

export function getDeleteV1AgentsAgentIdAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AgentsAgentIdAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>,
    ) {
      return parseResponse(client.v1.agents[':agent_id'].aliases.$delete(args, options))
    },
  })
}

export function useDeleteV1AgentsAgentIdAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>,
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
  const mutationDefaults = getDeleteV1AgentsAgentIdAliasesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ConversationsStreamMutationKey() {
  return ['v1', '/v1/conversations#stream', 'POST'] as const
}

export function getPostV1ConversationsStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['conversations#stream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['conversations#stream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConversationsStreamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['conversations#stream']['$post']>) {
      return parseResponse(client.v1['conversations#stream'].$post(args, options))
    },
  })
}

export function usePostV1ConversationsStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['conversations#stream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['conversations#stream']['$post']>,
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
  const mutationDefaults = getPostV1ConversationsStreamMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ConversationsConversationIdStreamMutationKey() {
  return ['v1', '/v1/conversations/:conversation_id#stream', 'POST'] as const
}

export function getPostV1ConversationsConversationIdStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConversationsConversationIdStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>,
    ) {
      return parseResponse(client.v1.conversations[':conversation_id#stream'].$post(args, options))
    },
  })
}

export function usePostV1ConversationsConversationIdStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>,
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
  const mutationDefaults = getPostV1ConversationsConversationIdStreamMutationOptions<
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

export function getPostV1ConversationsConversationIdRestartStreamMutationKey() {
  return ['v1', '/v1/conversations/:conversation_id/restart#stream', 'POST'] as const
}

export function getPostV1ConversationsConversationIdRestartStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConversationsConversationIdRestartStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.conversations[':conversation_id']['restart#stream'].$post(args, options),
      )
    },
  })
}

export function usePostV1ConversationsConversationIdRestartStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
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
  const mutationDefaults = getPostV1ConversationsConversationIdRestartStreamMutationOptions<
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

export function getV1FilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.files.$get>>,
) {
  return ['v1', '/v1/files', toValue(args)] as const
}

export function getV1FilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Files<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>
          >,
          ReturnType<typeof getV1FilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FilesMutationKey() {
  return ['v1', '/v1/files', 'POST'] as const
}

export function getPostV1FilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.files.$post>) {
      return parseResponse(client.v1.files.$post(args, options))
    },
  })
}

export function usePostV1Files<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.files.$post>,
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
  const mutationDefaults = getPostV1FilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['$get']>>,
) {
  return ['v1', '/v1/files/:file_id', toValue(args)] as const
}

export function getV1FilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1FilesFileIdMutationKey() {
  return ['v1', '/v1/files/:file_id', 'DELETE'] as const
}

export function getDeleteV1FilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.files)[':file_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.files)[':file_id']['$delete']>) {
      return parseResponse(client.v1.files[':file_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1FilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.files)[':file_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1FilesFileIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FilesFileIdContentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>>,
) {
  return ['v1', '/v1/files/:file_id/content', toValue(args)] as const
}

export function getV1FilesFileIdContentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileIdUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>>,
) {
  return ['v1', '/v1/files/:file_id/url', toValue(args)] as const
}

export function getV1FilesFileIdUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileIdUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_id'].url.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileIdUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileIdUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileIdUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileIdUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_id'].url.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1FineTuningModelsModelIdMutationKey() {
  return ['v1', '/v1/fine_tuning/models/:model_id', 'PATCH'] as const
}

export function getPatchV1FineTuningModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1FineTuningModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>,
    ) {
      return parseResponse(client.v1.fine_tuning.models[':model_id'].$patch(args, options))
    },
  })
}

export function usePatchV1FineTuningModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>,
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
  const mutationDefaults = getPatchV1FineTuningModelsModelIdMutationOptions<
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

export function getPostV1FineTuningModelsModelIdArchiveMutationKey() {
  return ['v1', '/v1/fine_tuning/models/:model_id/archive', 'POST'] as const
}

export function getPostV1FineTuningModelsModelIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FineTuningModelsModelIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']
      >,
    ) {
      return parseResponse(client.v1.fine_tuning.models[':model_id'].archive.$post(args, options))
    },
  })
}

export function usePostV1FineTuningModelsModelIdArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>,
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
  const mutationDefaults = getPostV1FineTuningModelsModelIdArchiveMutationOptions<
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

export function getDeleteV1FineTuningModelsModelIdArchiveMutationKey() {
  return ['v1', '/v1/fine_tuning/models/:model_id/archive', 'DELETE'] as const
}

export function getDeleteV1FineTuningModelsModelIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FineTuningModelsModelIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']
      >,
    ) {
      return parseResponse(client.v1.fine_tuning.models[':model_id'].archive.$delete(args, options))
    },
  })
}

export function useDeleteV1FineTuningModelsModelIdArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']
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
  const mutationDefaults = getDeleteV1FineTuningModelsModelIdArchiveMutationOptions<
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

export function getV1BatchJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.batch.jobs.$get>>,
) {
  return ['v1', '/v1/batch/jobs', toValue(args)] as const
}

export function getV1BatchJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.batch.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BatchJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.batch.jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BatchJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.batch.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
          >,
          ReturnType<typeof getV1BatchJobsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BatchJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.batch.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BatchJobsMutationKey() {
  return ['v1', '/v1/batch/jobs', 'POST'] as const
}

export function getPostV1BatchJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.batch.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.batch.jobs.$post>) {
      return parseResponse(client.v1.batch.jobs.$post(args, options))
    },
  })
}

export function usePostV1BatchJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.batch.jobs.$post>,
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
  const mutationDefaults = getPostV1BatchJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BatchJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>,
) {
  return ['v1', '/v1/batch/jobs/:job_id', toValue(args)] as const
}

export function getV1BatchJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BatchJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.batch.jobs[':job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BatchJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BatchJobsJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BatchJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.batch.jobs[':job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1BatchJobsJobIdMutationKey() {
  return ['v1', '/v1/batch/jobs/:job_id', 'DELETE'] as const
}

export function getDeleteV1BatchJobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchJobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>) {
      return parseResponse(client.v1.batch.jobs[':job_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1BatchJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1BatchJobsJobIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1BatchJobsJobIdCancelMutationKey() {
  return ['v1', '/v1/batch/jobs/:job_id/cancel', 'POST'] as const
}

export function getPostV1BatchJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1.batch.jobs[':job_id'].cancel.$post(args, options))
    },
  })
}

export function usePostV1BatchJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostV1BatchJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ChatCompletionsMutationKey() {
  return ['v1', '/v1/chat/completions', 'POST'] as const
}

export function getPostV1ChatCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.chat.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChatCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.chat.completions.$post>) {
      return parseResponse(client.v1.chat.completions.$post(args, options))
    },
  })
}

export function usePostV1ChatCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.chat.completions.$post>,
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
  const mutationDefaults = getPostV1ChatCompletionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1FimCompletionsMutationKey() {
  return ['v1', '/v1/fim/completions', 'POST'] as const
}

export function getPostV1FimCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fim.completions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.fim.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FimCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.fim.completions.$post>) {
      return parseResponse(client.v1.fim.completions.$post(args, options))
    },
  })
}

export function usePostV1FimCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.fim.completions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.fim.completions.$post>,
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
  const mutationDefaults = getPostV1FimCompletionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AgentsCompletionsMutationKey() {
  return ['v1', '/v1/agents/completions', 'POST'] as const
}

export function getPostV1AgentsCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.completions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.agents.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.agents.completions.$post>) {
      return parseResponse(client.v1.agents.completions.$post(args, options))
    },
  })
}

export function usePostV1AgentsCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.completions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.agents.completions.$post>,
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
  const mutationDefaults = getPostV1AgentsCompletionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1EmbeddingsMutationKey() {
  return ['v1', '/v1/embeddings', 'POST'] as const
}

export function getPostV1EmbeddingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embeddings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.embeddings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmbeddingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.embeddings.$post>) {
      return parseResponse(client.v1.embeddings.$post(args, options))
    },
  })
}

export function usePostV1Embeddings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embeddings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.embeddings.$post>,
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
  const mutationDefaults = getPostV1EmbeddingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ModerationsMutationKey() {
  return ['v1', '/v1/moderations', 'POST'] as const
}

export function getPostV1ModerationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.moderations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.moderations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ModerationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.moderations.$post>) {
      return parseResponse(client.v1.moderations.$post(args, options))
    },
  })
}

export function usePostV1Moderations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.moderations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.moderations.$post>,
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
  const mutationDefaults = getPostV1ModerationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ChatModerationsMutationKey() {
  return ['v1', '/v1/chat/moderations', 'POST'] as const
}

export function getPostV1ChatModerationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.moderations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.chat.moderations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChatModerationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.chat.moderations.$post>) {
      return parseResponse(client.v1.chat.moderations.$post(args, options))
    },
  })
}

export function usePostV1ChatModerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.moderations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.chat.moderations.$post>,
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
  const mutationDefaults = getPostV1ChatModerationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1OcrMutationKey() {
  return ['v1', '/v1/ocr', 'POST'] as const
}

export function getPostV1OcrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ocr.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.ocr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OcrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ocr.$post>) {
      return parseResponse(client.v1.ocr.$post(args, options))
    },
  })
}

export function usePostV1Ocr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ocr.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.ocr.$post>,
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
  const mutationDefaults = getPostV1OcrMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ClassificationsMutationKey() {
  return ['v1', '/v1/classifications', 'POST'] as const
}

export function getPostV1ClassificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.classifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.classifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClassificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.classifications.$post>) {
      return parseResponse(client.v1.classifications.$post(args, options))
    },
  })
}

export function usePostV1Classifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.classifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.classifications.$post>,
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
  const mutationDefaults = getPostV1ClassificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ChatClassificationsMutationKey() {
  return ['v1', '/v1/chat/classifications', 'POST'] as const
}

export function getPostV1ChatClassificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.classifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.chat.classifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChatClassificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.chat.classifications.$post>) {
      return parseResponse(client.v1.chat.classifications.$post(args, options))
    },
  })
}

export function usePostV1ChatClassifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.classifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.chat.classifications.$post>,
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
  const mutationDefaults = getPostV1ChatClassificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AudioTranscriptionsMutationKey() {
  return ['v1', '/v1/audio/transcriptions', 'POST'] as const
}

export function getPostV1AudioTranscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.transcriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.audio.transcriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AudioTranscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.audio.transcriptions.$post>) {
      return parseResponse(client.v1.audio.transcriptions.$post(args, options))
    },
  })
}

export function usePostV1AudioTranscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.transcriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.audio.transcriptions.$post>,
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
  const mutationDefaults = getPostV1AudioTranscriptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AudioTranscriptionsStreamMutationKey() {
  return ['v1', '/v1/audio/transcriptions#stream', 'POST'] as const
}

export function getPostV1AudioTranscriptionsStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio)['transcriptions#stream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audio)['transcriptions#stream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AudioTranscriptionsStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audio)['transcriptions#stream']['$post']>,
    ) {
      return parseResponse(client.v1.audio['transcriptions#stream'].$post(args, options))
    },
  })
}

export function usePostV1AudioTranscriptionsStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio)['transcriptions#stream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.audio)['transcriptions#stream']['$post']>,
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
  const mutationDefaults = getPostV1AudioTranscriptionsStreamMutationOptions<
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

export function getV1LibrariesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.libraries.$get>>,
) {
  return ['v1', '/v1/libraries', toValue(args)] as const
}

export function getV1LibrariesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.libraries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Libraries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.libraries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
          >,
          ReturnType<typeof getV1LibrariesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1LibrariesMutationKey() {
  return ['v1', '/v1/libraries', 'POST'] as const
}

export function getPostV1LibrariesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.libraries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LibrariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.libraries.$post>) {
      return parseResponse(client.v1.libraries.$post(args, options))
    },
  })
}

export function usePostV1Libraries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.libraries.$post>,
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
  const mutationDefaults = getPostV1LibrariesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1LibrariesLibraryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>>,
) {
  return ['v1', '/v1/libraries/:library_id', toValue(args)] as const
}

export function getV1LibrariesLibraryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesLibraryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LibrariesLibraryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LibrariesLibraryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesLibraryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1LibrariesLibraryIdMutationKey() {
  return ['v1', '/v1/libraries/:library_id', 'PUT'] as const
}

export function getPutV1LibrariesLibraryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1LibrariesLibraryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$put']>) {
      return parseResponse(client.v1.libraries[':library_id'].$put(args, options))
    },
  })
}

export function usePutV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.libraries)[':library_id']['$put']>,
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
  const mutationDefaults = getPutV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1LibrariesLibraryIdMutationKey() {
  return ['v1', '/v1/libraries/:library_id', 'DELETE'] as const
}

export function getDeleteV1LibrariesLibraryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1LibrariesLibraryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$delete']>,
    ) {
      return parseResponse(client.v1.libraries[':library_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.libraries)[':library_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1LibrariesLibraryIdMutationKey() {
  return ['v1', '/v1/libraries/:library_id', 'PATCH'] as const
}

export function getPatchV1LibrariesLibraryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1LibrariesLibraryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$patch']>,
    ) {
      return parseResponse(client.v1.libraries[':library_id'].$patch(args, options))
    },
  })
}

export function usePatchV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.libraries)[':library_id']['$patch']>,
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
  const mutationDefaults = getPatchV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1LibrariesLibraryIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents', toValue(args)] as const
}

export function getV1LibrariesLibraryIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesLibraryIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LibrariesLibraryIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>
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
                  ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1LibrariesLibraryIdDocumentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesLibraryIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1LibrariesLibraryIdDocumentsMutationKey() {
  return ['v1', '/v1/libraries/:library_id/documents', 'POST'] as const
}

export function getPostV1LibrariesLibraryIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LibrariesLibraryIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>,
    ) {
      return parseResponse(client.v1.libraries[':library_id'].documents.$post(args, options))
    },
  })
}

export function usePostV1LibrariesLibraryIdDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>,
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
  const mutationDefaults = getPostV1LibrariesLibraryIdDocumentsMutationOptions<
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

export function getV1LibrariesLibraryIdDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', toValue(args)] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LibrariesLibraryIdDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdQueryKey>
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
              (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1LibrariesLibraryIdDocumentsDocumentIdMutationKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', 'PUT'] as const
}

export function getPutV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1LibrariesLibraryIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].$put(args, options),
      )
    },
  })
}

export function usePutV1LibrariesLibraryIdDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
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
  const mutationDefaults = getPutV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
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

export function getDeleteV1LibrariesLibraryIdDocumentsDocumentIdMutationKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', 'DELETE'] as const
}

export function getDeleteV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1LibrariesLibraryIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1LibrariesLibraryIdDocumentsDocumentId<
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
                      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
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
  const mutationDefaults = getDeleteV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
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

export function getPatchV1LibrariesLibraryIdDocumentsDocumentIdMutationKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', 'PATCH'] as const
}

export function getPatchV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1LibrariesLibraryIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1LibrariesLibraryIdDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
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
  const mutationDefaults = getPatchV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
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

export function getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/libraries/:library_id/documents/:document_id/text_content',
    toValue(args),
  ] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].text_content.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1LibrariesLibraryIdDocumentsDocumentIdTextContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryKey>
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
              (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].text_content.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
    >
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/status', toValue(args)] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LibrariesLibraryIdDocumentsDocumentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryKey>
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
              (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/libraries/:library_id/documents/:document_id/signed-url',
    toValue(args),
  ] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id']['signed-url'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1LibrariesLibraryIdDocumentsDocumentIdSignedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryKey>
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
              (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id']['signed-url'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/libraries/:library_id/documents/:document_id/extracted-text-signed-url',
    toValue(args),
  ] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'][
          'extracted-text-signed-url'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
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
                    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryKey
          >
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
              (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'][
            'extracted-text-signed-url'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1LibrariesLibraryIdDocumentsDocumentIdReprocessMutationKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/reprocess', 'POST'] as const
}

export function getPostV1LibrariesLibraryIdDocumentsDocumentIdReprocessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1LibrariesLibraryIdDocumentsDocumentIdReprocessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].reprocess.$post(args, options),
      )
    },
  })
}

export function usePostV1LibrariesLibraryIdDocumentsDocumentIdReprocess<
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
                      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
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
  const mutationDefaults = getPostV1LibrariesLibraryIdDocumentsDocumentIdReprocessMutationOptions<
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

export function getV1LibrariesLibraryIdShareQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>
  >,
) {
  return ['v1', '/v1/libraries/:library_id/share', toValue(args)] as const
}

export function getV1LibrariesLibraryIdShareQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LibrariesLibraryIdShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.libraries[':library_id'].share.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LibrariesLibraryIdShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LibrariesLibraryIdShareQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesLibraryIdShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LibrariesLibraryIdShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.libraries[':library_id'].share.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1LibrariesLibraryIdShareMutationKey() {
  return ['v1', '/v1/libraries/:library_id/share', 'PUT'] as const
}

export function getPutV1LibrariesLibraryIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1LibrariesLibraryIdShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$put']>,
    ) {
      return parseResponse(client.v1.libraries[':library_id'].share.$put(args, options))
    },
  })
}

export function usePutV1LibrariesLibraryIdShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$put']>,
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
  const mutationDefaults = getPutV1LibrariesLibraryIdShareMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1LibrariesLibraryIdShareMutationKey() {
  return ['v1', '/v1/libraries/:library_id/share', 'DELETE'] as const
}

export function getDeleteV1LibrariesLibraryIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1LibrariesLibraryIdShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>,
    ) {
      return parseResponse(client.v1.libraries[':library_id'].share.$delete(args, options))
    },
  })
}

export function useDeleteV1LibrariesLibraryIdShare<
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
                    ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>,
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
  const mutationDefaults = getDeleteV1LibrariesLibraryIdShareMutationOptions<
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

export function getV1ObservabilityDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.datasets.$get>>,
) {
  return ['v1', '/v1/observability/datasets', toValue(args)] as const
}

export function getV1ObservabilityDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityDatasetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObservabilityDatasetsMutationKey() {
  return ['v1', '/v1/observability/datasets', 'POST'] as const
}

export function getPostV1ObservabilityDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityDatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.observability.datasets.$post>) {
      return parseResponse(client.v1.observability.datasets.$post(args, options))
    },
  })
}

export function usePostV1ObservabilityDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.datasets.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.datasets.$post>,
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
  const mutationDefaults = getPostV1ObservabilityDatasetsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObservabilityDatasetsDatasetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id', toValue(args)] as const
}

export function getV1ObservabilityDatasetsDatasetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>
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
                  ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityDatasetsDatasetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetsDatasetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.datasets[':dataset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ObservabilityDatasetsDatasetIdMutationKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id', 'DELETE'] as const
}

export function getDeleteV1ObservabilityDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObservabilityDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>,
    ) {
      return parseResponse(client.v1.observability.datasets[':dataset_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObservabilityDatasetsDatasetId<
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
                    ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ObservabilityDatasetsDatasetIdMutationOptions<
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

export function getPatchV1ObservabilityDatasetsDatasetIdMutationKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id', 'PATCH'] as const
}

export function getPatchV1ObservabilityDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ObservabilityDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>,
    ) {
      return parseResponse(client.v1.observability.datasets[':dataset_id'].$patch(args, options))
    },
  })
}

export function usePatchV1ObservabilityDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>,
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
  const mutationDefaults = getPatchV1ObservabilityDatasetsDatasetIdMutationOptions<
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

export function getV1ObservabilityDatasetsDatasetIdRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']>
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/records', toValue(args)] as const
}

export function getV1ObservabilityDatasetsDatasetIdRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityDatasetsDatasetIdRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']>
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityDatasetsDatasetIdRecordsQueryKey>
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
            ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetsDatasetIdRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.datasets[':dataset_id'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObservabilityDatasetsDatasetIdRecordsMutationKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/records', 'POST'] as const
}

export function getPostV1ObservabilityDatasetsDatasetIdRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityDatasetsDatasetIdRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].records.$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilityDatasetsDatasetIdRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']
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
  const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdRecordsMutationOptions<
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

export function getPostV1ObservabilityDatasetsDatasetIdRecordsBulkMutationKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/records/bulk', 'POST'] as const
}

export function getPostV1ObservabilityDatasetsDatasetIdRecordsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityDatasetsDatasetIdRecordsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].records.bulk.$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilityDatasetsDatasetIdRecordsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
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
  const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdRecordsBulkMutationOptions<
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

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromFileMutationKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/imports/from-file', 'POST'] as const
}

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityDatasetsDatasetIdImportsFromFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].imports['from-file'].$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilityDatasetsDatasetIdImportsFromFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
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
  const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdImportsFromFileMutationOptions<
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

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromSpansMutationKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/imports/from-spans', 'POST'] as const
}

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromSpansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityDatasetsDatasetIdImportsFromSpansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].imports['from-spans'].$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilityDatasetsDatasetIdImportsFromSpans<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
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
  const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdImportsFromSpansMutationOptions<
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

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromDatasetMutationKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/imports/from-dataset', 'POST'] as const
}

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityDatasetsDatasetIdImportsFromDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].imports['from-dataset'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ObservabilityDatasetsDatasetIdImportsFromDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
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
  const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdImportsFromDatasetMutationOptions<
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

export function getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/exports/to-jsonl', toValue(args)] as const
}

export function getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].exports['to-jsonl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityDatasetsDatasetIdExportsToJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryKey>
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
              (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.datasets[':dataset_id'].exports['to-jsonl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/tasks/:task_id', toValue(args)] as const
}

export function getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityDatasetsDatasetIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryKey>
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
              (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.datasets[':dataset_id'].tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityDatasetsDatasetIdTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/tasks', toValue(args)] as const
}

export function getV1ObservabilityDatasetsDatasetIdTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityDatasetsDatasetIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']
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
                    (typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityDatasetsDatasetIdTasksQueryKey>
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
            ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetsDatasetIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityDatasetsDatasetIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.datasets[':dataset_id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityDatasetRecordsDatasetRecordIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id', toValue(args)] as const
}

export function getV1ObservabilityDatasetRecordsDatasetRecordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityDatasetRecordsDatasetRecordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability['dataset-records'][':dataset_record_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityDatasetRecordsDatasetRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
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
                    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
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
                    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityDatasetRecordsDatasetRecordIdQueryKey>
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
              (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetRecordsDatasetRecordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityDatasetRecordsDatasetRecordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability['dataset-records'][':dataset_record_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ObservabilityDatasetRecordsDatasetRecordIdMutationKey() {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id', 'DELETE'] as const
}

export function getDeleteV1ObservabilityDatasetRecordsDatasetRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObservabilityDatasetRecordsDatasetRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.observability['dataset-records'][':dataset_record_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ObservabilityDatasetRecordsDatasetRecordId<
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
                      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
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
  const mutationDefaults = getDeleteV1ObservabilityDatasetRecordsDatasetRecordIdMutationOptions<
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

export function getPostV1ObservabilityDatasetRecordsBulkDeleteMutationKey() {
  return ['v1', '/v1/observability/dataset-records/bulk-delete', 'POST'] as const
}

export function getPostV1ObservabilityDatasetRecordsBulkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityDatasetRecordsBulkDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability['dataset-records']['bulk-delete'].$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilityDatasetRecordsBulkDelete<
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
                      (typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']
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
  const mutationDefaults = getPostV1ObservabilityDatasetRecordsBulkDeleteMutationOptions<
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

export function getPutV1ObservabilityDatasetRecordsDatasetRecordIdPayloadMutationKey() {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id/payload', 'PUT'] as const
}

export function getPutV1ObservabilityDatasetRecordsDatasetRecordIdPayloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObservabilityDatasetRecordsDatasetRecordIdPayloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.observability['dataset-records'][':dataset_record_id'].payload.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObservabilityDatasetRecordsDatasetRecordIdPayload<
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
                      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
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
  const mutationDefaults = getPutV1ObservabilityDatasetRecordsDatasetRecordIdPayloadMutationOptions<
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

export function getPutV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesMutationKey() {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id/properties', 'PUT'] as const
}

export function getPutV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.observability['dataset-records'][':dataset_record_id'].properties.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ObservabilityDatasetRecordsDatasetRecordIdProperties<
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
                      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
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
  const mutationDefaults =
    getPutV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesMutationOptions<
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

export function getV1ObservabilityPipelinesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.pipelines.$get>>,
) {
  return ['v1', '/v1/observability/pipelines', toValue(args)] as const
}

export function getV1ObservabilityPipelinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.pipelines.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityPipelinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.pipelines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityPipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.pipelines.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityPipelinesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityPipelinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityPipelinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.pipelines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObservabilityPipelinesMutationKey() {
  return ['v1', '/v1/observability/pipelines', 'POST'] as const
}

export function getPostV1ObservabilityPipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.pipelines.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityPipelinesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.observability.pipelines.$post>) {
      return parseResponse(client.v1.observability.pipelines.$post(args, options))
    },
  })
}

export function usePostV1ObservabilityPipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.pipelines.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.pipelines.$post>,
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
  const mutationDefaults = getPostV1ObservabilityPipelinesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObservabilityPipelinesPipelineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>
  >,
) {
  return ['v1', '/v1/observability/pipelines/:pipeline_id', toValue(args)] as const
}

export function getV1ObservabilityPipelinesPipelineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityPipelinesPipelineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.pipelines[':pipeline_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityPipelinesPipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>
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
                  ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityPipelinesPipelineIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityPipelinesPipelineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityPipelinesPipelineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.pipelines[':pipeline_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ObservabilityPipelinesPipelineIdMutationKey() {
  return ['v1', '/v1/observability/pipelines/:pipeline_id', 'PUT'] as const
}

export function getPutV1ObservabilityPipelinesPipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ObservabilityPipelinesPipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>,
    ) {
      return parseResponse(client.v1.observability.pipelines[':pipeline_id'].$put(args, options))
    },
  })
}

export function usePutV1ObservabilityPipelinesPipelineId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>,
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
  const mutationDefaults = getPutV1ObservabilityPipelinesPipelineIdMutationOptions<
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

export function getDeleteV1ObservabilityPipelinesPipelineIdMutationKey() {
  return ['v1', '/v1/observability/pipelines/:pipeline_id', 'DELETE'] as const
}

export function getDeleteV1ObservabilityPipelinesPipelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ObservabilityPipelinesPipelineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>,
    ) {
      return parseResponse(client.v1.observability.pipelines[':pipeline_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ObservabilityPipelinesPipelineId<
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
                      (typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ObservabilityPipelinesPipelineIdMutationOptions<
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

export function getPostV1ObservabilityLogsSearchMutationKey() {
  return ['v1', '/v1/observability/logs/search', 'POST'] as const
}

export function getPostV1ObservabilityLogsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.logs.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityLogsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.observability.logs.search.$post>) {
      return parseResponse(client.v1.observability.logs.search.$post(args, options))
    },
  })
}

export function usePostV1ObservabilityLogsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.logs.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.logs.search.$post>,
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
  const mutationDefaults = getPostV1ObservabilityLogsSearchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ObservabilityTracesSearchMutationKey() {
  return ['v1', '/v1/observability/traces/search', 'POST'] as const
}

export function getPostV1ObservabilityTracesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.traces.search.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.traces.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityTracesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.observability.traces.search.$post>) {
      return parseResponse(client.v1.observability.traces.search.$post(args, options))
    },
  })
}

export function usePostV1ObservabilityTracesSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.traces.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.traces.search.$post>,
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
  const mutationDefaults = getPostV1ObservabilityTracesSearchMutationOptions<
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

export function getPostV1ObservabilityTracesAggregateMutationKey() {
  return ['v1', '/v1/observability/traces/aggregate', 'POST'] as const
}

export function getPostV1ObservabilityTracesAggregateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.traces.aggregate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.traces.aggregate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityTracesAggregateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.observability.traces.aggregate.$post>,
    ) {
      return parseResponse(client.v1.observability.traces.aggregate.$post(args, options))
    },
  })
}

export function usePostV1ObservabilityTracesAggregate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.traces.aggregate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.traces.aggregate.$post>,
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
  const mutationDefaults = getPostV1ObservabilityTracesAggregateMutationOptions<
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

export function getPostV1ObservabilitySpansSearchMutationKey() {
  return ['v1', '/v1/observability/spans/search', 'POST'] as const
}

export function getPostV1ObservabilitySpansSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.spans.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilitySpansSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.observability.spans.search.$post>) {
      return parseResponse(client.v1.observability.spans.search.$post(args, options))
    },
  })
}

export function usePostV1ObservabilitySpansSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.spans.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.spans.search.$post>,
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
  const mutationDefaults = getPostV1ObservabilitySpansSearchMutationOptions<
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

export function getPostV1ObservabilitySpansAggregateMutationKey() {
  return ['v1', '/v1/observability/spans/aggregate', 'POST'] as const
}

export function getPostV1ObservabilitySpansAggregateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.aggregate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.spans.aggregate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilitySpansAggregateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.observability.spans.aggregate.$post>) {
      return parseResponse(client.v1.observability.spans.aggregate.$post(args, options))
    },
  })
}

export function usePostV1ObservabilitySpansAggregate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.spans.aggregate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.spans.aggregate.$post>,
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
  const mutationDefaults = getPostV1ObservabilitySpansAggregateMutationOptions<
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

export function getPostV1ObservabilitySpansEvaluationsAggregateMutationKey() {
  return ['v1', '/v1/observability/spans/evaluations/aggregate', 'POST'] as const
}

export function getPostV1ObservabilitySpansEvaluationsAggregateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.aggregate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.spans.evaluations.aggregate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilitySpansEvaluationsAggregateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.observability.spans.evaluations.aggregate.$post>,
    ) {
      return parseResponse(client.v1.observability.spans.evaluations.aggregate.$post(args, options))
    },
  })
}

export function usePostV1ObservabilitySpansEvaluationsAggregate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.observability.spans.evaluations.aggregate.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.spans.evaluations.aggregate.$post>,
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
  const mutationDefaults = getPostV1ObservabilitySpansEvaluationsAggregateMutationOptions<
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

export function getPostV1ObservabilitySpansEvaluationsSearchMutationKey() {
  return ['v1', '/v1/observability/spans/evaluations/search', 'POST'] as const
}

export function getPostV1ObservabilitySpansEvaluationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.search.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.spans.evaluations.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilitySpansEvaluationsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.observability.spans.evaluations.search.$post>,
    ) {
      return parseResponse(client.v1.observability.spans.evaluations.search.$post(args, options))
    },
  })
}

export function usePostV1ObservabilitySpansEvaluationsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.spans.evaluations.search.$post>,
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
  const mutationDefaults = getPostV1ObservabilitySpansEvaluationsSearchMutationOptions<
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

export function getPostV1ObservabilitySpansEvaluationsSearchLatestMutationKey() {
  return ['v1', '/v1/observability/spans/evaluations/search/latest', 'POST'] as const
}

export function getPostV1ObservabilitySpansEvaluationsSearchLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.search.latest.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.spans.evaluations.search.latest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilitySpansEvaluationsSearchLatestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.observability.spans.evaluations.search.latest.$post>,
    ) {
      return parseResponse(
        client.v1.observability.spans.evaluations.search.latest.$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilitySpansEvaluationsSearchLatest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.observability.spans.evaluations.search.latest.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.spans.evaluations.search.latest.$post>,
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
  const mutationDefaults = getPostV1ObservabilitySpansEvaluationsSearchLatestMutationOptions<
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

export function getPostV1ObservabilityPipelineResultsSearchMutationKey() {
  return ['v1', '/v1/observability/pipeline-results/search', 'POST'] as const
}

export function getPostV1ObservabilityPipelineResultsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.observability)['pipeline-results']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.observability)['pipeline-results']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityPipelineResultsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['pipeline-results']['search']['$post']
      >,
    ) {
      return parseResponse(client.v1.observability['pipeline-results'].search.$post(args, options))
    },
  })
}

export function usePostV1ObservabilityPipelineResultsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability)['pipeline-results']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.observability)['pipeline-results']['search']['$post']>,
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
  const mutationDefaults = getPostV1ObservabilityPipelineResultsSearchMutationOptions<
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

export function getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/pipelines/:pipeline_id/results/fields', toValue(args)] as const
}

export function getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.pipelines[':pipeline_id'].results.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityPipelinesPipelineIdResultsFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
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
                    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
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
                    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryKey>
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
              (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.pipelines[':pipeline_id'].results.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityTracesFieldsQueryKey() {
  return ['v1', '/v1/observability/traces/fields'] as const
}

export function getV1ObservabilityTracesFieldsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ObservabilityTracesFieldsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.traces.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityTracesFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityTracesFieldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityTracesFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ObservabilityTracesFieldsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.traces.fields.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityTracesTraceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>
  >,
) {
  return ['v1', '/v1/observability/traces/:trace_id', toValue(args)] as const
}

export function getV1ObservabilityTracesTraceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityTracesTraceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.traces[':trace_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityTracesTraceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityTracesTraceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityTracesTraceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityTracesTraceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.traces[':trace_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityTracesTraceIdSpansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
  >,
) {
  return ['v1', '/v1/observability/traces/:trace_id/spans', toValue(args)] as const
}

export function getV1ObservabilityTracesTraceIdSpansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityTracesTraceIdSpansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.traces[':trace_id'].spans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityTracesTraceIdSpans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
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
                  ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityTracesTraceIdSpansQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityTracesTraceIdSpansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityTracesTraceIdSpansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.traces[':trace_id'].spans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityLogsFieldsQueryKey() {
  return ['v1', '/v1/observability/logs/fields'] as const
}

export function getV1ObservabilityLogsFieldsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ObservabilityLogsFieldsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.logs.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityLogsFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityLogsFieldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityLogsFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ObservabilityLogsFieldsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.logs.fields.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilitySpansFieldsQueryKey() {
  return ['v1', '/v1/observability/spans/fields'] as const
}

export function getV1ObservabilitySpansFieldsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ObservabilitySpansFieldsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.spans.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilitySpansFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilitySpansFieldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilitySpansFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ObservabilitySpansFieldsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.spans.fields.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilitySpansEvaluationsFieldsQueryKey() {
  return ['v1', '/v1/observability/spans/evaluations/fields'] as const
}

export function getV1ObservabilitySpansEvaluationsFieldsQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getV1ObservabilitySpansEvaluationsFieldsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.spans.evaluations.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilitySpansEvaluationsFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilitySpansEvaluationsFieldsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilitySpansEvaluationsFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ObservabilitySpansEvaluationsFieldsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.spans.evaluations.fields.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityTracesFieldsFieldNameOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/traces/fields/:field_name/options', toValue(args)] as const
}

export function getV1ObservabilityTracesFieldsFieldNameOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityTracesFieldsFieldNameOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.traces.fields[':field_name'].options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityTracesFieldsFieldNameOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
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
                    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
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
                    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityTracesFieldsFieldNameOptionsQueryKey>
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
              (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityTracesFieldsFieldNameOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityTracesFieldsFieldNameOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.traces.fields[':field_name'].options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityLogsFieldsFieldNameOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']>
  >,
) {
  return ['v1', '/v1/observability/logs/fields/:field_name/options', toValue(args)] as const
}

export function getV1ObservabilityLogsFieldsFieldNameOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityLogsFieldsFieldNameOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.logs.fields[':field_name'].options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityLogsFieldsFieldNameOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']>
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
                    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
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
                    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityLogsFieldsFieldNameOptionsQueryKey>
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
              (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityLogsFieldsFieldNameOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityLogsFieldsFieldNameOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.logs.fields[':field_name'].options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilitySpansFieldsFieldNameOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/spans/fields/:field_name/options', toValue(args)] as const
}

export function getV1ObservabilitySpansFieldsFieldNameOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilitySpansFieldsFieldNameOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.spans.fields[':field_name'].options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilitySpansFieldsFieldNameOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
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
                    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
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
                    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilitySpansFieldsFieldNameOptionsQueryKey>
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
              (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilitySpansFieldsFieldNameOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilitySpansFieldsFieldNameOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.spans.fields[':field_name'].options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/observability/spans/evaluations/fields/:field_name/options',
    toValue(args),
  ] as const
}

export function getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.spans.evaluations.fields[':field_name'].options.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ObservabilitySpansEvaluationsFieldsFieldNameOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
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
                    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
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
                    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryKey>
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
              (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.spans.evaluations.fields[':field_name'].options.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityTracesTraceIdSpansSpanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/traces/:trace_id/spans/:span_id', toValue(args)] as const
}

export function getV1ObservabilityTracesTraceIdSpansSpanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityTracesTraceIdSpansSpanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.traces[':trace_id'].spans[':span_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityTracesTraceIdSpansSpanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
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
                    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
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
                    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityTracesTraceIdSpansSpanIdQueryKey>
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
              (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityTracesTraceIdSpansSpanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityTracesTraceIdSpansSpanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.traces[':trace_id'].spans[':span_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.projects.$get>>,
) {
  return ['v1', '/v1/observability/projects', toValue(args)] as const
}

export function getV1ObservabilityProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.projects.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.projects.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityProjectsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityProjectsProjectSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>
  >,
) {
  return ['v1', '/v1/observability/projects/:project_slug', toValue(args)] as const
}

export function getV1ObservabilityProjectsProjectSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityProjectsProjectSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.projects[':project_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityProjectsProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>
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
                  ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityProjectsProjectSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityProjectsProjectSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityProjectsProjectSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.projects[':project_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/projects/:project_slug/evaluations_v2', toValue(args)] as const
}

export function getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.projects[':project_slug'].evaluations_v2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityProjectsProjectSlugEvaluationsV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
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
                    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
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
                    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryKey>
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
              (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.projects[':project_slug'].evaluations_v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']>
  >,
) {
  return ['v1', '/v1/observability/evaluations_v2/:evaluation_slug', toValue(args)] as const
}

export function getV1ObservabilityEvaluationsV2EvaluationSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.evaluations_v2[':evaluation_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityEvaluationsV2EvaluationSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']>
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
                    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
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
                    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey>
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
            ReturnType<(typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.evaluations_v2[':evaluation_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchMutationKey() {
  return ['v1', '/v1/observability/evaluations_v2/:evaluation_slug/runs/search', 'POST'] as const
}

export function getPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability.evaluations_v2[':evaluation_slug'].runs.search.$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
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
  const mutationDefaults =
    getPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchMutationOptions<
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

export function getPostV1ObservabilityEvaluationRunsV2SearchMutationKey() {
  return ['v1', '/v1/observability/evaluation-runs_v2/search', 'POST'] as const
}

export function getPostV1ObservabilityEvaluationRunsV2SearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityEvaluationRunsV2SearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'].search.$post(args, options),
      )
    },
  })
}

export function usePostV1ObservabilityEvaluationRunsV2Search<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']
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
  const mutationDefaults = getPostV1ObservabilityEvaluationRunsV2SearchMutationOptions<
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

export function getV1ObservabilityEvaluationRunsV2RunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
  >,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id', toValue(args)] as const
}

export function getV1ObservabilityEvaluationRunsV2RunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityEvaluationRunsV2RunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityEvaluationRunsV2RunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
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
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']
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
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityEvaluationRunsV2RunIdQueryKey>
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
            ReturnType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityEvaluationRunsV2RunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityEvaluationRunsV2RunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/statistics', toValue(args)] as const
}

export function getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityEvaluationRunsV2RunIdStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
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
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
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
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryKey>
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
              (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeMutationKey() {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/statistics/compute', 'POST'] as const
}

export function getPostV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.compute.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ObservabilityEvaluationRunsV2RunIdStatisticsCompute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
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
  const mutationDefaults =
    getPostV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeMutationOptions<
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

export function getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/observability/evaluation-runs_v2/:run_id/records/:record_id',
    toValue(args),
  ] as const
}

export function getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].records[':record_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ObservabilityEvaluationRunsV2RunIdRecordsRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
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
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
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
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryKey>
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
              (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].records[':record_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearchMutationKey() {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/records/search', 'POST'] as const
}

export function getPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].records.search.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ObservabilityEvaluationRunsV2RunIdRecordsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
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
  const mutationDefaults = getPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearchMutationOptions<
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

export function getV1ObservabilityOptimizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.optimizations.$get>>,
) {
  return ['v1', '/v1/observability/optimizations', toValue(args)] as const
}

export function getV1ObservabilityOptimizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.optimizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityOptimizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.optimizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityOptimizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.optimizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityOptimizationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityOptimizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityOptimizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.optimizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityOptimizationsOptimizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
  >,
) {
  return ['v1', '/v1/observability/optimizations/:optimization_id', toValue(args)] as const
}

export function getV1ObservabilityOptimizationsOptimizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityOptimizationsOptimizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.optimizations[':optimization_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityOptimizationsOptimizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
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
                    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
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
                    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityOptimizationsOptimizationIdQueryKey>
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
            ReturnType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityOptimizationsOptimizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityOptimizationsOptimizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.optimizations[':optimization_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityOptimizationsOptimizationIdTrialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
    >
  >,
) {
  return ['v1', '/v1/observability/optimizations/:optimization_id/trials', toValue(args)] as const
}

export function getV1ObservabilityOptimizationsOptimizationIdTrialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityOptimizationsOptimizationIdTrialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.optimizations[':optimization_id'].trials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityOptimizationsOptimizationIdTrials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
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
                    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
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
                    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityOptimizationsOptimizationIdTrialsQueryKey>
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
              (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityOptimizationsOptimizationIdTrialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityOptimizationsOptimizationIdTrialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.optimizations[':optimization_id'].trials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ObservabilityScorersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.scorers.$get>>,
) {
  return ['v1', '/v1/observability/scorers', toValue(args)] as const
}

export function getV1ObservabilityScorersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.scorers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityScorersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.scorers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityScorers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.observability.scorers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
            >
          >,
          ReturnType<typeof getV1ObservabilityScorersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityScorersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityScorersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.scorers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ObservabilityScorersMutationKey() {
  return ['v1', '/v1/observability/scorers', 'POST'] as const
}

export function getPostV1ObservabilityScorersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.observability.scorers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ObservabilityScorersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.observability.scorers.$post>) {
      return parseResponse(client.v1.observability.scorers.$post(args, options))
    },
  })
}

export function usePostV1ObservabilityScorers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.observability.scorers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.observability.scorers.$post>,
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
  const mutationDefaults = getPostV1ObservabilityScorersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ObservabilityScorersScorerSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>
  >,
) {
  return ['v1', '/v1/observability/scorers/:scorer_slug', toValue(args)] as const
}

export function getV1ObservabilityScorersScorerSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ObservabilityScorersScorerSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.observability.scorers[':scorer_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ObservabilityScorersScorerSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>
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
                  ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ObservabilityScorersScorerSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityScorersScorerSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ObservabilityScorersScorerSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.observability.scorers[':scorer_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1ObservabilityScorersScorerSlugMutationKey() {
  return ['v1', '/v1/observability/scorers/:scorer_slug', 'PATCH'] as const
}

export function getPatchV1ObservabilityScorersScorerSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ObservabilityScorersScorerSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>,
    ) {
      return parseResponse(client.v1.observability.scorers[':scorer_slug'].$patch(args, options))
    },
  })
}

export function usePatchV1ObservabilityScorersScorerSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>,
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
  const mutationDefaults = getPatchV1ObservabilityScorersScorerSlugMutationOptions<
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

export function getV1ConnectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
) {
  return ['v1', '/v1/connectors', toValue(args)] as const
}

export function getV1ConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
          >,
          ReturnType<typeof getV1ConnectorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ConnectorsMutationKey() {
  return ['v1', '/v1/connectors', 'POST'] as const
}

export function getPostV1ConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connectors.$post>) {
      return parseResponse(client.v1.connectors.$post(args, options))
    },
  })
}

export function usePostV1Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.connectors.$post>,
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
  const mutationDefaults = getPostV1ConnectorsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/auth_url', toValue(args)] as const
}

export function getV1ConnectorsConnectorIdOrNameAuthUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].auth_url.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsConnectorIdOrNameAuthUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey>
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
            ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':connector_id_or_name'].auth_url.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ConnectorsConnectorIdShareMutationKey() {
  return ['v1', '/v1/connectors/:connector_id/share', 'PUT'] as const
}

export function getPutV1ConnectorsConnectorIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConnectorsConnectorIdShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>,
    ) {
      return parseResponse(client.v1.connectors[':connector_id'].share.$put(args, options))
    },
  })
}

export function usePutV1ConnectorsConnectorIdShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>,
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
  const mutationDefaults = getPutV1ConnectorsConnectorIdShareMutationOptions<
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

export function getDeleteV1ConnectorsConnectorIdShareMutationKey() {
  return ['v1', '/v1/connectors/:connector_id/share', 'DELETE'] as const
}

export function getDeleteV1ConnectorsConnectorIdShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectorsConnectorIdShareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>,
    ) {
      return parseResponse(client.v1.connectors[':connector_id'].share.$delete(args, options))
    },
  })
}

export function useDeleteV1ConnectorsConnectorIdShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>,
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
  const mutationDefaults = getDeleteV1ConnectorsConnectorIdShareMutationOptions<
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

export function getPutV1ConnectorsConnectorIdOrganizationShareMutationKey() {
  return ['v1', '/v1/connectors/:connector_id/organization/share', 'PUT'] as const
}

export function getPutV1ConnectorsConnectorIdOrganizationShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConnectorsConnectorIdOrganizationShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id'].organization.share.$put(args, options),
      )
    },
  })
}

export function usePutV1ConnectorsConnectorIdOrganizationShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
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
  const mutationDefaults = getPutV1ConnectorsConnectorIdOrganizationShareMutationOptions<
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

export function getDeleteV1ConnectorsConnectorIdOrganizationShareMutationKey() {
  return ['v1', '/v1/connectors/:connector_id/organization/share', 'DELETE'] as const
}

export function getDeleteV1ConnectorsConnectorIdOrganizationShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectorsConnectorIdOrganizationShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id'].organization.share.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ConnectorsConnectorIdOrganizationShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
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
  const mutationDefaults = getDeleteV1ConnectorsConnectorIdOrganizationShareMutationOptions<
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

export function getPostV1ConnectorsConnectorIdConsumerScopeActivateMutationKey() {
  return ['v1', '/v1/connectors/:connector_id/:consumer_scope/activate', 'POST'] as const
}

export function getPostV1ConnectorsConnectorIdConsumerScopeActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsConnectorIdConsumerScopeActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id'][':consumer_scope'].activate.$post(args, options),
      )
    },
  })
}

export function usePostV1ConnectorsConnectorIdConsumerScopeActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
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
  const mutationDefaults = getPostV1ConnectorsConnectorIdConsumerScopeActivateMutationOptions<
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

export function getPostV1ConnectorsConnectorIdConsumerScopeDeactivateMutationKey() {
  return ['v1', '/v1/connectors/:connector_id/:consumer_scope/deactivate', 'POST'] as const
}

export function getPostV1ConnectorsConnectorIdConsumerScopeDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsConnectorIdConsumerScopeDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id'][':consumer_scope'].deactivate.$post(args, options),
      )
    },
  })
}

export function usePostV1ConnectorsConnectorIdConsumerScopeDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
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
  const mutationDefaults = getPostV1ConnectorsConnectorIdConsumerScopeDeactivateMutationOptions<
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

export function getPostV1ConnectorsConnectorIdOrNameToolsToolNameCallMutationKey() {
  return ['v1', '/v1/connectors/:connector_id_or_name/tools/:tool_name/call', 'POST'] as const
}

export function getPostV1ConnectorsConnectorIdOrNameToolsToolNameCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsConnectorIdOrNameToolsToolNameCallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].tools[':tool_name'].call.$post(args, options),
      )
    },
  })
}

export function usePostV1ConnectorsConnectorIdOrNameToolsToolNameCall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
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
  const mutationDefaults = getPostV1ConnectorsConnectorIdOrNameToolsToolNameCallMutationOptions<
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

export function getV1ConnectorsConnectorIdOrNameToolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/tools', toValue(args)] as const
}

export function getV1ConnectorsConnectorIdOrNameToolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsConnectorIdOrNameToolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].tools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsConnectorIdOrNameTools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsConnectorIdOrNameToolsQueryKey>
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
            ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsConnectorIdOrNameToolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsConnectorIdOrNameToolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':connector_id_or_name'].tools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/connectors/:connector_id_or_name/authentication_methods',
    toValue(args),
  ] as const
}

export function getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].authentication_methods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsConnectorIdOrNameAuthenticationMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryKey>
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
              (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':connector_id_or_name'].authentication_methods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/connectors/:connector_id_or_name/organization/credentials',
    toValue(args),
  ] as const
}

export function getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].organization.credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsConnectorIdOrNameOrganizationCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryKey>
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
              (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':connector_id_or_name'].organization.credentials.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/connectors/:connector_id_or_name/workspace/credentials',
    toValue(args),
  ] as const
}

export function getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].workspace.credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsConnectorIdOrNameWorkspaceCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryKey>
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
              (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':connector_id_or_name'].workspace.credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ConnectorsConnectorIdOrNameUserCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
    >
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/user/credentials', toValue(args)] as const
}

export function getV1ConnectorsConnectorIdOrNameUserCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsConnectorIdOrNameUserCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].user.credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsConnectorIdOrNameUserCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsConnectorIdOrNameUserCredentialsQueryKey>
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
              (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsConnectorIdOrNameUserCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsConnectorIdOrNameUserCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':connector_id_or_name'].user.credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ConnectorsConnectorIdOrNameUserCredentialsMutationKey() {
  return ['v1', '/v1/connectors/:connector_id_or_name/user/credentials', 'DELETE'] as const
}

export function getDeleteV1ConnectorsConnectorIdOrNameUserCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectorsConnectorIdOrNameUserCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].user.credentials.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ConnectorsConnectorIdOrNameUserCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
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
  const mutationDefaults = getDeleteV1ConnectorsConnectorIdOrNameUserCredentialsMutationOptions<
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

export function getPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationKey() {
  return ['v1', '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials', 'POST'] as const
}

export function getPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ConnectorsConnectorIdOrNameConsumerScopeCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
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
  const mutationDefaults =
    getPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationOptions<
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

export function getPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationKey() {
  return [
    'v1',
    '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials',
    'PATCH',
  ] as const
}

export function getPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
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
  const mutationDefaults =
    getPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationOptions<
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

export function getDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameMutationKey() {
  return [
    'v1',
    '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials/:credentials_name',
    'DELETE',
  ] as const
}

export function getDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials[
          ':credentials_name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
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
  const mutationDefaults =
    getDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameMutationOptions<
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

export function getV1ConnectorsConnectorIdOrNameIdOrNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name#idOrName', toValue(args)] as const
}

export function getV1ConnectorsConnectorIdOrNameIdOrNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsConnectorIdOrNameIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name#idOrName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsConnectorIdOrNameIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
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
                    (typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']
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
                    (typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsConnectorIdOrNameIdOrNameQueryKey>
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
            ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsConnectorIdOrNameIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsConnectorIdOrNameIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':connector_id_or_name#idOrName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ConnectorsConnectorIdIdMutationKey() {
  return ['v1', '/v1/connectors/:connector_id#id', 'DELETE'] as const
}

export function getDeleteV1ConnectorsConnectorIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectorsConnectorIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>,
    ) {
      return parseResponse(client.v1.connectors[':connector_id#id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ConnectorsConnectorIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ConnectorsConnectorIdIdMutationOptions<
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

export function getPatchV1ConnectorsConnectorIdIdMutationKey() {
  return ['v1', '/v1/connectors/:connector_id#id', 'PATCH'] as const
}

export function getPatchV1ConnectorsConnectorIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ConnectorsConnectorIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>,
    ) {
      return parseResponse(client.v1.connectors[':connector_id#id'].$patch(args, options))
    },
  })
}

export function usePatchV1ConnectorsConnectorIdId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>,
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
  const mutationDefaults = getPatchV1ConnectorsConnectorIdIdMutationOptions<
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

export function getV1AudioVoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audio.voices.$get>>,
) {
  return ['v1', '/v1/audio/voices', toValue(args)] as const
}

export function getV1AudioVoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audio.voices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioVoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.voices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioVoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audio.voices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>
            >
          >,
          ReturnType<typeof getV1AudioVoicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioVoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioVoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.voices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AudioVoicesMutationKey() {
  return ['v1', '/v1/audio/voices', 'POST'] as const
}

export function getPostV1AudioVoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.audio.voices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AudioVoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.audio.voices.$post>) {
      return parseResponse(client.v1.audio.voices.$post(args, options))
    },
  })
}

export function usePostV1AudioVoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.audio.voices.$post>,
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
  const mutationDefaults = getPostV1AudioVoicesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AudioVoicesVoiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>,
) {
  return ['v1', '/v1/audio/voices/:voice_id', toValue(args)] as const
}

export function getV1AudioVoicesVoiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioVoicesVoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.voices[':voice_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioVoicesVoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AudioVoicesVoiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioVoicesVoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioVoicesVoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.voices[':voice_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AudioVoicesVoiceIdMutationKey() {
  return ['v1', '/v1/audio/voices/:voice_id', 'DELETE'] as const
}

export function getDeleteV1AudioVoicesVoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AudioVoicesVoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>,
    ) {
      return parseResponse(client.v1.audio.voices[':voice_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AudioVoicesVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AudioVoicesVoiceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1AudioVoicesVoiceIdMutationKey() {
  return ['v1', '/v1/audio/voices/:voice_id', 'PATCH'] as const
}

export function getPatchV1AudioVoicesVoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AudioVoicesVoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>,
    ) {
      return parseResponse(client.v1.audio.voices[':voice_id'].$patch(args, options))
    },
  })
}

export function usePatchV1AudioVoicesVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>,
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
  const mutationDefaults = getPatchV1AudioVoicesVoiceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AudioVoicesVoiceIdSampleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>
  >,
) {
  return ['v1', '/v1/audio/voices/:voice_id/sample', toValue(args)] as const
}

export function getV1AudioVoicesVoiceIdSampleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioVoicesVoiceIdSampleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.voices[':voice_id'].sample.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioVoicesVoiceIdSample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AudioVoicesVoiceIdSampleQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioVoicesVoiceIdSampleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioVoicesVoiceIdSampleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.voices[':voice_id'].sample.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AudioSessionsMutationKey() {
  return ['v1', '/v1/audio/sessions', 'POST'] as const
}

export function getPostV1AudioSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.audio.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AudioSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.audio.sessions.$post>) {
      return parseResponse(client.v1.audio.sessions.$post(args, options))
    },
  })
}

export function usePostV1AudioSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.audio.sessions.$post>,
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
  const mutationDefaults = getPostV1AudioSessionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AudioSessionsSessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>
  >,
) {
  return ['v1', '/v1/audio/sessions/:session_id', toValue(args)] as const
}

export function getV1AudioSessionsSessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioSessionsSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.sessions[':session_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AudioSessionsSessionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioSessionsSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioSessionsSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.sessions[':session_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AudioSessionsSessionIdMutationKey() {
  return ['v1', '/v1/audio/sessions/:session_id', 'DELETE'] as const
}

export function getDeleteV1AudioSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AudioSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>,
    ) {
      return parseResponse(client.v1.audio.sessions[':session_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AudioSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AudioSessionsSessionIdMutationOptions<
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

export function getPatchV1AudioSessionsSessionIdMutationKey() {
  return ['v1', '/v1/audio/sessions/:session_id', 'PATCH'] as const
}

export function getPatchV1AudioSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AudioSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>,
    ) {
      return parseResponse(client.v1.audio.sessions[':session_id'].$patch(args, options))
    },
  })
}

export function usePatchV1AudioSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>,
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
  const mutationDefaults = getPatchV1AudioSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AudioAgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audio.agents.$get>>,
) {
  return ['v1', '/v1/audio/agents', toValue(args)] as const
}

export function getV1AudioAgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audio.agents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.agents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.audio.agents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>
            >
          >,
          ReturnType<typeof getV1AudioAgentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AudioAgentsMutationKey() {
  return ['v1', '/v1/audio/agents', 'POST'] as const
}

export function getPostV1AudioAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.audio.agents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AudioAgentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.audio.agents.$post>) {
      return parseResponse(client.v1.audio.agents.$post(args, options))
    },
  })
}

export function usePostV1AudioAgents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.audio.agents.$post>,
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
  const mutationDefaults = getPostV1AudioAgentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AudioAgentsAgentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>,
) {
  return ['v1', '/v1/audio/agents/:agent_id', toValue(args)] as const
}

export function getV1AudioAgentsAgentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioAgentsAgentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.agents[':agent_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AudioAgentsAgentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioAgentsAgentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioAgentsAgentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.agents[':agent_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AudioAgentsAgentIdMutationKey() {
  return ['v1', '/v1/audio/agents/:agent_id', 'PUT'] as const
}

export function getPutV1AudioAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AudioAgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$put']>) {
      return parseResponse(client.v1.audio.agents[':agent_id'].$put(args, options))
    },
  })
}

export function usePutV1AudioAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$put']>,
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
  const mutationDefaults = getPutV1AudioAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AudioAgentsAgentIdMutationKey() {
  return ['v1', '/v1/audio/agents/:agent_id', 'DELETE'] as const
}

export function getDeleteV1AudioAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AudioAgentsAgentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>,
    ) {
      return parseResponse(client.v1.audio.agents[':agent_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AudioAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AudioAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AudioAgentsAgentIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>
  >,
) {
  return ['v1', '/v1/audio/agents/:agent_id/versions', toValue(args)] as const
}

export function getV1AudioAgentsAgentIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioAgentsAgentIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.agents[':agent_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioAgentsAgentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>
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
                  ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AudioAgentsAgentIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioAgentsAgentIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioAgentsAgentIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.agents[':agent_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AudioAgentsAgentIdSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>
  >,
) {
  return ['v1', '/v1/audio/agents/:agent_id/sessions', toValue(args)] as const
}

export function getV1AudioAgentsAgentIdSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AudioAgentsAgentIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.audio.agents[':agent_id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AudioAgentsAgentIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>
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
                  ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AudioAgentsAgentIdSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioAgentsAgentIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AudioAgentsAgentIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.audio.agents[':agent_id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AudioVoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.voices.$get>>,
) {
  return ['v2', '/v2/audio/voices', toValue(args)] as const
}

export function getV2AudioVoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.voices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioVoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.voices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioVoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.voices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>
            >
          >,
          ReturnType<typeof getV2AudioVoicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioVoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioVoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.voices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>
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
                  ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['history']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/history', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['history']['$get']>
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
                    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdHistoryQueryKey>
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
            ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkflowsExecutionsExecutionIdSignalsMutationKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/signals', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsExecutionIdSignalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsExecutionIdSignalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].signals.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsExecutionsExecutionIdSignals<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']
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
  const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdSignalsMutationOptions<
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

export function getPostV1WorkflowsExecutionsExecutionIdQueriesMutationKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/queries', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsExecutionIdQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsExecutionIdQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].queries.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsExecutionsExecutionIdQueries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']
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
  const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdQueriesMutationOptions<
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

export function getPostV1WorkflowsExecutionsExecutionIdTerminateMutationKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/terminate', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsExecutionIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsExecutionIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].terminate.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsExecutionsExecutionIdTerminate<
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
                      (typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']
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
  const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdTerminateMutationOptions<
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

export function getPostV1WorkflowsExecutionsTerminateMutationKey() {
  return ['v1', '/v1/workflows/executions/terminate', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workflows.executions.terminate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workflows.executions.terminate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workflows.executions.terminate.$post>,
    ) {
      return parseResponse(client.v1.workflows.executions.terminate.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsExecutionsTerminate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.executions.terminate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.workflows.executions.terminate.$post>,
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
  const mutationDefaults = getPostV1WorkflowsExecutionsTerminateMutationOptions<
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

export function getPostV1WorkflowsExecutionsExecutionIdCancelMutationKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/cancel', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsExecutionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsExecutionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsExecutionsExecutionIdCancel<
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
                      (typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']
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
  const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdCancelMutationOptions<
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

export function getPostV1WorkflowsExecutionsCancelMutationKey() {
  return ['v1', '/v1/workflows/executions/cancel', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workflows.executions.cancel.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workflows.executions.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workflows.executions.cancel.$post>) {
      return parseResponse(client.v1.workflows.executions.cancel.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsExecutionsCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.executions.cancel.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.workflows.executions.cancel.$post>,
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
  const mutationDefaults = getPostV1WorkflowsExecutionsCancelMutationOptions<
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

export function getPostV1WorkflowsExecutionsExecutionIdResetMutationKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/reset', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsExecutionIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsExecutionIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].reset.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsExecutionsExecutionIdReset<
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
                      (typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']
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
  const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdResetMutationOptions<
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

export function getPostV1WorkflowsExecutionsExecutionIdUpdatesMutationKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/updates', 'POST'] as const
}

export function getPostV1WorkflowsExecutionsExecutionIdUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsExecutionsExecutionIdUpdatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].updates.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsExecutionsExecutionIdUpdates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']
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
  const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdUpdatesMutationOptions<
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

export function getV1WorkflowsExecutionsExecutionIdTraceInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
    >
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/info', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdTraceInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceInfoQueryKey>
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
              (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdTraceOtelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
    >
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/otel', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceOtelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceOtelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.otel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdTraceOtel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceOtelQueryKey>
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
              (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceOtelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceOtelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.otel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
    >
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/summary', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdTraceSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryKey>
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
              (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdTraceEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
    >
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/events', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdTraceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceEventsQueryKey>
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
              (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdTraceEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdTraceEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/stream', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
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
                    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdStreamQueryKey>
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
            ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/logs', toValue(args)] as const
}

export function getV1WorkflowsExecutionsExecutionIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
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
                    (typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdLogsQueryKey>
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
            ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsExecutionsExecutionIdLogsStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/workflows/executions/:execution_id/logs/stream', keyArgs] as const
}

export function getV1WorkflowsExecutionsExecutionIdLogsStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdLogsStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].logs.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsExecutionsExecutionIdLogsStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
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
                    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsExecutionsExecutionIdLogsStreamQueryKey>
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
              (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsExecutionsExecutionIdLogsStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsExecutionsExecutionIdLogsStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.executions[':execution_id'].logs.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsWorkflowNameMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/:workflow_name/metrics', toValue(args)] as const
}

export function getV1WorkflowsWorkflowNameMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsWorkflowNameMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows[':workflow_name'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsWorkflowNameMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>
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
                  ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsWorkflowNameMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsWorkflowNameMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsWorkflowNameMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows[':workflow_name'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.runs.$get>>,
) {
  return ['v1', '/v1/workflows/runs', toValue(args)] as const
}

export function getV1WorkflowsRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.runs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.runs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>
            >
          >,
          ReturnType<typeof getV1WorkflowsRunsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsRunsRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>,
) {
  return ['v1', '/v1/workflows/runs/:run_id', toValue(args)] as const
}

export function getV1WorkflowsRunsRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsRunsRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.runs[':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsRunsRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsRunsRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsRunsRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.runs[':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsRunsRunIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/runs/:run_id/history', toValue(args)] as const
}

export function getV1WorkflowsRunsRunIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsRunsRunIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.runs[':run_id'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsRunsRunIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsRunsRunIdHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsRunsRunIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsRunsRunIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.runs[':run_id'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.schedules.$get>>,
) {
  return ['v1', '/v1/workflows/schedules', toValue(args)] as const
}

export function getV1WorkflowsSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
            >
          >,
          ReturnType<typeof getV1WorkflowsSchedulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkflowsSchedulesMutationKey() {
  return ['v1', '/v1/workflows/schedules', 'POST'] as const
}

export function getPostV1WorkflowsSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workflows.schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsSchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workflows.schedules.$post>) {
      return parseResponse(client.v1.workflows.schedules.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.workflows.schedules.$post>,
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
  const mutationDefaults = getPostV1WorkflowsSchedulesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkflowsSchedulesScheduleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/schedules/:schedule_id', toValue(args)] as const
}

export function getV1WorkflowsSchedulesScheduleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsSchedulesScheduleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.schedules[':schedule_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsSchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsSchedulesScheduleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsSchedulesScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsSchedulesScheduleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.schedules[':schedule_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1WorkflowsSchedulesScheduleIdMutationKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id', 'DELETE'] as const
}

export function getDeleteV1WorkflowsSchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WorkflowsSchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>,
    ) {
      return parseResponse(client.v1.workflows.schedules[':schedule_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1WorkflowsSchedulesScheduleId<
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
                    ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1WorkflowsSchedulesScheduleIdMutationOptions<
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

export function getPatchV1WorkflowsSchedulesScheduleIdMutationKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id', 'PATCH'] as const
}

export function getPatchV1WorkflowsSchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1WorkflowsSchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>,
    ) {
      return parseResponse(client.v1.workflows.schedules[':schedule_id'].$patch(args, options))
    },
  })
}

export function usePatchV1WorkflowsSchedulesScheduleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>,
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
  const mutationDefaults = getPatchV1WorkflowsSchedulesScheduleIdMutationOptions<
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

export function getPostV1WorkflowsSchedulesScheduleIdPauseMutationKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id/pause', 'POST'] as const
}

export function getPostV1WorkflowsSchedulesScheduleIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsSchedulesScheduleIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']
      >,
    ) {
      return parseResponse(client.v1.workflows.schedules[':schedule_id'].pause.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsSchedulesScheduleIdPause<
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
                      (typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']
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
  const mutationDefaults = getPostV1WorkflowsSchedulesScheduleIdPauseMutationOptions<
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

export function getPostV1WorkflowsSchedulesScheduleIdResumeMutationKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id/resume', 'POST'] as const
}

export function getPostV1WorkflowsSchedulesScheduleIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsSchedulesScheduleIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.schedules[':schedule_id'].resume.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsSchedulesScheduleIdResume<
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
                      (typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']
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
  const mutationDefaults = getPostV1WorkflowsSchedulesScheduleIdResumeMutationOptions<
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

export function getPostV1WorkflowsSchedulesScheduleIdTriggerMutationKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id/trigger', 'POST'] as const
}

export function getPostV1WorkflowsSchedulesScheduleIdTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsSchedulesScheduleIdTriggerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.schedules[':schedule_id'].trigger.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsSchedulesScheduleIdTrigger<
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
                      (typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']
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
  const mutationDefaults = getPostV1WorkflowsSchedulesScheduleIdTriggerMutationOptions<
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

export function getV1WorkflowsEventsStreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.events.stream.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/workflows/events/stream', keyArgs] as const
}

export function getV1WorkflowsEventsStreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.events.stream.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsEventsStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.events.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsEventsStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.events.stream.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsEventsStreamQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsEventsStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsEventsStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.events.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsEventsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.events.list.$get>>,
) {
  return ['v1', '/v1/workflows/events/list', toValue(args)] as const
}

export function getV1WorkflowsEventsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.events.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsEventsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.events.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsEventsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.events.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
            >
          >,
          ReturnType<typeof getV1WorkflowsEventsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsEventsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsEventsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.events.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkflowsDeploymentsDeploymentIdUnhardenMutationKey() {
  return ['v1', '/v1/workflows/deployments/:deployment_id/unharden', 'POST'] as const
}

export function getPostV1WorkflowsDeploymentsDeploymentIdUnhardenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsDeploymentsDeploymentIdUnhardenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.deployments[':deployment_id'].unharden.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsDeploymentsDeploymentIdUnharden<
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
                      (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
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
  const mutationDefaults = getPostV1WorkflowsDeploymentsDeploymentIdUnhardenMutationOptions<
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

export function getV1WorkflowsDeploymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.deployments.$get>>,
) {
  return ['v1', '/v1/workflows/deployments', toValue(args)] as const
}

export function getV1WorkflowsDeploymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.deployments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.deployments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
            >
          >,
          ReturnType<typeof getV1WorkflowsDeploymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkflowsDeploymentsMutationKey() {
  return ['v1', '/v1/workflows/deployments', 'POST'] as const
}

export function getPostV1WorkflowsDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workflows.deployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsDeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workflows.deployments.$post>) {
      return parseResponse(client.v1.workflows.deployments.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.deployments.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.workflows.deployments.$post>,
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
  const mutationDefaults = getPostV1WorkflowsDeploymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WorkflowsDeploymentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/deployments/:name', toValue(args)] as const
}

export function getV1WorkflowsDeploymentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsDeploymentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsDeploymentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsDeploymentsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsDeploymentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsDeploymentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.deployments[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1WorkflowsDeploymentsNameMutationKey() {
  return ['v1', '/v1/workflows/deployments/:name', 'DELETE'] as const
}

export function getDeleteV1WorkflowsDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WorkflowsDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$delete']>,
    ) {
      return parseResponse(client.v1.workflows.deployments[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1WorkflowsDeploymentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1WorkflowsDeploymentsNameMutationOptions<
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

export function getPatchV1WorkflowsDeploymentsNameMutationKey() {
  return ['v1', '/v1/workflows/deployments/:name', 'PATCH'] as const
}

export function getPatchV1WorkflowsDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1WorkflowsDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$patch']>,
    ) {
      return parseResponse(client.v1.workflows.deployments[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1WorkflowsDeploymentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1WorkflowsDeploymentsNameMutationOptions<
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

export function getPostV1WorkflowsDeploymentsNameStopMutationKey() {
  return ['v1', '/v1/workflows/deployments/:name/stop', 'POST'] as const
}

export function getPostV1WorkflowsDeploymentsNameStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsDeploymentsNameStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>,
    ) {
      return parseResponse(client.v1.workflows.deployments[':name'].stop.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsDeploymentsNameStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>,
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
  const mutationDefaults = getPostV1WorkflowsDeploymentsNameStopMutationOptions<
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

export function getPostV1WorkflowsDeploymentsNameStartMutationKey() {
  return ['v1', '/v1/workflows/deployments/:name/start', 'POST'] as const
}

export function getPostV1WorkflowsDeploymentsNameStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsDeploymentsNameStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>,
    ) {
      return parseResponse(client.v1.workflows.deployments[':name'].start.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsDeploymentsNameStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>,
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
  const mutationDefaults = getPostV1WorkflowsDeploymentsNameStartMutationOptions<
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

export function getPostV1WorkflowsDeploymentsNameRestartMutationKey() {
  return ['v1', '/v1/workflows/deployments/:name/restart', 'POST'] as const
}

export function getPostV1WorkflowsDeploymentsNameRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsDeploymentsNameRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>,
    ) {
      return parseResponse(client.v1.workflows.deployments[':name'].restart.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsDeploymentsNameRestart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>,
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
  const mutationDefaults = getPostV1WorkflowsDeploymentsNameRestartMutationOptions<
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

export function getV1WorkflowsDeploymentsNameWorkersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/deployments/:name/workers', toValue(args)] as const
}

export function getV1WorkflowsDeploymentsNameWorkersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsDeploymentsNameWorkersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].workers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsDeploymentsNameWorkers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
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
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsDeploymentsNameWorkersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsDeploymentsNameWorkersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsDeploymentsNameWorkersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.deployments[':name'].workers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsDeploymentsNameArchiveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/deployments/:name/archive', toValue(args)] as const
}

export function getV1WorkflowsDeploymentsNameArchiveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsDeploymentsNameArchiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].archive.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsDeploymentsNameArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
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
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsDeploymentsNameArchiveQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsDeploymentsNameArchiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsDeploymentsNameArchiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.deployments[':name'].archive.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkflowsDeploymentsArchivesMutationKey() {
  return ['v1', '/v1/workflows/deployments/archives', 'POST'] as const
}

export function getPostV1WorkflowsDeploymentsArchivesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workflows.deployments.archives.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workflows.deployments.archives.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsDeploymentsArchivesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.workflows.deployments.archives.$post>,
    ) {
      return parseResponse(client.v1.workflows.deployments.archives.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsDeploymentsArchives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.deployments.archives.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.workflows.deployments.archives.$post>,
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
  const mutationDefaults = getPostV1WorkflowsDeploymentsArchivesMutationOptions<
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

export function getV1WorkflowsDeploymentsNameLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/deployments/:name/logs', toValue(args)] as const
}

export function getV1WorkflowsDeploymentsNameLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsDeploymentsNameLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsDeploymentsNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>
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
                  ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsDeploymentsNameLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsDeploymentsNameLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsDeploymentsNameLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.deployments[':name'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsDeploymentsNameLogsStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/workflows/deployments/:name/logs/stream', keyArgs] as const
}

export function getV1WorkflowsDeploymentsNameLogsStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsDeploymentsNameLogsStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].logs.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsDeploymentsNameLogsStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']>
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
                    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
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
                    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsDeploymentsNameLogsStreamQueryKey>
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
            ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsDeploymentsNameLogsStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsDeploymentsNameLogsStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.deployments[':name'].logs.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.$get>>,
) {
  return ['v1', '/v1/workflows', toValue(args)] as const
}

export function getV1WorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Workflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
          >,
          ReturnType<typeof getV1WorkflowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WorkflowsRegistrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.registrations.$get>>,
) {
  return ['v1', '/v1/workflows/registrations', toValue(args)] as const
}

export function getV1WorkflowsRegistrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.registrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsRegistrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.registrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.workflows.registrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsRegistrationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsRegistrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsRegistrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.registrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WorkflowsWorkflowIdentifierExecuteMutationKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/execute', 'POST'] as const
}

export function getPostV1WorkflowsWorkflowIdentifierExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsWorkflowIdentifierExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']
      >,
    ) {
      return parseResponse(client.v1.workflows[':workflow_identifier'].execute.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsWorkflowIdentifierExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']
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
  const mutationDefaults = getPostV1WorkflowsWorkflowIdentifierExecuteMutationOptions<
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

export function getPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteMutationKey() {
  return ['v1', '/v1/workflows/registrations/:workflow_registration_id/execute', 'POST'] as const
}

export function getPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.workflows.registrations[':workflow_registration_id'].execute.$post(args, options),
      )
    },
  })
}

export function usePostV1WorkflowsRegistrationsWorkflowRegistrationIdExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
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
  const mutationDefaults =
    getPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteMutationOptions<
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

export function getV1WorkflowsWorkflowIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>
  >,
) {
  return ['v1', '/v1/workflows/:workflow_identifier', toValue(args)] as const
}

export function getV1WorkflowsWorkflowIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsWorkflowIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows[':workflow_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsWorkflowIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsWorkflowIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsWorkflowIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsWorkflowIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows[':workflow_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkflowsWorkflowIdentifierMutationKey() {
  return ['v1', '/v1/workflows/:workflow_identifier', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_identifier'].$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>,
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
  const mutationDefaults = getPutV1WorkflowsWorkflowIdentifierMutationOptions<
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

export function getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/workflows/registrations/:workflow_registration_id', toValue(args)] as const
}

export function getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.workflows.registrations[':workflow_registration_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkflowsRegistrationsWorkflowRegistrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
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
                    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
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
                    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryKey>
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
              (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.workflows.registrations[':workflow_registration_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1WorkflowsArchiveMutationKey() {
  return ['v1', '/v1/workflows/archive', 'PUT'] as const
}

export function getPutV1WorkflowsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.archive.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.workflows.archive.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workflows.archive.$put>) {
      return parseResponse(client.v1.workflows.archive.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.archive.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.workflows.archive.$put>,
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
  const mutationDefaults = getPutV1WorkflowsArchiveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1WorkflowsUnarchiveMutationKey() {
  return ['v1', '/v1/workflows/unarchive', 'PUT'] as const
}

export function getPutV1WorkflowsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.unarchive.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.workflows.unarchive.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsUnarchiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.workflows.unarchive.$put>) {
      return parseResponse(client.v1.workflows.unarchive.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.unarchive.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.workflows.unarchive.$put>,
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
  const mutationDefaults = getPutV1WorkflowsUnarchiveMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1WorkflowsWorkflowIdentifierTagsMutationKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/tags', 'POST'] as const
}

export function getPostV1WorkflowsWorkflowIdentifierTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WorkflowsWorkflowIdentifierTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>,
    ) {
      return parseResponse(client.v1.workflows[':workflow_identifier'].tags.$post(args, options))
    },
  })
}

export function usePostV1WorkflowsWorkflowIdentifierTags<
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
                      (typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>,
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
  const mutationDefaults = getPostV1WorkflowsWorkflowIdentifierTagsMutationOptions<
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

export function getPutV1WorkflowsWorkflowIdentifierArchiveMutationKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/archive', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowIdentifierArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowIdentifierArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']
      >,
    ) {
      return parseResponse(client.v1.workflows[':workflow_identifier'].archive.$put(args, options))
    },
  })
}

export function usePutV1WorkflowsWorkflowIdentifierArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']>,
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
  const mutationDefaults = getPutV1WorkflowsWorkflowIdentifierArchiveMutationOptions<
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

export function getPutV1WorkflowsWorkflowIdentifierUnarchiveMutationKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/unarchive', 'PUT'] as const
}

export function getPutV1WorkflowsWorkflowIdentifierUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WorkflowsWorkflowIdentifierUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.workflows[':workflow_identifier'].unarchive.$put(args, options),
      )
    },
  })
}

export function usePutV1WorkflowsWorkflowIdentifierUnarchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']
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
  const mutationDefaults = getPutV1WorkflowsWorkflowIdentifierUnarchiveMutationOptions<
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

export function getV1RagIngestionPipelineConfigurationsQueryKey() {
  return ['v1', '/v1/rag/ingestion_pipeline_configurations'] as const
}

export function getV1RagIngestionPipelineConfigurationsQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getV1RagIngestionPipelineConfigurationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.rag.ingestion_pipeline_configurations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RagIngestionPipelineConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1RagIngestionPipelineConfigurationsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RagIngestionPipelineConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1RagIngestionPipelineConfigurationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.rag.ingestion_pipeline_configurations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1RagIngestionPipelineConfigurationsMutationKey() {
  return ['v1', '/v1/rag/ingestion_pipeline_configurations', 'PUT'] as const
}

export function getPutV1RagIngestionPipelineConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1RagIngestionPipelineConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>,
    ) {
      return parseResponse(client.v1.rag.ingestion_pipeline_configurations.$put(args, options))
    },
  })
}

export function usePutV1RagIngestionPipelineConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>,
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
  const mutationDefaults = getPutV1RagIngestionPipelineConfigurationsMutationOptions<
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

export function getPutV1RagIngestionPipelineConfigurationsIdRunInfoMutationKey() {
  return ['v1', '/v1/rag/ingestion_pipeline_configurations/:id/run_info', 'PUT'] as const
}

export function getPutV1RagIngestionPipelineConfigurationsIdRunInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1RagIngestionPipelineConfigurationsIdRunInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.rag.ingestion_pipeline_configurations[':id'].run_info.$put(args, options),
      )
    },
  })
}

export function usePutV1RagIngestionPipelineConfigurationsIdRunInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
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
  const mutationDefaults = getPutV1RagIngestionPipelineConfigurationsIdRunInfoMutationOptions<
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

export function getV1ContextSearchIndexesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>>,
) {
  return ['v1', '/v1/context/search-indexes', toValue(args)] as const
}

export function getV1ContextSearchIndexesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContextSearchIndexesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.context['search-indexes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContextSearchIndexes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ContextSearchIndexesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContextSearchIndexesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ContextSearchIndexesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.context['search-indexes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ContextSearchIndexesMutationKey() {
  return ['v1', '/v1/context/search-indexes', 'POST'] as const
}

export function getPostV1ContextSearchIndexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.context)['search-indexes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContextSearchIndexesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.context)['search-indexes']['$post']>,
    ) {
      return parseResponse(client.v1.context['search-indexes'].$post(args, options))
    },
  })
}

export function usePostV1ContextSearchIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.context)['search-indexes']['$post']>,
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
  const mutationDefaults = getPostV1ContextSearchIndexesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ContextSearchIndexesIndexNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>
  >,
) {
  return ['v1', '/v1/context/search-indexes/:index_name', toValue(args)] as const
}

export function getV1ContextSearchIndexesIndexNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContextSearchIndexesIndexNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContextSearchIndexesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>
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
                  ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ContextSearchIndexesIndexNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContextSearchIndexesIndexNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ContextSearchIndexesIndexNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.context['search-indexes'][':index_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ContextSearchIndexesIndexNameMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name', 'PUT'] as const
}

export function getPutV1ContextSearchIndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ContextSearchIndexesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>,
    ) {
      return parseResponse(client.v1.context['search-indexes'][':index_name'].$put(args, options))
    },
  })
}

export function usePutV1ContextSearchIndexesIndexName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>,
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
  const mutationDefaults = getPutV1ContextSearchIndexesIndexNameMutationOptions<
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

export function getDeleteV1ContextSearchIndexesIndexNameMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name', 'DELETE'] as const
}

export function getDeleteV1ContextSearchIndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ContextSearchIndexesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ContextSearchIndexesIndexName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>,
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
  const mutationDefaults = getDeleteV1ContextSearchIndexesIndexNameMutationOptions<
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

export function getPostV1ContextSearchIndexesIndexNameDocumentsMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/documents', 'POST'] as const
}

export function getPostV1ContextSearchIndexesIndexNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContextSearchIndexesIndexNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].documents.$post(args, options),
      )
    },
  })
}

export function usePostV1ContextSearchIndexesIndexNameDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
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
  const mutationDefaults = getPostV1ContextSearchIndexesIndexNameDocumentsMutationOptions<
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

export function getDeleteV1ContextSearchIndexesIndexNameDocumentsMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/documents', 'DELETE'] as const
}

export function getDeleteV1ContextSearchIndexesIndexNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ContextSearchIndexesIndexNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].documents.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ContextSearchIndexesIndexNameDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
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
  const mutationDefaults = getDeleteV1ContextSearchIndexesIndexNameDocumentsMutationOptions<
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

export function getPostV1ContextSearchIndexesIndexNameSearchMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/search', 'POST'] as const
}

export function getPostV1ContextSearchIndexesIndexNameSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContextSearchIndexesIndexNameSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].search.$post(args, options),
      )
    },
  })
}

export function usePostV1ContextSearchIndexesIndexNameSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']
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
  const mutationDefaults = getPostV1ContextSearchIndexesIndexNameSearchMutationOptions<
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

export function getPostV1ContextSearchIndexesIndexNameNavigateMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/navigate', 'POST'] as const
}

export function getPostV1ContextSearchIndexesIndexNameNavigateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContextSearchIndexesIndexNameNavigateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].navigate.$post(args, options),
      )
    },
  })
}

export function usePostV1ContextSearchIndexesIndexNameNavigate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
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
  const mutationDefaults = getPostV1ContextSearchIndexesIndexNameNavigateMutationOptions<
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

export function getPostV1ContextSearchIndexesIndexNameReadMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/read', 'POST'] as const
}

export function getPostV1ContextSearchIndexesIndexNameReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContextSearchIndexesIndexNameReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].read.$post(args, options),
      )
    },
  })
}

export function usePostV1ContextSearchIndexesIndexNameRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']
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
  const mutationDefaults = getPostV1ContextSearchIndexesIndexNameReadMutationOptions<
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

export function getPostV1ContextSearchIndexesIndexNameGrepMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/grep', 'POST'] as const
}

export function getPostV1ContextSearchIndexesIndexNameGrepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContextSearchIndexesIndexNameGrepMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].grep.$post(args, options),
      )
    },
  })
}

export function usePostV1ContextSearchIndexesIndexNameGrep<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']
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
  const mutationDefaults = getPostV1ContextSearchIndexesIndexNameGrepMutationOptions<
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

export function getV1ContextSearchIndexesIndexNameChunksChunkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/context/search-indexes/:index_name/chunks/:chunk_id', toValue(args)] as const
}

export function getV1ContextSearchIndexesIndexNameChunksChunkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContextSearchIndexesIndexNameChunksChunkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].chunks[':chunk_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ContextSearchIndexesIndexNameChunksChunkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
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
                    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
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
                    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ContextSearchIndexesIndexNameChunksChunkIdQueryKey>
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
              (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContextSearchIndexesIndexNameChunksChunkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ContextSearchIndexesIndexNameChunksChunkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.context['search-indexes'][':index_name'].chunks[':chunk_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/context/search-indexes/:index_name/summary_field/:language',
    toValue(args),
  ] as const
}

export function getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
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
                    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
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
                    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryKey>
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
              (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/summary_field/:language', 'PUT'] as const
}

export function getPutV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
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
  const mutationDefaults = getPutV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationOptions<
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

export function getPostV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/summary_field/:language', 'POST'] as const
}

export function getPostV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
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
  const mutationDefaults =
    getPostV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationOptions<
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

export function getV1TriggersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.triggers.$get>>,
) {
  return ['v1', '/v1/triggers', toValue(args)] as const
}

export function getV1TriggersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.triggers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.triggers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Triggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.triggers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
          >,
          ReturnType<typeof getV1TriggersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.triggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TriggersMutationKey() {
  return ['v1', '/v1/triggers', 'POST'] as const
}

export function getPostV1TriggersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.triggers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TriggersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.triggers.$post>) {
      return parseResponse(client.v1.triggers.$post(args, options))
    },
  })
}

export function usePostV1Triggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.triggers.$post>,
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
  const mutationDefaults = getPostV1TriggersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TriggersTriggerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>>,
) {
  return ['v1', '/v1/triggers/:trigger_id', toValue(args)] as const
}

export function getV1TriggersTriggerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TriggersTriggerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.triggers[':trigger_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TriggersTriggerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TriggersTriggerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TriggersTriggerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TriggersTriggerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.triggers[':trigger_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1TriggersTriggerIdMutationKey() {
  return ['v1', '/v1/triggers/:trigger_id', 'DELETE'] as const
}

export function getDeleteV1TriggersTriggerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TriggersTriggerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$delete']>,
    ) {
      return parseResponse(client.v1.triggers[':trigger_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1TriggersTriggerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1TriggersTriggerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TriggersTriggerIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>
  >,
) {
  return ['v1', '/v1/triggers/:trigger_id/events', toValue(args)] as const
}

export function getV1TriggersTriggerIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TriggersTriggerIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.triggers[':trigger_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TriggersTriggerIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TriggersTriggerIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TriggersTriggerIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TriggersTriggerIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.triggers[':trigger_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WebhooksQueryKey() {
  return ['v1', '/v1/webhooks'] as const
}

export function getV1WebhooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1WebhooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          ReturnType<typeof getV1WebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1WebhooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WebhooksMutationKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function getPostV1WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webhooks.$post>) {
      return parseResponse(client.v1.webhooks.$post(args, options))
    },
  })
}

export function usePostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.webhooks.$post>,
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
  const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>,
) {
  return ['v1', '/v1/webhooks/:webhook_id', toValue(args)] as const
}

export function getV1WebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WebhooksWebhookIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1WebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteV1WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.v1.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WebhooksWebhookIdSigningSecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
  >,
) {
  return ['v1', '/v1/webhooks/:webhook_id/signing-secret', toValue(args)] as const
}

export function getV1WebhooksWebhookIdSigningSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksWebhookIdSigningSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks[':webhook_id']['signing-secret'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WebhooksWebhookIdSigningSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
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
                  ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1WebhooksWebhookIdSigningSecretQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksWebhookIdSigningSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksWebhookIdSigningSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks[':webhook_id']['signing-secret'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersMeQueryKey() {
  return ['v1', '/v1/users/me'] as const
}

export function getV1UsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1UsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
          >,
          ReturnType<typeof getV1UsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1UsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersMeOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.me.organizations.$get>>,
) {
  return ['v1', '/v1/users/me/organizations', toValue(args)] as const
}

export function getV1UsersMeOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.me.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersMeOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.me.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersMeOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.me.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1UsersMeOrganizationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersMeOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.me.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersMeWorkspacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.me.workspaces.$get>>,
) {
  return ['v1', '/v1/users/me/workspaces', toValue(args)] as const
}

export function getV1UsersMeWorkspacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.me.workspaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersMeWorkspacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.me.workspaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersMeWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.me.workspaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
            >
          >,
          ReturnType<typeof getV1UsersMeWorkspacesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersMeWorkspacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.me.workspaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1WhoamiQueryKey() {
  return ['v1', '/v1/whoami'] as const
}

export function getV1WhoamiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1WhoamiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.whoami.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Whoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
          >,
          ReturnType<typeof getV1WhoamiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WhoamiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1WhoamiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.whoami.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BillingBudgetQueryKey() {
  return ['v1', '/v1/billing/budget'] as const
}

export function getV1BillingBudgetQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1BillingBudgetQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.billing.budget.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BillingBudget<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>
            >
          >,
          ReturnType<typeof getV1BillingBudgetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingBudgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1BillingBudgetQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.billing.budget.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BillingSubscriptionQueryKey() {
  return ['v1', '/v1/billing/subscription'] as const
}

export function getV1BillingSubscriptionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1BillingSubscriptionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.billing.subscription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BillingSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
            >
          >,
          ReturnType<typeof getV1BillingSubscriptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1BillingSubscriptionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.billing.subscription.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminUsageQueryMutationKey() {
  return ['v1', '/v1/admin/usage/query', 'POST'] as const
}

export function getPostV1AdminUsageQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.admin.usage.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUsageQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.admin.usage.query.$post>) {
      return parseResponse(client.v1.admin.usage.query.$post(args, options))
    },
  })
}

export function usePostV1AdminUsageQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.query.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.admin.usage.query.$post>,
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
  const mutationDefaults = getPostV1AdminUsageQueryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AdminUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.users.$get>>,
) {
  return ['v1', '/v1/admin/users', toValue(args)] as const
}

export function getV1AdminUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
          >,
          ReturnType<typeof getV1AdminUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminUsersMutationKey() {
  return ['v1', '/v1/admin/users', 'POST'] as const
}

export function getPostV1AdminUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.admin.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.admin.users.$post>) {
      return parseResponse(client.v1.admin.users.$post(args, options))
    },
  })
}

export function usePostV1AdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.admin.users.$post>,
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
  const mutationDefaults = getPostV1AdminUsersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AdminUsersInviteQueryKey() {
  return ['v1', '/v1/admin/users-invite'] as const
}

export function getV1AdminUsersInviteQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AdminUsersInviteQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['users-invite'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUsersInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminUsersInviteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsersInviteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AdminUsersInviteQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['users-invite'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminUsersInviteMutationKey() {
  return ['v1', '/v1/admin/users-invite', 'POST'] as const
}

export function getPostV1AdminUsersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['users-invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUsersInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)['users-invite']['$post']>) {
      return parseResponse(client.v1.admin['users-invite'].$post(args, options))
    },
  })
}

export function usePostV1AdminUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)['users-invite']['$post']>,
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
  const mutationDefaults = getPostV1AdminUsersInviteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AdminUsersInviteInviteUuidMutationKey() {
  return ['v1', '/v1/admin/users-invite/:invite_uuid', 'DELETE'] as const
}

export function getDeleteV1AdminUsersInviteInviteUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminUsersInviteInviteUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>,
    ) {
      return parseResponse(client.v1.admin['users-invite'][':invite_uuid'].$delete(args, options))
    },
  })
}

export function useDeleteV1AdminUsersInviteInviteUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>,
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
  const mutationDefaults = getDeleteV1AdminUsersInviteInviteUuidMutationOptions<
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

export function getV1AdminUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>>,
) {
  return ['v1', '/v1/admin/users/:user_id', toValue(args)] as const
}

export function getV1AdminUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AdminUsersUserIdMutationKey() {
  return ['v1', '/v1/admin/users/:user_id', 'DELETE'] as const
}

export function getDeleteV1AdminUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$delete']>,
    ) {
      return parseResponse(client.v1.admin.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin.users)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1AdminUsersUserIdMutationKey() {
  return ['v1', '/v1/admin/users/:user_id', 'PATCH'] as const
}

export function getPatchV1AdminUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AdminUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$patch']>) {
      return parseResponse(client.v1.admin.users[':user_id'].$patch(args, options))
    },
  })
}

export function usePatchV1AdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin.users)[':user_id']['$patch']>,
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
  const mutationDefaults = getPatchV1AdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AdminUsersUserIdDeactivateMutationKey() {
  return ['v1', '/v1/admin/users/:user_id/deactivate', 'POST'] as const
}

export function getPostV1AdminUsersUserIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUsersUserIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>,
    ) {
      return parseResponse(client.v1.admin.users[':user_id'].deactivate.$post(args, options))
    },
  })
}

export function usePostV1AdminUsersUserIdDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>,
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
  const mutationDefaults = getPostV1AdminUsersUserIdDeactivateMutationOptions<
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

export function getPostV1AdminUsersUserIdReactivateMutationKey() {
  return ['v1', '/v1/admin/users/:user_id/reactivate', 'POST'] as const
}

export function getPostV1AdminUsersUserIdReactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUsersUserIdReactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>,
    ) {
      return parseResponse(client.v1.admin.users[':user_id'].reactivate.$post(args, options))
    },
  })
}

export function usePostV1AdminUsersUserIdReactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>,
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
  const mutationDefaults = getPostV1AdminUsersUserIdReactivateMutationOptions<
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

export function getV1AdminUsersUserIdWorkspacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>
  >,
) {
  return ['v1', '/v1/admin/users/:user_id/workspaces', toValue(args)] as const
}

export function getV1AdminUsersUserIdWorkspacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUsersUserIdWorkspacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.users[':user_id'].workspaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUsersUserIdWorkspaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>
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
                  ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminUsersUserIdWorkspacesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsersUserIdWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUsersUserIdWorkspacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.users[':user_id'].workspaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminRolesQueryKey() {
  return ['v1', '/v1/admin/roles'] as const
}

export function getV1AdminRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AdminRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1AdminRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
          >,
          ReturnType<typeof getV1AdminRolesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AdminRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminWorkspacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.workspaces.$get>>,
) {
  return ['v1', '/v1/admin/workspaces', toValue(args)] as const
}

export function getV1AdminWorkspacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.workspaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminWorkspacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.workspaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.workspaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>
            >
          >,
          ReturnType<typeof getV1AdminWorkspacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminWorkspacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.workspaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminWorkspacesMutationKey() {
  return ['v1', '/v1/admin/workspaces', 'POST'] as const
}

export function getPostV1AdminWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.admin.workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminWorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.admin.workspaces.$post>) {
      return parseResponse(client.v1.admin.workspaces.$post(args, options))
    },
  })
}

export function usePostV1AdminWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.admin.workspaces.$post>,
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
  const mutationDefaults = getPostV1AdminWorkspacesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AdminWorkspacesWorkspaceUuidMutationKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid', 'DELETE'] as const
}

export function getDeleteV1AdminWorkspacesWorkspaceUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminWorkspacesWorkspaceUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>,
    ) {
      return parseResponse(client.v1.admin.workspaces[':workspace_uuid'].$delete(args, options))
    },
  })
}

export function useDeleteV1AdminWorkspacesWorkspaceUuid<
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
                    ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>,
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
  const mutationDefaults = getDeleteV1AdminWorkspacesWorkspaceUuidMutationOptions<
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

export function getPatchV1AdminWorkspacesWorkspaceUuidMutationKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid', 'PATCH'] as const
}

export function getPatchV1AdminWorkspacesWorkspaceUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AdminWorkspacesWorkspaceUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>,
    ) {
      return parseResponse(client.v1.admin.workspaces[':workspace_uuid'].$patch(args, options))
    },
  })
}

export function usePatchV1AdminWorkspacesWorkspaceUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>,
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
  const mutationDefaults = getPatchV1AdminWorkspacesWorkspaceUuidMutationOptions<
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

export function getV1AdminWorkspacesWorkspaceUuidUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
  >,
) {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/users', toValue(args)] as const
}

export function getV1AdminWorkspacesWorkspaceUuidUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminWorkspacesWorkspaceUuidUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.workspaces[':workspace_uuid'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminWorkspacesWorkspaceUuidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
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
                    (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']
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
                    (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminWorkspacesWorkspaceUuidUsersQueryKey>
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
            ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminWorkspacesWorkspaceUuidUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminWorkspacesWorkspaceUuidUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.workspaces[':workspace_uuid'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1AdminWorkspacesWorkspaceUuidUsersMutationKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/users', 'PATCH'] as const
}

export function getPatchV1AdminWorkspacesWorkspaceUuidUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AdminWorkspacesWorkspaceUuidUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.admin.workspaces[':workspace_uuid'].users.$patch(args, options),
      )
    },
  })
}

export function usePatchV1AdminWorkspacesWorkspaceUuidUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']
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
  const mutationDefaults = getPatchV1AdminWorkspacesWorkspaceUuidUsersMutationOptions<
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

export function getPostV1AdminWorkspacesWorkspaceUuidAddUsersMutationKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/add-users', 'POST'] as const
}

export function getPostV1AdminWorkspacesWorkspaceUuidAddUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminWorkspacesWorkspaceUuidAddUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.admin.workspaces[':workspace_uuid']['add-users'].$post(args, options),
      )
    },
  })
}

export function usePostV1AdminWorkspacesWorkspaceUuidAddUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']
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
  const mutationDefaults = getPostV1AdminWorkspacesWorkspaceUuidAddUsersMutationOptions<
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

export function getDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsersMutationKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/remove-users', 'DELETE'] as const
}

export function getDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.admin.workspaces[':workspace_uuid']['remove-users'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
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
  const mutationDefaults = getDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsersMutationOptions<
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

export function getV1AdminRateLimitQueryKey() {
  return ['v1', '/v1/admin/rate-limit'] as const
}

export function getV1AdminRateLimitQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AdminRateLimitQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['rate-limit'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminRateLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminRateLimitQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminRateLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AdminRateLimitQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['rate-limit'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminSpendLimitQueryKey() {
  return ['v1', '/v1/admin/spend-limit'] as const
}

export function getV1AdminSpendLimitQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AdminSpendLimitQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['spend-limit'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminSpendLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminSpendLimitQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminSpendLimitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AdminSpendLimitQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['spend-limit'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminSpendLimitMutationKey() {
  return ['v1', '/v1/admin/spend-limit', 'POST'] as const
}

export function getPostV1AdminSpendLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['spend-limit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminSpendLimitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)['spend-limit']['$post']>) {
      return parseResponse(client.v1.admin['spend-limit'].$post(args, options))
    },
  })
}

export function usePostV1AdminSpendLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)['spend-limit']['$post']>,
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
  const mutationDefaults = getPostV1AdminSpendLimitMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AdminUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.usage.$get>>,
) {
  return ['v1', '/v1/admin/usage', toValue(args)] as const
}

export function getV1AdminUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.admin.usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
          >,
          ReturnType<typeof getV1AdminUsageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminAuditLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>>,
) {
  return ['v1', '/v1/admin/audit-logs', toValue(args)] as const
}

export function getV1AdminAuditLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['audit-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminAuditLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['audit-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminUserGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>>,
) {
  return ['v1', '/v1/admin/user-groups', toValue(args)] as const
}

export function getV1AdminUserGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUserGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['user-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminUserGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUserGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUserGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['user-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminUserGroupsMutationKey() {
  return ['v1', '/v1/admin/user-groups', 'POST'] as const
}

export function getPostV1AdminUserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['user-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUserGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)['user-groups']['$post']>) {
      return parseResponse(client.v1.admin['user-groups'].$post(args, options))
    },
  })
}

export function usePostV1AdminUserGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)['user-groups']['$post']>,
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
  const mutationDefaults = getPostV1AdminUserGroupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AdminUserGroupsProvisionWorkspaceMutationKey() {
  return ['v1', '/v1/admin/user-groups/provision-workspace', 'POST'] as const
}

export function getPostV1AdminUserGroupsProvisionWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin)['user-groups']['provision-workspace']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.admin)['user-groups']['provision-workspace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUserGroupsProvisionWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin)['user-groups']['provision-workspace']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.admin['user-groups']['provision-workspace'].$post(args, options),
      )
    },
  })
}

export function usePostV1AdminUserGroupsProvisionWorkspace<
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
                      (typeof client.v1.admin)['user-groups']['provision-workspace']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.admin)['user-groups']['provision-workspace']['$post']>,
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
  const mutationDefaults = getPostV1AdminUserGroupsProvisionWorkspaceMutationOptions<
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

export function getV1AdminUserGroupsGroupUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>
  >,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid', toValue(args)] as const
}

export function getV1AdminUserGroupsGroupUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUserGroupsGroupUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUserGroupsGroupUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminUserGroupsGroupUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUserGroupsGroupUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUserGroupsGroupUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AdminUserGroupsGroupUuidMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid', 'DELETE'] as const
}

export function getDeleteV1AdminUserGroupsGroupUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminUserGroupsGroupUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>,
    ) {
      return parseResponse(client.v1.admin['user-groups'][':group_uuid'].$delete(args, options))
    },
  })
}

export function useDeleteV1AdminUserGroupsGroupUuid<
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
                    ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>,
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
  const mutationDefaults = getDeleteV1AdminUserGroupsGroupUuidMutationOptions<
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

export function getPatchV1AdminUserGroupsGroupUuidMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid', 'PATCH'] as const
}

export function getPatchV1AdminUserGroupsGroupUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AdminUserGroupsGroupUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>,
    ) {
      return parseResponse(client.v1.admin['user-groups'][':group_uuid'].$patch(args, options))
    },
  })
}

export function usePatchV1AdminUserGroupsGroupUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>,
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
  const mutationDefaults = getPatchV1AdminUserGroupsGroupUuidMutationOptions<
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

export function getV1AdminUserGroupsGroupUuidMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
  >,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid/members', toValue(args)] as const
}

export function getV1AdminUserGroupsGroupUuidMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUserGroupsGroupUuidMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUserGroupsGroupUuidMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
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
                    (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']
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
                    (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminUserGroupsGroupUuidMembersQueryKey>
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
            ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUserGroupsGroupUuidMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUserGroupsGroupUuidMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminUserGroupsGroupUuidMembersMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/members', 'POST'] as const
}

export function getPostV1AdminUserGroupsGroupUuidMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUserGroupsGroupUuidMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].members.$post(args, options),
      )
    },
  })
}

export function usePostV1AdminUserGroupsGroupUuidMembers<
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
                      (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']
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
  const mutationDefaults = getPostV1AdminUserGroupsGroupUuidMembersMutationOptions<
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

export function getDeleteV1AdminUserGroupsGroupUuidMembersMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/members', 'DELETE'] as const
}

export function getDeleteV1AdminUserGroupsGroupUuidMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminUserGroupsGroupUuidMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].members.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AdminUserGroupsGroupUuidMembers<
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
                      (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']
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
  const mutationDefaults = getDeleteV1AdminUserGroupsGroupUuidMembersMutationOptions<
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

export function getV1AdminUserGroupsGroupUuidWorkspacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']>
  >,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces', toValue(args)] as const
}

export function getV1AdminUserGroupsGroupUuidWorkspacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminUserGroupsGroupUuidWorkspacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].workspaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminUserGroupsGroupUuidWorkspaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']>
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
                    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
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
                    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminUserGroupsGroupUuidWorkspacesQueryKey>
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
            ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUserGroupsGroupUuidWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminUserGroupsGroupUuidWorkspacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].workspaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminUserGroupsGroupUuidWorkspacesMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces', 'POST'] as const
}

export function getPostV1AdminUserGroupsGroupUuidWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminUserGroupsGroupUuidWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].workspaces.$post(args, options),
      )
    },
  })
}

export function usePostV1AdminUserGroupsGroupUuidWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']
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
  const mutationDefaults = getPostV1AdminUserGroupsGroupUuidWorkspacesMutationOptions<
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

export function getDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces/:workspace_uuid', 'DELETE'] as const
}

export function getDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].workspaces[':workspace_uuid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid<
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
                      (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationOptions<
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

export function getPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces/:workspace_uuid', 'PATCH'] as const
}

export function getPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].workspaces[':workspace_uuid'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid<
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
                      (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
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
  const mutationDefaults = getPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationOptions<
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

export function getPatchV1AdminUserGroupsGroupUuidOrganizationRoleMutationKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/organization-role', 'PATCH'] as const
}

export function getPatchV1AdminUserGroupsGroupUuidOrganizationRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AdminUserGroupsGroupUuidOrganizationRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid']['organization-role'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1AdminUserGroupsGroupUuidOrganizationRole<
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
                      (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
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
  const mutationDefaults = getPatchV1AdminUserGroupsGroupUuidOrganizationRoleMutationOptions<
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

export function getV1AdminApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>>,
) {
  return ['v1', '/v1/admin/api-keys', toValue(args)] as const
}

export function getV1AdminApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin['api-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminApiKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin['api-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminApiKeysMutationKey() {
  return ['v1', '/v1/admin/api-keys', 'POST'] as const
}

export function getPostV1AdminApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)['api-keys']['$post']>) {
      return parseResponse(client.v1.admin['api-keys'].$post(args, options))
    },
  })
}

export function usePostV1AdminApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)['api-keys']['$post']>,
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
  const mutationDefaults = getPostV1AdminApiKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AdminApiKeysKeyIdMutationKey() {
  return ['v1', '/v1/admin/api-keys/:key_id', 'DELETE'] as const
}

export function getDeleteV1AdminApiKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminApiKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>,
    ) {
      return parseResponse(client.v1.admin['api-keys'][':key_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AdminApiKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AdminApiKeysKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AdminScimSyncMutationKey() {
  return ['v1', '/v1/admin/scim/sync', 'POST'] as const
}

export function getPostV1AdminScimSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.scim.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.admin.scim.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminScimSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.admin.scim.sync.$post>) {
      return parseResponse(client.v1.admin.scim.sync.$post(args, options))
    },
  })
}

export function usePostV1AdminScimSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.scim.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.admin.scim.sync.$post>,
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
  const mutationDefaults = getPostV1AdminScimSyncMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AdminScimSyncRunIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>,
) {
  return ['v1', '/v1/admin/scim/sync/:run_id', toValue(args)] as const
}

export function getV1AdminScimSyncRunIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminScimSyncRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.scim.sync[':run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminScimSyncRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminScimSyncRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminScimSyncRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminScimSyncRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.scim.sync[':run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>
  >,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_user_stats', toValue(args)] as const
}

export function getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminAnalyticsVibeWorkUsageByUserStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>
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
                  ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
  >,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_agent_stats', toValue(args)] as const
}

export function getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminAnalyticsVibeWorkUsageByAgentStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
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
                  ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>
  >,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_time_stats', toValue(args)] as const
}

export function getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminAnalyticsVibeWorkUsageByTimeStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>
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
                  ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>
  >,
) {
  return ['v1', '/v1/admin/analytics/vibe/code/usage/by_workspace', toValue(args)] as const
}

export function getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.analytics.vibe.code.usage.by_workspace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminAnalyticsVibeCodeUsageByWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>
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
                  ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey>
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
          Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.analytics.vibe.code.usage.by_workspace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
  >,
) {
  return ['v1', '/v1/admin/analytics/vibe/code/usage/by_organization', toValue(args)] as const
}

export function getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin.analytics.vibe.code.usage.by_organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminAnalyticsVibeCodeUsageByOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
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
                  ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey>
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
          Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin.analytics.vibe.code.usage.by_organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
