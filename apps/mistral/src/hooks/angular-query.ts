import { injectQuery, injectMutation, queryOptions, mutationOptions } from '@tanstack/angular-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
} from '@tanstack/angular-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV2PromptsQueryKey(args: InferRequestType<typeof client.v2.prompts.$get>) {
  return ['v2', '/v2/prompts', args] as const
}

export function getV2PromptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.prompts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PromptsQueryKey>
  >({
    queryKey: getV2PromptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.prompts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Prompts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.prompts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PromptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PromptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV2Prompts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.prompts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PromptsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV2PromptsPromptIdQueryKey(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>,
) {
  return ['v2', '/v2/prompts/:prompt_id', args] as const
}

export function getV2PromptsPromptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PromptsPromptIdQueryKey>
  >({
    queryKey: getV2PromptsPromptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.prompts[':prompt_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PromptsPromptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PromptsPromptIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PromptsPromptIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV2PromptsPromptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2PromptsPromptIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV2PromptsPromptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2PromptsPromptIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV2PromptsPromptIdVersionsQueryKey(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>,
) {
  return ['v2', '/v2/prompts/:prompt_id/versions', args] as const
}

export function getV2PromptsPromptIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PromptsPromptIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.prompts[':prompt_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PromptsPromptIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2PromptsPromptIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV2PromptsPromptIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PromptsPromptIdVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV2PromptsPromptIdVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>,
) {
  return ['v2', '/v2/prompts/:prompt_id/versions/:version', args] as const
}

export function getV2PromptsPromptIdVersionsVersionQueryOptions<
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
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PromptsPromptIdVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.prompts[':prompt_id'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PromptsPromptIdVersionsVersion<
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
  args: () => InferRequestType<
    (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2PromptsPromptIdVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPatchV2PromptsPromptIdVersionsVersion<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2PromptsPromptIdVersionsVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV2SkillsQueryKey(args: InferRequestType<typeof client.v2.skills.$get>) {
  return ['v2', '/v2/skills', args] as const
}

export function getV2SkillsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.skills.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SkillsQueryKey>
  >({
    queryKey: getV2SkillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.skills.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Skills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.skills.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SkillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SkillsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV2Skills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.skills.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SkillsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV2SkillsSkillIdQueryKey(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>,
) {
  return ['v2', '/v2/skills/:skill_id', args] as const
}

export function getV2SkillsSkillIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SkillsSkillIdQueryKey>
  >({
    queryKey: getV2SkillsSkillIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.skills[':skill_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SkillsSkillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SkillsSkillIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SkillsSkillIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV2SkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2SkillsSkillIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV2SkillsSkillId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2SkillsSkillIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV2SkillsSkillIdVersionsQueryKey(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>,
) {
  return ['v2', '/v2/skills/:skill_id/versions', args] as const
}

export function getV2SkillsSkillIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2SkillsSkillIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.skills[':skill_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SkillsSkillIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2SkillsSkillIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV2SkillsSkillIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SkillsSkillIdVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV2SkillsSkillIdVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>,
) {
  return ['v2', '/v2/skills/:skill_id/versions/:version', args] as const
}

export function getV2SkillsSkillIdVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2SkillsSkillIdVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.skills[':skill_id'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SkillsSkillIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2SkillsSkillIdVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPatchV2SkillsSkillIdVersionsVersion<
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
                ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2SkillsSkillIdVersionsVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AudioSpeech<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.speech.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.audio.speech.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AudioSpeechMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ModelsQueryKey(args: InferRequestType<typeof client.v1.models.$get>) {
  return ['v1', '/v1/models', args] as const
}

export function getV1ModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.models.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModelsQueryKey>
  >({
    queryKey: getV1ModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.models.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1ModelsModelIdQueryKey(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
) {
  return ['v1', '/v1/models/:model_id', args] as const
}

export function getV1ModelsModelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ModelsModelIdQueryKey>
  >({
    queryKey: getV1ModelsModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.models[':model_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModelsModelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModelsModelIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV1ModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ModelsModelIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1Responses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.responses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.responses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResponsesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ResponsesInputTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.responses.input_tokens.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.responses.input_tokens.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ResponsesInputTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ClientSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.client.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.client.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ClientSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ServiceAccountsQueryKey(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
) {
  return ['v1', '/v1/service-accounts', args] as const
}

export function getV1ServiceAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServiceAccountsQueryKey>
  >({
    queryKey: getV1ServiceAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['service-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServiceAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ServiceAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ServiceAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1ServiceAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServiceAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ServiceAccountsAssignableRolesQueryKey(
  args: InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>,
) {
  return ['v1', '/v1/service-accounts/assignable-roles', args] as const
}

export function getV1ServiceAccountsAssignableRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServiceAccountsAssignableRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['service-accounts']['assignable-roles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServiceAccountsAssignableRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ServiceAccountsAssignableRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServiceAccountsAssignableRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ServiceAccountsServiceAccountIdQueryKey(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>,
) {
  return ['v1', '/v1/service-accounts/:service_account_id', args] as const
}

export function getV1ServiceAccountsServiceAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServiceAccountsServiceAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['service-accounts'][':service_account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServiceAccountsServiceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ServiceAccountsServiceAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServiceAccountsServiceAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1ServiceAccountsServiceAccountId<
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
                    (typeof client.v1)['service-accounts'][':service_account_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ServiceAccountsServiceAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1ServiceAccountsServiceAccountId<
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
                ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ServiceAccountsServiceAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ServiceAccountsServiceAccountIdRolesQueryKey(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
  >,
) {
  return ['v1', '/v1/service-accounts/:service_account_id/roles', args] as const
}

export function getV1ServiceAccountsServiceAccountIdRolesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ServiceAccountsServiceAccountIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['service-accounts'][':service_account_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ServiceAccountsServiceAccountIdRoles<
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
  args: () => InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ServiceAccountsServiceAccountIdRolesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPutV1ServiceAccountsServiceAccountIdRoles<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ServiceAccountsServiceAccountIdRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ConversationsQueryKey(
  args: InferRequestType<typeof client.v1.conversations.$get>,
) {
  return ['v1', '/v1/conversations', args] as const
}

export function getV1ConversationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.conversations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConversationsQueryKey>
  >({
    queryKey: getV1ConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.conversations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Conversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.conversations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConversationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1Conversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.conversations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConversationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ConversationsConversationIdQueryKey(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>,
) {
  return ['v1', '/v1/conversations/:conversation_id', args] as const
}

export function getV1ConversationsConversationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConversationsConversationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.conversations[':conversation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConversationsConversationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConversationsConversationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1ConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConversationsConversationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1ConversationsConversationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConversationsConversationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ConversationsConversationIdHistoryQueryKey(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>,
) {
  return ['v1', '/v1/conversations/:conversation_id/history', args] as const
}

export function getV1ConversationsConversationIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConversationsConversationIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.conversations[':conversation_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConversationsConversationIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.conversations)[':conversation_id']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConversationsConversationIdHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ConversationsConversationIdMessagesQueryKey(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>,
) {
  return ['v1', '/v1/conversations/:conversation_id/messages', args] as const
}

export function getV1ConversationsConversationIdMessagesQueryOptions<
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
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConversationsConversationIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.conversations[':conversation_id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConversationsConversationIdMessages<
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
  args: () => InferRequestType<
    (typeof client.v1.conversations)[':conversation_id']['messages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConversationsConversationIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1ConversationsConversationIdRestart<
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
                ReturnType<(typeof client.v1.conversations)[':conversation_id']['restart']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.conversations)[':conversation_id']['restart']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConversationsConversationIdRestartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AgentsQueryKey(args: InferRequestType<typeof client.v1.agents.$get>) {
  return ['v1', '/v1/agents', args] as const
}

export function getV1AgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AgentsQueryKey>
  >({
    queryKey: getV1AgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.agents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AgentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1Agents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.agents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AgentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AgentsPagesQueryKey(
  args: InferRequestType<typeof client.v1.agents.pages.$get>,
) {
  return ['v1', '/v1/agents/pages', args] as const
}

export function getV1AgentsPagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.agents.pages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsPagesQueryKey>
  >({
    queryKey: getV1AgentsPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents.pages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AgentsPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.agents.pages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AgentsPagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1AgentsAgentIdQueryKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id', args] as const
}

export function getV1AgentsAgentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsAgentIdQueryKey>
  >({
    queryKey: getV1AgentsAgentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents[':agent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsAgentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AgentsAgentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV1AgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AgentsAgentIdVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AgentsAgentIdVersionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AgentsAgentIdVersionsQueryKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id/versions', args] as const
}

export function getV1AgentsAgentIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AgentsAgentIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents[':agent_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AgentsAgentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AgentsAgentIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1AgentsAgentIdVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id/versions/:version', args] as const
}

export function getV1AgentsAgentIdVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AgentsAgentIdVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents[':agent_id'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AgentsAgentIdVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AgentsAgentIdVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1AgentsAgentIdAliasesQueryKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id/aliases', args] as const
}

export function getV1AgentsAgentIdAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AgentsAgentIdAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents[':agent_id'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AgentsAgentIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AgentsAgentIdAliasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1AgentsAgentIdAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AgentsAgentIdAliasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AgentsAgentIdAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AgentsAgentIdAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ConversationsStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConversationsStreamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ConversationsConversationIdStream<
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
                ReturnType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConversationsConversationIdStreamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ConversationsConversationIdRestartStream<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConversationsConversationIdRestartStreamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1FilesQueryKey(args: InferRequestType<typeof client.v1.files.$get>) {
  return ['v1', '/v1/files', args] as const
}

export function getV1FilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FilesQueryKey>
  >({
    queryKey: getV1FilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Files<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.files.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1FilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1Files<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1FilesFileIdQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['$get']>,
) {
  return ['v1', '/v1/files/:file_id', args] as const
}

export function getV1FilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileIdQueryKey>
  >({
    queryKey: getV1FilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1FilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FilesFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV1FilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1FilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1FilesFileIdContentQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>,
) {
  return ['v1', '/v1/files/:file_id/content', args] as const
}

export function getV1FilesFileIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FilesFileIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1FilesFileIdUrlQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>,
) {
  return ['v1', '/v1/files/:file_id/url', args] as const
}

export function getV1FilesFileIdUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FilesFileIdUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_id'].url.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileIdUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FilesFileIdUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPatchV1FineTuningModelsModelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1FineTuningModelsModelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1FineTuningModelsModelIdArchive<
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
                ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FineTuningModelsModelIdArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1FineTuningModelsModelIdArchive<
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
                ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1FineTuningModelsModelIdArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1BatchJobsQueryKey(args: InferRequestType<typeof client.v1.batch.jobs.$get>) {
  return ['v1', '/v1/batch/jobs', args] as const
}

export function getV1BatchJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.batch.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchJobsQueryKey>
  >({
    queryKey: getV1BatchJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batch.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1BatchJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.batch.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BatchJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BatchJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1BatchJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.batch.jobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BatchJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1BatchJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>,
) {
  return ['v1', '/v1/batch/jobs/:job_id', args] as const
}

export function getV1BatchJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchJobsJobIdQueryKey>
  >({
    queryKey: getV1BatchJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batch.jobs[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BatchJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BatchJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BatchJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV1BatchJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1BatchJobsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1BatchJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BatchJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ChatCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.chat.completions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ChatCompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1FimCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.fim.completions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.fim.completions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FimCompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AgentsCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.completions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.agents.completions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AgentsCompletionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1Embeddings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embeddings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.embeddings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EmbeddingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1Moderations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.moderations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.moderations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ModerationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ChatModerations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.moderations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.chat.moderations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ChatModerationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1Ocr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ocr.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.ocr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1OcrMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1Classifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.classifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.classifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ClassificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ChatClassifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.classifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.chat.classifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ChatClassificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AudioTranscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.transcriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.audio.transcriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AudioTranscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AudioTranscriptionsStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AudioTranscriptionsStreamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1LibrariesQueryKey(args: InferRequestType<typeof client.v1.libraries.$get>) {
  return ['v1', '/v1/libraries', args] as const
}

export function getV1LibrariesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.libraries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LibrariesQueryKey>
  >({
    queryKey: getV1LibrariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Libraries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.libraries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LibrariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LibrariesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1Libraries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.libraries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LibrariesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1LibrariesLibraryIdQueryKey(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>,
) {
  return ['v1', '/v1/libraries/:library_id', args] as const
}

export function getV1LibrariesLibraryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LibrariesLibraryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1LibrariesLibraryIdDocumentsQueryKey(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>,
) {
  return ['v1', '/v1/libraries/:library_id/documents', args] as const
}

export function getV1LibrariesLibraryIdDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LibrariesLibraryIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1LibrariesLibraryIdDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LibrariesLibraryIdDocumentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', args] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LibrariesLibraryIdDocumentsDocumentId<
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
  args: () => InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdDocumentsDocumentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPutV1LibrariesLibraryIdDocumentsDocumentId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1LibrariesLibraryIdDocumentsDocumentId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1LibrariesLibraryIdDocumentsDocumentId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1LibrariesLibraryIdDocumentsDocumentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/text_content', args] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].text_content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LibrariesLibraryIdDocumentsDocumentIdTextContent<
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
  args: () => InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdDocumentsDocumentIdTextContentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/status', args] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LibrariesLibraryIdDocumentsDocumentIdStatus<
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
  args: () => InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdDocumentsDocumentIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/signed-url', args] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id']['signed-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LibrariesLibraryIdDocumentsDocumentIdSignedUrl<
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
  args: () => InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
  >,
) {
  return [
    'v1',
    '/v1/libraries/:library_id/documents/:document_id/extracted-text-signed-url',
    args,
  ] as const
}

export function getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].documents[':document_id'][
          'extracted-text-signed-url'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrl<
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
  args: () => InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1LibrariesLibraryIdDocumentsDocumentIdReprocess<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LibrariesLibraryIdDocumentsDocumentIdReprocessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1LibrariesLibraryIdShareQueryKey(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>,
) {
  return ['v1', '/v1/libraries/:library_id/share', args] as const
}

export function getV1LibrariesLibraryIdShareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1LibrariesLibraryIdShareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.libraries[':library_id'].share.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LibrariesLibraryIdShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LibrariesLibraryIdShareQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1LibrariesLibraryIdShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1LibrariesLibraryIdShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1LibrariesLibraryIdShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1LibrariesLibraryIdShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityDatasetsQueryKey(
  args: InferRequestType<typeof client.v1.observability.datasets.$get>,
) {
  return ['v1', '/v1/observability/datasets', args] as const
}

export function getV1ObservabilityDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.observability.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityDatasetsQueryKey>
  >({
    queryKey: getV1ObservabilityDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.datasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.observability.datasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilityDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityDatasetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1ObservabilityDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.observability.datasets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityDatasetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityDatasetsDatasetIdQueryKey(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id', args] as const
}

export function getV1ObservabilityDatasetsDatasetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityDatasetsDatasetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityDatasetsDatasetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1ObservabilityDatasetsDatasetId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObservabilityDatasetsDatasetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1ObservabilityDatasetsDatasetId<
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
                ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ObservabilityDatasetsDatasetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityDatasetsDatasetIdRecordsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/records', args] as const
}

export function getV1ObservabilityDatasetsDatasetIdRecordsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityDatasetsDatasetIdRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityDatasetsDatasetIdRecords<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityDatasetsDatasetIdRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityDatasetsDatasetIdRecordsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPostV1ObservabilityDatasetsDatasetIdRecords<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdRecordsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityDatasetsDatasetIdRecordsBulk<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdRecordsBulkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityDatasetsDatasetIdImportsFromFile<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdImportsFromFileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityDatasetsDatasetIdImportsFromSpans<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityDatasetsDatasetIdImportsFromSpansMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityDatasetsDatasetIdImportsFromDataset<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ObservabilityDatasetsDatasetIdImportsFromDatasetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/exports/to-jsonl', args] as const
}

export function getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].exports['to-jsonl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityDatasetsDatasetIdExportsToJsonl<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityDatasetsDatasetIdExportsToJsonlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/tasks/:task_id', args] as const
}

export function getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].tasks[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityDatasetsDatasetIdTasksTaskId<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityDatasetsDatasetIdTasksTaskIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityDatasetsDatasetIdTasksQueryKey(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/tasks', args] as const
}

export function getV1ObservabilityDatasetsDatasetIdTasksQueryOptions<
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
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityDatasetsDatasetIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.datasets[':dataset_id'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityDatasetsDatasetIdTasks<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityDatasetsDatasetIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityDatasetsDatasetIdTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityDatasetRecordsDatasetRecordIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id', args] as const
}

export function getV1ObservabilityDatasetRecordsDatasetRecordIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityDatasetRecordsDatasetRecordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability['dataset-records'][':dataset_record_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityDatasetRecordsDatasetRecordId<
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
  args: () => InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityDatasetRecordsDatasetRecordIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectDeleteV1ObservabilityDatasetRecordsDatasetRecordId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObservabilityDatasetRecordsDatasetRecordIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityDatasetRecordsBulkDelete<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityDatasetRecordsBulkDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutV1ObservabilityDatasetRecordsDatasetRecordIdPayload<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ObservabilityDatasetRecordsDatasetRecordIdPayloadMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutV1ObservabilityDatasetRecordsDatasetRecordIdProperties<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityPipelinesQueryKey(
  args: InferRequestType<typeof client.v1.observability.pipelines.$get>,
) {
  return ['v1', '/v1/observability/pipelines', args] as const
}

export function getV1ObservabilityPipelinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.observability.pipelines.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityPipelinesQueryKey>
  >({
    queryKey: getV1ObservabilityPipelinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.pipelines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityPipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.observability.pipelines.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilityPipelinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityPipelinesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1ObservabilityPipelines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityPipelinesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityPipelinesPipelineIdQueryKey(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>,
) {
  return ['v1', '/v1/observability/pipelines/:pipeline_id', args] as const
}

export function getV1ObservabilityPipelinesPipelineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityPipelinesPipelineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.pipelines[':pipeline_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityPipelinesPipelineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityPipelinesPipelineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityPipelinesPipelineIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1ObservabilityPipelinesPipelineId<
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
                ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ObservabilityPipelinesPipelineIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1ObservabilityPipelinesPipelineId<
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
                  ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ObservabilityPipelinesPipelineIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityLogsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityLogsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityTracesSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityTracesSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityTracesAggregate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityTracesAggregateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilitySpansSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilitySpansSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilitySpansAggregate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilitySpansAggregateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilitySpansEvaluationsAggregate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilitySpansEvaluationsAggregateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilitySpansEvaluationsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilitySpansEvaluationsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilitySpansEvaluationsSearchLatest<
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
                ReturnType<typeof client.v1.observability.spans.evaluations.search.latest.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.observability.spans.evaluations.search.latest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilitySpansEvaluationsSearchLatestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityPipelineResultsSearch<
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
                ReturnType<(typeof client.v1.observability)['pipeline-results']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.observability)['pipeline-results']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityPipelineResultsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
  >,
) {
  return ['v1', '/v1/observability/pipelines/:pipeline_id/results/fields', args] as const
}

export function getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.pipelines[':pipeline_id'].results.fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityPipelinesPipelineIdResultsFields<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityPipelinesPipelineIdResultsFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityTracesFieldsQueryKey() {
  return ['v1', '/v1/observability/traces/fields'] as const
}

export function getV1ObservabilityTracesFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityTracesFieldsQueryKey>
  >({
    queryKey: getV1ObservabilityTracesFieldsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.traces.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityTracesFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>>
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
              Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilityTracesFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObservabilityTracesFieldsQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1ObservabilityTracesTraceIdQueryKey(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>,
) {
  return ['v1', '/v1/observability/traces/:trace_id', args] as const
}

export function getV1ObservabilityTracesTraceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityTracesTraceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.traces[':trace_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityTracesTraceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityTracesTraceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityTracesTraceIdSpansQueryKey(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>,
) {
  return ['v1', '/v1/observability/traces/:trace_id/spans', args] as const
}

export function getV1ObservabilityTracesTraceIdSpansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityTracesTraceIdSpansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.traces[':trace_id'].spans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityTracesTraceIdSpans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityTracesTraceIdSpansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityTracesTraceIdSpansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityLogsFieldsQueryKey() {
  return ['v1', '/v1/observability/logs/fields'] as const
}

export function getV1ObservabilityLogsFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityLogsFieldsQueryKey>
  >({
    queryKey: getV1ObservabilityLogsFieldsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.logs.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityLogsFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
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
              Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilityLogsFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObservabilityLogsFieldsQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1ObservabilitySpansFieldsQueryKey() {
  return ['v1', '/v1/observability/spans/fields'] as const
}

export function getV1ObservabilitySpansFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilitySpansFieldsQueryKey>
  >({
    queryKey: getV1ObservabilitySpansFieldsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.spans.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilitySpansFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>>
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
              Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilitySpansFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ObservabilitySpansFieldsQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1ObservabilitySpansEvaluationsFieldsQueryKey() {
  return ['v1', '/v1/observability/spans/evaluations/fields'] as const
}

export function getV1ObservabilitySpansEvaluationsFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilitySpansEvaluationsFieldsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.spans.evaluations.fields.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilitySpansEvaluationsFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
      >
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
              Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilitySpansEvaluationsFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilitySpansEvaluationsFieldsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityTracesFieldsFieldNameOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/traces/fields/:field_name/options', args] as const
}

export function getV1ObservabilityTracesFieldsFieldNameOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityTracesFieldsFieldNameOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.traces.fields[':field_name'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityTracesFieldsFieldNameOptions<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityTracesFieldsFieldNameOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityLogsFieldsFieldNameOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/logs/fields/:field_name/options', args] as const
}

export function getV1ObservabilityLogsFieldsFieldNameOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityLogsFieldsFieldNameOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.logs.fields[':field_name'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityLogsFieldsFieldNameOptions<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityLogsFieldsFieldNameOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilitySpansFieldsFieldNameOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/spans/fields/:field_name/options', args] as const
}

export function getV1ObservabilitySpansFieldsFieldNameOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilitySpansFieldsFieldNameOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.spans.fields[':field_name'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilitySpansFieldsFieldNameOptions<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilitySpansFieldsFieldNameOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/spans/evaluations/fields/:field_name/options', args] as const
}

export function getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.spans.evaluations.fields[':field_name'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilitySpansEvaluationsFieldsFieldNameOptions<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityTracesTraceIdSpansSpanIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/traces/:trace_id/spans/:span_id', args] as const
}

export function getV1ObservabilityTracesTraceIdSpansSpanIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityTracesTraceIdSpansSpanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.traces[':trace_id'].spans[':span_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityTracesTraceIdSpansSpanId<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityTracesTraceIdSpansSpanIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityProjectsQueryKey(
  args: InferRequestType<typeof client.v1.observability.projects.$get>,
) {
  return ['v1', '/v1/observability/projects', args] as const
}

export function getV1ObservabilityProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.observability.projects.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityProjectsQueryKey>
  >({
    queryKey: getV1ObservabilityProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.observability.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilityProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityProjectsProjectSlugQueryKey(
  args: InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>,
) {
  return ['v1', '/v1/observability/projects/:project_slug', args] as const
}

export function getV1ObservabilityProjectsProjectSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityProjectsProjectSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.projects[':project_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityProjectsProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityProjectsProjectSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityProjectsProjectSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
  >,
) {
  return ['v1', '/v1/observability/projects/:project_slug/evaluations_v2', args] as const
}

export function getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.projects[':project_slug'].evaluations_v2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityProjectsProjectSlugEvaluationsV2<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityProjectsProjectSlugEvaluationsV2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
  >,
) {
  return ['v1', '/v1/observability/evaluations_v2/:evaluation_slug', args] as const
}

export function getV1ObservabilityEvaluationsV2EvaluationSlugQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.evaluations_v2[':evaluation_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityEvaluationsV2EvaluationSlug<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityEvaluationsV2EvaluationSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityEvaluationsV2EvaluationSlugQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ObservabilityEvaluationRunsV2Search<
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
                  (typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityEvaluationRunsV2SearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityEvaluationRunsV2RunIdQueryKey(
  args: InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id', args] as const
}

export function getV1ObservabilityEvaluationRunsV2RunIdQueryOptions<
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
  args: InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityEvaluationRunsV2RunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityEvaluationRunsV2RunId<
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
  args: () => InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityEvaluationRunsV2RunIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityEvaluationRunsV2RunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
  >,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/statistics', args] as const
}

export function getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityEvaluationRunsV2RunIdStatistics<
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
  args: () => InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityEvaluationRunsV2RunIdStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPostV1ObservabilityEvaluationRunsV2RunIdStatisticsCompute<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/records/:record_id', args] as const
}

export function getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability['evaluation-runs_v2'][':run_id'].records[':record_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityEvaluationRunsV2RunIdRecordsRecordId<
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
  args: () => InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearchMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityOptimizationsQueryKey(
  args: InferRequestType<typeof client.v1.observability.optimizations.$get>,
) {
  return ['v1', '/v1/observability/optimizations', args] as const
}

export function getV1ObservabilityOptimizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.observability.optimizations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityOptimizationsQueryKey>
  >({
    queryKey: getV1ObservabilityOptimizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.optimizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityOptimizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.observability.optimizations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilityOptimizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityOptimizationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ObservabilityOptimizationsOptimizationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/optimizations/:optimization_id', args] as const
}

export function getV1ObservabilityOptimizationsOptimizationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityOptimizationsOptimizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.optimizations[':optimization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityOptimizationsOptimizationId<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ObservabilityOptimizationsOptimizationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityOptimizationsOptimizationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityOptimizationsOptimizationIdTrialsQueryKey(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
  >,
) {
  return ['v1', '/v1/observability/optimizations/:optimization_id/trials', args] as const
}

export function getV1ObservabilityOptimizationsOptimizationIdTrialsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityOptimizationsOptimizationIdTrialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.optimizations[':optimization_id'].trials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityOptimizationsOptimizationIdTrials<
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
  args: () => InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityOptimizationsOptimizationIdTrialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ObservabilityScorersQueryKey(
  args: InferRequestType<typeof client.v1.observability.scorers.$get>,
) {
  return ['v1', '/v1/observability/scorers', args] as const
}

export function getV1ObservabilityScorersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.observability.scorers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ObservabilityScorersQueryKey>
  >({
    queryKey: getV1ObservabilityScorersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.scorers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityScorers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.observability.scorers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ObservabilityScorersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityScorersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1ObservabilityScorers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.observability.scorers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ObservabilityScorersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ObservabilityScorersScorerSlugQueryKey(
  args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>,
) {
  return ['v1', '/v1/observability/scorers/:scorer_slug', args] as const
}

export function getV1ObservabilityScorersScorerSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ObservabilityScorersScorerSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.observability.scorers[':scorer_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ObservabilityScorersScorerSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ObservabilityScorersScorerSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPatchV1ObservabilityScorersScorerSlug<
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
                ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ObservabilityScorersScorerSlugMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ConnectorsQueryKey(args: InferRequestType<typeof client.v1.connectors.$get>) {
  return ['v1', '/v1/connectors', args] as const
}

export function getV1ConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.connectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsQueryKey>
  >({
    queryKey: getV1ConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.connectors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConnectorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.connectors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/auth_url', args] as const
}

export function getV1ConnectorsConnectorIdOrNameAuthUrlQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].auth_url.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConnectorsConnectorIdOrNameAuthUrl<
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
  args: () => InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ConnectorsConnectorIdOrNameAuthUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectorsConnectorIdOrNameAuthUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1ConnectorsConnectorIdShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConnectorsConnectorIdShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1ConnectorsConnectorIdShare<
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
                ReturnType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectorsConnectorIdShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutV1ConnectorsConnectorIdOrganizationShare<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConnectorsConnectorIdOrganizationShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1ConnectorsConnectorIdOrganizationShare<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectorsConnectorIdOrganizationShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ConnectorsConnectorIdConsumerScopeActivate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectorsConnectorIdConsumerScopeActivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ConnectorsConnectorIdConsumerScopeDeactivate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectorsConnectorIdConsumerScopeDeactivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ConnectorsConnectorIdOrNameToolsToolNameCall<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectorsConnectorIdOrNameToolsToolNameCallMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ConnectorsConnectorIdOrNameToolsQueryKey(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/tools', args] as const
}

export function getV1ConnectorsConnectorIdOrNameToolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConnectorsConnectorIdOrNameToolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].tools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConnectorsConnectorIdOrNameTools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectorsConnectorIdOrNameToolsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/authentication_methods', args] as const
}

export function getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].authentication_methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConnectorsConnectorIdOrNameAuthenticationMethods<
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
  args: () => InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectorsConnectorIdOrNameAuthenticationMethodsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/organization/credentials', args] as const
}

export function getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].organization.credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConnectorsConnectorIdOrNameOrganizationCredentials<
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
  args: () => InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectorsConnectorIdOrNameOrganizationCredentialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/workspace/credentials', args] as const
}

export function getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].workspace.credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConnectorsConnectorIdOrNameWorkspaceCredentials<
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
  args: () => InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ConnectorsConnectorIdOrNameUserCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/user/credentials', args] as const
}

export function getV1ConnectorsConnectorIdOrNameUserCredentialsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConnectorsConnectorIdOrNameUserCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name'].user.credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConnectorsConnectorIdOrNameUserCredentials<
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
  args: () => InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectorsConnectorIdOrNameUserCredentialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectDeleteV1ConnectorsConnectorIdOrNameUserCredentials<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectorsConnectorIdOrNameUserCredentialsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentials<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentials<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ConnectorsConnectorIdOrNameIdOrNameQueryKey(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name#idOrName', args] as const
}

export function getV1ConnectorsConnectorIdOrNameIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ConnectorsConnectorIdOrNameIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':connector_id_or_name#idOrName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ConnectorsConnectorIdOrNameIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConnectorsConnectorIdOrNameIdOrNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1ConnectorsConnectorIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectorsConnectorIdIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1ConnectorsConnectorIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ConnectorsConnectorIdIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AudioVoicesQueryKey(
  args: InferRequestType<typeof client.v1.audio.voices.$get>,
) {
  return ['v1', '/v1/audio/voices', args] as const
}

export function getV1AudioVoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.audio.voices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioVoicesQueryKey>
  >({
    queryKey: getV1AudioVoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.voices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AudioVoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.audio.voices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AudioVoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AudioVoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1AudioVoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.audio.voices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AudioVoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AudioVoicesVoiceIdQueryKey(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>,
) {
  return ['v1', '/v1/audio/voices/:voice_id', args] as const
}

export function getV1AudioVoicesVoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AudioVoicesVoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.voices[':voice_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AudioVoicesVoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AudioVoicesVoiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1AudioVoicesVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AudioVoicesVoiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AudioVoicesVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AudioVoicesVoiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AudioVoicesVoiceIdSampleQueryKey(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>,
) {
  return ['v1', '/v1/audio/voices/:voice_id/sample', args] as const
}

export function getV1AudioVoicesVoiceIdSampleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AudioVoicesVoiceIdSampleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.voices[':voice_id'].sample.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AudioVoicesVoiceIdSample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AudioVoicesVoiceIdSampleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1AudioSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.audio.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AudioSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AudioSessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>,
) {
  return ['v1', '/v1/audio/sessions/:session_id', args] as const
}

export function getV1AudioSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AudioSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.sessions[':session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AudioSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AudioSessionsSessionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1AudioSessionsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AudioSessionsSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AudioSessionsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AudioSessionsSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AudioAgentsQueryKey(
  args: InferRequestType<typeof client.v1.audio.agents.$get>,
) {
  return ['v1', '/v1/audio/agents', args] as const
}

export function getV1AudioAgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.audio.agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AudioAgentsQueryKey>
  >({
    queryKey: getV1AudioAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AudioAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.audio.agents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AudioAgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AudioAgentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1AudioAgents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.audio.agents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AudioAgentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AudioAgentsAgentIdQueryKey(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>,
) {
  return ['v1', '/v1/audio/agents/:agent_id', args] as const
}

export function getV1AudioAgentsAgentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AudioAgentsAgentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.agents[':agent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AudioAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AudioAgentsAgentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1AudioAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AudioAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AudioAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AudioAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AudioAgentsAgentIdVersionsQueryKey(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>,
) {
  return ['v1', '/v1/audio/agents/:agent_id/versions', args] as const
}

export function getV1AudioAgentsAgentIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AudioAgentsAgentIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.agents[':agent_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AudioAgentsAgentIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AudioAgentsAgentIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1AudioAgentsAgentIdSessionsQueryKey(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>,
) {
  return ['v1', '/v1/audio/agents/:agent_id/sessions', args] as const
}

export function getV1AudioAgentsAgentIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AudioAgentsAgentIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.audio.agents[':agent_id'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AudioAgentsAgentIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AudioAgentsAgentIdSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV2AudioVoicesQueryKey(
  args: InferRequestType<typeof client.v2.audio.voices.$get>,
) {
  return ['v2', '/v2/audio/voices', args] as const
}

export function getV2AudioVoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.voices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioVoicesQueryKey>
  >({
    queryKey: getV2AudioVoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.voices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AudioVoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.voices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioVoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioVoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1WorkflowsExecutionsExecutionIdQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>,
) {
  return ['v1', '/v1/workflows/executions/:execution_id', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdHistoryQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/history', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdHistory<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkflowsExecutionsExecutionIdHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPostV1WorkflowsExecutionsExecutionIdSignals<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdSignalsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsExecutionsExecutionIdQueries<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdQueriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsExecutionsExecutionIdTerminate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdTerminateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsExecutionsTerminate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsTerminateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsExecutionsExecutionIdCancel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsExecutionsCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsExecutionsExecutionIdReset<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsExecutionsExecutionIdUpdates<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsExecutionsExecutionIdUpdatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdTraceInfoQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/info', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceInfoQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdTraceInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdTraceInfo<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdTraceInfoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdTraceOtelQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/otel', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceOtelQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdTraceOtelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.otel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdTraceOtel<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdTraceOtelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/summary', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdTraceSummary<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdTraceSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdTraceEventsQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/events', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdTraceEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdTraceEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].trace.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdTraceEvents<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdTraceEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdStreamQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/stream', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdStreamQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdStream<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkflowsExecutionsExecutionIdStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdStreamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdLogsQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/logs', args] as const
}

export function getV1WorkflowsExecutionsExecutionIdLogsQueryOptions<
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
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdLogs<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsExecutionsExecutionIdLogsStreamQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/workflows/executions/:execution_id/logs/stream', keyArgs] as const
}

export function getV1WorkflowsExecutionsExecutionIdLogsStreamQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsExecutionsExecutionIdLogsStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.executions[':execution_id'].logs.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsExecutionsExecutionIdLogsStream<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsExecutionsExecutionIdLogsStreamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1WorkflowsWorkflowNameMetricsQueryKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>,
) {
  return ['v1', '/v1/workflows/:workflow_name/metrics', args] as const
}

export function getV1WorkflowsWorkflowNameMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsWorkflowNameMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows[':workflow_name'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsWorkflowNameMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsWorkflowNameMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsRunsQueryKey(
  args: InferRequestType<typeof client.v1.workflows.runs.$get>,
) {
  return ['v1', '/v1/workflows/runs', args] as const
}

export function getV1WorkflowsRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.workflows.runs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsRunsQueryKey>
  >({
    queryKey: getV1WorkflowsRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.runs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1WorkflowsRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflows.runs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WorkflowsRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1WorkflowsRunsRunIdQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>,
) {
  return ['v1', '/v1/workflows/runs/:run_id', args] as const
}

export function getV1WorkflowsRunsRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsRunsRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.runs[':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsRunsRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsRunsRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsRunsRunIdHistoryQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>,
) {
  return ['v1', '/v1/workflows/runs/:run_id/history', args] as const
}

export function getV1WorkflowsRunsRunIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsRunsRunIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.runs[':run_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsRunsRunIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsRunsRunIdHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsSchedulesQueryKey(
  args: InferRequestType<typeof client.v1.workflows.schedules.$get>,
) {
  return ['v1', '/v1/workflows/schedules', args] as const
}

export function getV1WorkflowsSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflows.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsSchedulesQueryKey>
  >({
    queryKey: getV1WorkflowsSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflows.schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1WorkflowsSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workflows.schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsSchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsSchedulesScheduleIdQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>,
) {
  return ['v1', '/v1/workflows/schedules/:schedule_id', args] as const
}

export function getV1WorkflowsSchedulesScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsSchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.schedules[':schedule_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsSchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsSchedulesScheduleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1WorkflowsSchedulesScheduleId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1WorkflowsSchedulesScheduleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1WorkflowsSchedulesScheduleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1WorkflowsSchedulesScheduleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsSchedulesScheduleIdPause<
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
                    (typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsSchedulesScheduleIdPauseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsSchedulesScheduleIdResume<
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
                    (typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsSchedulesScheduleIdResumeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsSchedulesScheduleIdTrigger<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsSchedulesScheduleIdTriggerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsEventsStreamQueryKey(
  args: InferRequestType<typeof client.v1.workflows.events.stream.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/workflows/events/stream', keyArgs] as const
}

export function getV1WorkflowsEventsStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflows.events.stream.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsEventsStreamQueryKey>
  >({
    queryKey: getV1WorkflowsEventsStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.events.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsEventsStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflows.events.stream.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsEventsStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsEventsStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsEventsListQueryKey(
  args: InferRequestType<typeof client.v1.workflows.events.list.$get>,
) {
  return ['v1', '/v1/workflows/events/list', args] as const
}

export function getV1WorkflowsEventsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflows.events.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsEventsListQueryKey>
  >({
    queryKey: getV1WorkflowsEventsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.events.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsEventsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflows.events.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsEventsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsEventsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1WorkflowsDeploymentsDeploymentIdUnharden<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsDeploymentsDeploymentIdUnhardenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsDeploymentsQueryKey(
  args: InferRequestType<typeof client.v1.workflows.deployments.$get>,
) {
  return ['v1', '/v1/workflows/deployments', args] as const
}

export function getV1WorkflowsDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflows.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsDeploymentsQueryKey>
  >({
    queryKey: getV1WorkflowsDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflows.deployments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1WorkflowsDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workflows.deployments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsDeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsDeploymentsNameQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name', args] as const
}

export function getV1WorkflowsDeploymentsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsDeploymentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsDeploymentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsDeploymentsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1WorkflowsDeploymentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1WorkflowsDeploymentsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1WorkflowsDeploymentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1WorkflowsDeploymentsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsDeploymentsNameStop<
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
                ReturnType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsDeploymentsNameStopMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsDeploymentsNameStart<
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
                ReturnType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsDeploymentsNameStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsDeploymentsNameRestart<
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
                ReturnType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsDeploymentsNameRestartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsDeploymentsNameWorkersQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name/workers', args] as const
}

export function getV1WorkflowsDeploymentsNameWorkersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsDeploymentsNameWorkersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].workers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsDeploymentsNameWorkers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['workers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkflowsDeploymentsNameWorkersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsDeploymentsNameWorkersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsDeploymentsNameArchiveQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name/archive', args] as const
}

export function getV1WorkflowsDeploymentsNameArchiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsDeploymentsNameArchiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].archive.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsDeploymentsNameArchive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['archive']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkflowsDeploymentsNameArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsDeploymentsNameArchiveQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1WorkflowsDeploymentsArchives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsDeploymentsArchivesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsDeploymentsNameLogsQueryKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name/logs', args] as const
}

export function getV1WorkflowsDeploymentsNameLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsDeploymentsNameLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsDeploymentsNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsDeploymentsNameLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsDeploymentsNameLogsStreamQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/workflows/deployments/:name/logs/stream', keyArgs] as const
}

export function getV1WorkflowsDeploymentsNameLogsStreamQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsDeploymentsNameLogsStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.deployments[':name'].logs.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsDeploymentsNameLogsStream<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WorkflowsDeploymentsNameLogsStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsDeploymentsNameLogsStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WorkflowsQueryKey(args: InferRequestType<typeof client.v1.workflows.$get>) {
  return ['v1', '/v1/workflows', args] as const
}

export function getV1WorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsQueryKey>
  >({
    queryKey: getV1WorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Workflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WorkflowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1WorkflowsRegistrationsQueryKey(
  args: InferRequestType<typeof client.v1.workflows.registrations.$get>,
) {
  return ['v1', '/v1/workflows/registrations', args] as const
}

export function getV1WorkflowsRegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.workflows.registrations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkflowsRegistrationsQueryKey>
  >({
    queryKey: getV1WorkflowsRegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.registrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsRegistrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.workflows.registrations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WorkflowsRegistrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsRegistrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1WorkflowsWorkflowIdentifierExecute<
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
                ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsWorkflowIdentifierExecuteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecute<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsWorkflowIdentifierQueryKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>,
) {
  return ['v1', '/v1/workflows/:workflow_identifier', args] as const
}

export function getV1WorkflowsWorkflowIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsWorkflowIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows[':workflow_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsWorkflowIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsWorkflowIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1WorkflowsWorkflowIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WorkflowsWorkflowIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
  >,
) {
  return ['v1', '/v1/workflows/registrations/:workflow_registration_id', args] as const
}

export function getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.workflows.registrations[':workflow_registration_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WorkflowsRegistrationsWorkflowRegistrationId<
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
  args: () => InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WorkflowsRegistrationsWorkflowRegistrationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPutV1WorkflowsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.archive.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workflows.archive.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WorkflowsArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutV1WorkflowsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.unarchive.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.workflows.unarchive.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WorkflowsUnarchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1WorkflowsWorkflowIdentifierTags<
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
                  ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WorkflowsWorkflowIdentifierTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutV1WorkflowsWorkflowIdentifierArchive<
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
                ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WorkflowsWorkflowIdentifierArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutV1WorkflowsWorkflowIdentifierUnarchive<
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
                  (typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WorkflowsWorkflowIdentifierUnarchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1RagIngestionPipelineConfigurationsQueryKey() {
  return ['v1', '/v1/rag/ingestion_pipeline_configurations'] as const
}

export function getV1RagIngestionPipelineConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getV1RagIngestionPipelineConfigurationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rag.ingestion_pipeline_configurations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1RagIngestionPipelineConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
      >
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
              Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1RagIngestionPipelineConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1RagIngestionPipelineConfigurationsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  })
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

export function injectPutV1RagIngestionPipelineConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RagIngestionPipelineConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutV1RagIngestionPipelineConfigurationsIdRunInfo<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1RagIngestionPipelineConfigurationsIdRunInfoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ContextSearchIndexesQueryKey(
  args: InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>,
) {
  return ['v1', '/v1/context/search-indexes', args] as const
}

export function getV1ContextSearchIndexesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ContextSearchIndexesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.context['search-indexes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ContextSearchIndexes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ContextSearchIndexesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1ContextSearchIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContextSearchIndexesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ContextSearchIndexesIndexNameQueryKey(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>,
) {
  return ['v1', '/v1/context/search-indexes/:index_name', args] as const
}

export function getV1ContextSearchIndexesIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ContextSearchIndexesIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ContextSearchIndexesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ContextSearchIndexesIndexNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ContextSearchIndexesIndexNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutV1ContextSearchIndexesIndexName<
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
                ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ContextSearchIndexesIndexNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1ContextSearchIndexesIndexName<
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
                ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ContextSearchIndexesIndexNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ContextSearchIndexesIndexNameDocuments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContextSearchIndexesIndexNameDocumentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1ContextSearchIndexesIndexNameDocuments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ContextSearchIndexesIndexNameDocumentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ContextSearchIndexesIndexNameSearch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContextSearchIndexesIndexNameSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ContextSearchIndexesIndexNameNavigate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContextSearchIndexesIndexNameNavigateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ContextSearchIndexesIndexNameRead<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContextSearchIndexesIndexNameReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ContextSearchIndexesIndexNameGrep<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ContextSearchIndexesIndexNameGrepMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1ContextSearchIndexesIndexNameChunksChunkIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
  >,
) {
  return ['v1', '/v1/context/search-indexes/:index_name/chunks/:chunk_id', args] as const
}

export function getV1ContextSearchIndexesIndexNameChunksChunkIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ContextSearchIndexesIndexNameChunksChunkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].chunks[':chunk_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ContextSearchIndexesIndexNameChunksChunkId<
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
  args: () => InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ContextSearchIndexesIndexNameChunksChunkIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryKey(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
  >,
) {
  return ['v1', '/v1/context/search-indexes/:index_name/summary_field/:language', args] as const
}

export function getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
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
  args: () => InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ContextSearchIndexesIndexNameSummaryFieldLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
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

export function injectPutV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ContextSearchIndexesIndexNameSummaryFieldLanguageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1TriggersQueryKey(args: InferRequestType<typeof client.v1.triggers.$get>) {
  return ['v1', '/v1/triggers', args] as const
}

export function getV1TriggersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.triggers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TriggersQueryKey>
  >({
    queryKey: getV1TriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.triggers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Triggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.triggers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TriggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TriggersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1Triggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.triggers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TriggersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1TriggersTriggerIdQueryKey(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>,
) {
  return ['v1', '/v1/triggers/:trigger_id', args] as const
}

export function getV1TriggersTriggerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TriggersTriggerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.triggers[':trigger_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TriggersTriggerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TriggersTriggerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV1TriggersTriggerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TriggersTriggerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1TriggersTriggerIdEventsQueryKey(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>,
) {
  return ['v1', '/v1/triggers/:trigger_id/events', args] as const
}

export function getV1TriggersTriggerIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TriggersTriggerIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.triggers[':trigger_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TriggersTriggerIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TriggersTriggerIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1WebhooksQueryKey() {
  return ['v1', '/v1/webhooks'] as const
}

export function getV1WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >({
    queryKey: getV1WebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WebhooksQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:webhook_id', args] as const
}

export function getV1WebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV1WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1WebhooksWebhookIdSigningSecretQueryKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>,
) {
  return ['v1', '/v1/webhooks/:webhook_id/signing-secret', args] as const
}

export function getV1WebhooksWebhookIdSigningSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1WebhooksWebhookIdSigningSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks[':webhook_id']['signing-secret'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WebhooksWebhookIdSigningSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1WebhooksWebhookIdSigningSecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1WebhooksWebhookIdSigningSecretQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1UsersMeQueryKey() {
  return ['v1', '/v1/users/me'] as const
}

export function getV1UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeQueryKey>
  >({
    queryKey: getV1UsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1UsersMeOrganizationsQueryKey(
  args: InferRequestType<typeof client.v1.users.me.organizations.$get>,
) {
  return ['v1', '/v1/users/me/organizations', args] as const
}

export function getV1UsersMeOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.users.me.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeOrganizationsQueryKey>
  >({
    queryKey: getV1UsersMeOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.me.organizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1UsersMeOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.users.me.organizations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersMeOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1UsersMeOrganizationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1UsersMeWorkspacesQueryKey(
  args: InferRequestType<typeof client.v1.users.me.workspaces.$get>,
) {
  return ['v1', '/v1/users/me/workspaces', args] as const
}

export function getV1UsersMeWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.users.me.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersMeWorkspacesQueryKey>
  >({
    queryKey: getV1UsersMeWorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.users.me.workspaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1UsersMeWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.users.me.workspaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UsersMeWorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1UsersMeWorkspacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1WhoamiQueryKey() {
  return ['v1', '/v1/whoami'] as const
}

export function getV1WhoamiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WhoamiQueryKey>
  >({
    queryKey: getV1WhoamiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.whoami.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Whoami<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WhoamiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WhoamiQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1BillingBudgetQueryKey() {
  return ['v1', '/v1/billing/budget'] as const
}

export function getV1BillingBudgetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingBudgetQueryKey>
  >({
    queryKey: getV1BillingBudgetQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.billing.budget.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BillingBudget<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingBudgetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BillingBudgetQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1BillingSubscriptionQueryKey() {
  return ['v1', '/v1/billing/subscription'] as const
}

export function getV1BillingSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingSubscriptionQueryKey>
  >({
    queryKey: getV1BillingSubscriptionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.billing.subscription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1BillingSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingSubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BillingSubscriptionQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPostV1AdminUsageQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.admin.usage.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUsageQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUsersQueryKey(args: InferRequestType<typeof client.v1.admin.users.$get>) {
  return ['v1', '/v1/admin/users', args] as const
}

export function getV1AdminUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.admin.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsersQueryKey>
  >({
    queryKey: getV1AdminUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.admin.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1AdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.admin.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUsersInviteQueryKey() {
  return ['v1', '/v1/admin/users-invite'] as const
}

export function getV1AdminUsersInviteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsersInviteQueryKey>
  >({
    queryKey: getV1AdminUsersInviteQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['users-invite'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminUsersInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>>
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
              Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminUsersInviteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminUsersInviteQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPostV1AdminUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUsersInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AdminUsersInviteInviteUuid<
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
                ReturnType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AdminUsersInviteInviteUuidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>,
) {
  return ['v1', '/v1/admin/users/:user_id', args] as const
}

export function getV1AdminUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteV1AdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AdminUsersUserIdDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUsersUserIdDeactivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AdminUsersUserIdReactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUsersUserIdReactivateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUsersUserIdWorkspacesQueryKey(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>,
) {
  return ['v1', '/v1/admin/users/:user_id/workspaces', args] as const
}

export function getV1AdminUsersUserIdWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminUsersUserIdWorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.users[':user_id'].workspaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminUsersUserIdWorkspaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminUsersUserIdWorkspacesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1AdminRolesQueryKey() {
  return ['v1', '/v1/admin/roles'] as const
}

export function getV1AdminRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminRolesQueryKey>
  >({
    queryKey: getV1AdminRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AdminRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminRolesQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1AdminWorkspacesQueryKey(
  args: InferRequestType<typeof client.v1.admin.workspaces.$get>,
) {
  return ['v1', '/v1/admin/workspaces', args] as const
}

export function getV1AdminWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.admin.workspaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminWorkspacesQueryKey>
  >({
    queryKey: getV1AdminWorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.workspaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AdminWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.admin.workspaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminWorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminWorkspacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1AdminWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.admin.workspaces.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminWorkspacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AdminWorkspacesWorkspaceUuid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AdminWorkspacesWorkspaceUuidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AdminWorkspacesWorkspaceUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AdminWorkspacesWorkspaceUuidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminWorkspacesWorkspaceUuidUsersQueryKey(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>,
) {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/users', args] as const
}

export function getV1AdminWorkspacesWorkspaceUuidUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminWorkspacesWorkspaceUuidUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.workspaces[':workspace_uuid'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminWorkspacesWorkspaceUuidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminWorkspacesWorkspaceUuidUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPatchV1AdminWorkspacesWorkspaceUuidUsers<
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
                  (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AdminWorkspacesWorkspaceUuidUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AdminWorkspacesWorkspaceUuidAddUsers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminWorkspacesWorkspaceUuidAddUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminRateLimitQueryKey() {
  return ['v1', '/v1/admin/rate-limit'] as const
}

export function getV1AdminRateLimitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminRateLimitQueryKey>
  >({
    queryKey: getV1AdminRateLimitQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['rate-limit'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminRateLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
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
              Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminRateLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminRateLimitQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getV1AdminSpendLimitQueryKey() {
  return ['v1', '/v1/admin/spend-limit'] as const
}

export function getV1AdminSpendLimitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminSpendLimitQueryKey>
  >({
    queryKey: getV1AdminSpendLimitQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['spend-limit'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminSpendLimit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
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
              Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminSpendLimitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminSpendLimitQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPostV1AdminSpendLimit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminSpendLimitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUsageQueryKey(args: InferRequestType<typeof client.v1.admin.usage.$get>) {
  return ['v1', '/v1/admin/usage', args] as const
}

export function getV1AdminUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.admin.usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUsageQueryKey>
  >({
    queryKey: getV1AdminUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AdminUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.admin.usage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1AdminAuditLogsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>,
) {
  return ['v1', '/v1/admin/audit-logs', args] as const
}

export function getV1AdminAuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminAuditLogsQueryKey>
  >({
    queryKey: getV1AdminAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['audit-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminAuditLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminAuditLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getV1AdminUserGroupsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>,
) {
  return ['v1', '/v1/admin/user-groups', args] as const
}

export function getV1AdminUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminUserGroupsQueryKey>
  >({
    queryKey: getV1AdminUserGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['user-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminUserGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminUserGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1AdminUserGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUserGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AdminUserGroupsProvisionWorkspace<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUserGroupsProvisionWorkspaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUserGroupsGroupUuidQueryKey(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid', args] as const
}

export function getV1AdminUserGroupsGroupUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminUserGroupsGroupUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminUserGroupsGroupUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminUserGroupsGroupUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteV1AdminUserGroupsGroupUuid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AdminUserGroupsGroupUuidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AdminUserGroupsGroupUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AdminUserGroupsGroupUuidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUserGroupsGroupUuidMembersQueryKey(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid/members', args] as const
}

export function getV1AdminUserGroupsGroupUuidMembersQueryOptions<
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
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminUserGroupsGroupUuidMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminUserGroupsGroupUuidMembers<
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
  args: () => InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AdminUserGroupsGroupUuidMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminUserGroupsGroupUuidMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1AdminUserGroupsGroupUuidMembers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUserGroupsGroupUuidMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AdminUserGroupsGroupUuidMembers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AdminUserGroupsGroupUuidMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminUserGroupsGroupUuidWorkspacesQueryKey(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
  >,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces', args] as const
}

export function getV1AdminUserGroupsGroupUuidWorkspacesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminUserGroupsGroupUuidWorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['user-groups'][':group_uuid'].workspaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminUserGroupsGroupUuidWorkspaces<
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
  args: () => InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AdminUserGroupsGroupUuidWorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminUserGroupsGroupUuidWorkspacesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostV1AdminUserGroupsGroupUuidWorkspaces<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminUserGroupsGroupUuidWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchV1AdminUserGroupsGroupUuidOrganizationRole<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AdminUserGroupsGroupUuidOrganizationRoleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminApiKeysQueryKey(
  args: InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>,
) {
  return ['v1', '/v1/admin/api-keys', args] as const
}

export function getV1AdminApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminApiKeysQueryKey>
  >({
    queryKey: getV1AdminApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin['api-keys'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AdminApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AdminApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostV1AdminApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.admin)['api-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminApiKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteV1AdminApiKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AdminApiKeysKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostV1AdminScimSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.scim.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.admin.scim.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AdminScimSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getV1AdminScimSyncRunIdQueryKey(
  args: InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>,
) {
  return ['v1', '/v1/admin/scim/sync/:run_id', args] as const
}

export function getV1AdminScimSyncRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminScimSyncRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.scim.sync[':run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminScimSyncRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminScimSyncRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_user_stats', args] as const
}

export function getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminAnalyticsVibeWorkUsageByUserStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminAnalyticsVibeWorkUsageByUserStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_agent_stats', args] as const
}

export function getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminAnalyticsVibeWorkUsageByAgentStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminAnalyticsVibeWorkUsageByAgentStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_time_stats', args] as const
}

export function getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminAnalyticsVibeWorkUsageByTimeStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminAnalyticsVibeWorkUsageByTimeStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/code/usage/by_workspace', args] as const
}

export function getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.analytics.vibe.code.usage.by_workspace.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminAnalyticsVibeCodeUsageByWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminAnalyticsVibeCodeUsageByWorkspaceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/code/usage/by_organization', args] as const
}

export function getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin.analytics.vibe.code.usage.by_organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AdminAnalyticsVibeCodeUsageByOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AdminAnalyticsVibeCodeUsageByOrganizationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}
