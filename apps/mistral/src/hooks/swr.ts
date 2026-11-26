import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2PromptsKey(args: InferRequestType<typeof client.v2.prompts.$get>) {
  return ['v2', '/v2/prompts', args] as const
}

export function useGetV2Prompts<TError = unknown>(
  args: InferRequestType<typeof client.v2.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PromptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Prompts<TError = unknown>(
  args: InferRequestType<typeof client.v2.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PromptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PromptsKey() {
  return ['v2', '/v2/prompts', 'POST'] as const
}

export function usePostV2Prompts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.prompts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.prompts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PromptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.prompts.$post> }) =>
        parseResponse(client.v2.prompts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PromptsPromptIdKey(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>,
) {
  return ['v2', '/v2/prompts/:prompt_id', args] as const
}

export function useGetV2PromptsPromptId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PromptsPromptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.prompts[':prompt_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PromptsPromptId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PromptsPromptIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.prompts[':prompt_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PromptsPromptIdKey() {
  return ['v2', '/v2/prompts/:prompt_id', 'DELETE'] as const
}

export function useDeleteV2PromptsPromptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PromptsPromptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$delete']> },
      ) => parseResponse(client.v2.prompts[':prompt_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2PromptsPromptIdKey() {
  return ['v2', '/v2/prompts/:prompt_id', 'PATCH'] as const
}

export function usePatchV2PromptsPromptId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2PromptsPromptIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['$patch']> },
      ) => parseResponse(client.v2.prompts[':prompt_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PromptsPromptIdVersionsKey(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>,
) {
  return ['v2', '/v2/prompts/:prompt_id/versions', args] as const
}

export function useGetV2PromptsPromptIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PromptsPromptIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.prompts[':prompt_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PromptsPromptIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PromptsPromptIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.prompts[':prompt_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PromptsPromptIdVersionsKey() {
  return ['v2', '/v2/prompts/:prompt_id/versions', 'POST'] as const
}

export function usePostV2PromptsPromptIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PromptsPromptIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions']['$post']> },
      ) => parseResponse(client.v2.prompts[':prompt_id'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PromptsPromptIdVersionsVersionKey(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>,
) {
  return ['v2', '/v2/prompts/:prompt_id/versions/:version', args] as const
}

export function useGetV2PromptsPromptIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PromptsPromptIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.prompts[':prompt_id'].versions[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PromptsPromptIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PromptsPromptIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.prompts[':prompt_id'].versions[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2PromptsPromptIdVersionsVersionKey() {
  return ['v2', '/v2/prompts/:prompt_id/versions/:version', 'PATCH'] as const
}

export function usePatchV2PromptsPromptIdVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2PromptsPromptIdVersionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.prompts)[':prompt_id']['versions'][':version']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.prompts[':prompt_id'].versions[':version'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2SkillsKey(args: InferRequestType<typeof client.v2.skills.$get>) {
  return ['v2', '/v2/skills', args] as const
}

export function useGetV2Skills<TError = unknown>(
  args: InferRequestType<typeof client.v2.skills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SkillsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.skills.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Skills<TError = unknown>(
  args: InferRequestType<typeof client.v2.skills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SkillsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.skills.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SkillsKey() {
  return ['v2', '/v2/skills', 'POST'] as const
}

export function usePostV2Skills<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.skills.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.skills.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SkillsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.skills.$post> }) =>
        parseResponse(client.v2.skills.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SkillsSkillIdKey(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>,
) {
  return ['v2', '/v2/skills/:skill_id', args] as const
}

export function useGetV2SkillsSkillId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SkillsSkillIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.skills[':skill_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SkillsSkillId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SkillsSkillIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.skills[':skill_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SkillsSkillIdKey() {
  return ['v2', '/v2/skills/:skill_id', 'DELETE'] as const
}

export function useDeleteV2SkillsSkillId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SkillsSkillIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.skills)[':skill_id']['$delete']> },
      ) => parseResponse(client.v2.skills[':skill_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SkillsSkillIdKey() {
  return ['v2', '/v2/skills/:skill_id', 'PATCH'] as const
}

export function usePatchV2SkillsSkillId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SkillsSkillIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.skills)[':skill_id']['$patch']> },
      ) => parseResponse(client.v2.skills[':skill_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SkillsSkillIdVersionsKey(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>,
) {
  return ['v2', '/v2/skills/:skill_id/versions', args] as const
}

export function useGetV2SkillsSkillIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SkillsSkillIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.skills[':skill_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SkillsSkillIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SkillsSkillIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.skills[':skill_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SkillsSkillIdVersionsKey() {
  return ['v2', '/v2/skills/:skill_id/versions', 'POST'] as const
}

export function usePostV2SkillsSkillIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SkillsSkillIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions']['$post']> },
      ) => parseResponse(client.v2.skills[':skill_id'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SkillsSkillIdVersionsVersionKey(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>,
) {
  return ['v2', '/v2/skills/:skill_id/versions/:version', args] as const
}

export function useGetV2SkillsSkillIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SkillsSkillIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.skills[':skill_id'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SkillsSkillIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SkillsSkillIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.skills[':skill_id'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2SkillsSkillIdVersionsVersionKey() {
  return ['v2', '/v2/skills/:skill_id/versions/:version', 'PATCH'] as const
}

export function usePatchV2SkillsSkillIdVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SkillsSkillIdVersionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v2.skills)[':skill_id']['versions'][':version']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.skills[':skill_id'].versions[':version'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AudioSpeechKey() {
  return ['v1', '/v1/audio/speech', 'POST'] as const
}

export function usePostV1AudioSpeech<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.speech.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.audio.speech.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AudioSpeechKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.audio.speech.$post> }) =>
        parseResponse(client.v1.audio.speech.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ModelsKey(args: InferRequestType<typeof client.v1.models.$get>) {
  return ['v1', '/v1/models', args] as const
}

export function useGetV1Models<TError = unknown>(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Models<TError = unknown>(
  args: InferRequestType<typeof client.v1.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ModelsModelIdKey(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
) {
  return ['v1', '/v1/models/:model_id', args] as const
}

export function useGetV1ModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models[':model_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.models)[':model_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.models[':model_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ModelsModelIdKey() {
  return ['v1', '/v1/models/:model_id', 'DELETE'] as const
}

export function useDeleteV1ModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.models)[':model_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.models)[':model_id']['$delete']> },
      ) => parseResponse(client.v1.models[':model_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ResponsesKey() {
  return ['v1', '/v1/responses', 'POST'] as const
}

export function usePostV1Responses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.responses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.responses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ResponsesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.responses.$post> }) =>
        parseResponse(client.v1.responses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ResponsesInputTokensKey() {
  return ['v1', '/v1/responses/input_tokens', 'POST'] as const
}

export function usePostV1ResponsesInputTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responses.input_tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.responses.input_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ResponsesInputTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.responses.input_tokens.$post> },
      ) => parseResponse(client.v1.responses.input_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ClientSessionsKey() {
  return ['v1', '/v1/client/sessions', 'POST'] as const
}

export function usePostV1ClientSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.client.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.client.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClientSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.client.sessions.$post> }) =>
        parseResponse(client.v1.client.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ServiceAccountsKey(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
) {
  return ['v1', '/v1/service-accounts', args] as const
}

export function useGetV1ServiceAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['service-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ServiceAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['service-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['service-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ServiceAccountsKey() {
  return ['v1', '/v1/service-accounts', 'POST'] as const
}

export function usePostV1ServiceAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['service-accounts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['service-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ServiceAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['service-accounts']['$post']> },
      ) => parseResponse(client.v1['service-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ServiceAccountsAssignableRolesKey(
  args: InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>,
) {
  return ['v1', '/v1/service-accounts/assignable-roles', args] as const
}

export function useGetV1ServiceAccountsAssignableRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsAssignableRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['service-accounts']['assignable-roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ServiceAccountsAssignableRoles<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsAssignableRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['service-accounts']['assignable-roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['service-accounts']['assignable-roles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ServiceAccountsServiceAccountIdKey(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>,
) {
  return ['v1', '/v1/service-accounts/:service_account_id', args] as const
}

export function useGetV1ServiceAccountsServiceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsServiceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['service-accounts'][':service_account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ServiceAccountsServiceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsServiceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['service-accounts'][':service_account_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['service-accounts'][':service_account_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ServiceAccountsServiceAccountIdKey() {
  return ['v1', '/v1/service-accounts/:service_account_id', 'DELETE'] as const
}

export function useDeleteV1ServiceAccountsServiceAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ServiceAccountsServiceAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['service-accounts'][':service_account_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['service-accounts'][':service_account_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ServiceAccountsServiceAccountIdKey() {
  return ['v1', '/v1/service-accounts/:service_account_id', 'PATCH'] as const
}

export function usePatchV1ServiceAccountsServiceAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ServiceAccountsServiceAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['service-accounts'][':service_account_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1['service-accounts'][':service_account_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ServiceAccountsServiceAccountIdRolesKey(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
  >,
) {
  return ['v1', '/v1/service-accounts/:service_account_id/roles', args] as const
}

export function useGetV1ServiceAccountsServiceAccountIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsServiceAccountIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['service-accounts'][':service_account_id'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ServiceAccountsServiceAccountIdRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ServiceAccountsServiceAccountIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['service-accounts'][':service_account_id'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ServiceAccountsServiceAccountIdRolesKey() {
  return ['v1', '/v1/service-accounts/:service_account_id/roles', 'PUT'] as const
}

export function usePutV1ServiceAccountsServiceAccountIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ServiceAccountsServiceAccountIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['service-accounts'][':service_account_id']['roles']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['service-accounts'][':service_account_id'].roles.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConversationsKey(
  args: InferRequestType<typeof client.v1.conversations.$get>,
) {
  return ['v1', '/v1/conversations', args] as const
}

export function useGetV1Conversations<TError = unknown>(
  args: InferRequestType<typeof client.v1.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Conversations<TError = unknown>(
  args: InferRequestType<typeof client.v1.conversations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConversationsKey() {
  return ['v1', '/v1/conversations', 'POST'] as const
}

export function usePostV1Conversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.conversations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.conversations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.conversations.$post> }) =>
        parseResponse(client.v1.conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConversationsConversationIdKey(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>,
) {
  return ['v1', '/v1/conversations/:conversation_id', args] as const
}

export function useGetV1ConversationsConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.conversations[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConversationsConversationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsConversationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.conversations[':conversation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConversationsConversationIdKey() {
  return ['v1', '/v1/conversations/:conversation_id', 'POST'] as const
}

export function usePostV1ConversationsConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$post']> },
      ) => parseResponse(client.v1.conversations[':conversation_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConversationsConversationIdKey() {
  return ['v1', '/v1/conversations/:conversation_id', 'DELETE'] as const
}

export function useDeleteV1ConversationsConversationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConversationsConversationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['$delete']>
        },
      ) => parseResponse(client.v1.conversations[':conversation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConversationsConversationIdHistoryKey(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>,
) {
  return ['v1', '/v1/conversations/:conversation_id/history', args] as const
}

export function useGetV1ConversationsConversationIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsConversationIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.conversations[':conversation_id'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConversationsConversationIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsConversationIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.conversations[':conversation_id'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConversationsConversationIdMessagesKey(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>,
) {
  return ['v1', '/v1/conversations/:conversation_id/messages', args] as const
}

export function useGetV1ConversationsConversationIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.conversations[':conversation_id'].messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConversationsConversationIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConversationsConversationIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.conversations)[':conversation_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.conversations[':conversation_id'].messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConversationsConversationIdRestartKey() {
  return ['v1', '/v1/conversations/:conversation_id/restart', 'POST'] as const
}

export function usePostV1ConversationsConversationIdRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id']['restart']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConversationsConversationIdRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.conversations)[':conversation_id']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.conversations[':conversation_id'].restart.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentsKey(args: InferRequestType<typeof client.v1.agents.$get>) {
  return ['v1', '/v1/agents', args] as const
}

export function useGetV1Agents<TError = unknown>(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Agents<TError = unknown>(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AgentsKey() {
  return ['v1', '/v1/agents', 'POST'] as const
}

export function usePostV1Agents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.agents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.agents.$post> }) =>
        parseResponse(client.v1.agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentsPagesKey(args: InferRequestType<typeof client.v1.agents.pages.$get>) {
  return ['v1', '/v1/agents/pages', args] as const
}

export function useGetV1AgentsPages<TError = unknown>(
  args: InferRequestType<typeof client.v1.agents.pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AgentsPagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentsPages<TError = unknown>(
  args: InferRequestType<typeof client.v1.agents.pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AgentsPagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents.pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AgentsAgentIdKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id', args] as const
}

export function useGetV1AgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AgentsAgentIdKey() {
  return ['v1', '/v1/agents/:agent_id', 'DELETE'] as const
}

export function useDeleteV1AgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.agents)[':agent_id']['$delete']> },
      ) => parseResponse(client.v1.agents[':agent_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AgentsAgentIdKey() {
  return ['v1', '/v1/agents/:agent_id', 'PATCH'] as const
}

export function usePatchV1AgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.agents)[':agent_id']['$patch']> },
      ) => parseResponse(client.v1.agents[':agent_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AgentsAgentIdVersionKey() {
  return ['v1', '/v1/agents/:agent_id/version', 'PATCH'] as const
}

export function usePatchV1AgentsAgentIdVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['version']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AgentsAgentIdVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.agents)[':agent_id']['version']['$patch']> },
      ) => parseResponse(client.v1.agents[':agent_id'].version.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentsAgentIdVersionsKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id/versions', args] as const
}

export function useGetV1AgentsAgentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':agent_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentsAgentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':agent_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AgentsAgentIdVersionsVersionKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id/versions/:version', args] as const
}

export function useGetV1AgentsAgentIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agents[':agent_id'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentsAgentIdVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agents)[':agent_id']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agents[':agent_id'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AgentsAgentIdAliasesKey(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>,
) {
  return ['v1', '/v1/agents/:agent_id/aliases', args] as const
}

export function useGetV1AgentsAgentIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':agent_id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentsAgentIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsAgentIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':agent_id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AgentsAgentIdAliasesKey() {
  return ['v1', '/v1/agents/:agent_id/aliases', 'PUT'] as const
}

export function usePutV1AgentsAgentIdAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AgentsAgentIdAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$put']> },
      ) => parseResponse(client.v1.agents[':agent_id'].aliases.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AgentsAgentIdAliasesKey() {
  return ['v1', '/v1/agents/:agent_id/aliases', 'DELETE'] as const
}

export function useDeleteV1AgentsAgentIdAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AgentsAgentIdAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.agents)[':agent_id']['aliases']['$delete']> },
      ) => parseResponse(client.v1.agents[':agent_id'].aliases.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConversationsStreamKey() {
  return ['v1', '/v1/conversations#stream', 'POST'] as const
}

export function usePostV1ConversationsStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['conversations#stream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['conversations#stream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConversationsStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['conversations#stream']['$post']> },
      ) => parseResponse(client.v1['conversations#stream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConversationsConversationIdStreamKey() {
  return ['v1', '/v1/conversations/:conversation_id#stream', 'POST'] as const
}

export function usePostV1ConversationsConversationIdStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.conversations)[':conversation_id#stream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConversationsConversationIdStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.conversations)[':conversation_id#stream']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.conversations[':conversation_id#stream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConversationsConversationIdRestartStreamKey() {
  return ['v1', '/v1/conversations/:conversation_id/restart#stream', 'POST'] as const
}

export function usePostV1ConversationsConversationIdRestartStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConversationsConversationIdRestartStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.conversations)[':conversation_id']['restart#stream']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.conversations[':conversation_id']['restart#stream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesKey(args: InferRequestType<typeof client.v1.files.$get>) {
  return ['v1', '/v1/files', args] as const
}

export function useGetV1Files<TError = unknown>(
  args: InferRequestType<typeof client.v1.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Files<TError = unknown>(
  args: InferRequestType<typeof client.v1.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1FilesKey() {
  return ['v1', '/v1/files', 'POST'] as const
}

export function usePostV1Files<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.files.$post> }) =>
        parseResponse(client.v1.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesFileIdKey(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['$get']>,
) {
  return ['v1', '/v1/files/:file_id', args] as const
}

export function useGetV1FilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1FilesFileIdKey() {
  return ['v1', '/v1/files/:file_id', 'DELETE'] as const
}

export function useDeleteV1FilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.files)[':file_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.files)[':file_id']['$delete']> },
      ) => parseResponse(client.v1.files[':file_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesFileIdContentKey(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>,
) {
  return ['v1', '/v1/files/:file_id/content', args] as const
}

export function useGetV1FilesFileIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileIdUrlKey(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>,
) {
  return ['v1', '/v1/files/:file_id/url', args] as const
}

export function useGetV1FilesFileIdUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileIdUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_id'].url.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileIdUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_id']['url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileIdUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_id']['url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_id'].url.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1FineTuningModelsModelIdKey() {
  return ['v1', '/v1/fine_tuning/models/:model_id', 'PATCH'] as const
}

export function usePatchV1FineTuningModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1FineTuningModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['$patch']> },
      ) => parseResponse(client.v1.fine_tuning.models[':model_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FineTuningModelsModelIdArchiveKey() {
  return ['v1', '/v1/fine_tuning/models/:model_id/archive', 'POST'] as const
}

export function usePostV1FineTuningModelsModelIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FineTuningModelsModelIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.fine_tuning.models)[':model_id']['archive']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.fine_tuning.models[':model_id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FineTuningModelsModelIdArchiveKey() {
  return ['v1', '/v1/fine_tuning/models/:model_id/archive', 'DELETE'] as const
}

export function useDeleteV1FineTuningModelsModelIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FineTuningModelsModelIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.fine_tuning.models)[':model_id']['archive']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.fine_tuning.models[':model_id'].archive.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1BatchJobsKey(args: InferRequestType<typeof client.v1.batch.jobs.$get>) {
  return ['v1', '/v1/batch/jobs', args] as const
}

export function useGetV1BatchJobs<TError = unknown>(
  args: InferRequestType<typeof client.v1.batch.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BatchJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batch.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BatchJobs<TError = unknown>(
  args: InferRequestType<typeof client.v1.batch.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BatchJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batch.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BatchJobsKey() {
  return ['v1', '/v1/batch/jobs', 'POST'] as const
}

export function usePostV1BatchJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batch.jobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.batch.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BatchJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.batch.jobs.$post> }) =>
        parseResponse(client.v1.batch.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BatchJobsJobIdKey(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>,
) {
  return ['v1', '/v1/batch/jobs/:job_id', args] as const
}

export function useGetV1BatchJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BatchJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batch.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BatchJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BatchJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batch.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BatchJobsJobIdKey() {
  return ['v1', '/v1/batch/jobs/:job_id', 'DELETE'] as const
}

export function useDeleteV1BatchJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BatchJobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['$delete']> },
      ) => parseResponse(client.v1.batch.jobs[':job_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BatchJobsJobIdCancelKey() {
  return ['v1', '/v1/batch/jobs/:job_id/cancel', 'POST'] as const
}

export function usePostV1BatchJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BatchJobsJobIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.batch.jobs)[':job_id']['cancel']['$post']> },
      ) => parseResponse(client.v1.batch.jobs[':job_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ChatCompletionsKey() {
  return ['v1', '/v1/chat/completions', 'POST'] as const
}

export function usePostV1ChatCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.chat.completions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChatCompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.chat.completions.$post> }) =>
        parseResponse(client.v1.chat.completions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FimCompletionsKey() {
  return ['v1', '/v1/fim/completions', 'POST'] as const
}

export function usePostV1FimCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.fim.completions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.fim.completions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FimCompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.fim.completions.$post> }) =>
        parseResponse(client.v1.fim.completions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AgentsCompletionsKey() {
  return ['v1', '/v1/agents/completions', 'POST'] as const
}

export function usePostV1AgentsCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.completions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.agents.completions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentsCompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.agents.completions.$post> },
      ) => parseResponse(client.v1.agents.completions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EmbeddingsKey() {
  return ['v1', '/v1/embeddings', 'POST'] as const
}

export function usePostV1Embeddings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embeddings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.embeddings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmbeddingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.embeddings.$post> }) =>
        parseResponse(client.v1.embeddings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ModerationsKey() {
  return ['v1', '/v1/moderations', 'POST'] as const
}

export function usePostV1Moderations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.moderations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.moderations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ModerationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.moderations.$post> }) =>
        parseResponse(client.v1.moderations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ChatModerationsKey() {
  return ['v1', '/v1/chat/moderations', 'POST'] as const
}

export function usePostV1ChatModerations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.moderations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.chat.moderations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChatModerationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.chat.moderations.$post> }) =>
        parseResponse(client.v1.chat.moderations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OcrKey() {
  return ['v1', '/v1/ocr', 'POST'] as const
}

export function usePostV1Ocr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ocr.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.ocr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OcrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ocr.$post> }) =>
        parseResponse(client.v1.ocr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ClassificationsKey() {
  return ['v1', '/v1/classifications', 'POST'] as const
}

export function usePostV1Classifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.classifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.classifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClassificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.classifications.$post> }) =>
        parseResponse(client.v1.classifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ChatClassificationsKey() {
  return ['v1', '/v1/chat/classifications', 'POST'] as const
}

export function usePostV1ChatClassifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.classifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.chat.classifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChatClassificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.chat.classifications.$post> },
      ) => parseResponse(client.v1.chat.classifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AudioTranscriptionsKey() {
  return ['v1', '/v1/audio/transcriptions', 'POST'] as const
}

export function usePostV1AudioTranscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.transcriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.audio.transcriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AudioTranscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.audio.transcriptions.$post> },
      ) => parseResponse(client.v1.audio.transcriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AudioTranscriptionsStreamKey() {
  return ['v1', '/v1/audio/transcriptions#stream', 'POST'] as const
}

export function usePostV1AudioTranscriptionsStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio)['transcriptions#stream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audio)['transcriptions#stream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AudioTranscriptionsStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.audio)['transcriptions#stream']['$post']> },
      ) => parseResponse(client.v1.audio['transcriptions#stream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LibrariesKey(args: InferRequestType<typeof client.v1.libraries.$get>) {
  return ['v1', '/v1/libraries', args] as const
}

export function useGetV1Libraries<TError = unknown>(
  args: InferRequestType<typeof client.v1.libraries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LibrariesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.libraries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Libraries<TError = unknown>(
  args: InferRequestType<typeof client.v1.libraries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LibrariesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.libraries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LibrariesKey() {
  return ['v1', '/v1/libraries', 'POST'] as const
}

export function usePostV1Libraries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.libraries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.libraries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LibrariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.libraries.$post> }) =>
        parseResponse(client.v1.libraries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdKey(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>,
) {
  return ['v1', '/v1/libraries/:library_id', args] as const
}

export function useGetV1LibrariesLibraryId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.libraries[':library_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.libraries[':library_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1LibrariesLibraryIdKey() {
  return ['v1', '/v1/libraries/:library_id', 'PUT'] as const
}

export function usePutV1LibrariesLibraryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1LibrariesLibraryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.libraries)[':library_id']['$put']> },
      ) => parseResponse(client.v1.libraries[':library_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1LibrariesLibraryIdKey() {
  return ['v1', '/v1/libraries/:library_id', 'DELETE'] as const
}

export function useDeleteV1LibrariesLibraryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1LibrariesLibraryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.libraries)[':library_id']['$delete']> },
      ) => parseResponse(client.v1.libraries[':library_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1LibrariesLibraryIdKey() {
  return ['v1', '/v1/libraries/:library_id', 'PATCH'] as const
}

export function usePatchV1LibrariesLibraryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1LibrariesLibraryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.libraries)[':library_id']['$patch']> },
      ) => parseResponse(client.v1.libraries[':library_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdDocumentsKey(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>,
) {
  return ['v1', '/v1/libraries/:library_id/documents', args] as const
}

export function useGetV1LibrariesLibraryIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.libraries[':library_id'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryIdDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.libraries[':library_id'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LibrariesLibraryIdDocumentsKey() {
  return ['v1', '/v1/libraries/:library_id/documents', 'POST'] as const
}

export function usePostV1LibrariesLibraryIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LibrariesLibraryIdDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.libraries)[':library_id']['documents']['$post']>
        },
      ) => parseResponse(client.v1.libraries[':library_id'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', args] as const
}

export function useGetV1LibrariesLibraryIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryIdDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1LibrariesLibraryIdDocumentsDocumentIdKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', 'PUT'] as const
}

export function usePutV1LibrariesLibraryIdDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1LibrariesLibraryIdDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1LibrariesLibraryIdDocumentsDocumentIdKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', 'DELETE'] as const
}

export function useDeleteV1LibrariesLibraryIdDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1LibrariesLibraryIdDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1LibrariesLibraryIdDocumentsDocumentIdKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id', 'PATCH'] as const
}

export function usePatchV1LibrariesLibraryIdDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1LibrariesLibraryIdDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdDocumentsDocumentIdTextContentKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/text_content', args] as const
}

export function useGetV1LibrariesLibraryIdDocumentsDocumentIdTextContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdTextContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].text_content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryIdDocumentsDocumentIdTextContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['text_content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdTextContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].text_content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdDocumentsDocumentIdStatusKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/status', args] as const
}

export function useGetV1LibrariesLibraryIdDocumentsDocumentIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryIdDocumentsDocumentIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlKey(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
  >,
) {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/signed-url', args] as const
}

export function useGetV1LibrariesLibraryIdDocumentsDocumentIdSignedUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id']['signed-url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryIdDocumentsDocumentIdSignedUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['signed-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id']['signed-url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlKey(
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

export function useGetV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrl<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'][
            'extracted-text-signed-url'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrl<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['extracted-text-signed-url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'][
            'extracted-text-signed-url'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1LibrariesLibraryIdDocumentsDocumentIdReprocessKey() {
  return ['v1', '/v1/libraries/:library_id/documents/:document_id/reprocess', 'POST'] as const
}

export function usePostV1LibrariesLibraryIdDocumentsDocumentIdReprocess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LibrariesLibraryIdDocumentsDocumentIdReprocessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.libraries)[':library_id']['documents'][':document_id']['reprocess']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.libraries[':library_id'].documents[':document_id'].reprocess.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1LibrariesLibraryIdShareKey(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>,
) {
  return ['v1', '/v1/libraries/:library_id/share', args] as const
}

export function useGetV1LibrariesLibraryIdShare<TError = unknown>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.libraries[':library_id'].share.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LibrariesLibraryIdShare<TError = unknown>(
  args: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1LibrariesLibraryIdShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.libraries[':library_id'].share.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1LibrariesLibraryIdShareKey() {
  return ['v1', '/v1/libraries/:library_id/share', 'PUT'] as const
}

export function usePutV1LibrariesLibraryIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1LibrariesLibraryIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$put']> },
      ) => parseResponse(client.v1.libraries[':library_id'].share.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1LibrariesLibraryIdShareKey() {
  return ['v1', '/v1/libraries/:library_id/share', 'DELETE'] as const
}

export function useDeleteV1LibrariesLibraryIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1LibrariesLibraryIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.libraries)[':library_id']['share']['$delete']>
        },
      ) => parseResponse(client.v1.libraries[':library_id'].share.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityDatasetsKey(
  args: InferRequestType<typeof client.v1.observability.datasets.$get>,
) {
  return ['v1', '/v1/observability/datasets', args] as const
}

export function useGetV1ObservabilityDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityDatasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObservabilityDatasetsKey() {
  return ['v1', '/v1/observability/datasets', 'POST'] as const
}

export function usePostV1ObservabilityDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.datasets.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.datasets.$post> },
      ) => parseResponse(client.v1.observability.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityDatasetsDatasetIdKey(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id', args] as const
}

export function useGetV1ObservabilityDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.datasets[':dataset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.datasets[':dataset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ObservabilityDatasetsDatasetIdKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id', 'DELETE'] as const
}

export function useDeleteV1ObservabilityDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObservabilityDatasetsDatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$delete']>
        },
      ) =>
        parseResponse(client.v1.observability.datasets[':dataset_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ObservabilityDatasetsDatasetIdKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id', 'PATCH'] as const
}

export function usePatchV1ObservabilityDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ObservabilityDatasetsDatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['$patch']>
        },
      ) =>
        parseResponse(client.v1.observability.datasets[':dataset_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityDatasetsDatasetIdRecordsKey(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/records', args] as const
}

export function useGetV1ObservabilityDatasetsDatasetIdRecords<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityDatasetsDatasetIdRecords<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['records']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObservabilityDatasetsDatasetIdRecordsKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/records', 'POST'] as const
}

export function usePostV1ObservabilityDatasetsDatasetIdRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityDatasetsDatasetIdRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['records']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].records.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityDatasetsDatasetIdRecordsBulkKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/records/bulk', 'POST'] as const
}

export function usePostV1ObservabilityDatasetsDatasetIdRecordsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityDatasetsDatasetIdRecordsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['records']['bulk']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].records.bulk.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromFileKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/imports/from-file', 'POST'] as const
}

export function usePostV1ObservabilityDatasetsDatasetIdImportsFromFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityDatasetsDatasetIdImportsFromFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-file']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].imports['from-file'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromSpansKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/imports/from-spans', 'POST'] as const
}

export function usePostV1ObservabilityDatasetsDatasetIdImportsFromSpans<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityDatasetsDatasetIdImportsFromSpansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-spans']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].imports['from-spans'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityDatasetsDatasetIdImportsFromDatasetKey() {
  return ['v1', '/v1/observability/datasets/:dataset_id/imports/from-dataset', 'POST'] as const
}

export function usePostV1ObservabilityDatasetsDatasetIdImportsFromDataset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityDatasetsDatasetIdImportsFromDatasetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability.datasets)[':dataset_id']['imports']['from-dataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].imports['from-dataset'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityDatasetsDatasetIdExportsToJsonlKey(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/exports/to-jsonl', args] as const
}

export function useGetV1ObservabilityDatasetsDatasetIdExportsToJsonl<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdExportsToJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].exports['to-jsonl'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityDatasetsDatasetIdExportsToJsonl<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['exports']['to-jsonl']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdExportsToJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].exports['to-jsonl'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityDatasetsDatasetIdTasksTaskIdKey(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/tasks/:task_id', args] as const
}

export function useGetV1ObservabilityDatasetsDatasetIdTasksTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].tasks[':task_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityDatasetsDatasetIdTasksTaskId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.datasets)[':dataset_id']['tasks'][':task_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].tasks[':task_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityDatasetsDatasetIdTasksKey(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>,
) {
  return ['v1', '/v1/observability/datasets/:dataset_id/tasks', args] as const
}

export function useGetV1ObservabilityDatasetsDatasetIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityDatasetsDatasetIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetsDatasetIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.datasets)[':dataset_id']['tasks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.datasets[':dataset_id'].tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityDatasetRecordsDatasetRecordIdKey(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id', args] as const
}

export function useGetV1ObservabilityDatasetRecordsDatasetRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetRecordsDatasetRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['dataset-records'][':dataset_record_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityDatasetRecordsDatasetRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityDatasetRecordsDatasetRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['dataset-records'][':dataset_record_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ObservabilityDatasetRecordsDatasetRecordIdKey() {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id', 'DELETE'] as const
}

export function useDeleteV1ObservabilityDatasetRecordsDatasetRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObservabilityDatasetRecordsDatasetRecordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability['dataset-records'][':dataset_record_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityDatasetRecordsBulkDeleteKey() {
  return ['v1', '/v1/observability/dataset-records/bulk-delete', 'POST'] as const
}

export function usePostV1ObservabilityDatasetRecordsBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityDatasetRecordsBulkDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['dataset-records']['bulk-delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability['dataset-records']['bulk-delete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ObservabilityDatasetRecordsDatasetRecordIdPayloadKey() {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id/payload', 'PUT'] as const
}

export function usePutV1ObservabilityDatasetRecordsDatasetRecordIdPayload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObservabilityDatasetRecordsDatasetRecordIdPayloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['payload']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability['dataset-records'][':dataset_record_id'].payload.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesKey() {
  return ['v1', '/v1/observability/dataset-records/:dataset_record_id/properties', 'PUT'] as const
}

export function usePutV1ObservabilityDatasetRecordsDatasetRecordIdProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['dataset-records'][':dataset_record_id']['properties']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability['dataset-records'][':dataset_record_id'].properties.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityPipelinesKey(
  args: InferRequestType<typeof client.v1.observability.pipelines.$get>,
) {
  return ['v1', '/v1/observability/pipelines', args] as const
}

export function useGetV1ObservabilityPipelines<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.pipelines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityPipelinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.pipelines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityPipelines<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.pipelines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityPipelinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.pipelines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObservabilityPipelinesKey() {
  return ['v1', '/v1/observability/pipelines', 'POST'] as const
}

export function usePostV1ObservabilityPipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.pipelines.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.pipelines.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityPipelinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.pipelines.$post> },
      ) => parseResponse(client.v1.observability.pipelines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityPipelinesPipelineIdKey(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>,
) {
  return ['v1', '/v1/observability/pipelines/:pipeline_id', args] as const
}

export function useGetV1ObservabilityPipelinesPipelineId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityPipelinesPipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.pipelines[':pipeline_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityPipelinesPipelineId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityPipelinesPipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.pipelines[':pipeline_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObservabilityPipelinesPipelineIdKey() {
  return ['v1', '/v1/observability/pipelines/:pipeline_id', 'PUT'] as const
}

export function usePutV1ObservabilityPipelinesPipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObservabilityPipelinesPipelineIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$put']>
        },
      ) =>
        parseResponse(client.v1.observability.pipelines[':pipeline_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObservabilityPipelinesPipelineIdKey() {
  return ['v1', '/v1/observability/pipelines/:pipeline_id', 'DELETE'] as const
}

export function useDeleteV1ObservabilityPipelinesPipelineId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObservabilityPipelinesPipelineIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability.pipelines)[':pipeline_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.pipelines[':pipeline_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityLogsSearchKey() {
  return ['v1', '/v1/observability/logs/search', 'POST'] as const
}

export function usePostV1ObservabilityLogsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.logs.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityLogsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.logs.search.$post> },
      ) => parseResponse(client.v1.observability.logs.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityTracesSearchKey() {
  return ['v1', '/v1/observability/traces/search', 'POST'] as const
}

export function usePostV1ObservabilityTracesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.traces.search.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.traces.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityTracesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.traces.search.$post> },
      ) => parseResponse(client.v1.observability.traces.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityTracesAggregateKey() {
  return ['v1', '/v1/observability/traces/aggregate', 'POST'] as const
}

export function usePostV1ObservabilityTracesAggregate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.traces.aggregate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.traces.aggregate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityTracesAggregateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.traces.aggregate.$post> },
      ) => parseResponse(client.v1.observability.traces.aggregate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilitySpansSearchKey() {
  return ['v1', '/v1/observability/spans/search', 'POST'] as const
}

export function usePostV1ObservabilitySpansSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.spans.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilitySpansSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.spans.search.$post> },
      ) => parseResponse(client.v1.observability.spans.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilitySpansAggregateKey() {
  return ['v1', '/v1/observability/spans/aggregate', 'POST'] as const
}

export function usePostV1ObservabilitySpansAggregate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.aggregate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.spans.aggregate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilitySpansAggregateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.spans.aggregate.$post> },
      ) => parseResponse(client.v1.observability.spans.aggregate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilitySpansEvaluationsAggregateKey() {
  return ['v1', '/v1/observability/spans/evaluations/aggregate', 'POST'] as const
}

export function usePostV1ObservabilitySpansEvaluationsAggregate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.aggregate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.spans.evaluations.aggregate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilitySpansEvaluationsAggregateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.v1.observability.spans.evaluations.aggregate.$post>
        },
      ) =>
        parseResponse(
          client.v1.observability.spans.evaluations.aggregate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilitySpansEvaluationsSearchKey() {
  return ['v1', '/v1/observability/spans/evaluations/search', 'POST'] as const
}

export function usePostV1ObservabilitySpansEvaluationsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.search.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.spans.evaluations.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilitySpansEvaluationsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.observability.spans.evaluations.search.$post> },
      ) =>
        parseResponse(client.v1.observability.spans.evaluations.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilitySpansEvaluationsSearchLatestKey() {
  return ['v1', '/v1/observability/spans/evaluations/search/latest', 'POST'] as const
}

export function usePostV1ObservabilitySpansEvaluationsSearchLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.search.latest.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.spans.evaluations.search.latest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilitySpansEvaluationsSearchLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.v1.observability.spans.evaluations.search.latest.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.spans.evaluations.search.latest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityPipelineResultsSearchKey() {
  return ['v1', '/v1/observability/pipeline-results/search', 'POST'] as const
}

export function usePostV1ObservabilityPipelineResultsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.observability)['pipeline-results']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityPipelineResultsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['pipeline-results']['search']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.observability['pipeline-results'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityPipelinesPipelineIdResultsFieldsKey(
  args: InferRequestType<
    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
  >,
) {
  return ['v1', '/v1/observability/pipelines/:pipeline_id/results/fields', args] as const
}

export function useGetV1ObservabilityPipelinesPipelineIdResultsFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityPipelinesPipelineIdResultsFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.pipelines[':pipeline_id'].results.fields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityPipelinesPipelineIdResultsFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.pipelines)[':pipeline_id']['results']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityPipelinesPipelineIdResultsFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.pipelines[':pipeline_id'].results.fields.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityTracesFieldsKey() {
  return ['v1', '/v1/observability/traces/fields'] as const
}

export function useGetV1ObservabilityTracesFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.traces.fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityTracesFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.traces.fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.traces.fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityTracesTraceIdKey(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>,
) {
  return ['v1', '/v1/observability/traces/:trace_id', args] as const
}

export function useGetV1ObservabilityTracesTraceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesTraceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.traces[':trace_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityTracesTraceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesTraceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.traces)[':trace_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.traces[':trace_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityTracesTraceIdSpansKey(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>,
) {
  return ['v1', '/v1/observability/traces/:trace_id/spans', args] as const
}

export function useGetV1ObservabilityTracesTraceIdSpans<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesTraceIdSpansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.traces[':trace_id'].spans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityTracesTraceIdSpans<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesTraceIdSpansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.traces)[':trace_id']['spans']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.traces[':trace_id'].spans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityLogsFieldsKey() {
  return ['v1', '/v1/observability/logs/fields'] as const
}

export function useGetV1ObservabilityLogsFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityLogsFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.logs.fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityLogsFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityLogsFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.logs.fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.logs.fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilitySpansFieldsKey() {
  return ['v1', '/v1/observability/spans/fields'] as const
}

export function useGetV1ObservabilitySpansFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.spans.fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilitySpansFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.spans.fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.spans.fields.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilitySpansEvaluationsFieldsKey() {
  return ['v1', '/v1/observability/spans/evaluations/fields'] as const
}

export function useGetV1ObservabilitySpansEvaluationsFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansEvaluationsFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.spans.evaluations.fields.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilitySpansEvaluationsFields<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansEvaluationsFieldsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.spans.evaluations.fields.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.spans.evaluations.fields.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityTracesFieldsFieldNameOptionsKey(
  args: InferRequestType<
    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/traces/fields/:field_name/options', args] as const
}

export function useGetV1ObservabilityTracesFieldsFieldNameOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.traces.fields[':field_name'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityTracesFieldsFieldNameOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.traces.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.traces.fields[':field_name'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityLogsFieldsFieldNameOptionsKey(
  args: InferRequestType<
    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/logs/fields/:field_name/options', args] as const
}

export function useGetV1ObservabilityLogsFieldsFieldNameOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityLogsFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.logs.fields[':field_name'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityLogsFieldsFieldNameOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.logs.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityLogsFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.logs.fields[':field_name'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilitySpansFieldsFieldNameOptionsKey(
  args: InferRequestType<
    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/spans/fields/:field_name/options', args] as const
}

export function useGetV1ObservabilitySpansFieldsFieldNameOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.spans.fields[':field_name'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilitySpansFieldsFieldNameOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.spans.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.spans.fields[':field_name'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsKey(
  args: InferRequestType<
    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
  >,
) {
  return ['v1', '/v1/observability/spans/evaluations/fields/:field_name/options', args] as const
}

export function useGetV1ObservabilitySpansEvaluationsFieldsFieldNameOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.spans.evaluations.fields[':field_name'].options.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilitySpansEvaluationsFieldsFieldNameOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.observability.spans.evaluations.fields)[':field_name']['options']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilitySpansEvaluationsFieldsFieldNameOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.spans.evaluations.fields[':field_name'].options.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityTracesTraceIdSpansSpanIdKey(
  args: InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/traces/:trace_id/spans/:span_id', args] as const
}

export function useGetV1ObservabilityTracesTraceIdSpansSpanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesTraceIdSpansSpanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.traces[':trace_id'].spans[':span_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityTracesTraceIdSpansSpanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.traces)[':trace_id']['spans'][':span_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityTracesTraceIdSpansSpanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.traces[':trace_id'].spans[':span_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityProjectsKey(
  args: InferRequestType<typeof client.v1.observability.projects.$get>,
) {
  return ['v1', '/v1/observability/projects', args] as const
}

export function useGetV1ObservabilityProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityProjectsProjectSlugKey(
  args: InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>,
) {
  return ['v1', '/v1/observability/projects/:project_slug', args] as const
}

export function useGetV1ObservabilityProjectsProjectSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityProjectsProjectSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.projects[':project_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityProjectsProjectSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.projects)[':project_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityProjectsProjectSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.projects)[':project_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.projects[':project_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityProjectsProjectSlugEvaluationsV2Key(
  args: InferRequestType<
    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
  >,
) {
  return ['v1', '/v1/observability/projects/:project_slug/evaluations_v2', args] as const
}

export function useGetV1ObservabilityProjectsProjectSlugEvaluationsV2<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityProjectsProjectSlugEvaluationsV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.projects[':project_slug'].evaluations_v2.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityProjectsProjectSlugEvaluationsV2<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.projects)[':project_slug']['evaluations_v2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityProjectsProjectSlugEvaluationsV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.projects[':project_slug'].evaluations_v2.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityEvaluationsV2EvaluationSlugKey(
  args: InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
  >,
) {
  return ['v1', '/v1/observability/evaluations_v2/:evaluation_slug', args] as const
}

export function useGetV1ObservabilityEvaluationsV2EvaluationSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationsV2EvaluationSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.evaluations_v2[':evaluation_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityEvaluationsV2EvaluationSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationsV2EvaluationSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.evaluations_v2[':evaluation_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchKey() {
  return ['v1', '/v1/observability/evaluations_v2/:evaluation_slug/runs/search', 'POST'] as const
}

export function usePostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityEvaluationsV2EvaluationSlugRunsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability.evaluations_v2)[':evaluation_slug']['runs']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.evaluations_v2[':evaluation_slug'].runs.search.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObservabilityEvaluationRunsV2SearchKey() {
  return ['v1', '/v1/observability/evaluation-runs_v2/search', 'POST'] as const
}

export function usePostV1ObservabilityEvaluationRunsV2Search<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityEvaluationRunsV2SearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['evaluation-runs_v2']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'].search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityEvaluationRunsV2RunIdKey(
  args: InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id', args] as const
}

export function useGetV1ObservabilityEvaluationRunsV2RunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationRunsV2RunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityEvaluationRunsV2RunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationRunsV2RunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityEvaluationRunsV2RunIdStatisticsKey(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
  >,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/statistics', args] as const
}

export function useGetV1ObservabilityEvaluationRunsV2RunIdStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationRunsV2RunIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityEvaluationRunsV2RunIdStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationRunsV2RunIdStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeKey() {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/statistics/compute', 'POST'] as const
}

export function usePostV1ObservabilityEvaluationRunsV2RunIdStatisticsCompute<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityEvaluationRunsV2RunIdStatisticsComputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['statistics']['compute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].statistics.compute.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdKey(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/records/:record_id', args] as const
}

export function useGetV1ObservabilityEvaluationRunsV2RunIdRecordsRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].records[':record_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityEvaluationRunsV2RunIdRecordsRecordId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records'][':record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityEvaluationRunsV2RunIdRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].records[':record_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearchKey() {
  return ['v1', '/v1/observability/evaluation-runs_v2/:run_id/records/search', 'POST'] as const
}

export function usePostV1ObservabilityEvaluationRunsV2RunIdRecordsSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityEvaluationRunsV2RunIdRecordsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.observability)['evaluation-runs_v2'][':run_id']['records']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability['evaluation-runs_v2'][':run_id'].records.search.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityOptimizationsKey(
  args: InferRequestType<typeof client.v1.observability.optimizations.$get>,
) {
  return ['v1', '/v1/observability/optimizations', args] as const
}

export function useGetV1ObservabilityOptimizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.optimizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.optimizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityOptimizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.optimizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityOptimizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.optimizations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.optimizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityOptimizationsOptimizationIdKey(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
  >,
) {
  return ['v1', '/v1/observability/optimizations/:optimization_id', args] as const
}

export function useGetV1ObservabilityOptimizationsOptimizationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityOptimizationsOptimizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.optimizations[':optimization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityOptimizationsOptimizationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityOptimizationsOptimizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.observability.optimizations)[':optimization_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.optimizations[':optimization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityOptimizationsOptimizationIdTrialsKey(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
  >,
) {
  return ['v1', '/v1/observability/optimizations/:optimization_id/trials', args] as const
}

export function useGetV1ObservabilityOptimizationsOptimizationIdTrials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityOptimizationsOptimizationIdTrialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.optimizations[':optimization_id'].trials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityOptimizationsOptimizationIdTrials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.observability.optimizations)[':optimization_id']['trials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityOptimizationsOptimizationIdTrialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.optimizations[':optimization_id'].trials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ObservabilityScorersKey(
  args: InferRequestType<typeof client.v1.observability.scorers.$get>,
) {
  return ['v1', '/v1/observability/scorers', args] as const
}

export function useGetV1ObservabilityScorers<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.scorers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityScorersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.scorers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityScorers<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.scorers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityScorersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.observability.scorers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObservabilityScorersKey() {
  return ['v1', '/v1/observability/scorers', 'POST'] as const
}

export function usePostV1ObservabilityScorers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.observability.scorers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.observability.scorers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObservabilityScorersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.observability.scorers.$post> },
      ) => parseResponse(client.v1.observability.scorers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityScorersScorerSlugKey(
  args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>,
) {
  return ['v1', '/v1/observability/scorers/:scorer_slug', args] as const
}

export function useGetV1ObservabilityScorersScorerSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityScorersScorerSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.scorers[':scorer_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityScorersScorerSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ObservabilityScorersScorerSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.observability.scorers[':scorer_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ObservabilityScorersScorerSlugKey() {
  return ['v1', '/v1/observability/scorers/:scorer_slug', 'PATCH'] as const
}

export function usePatchV1ObservabilityScorersScorerSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ObservabilityScorersScorerSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.observability.scorers)[':scorer_slug']['$patch']>
        },
      ) =>
        parseResponse(client.v1.observability.scorers[':scorer_slug'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectorsKey(args: InferRequestType<typeof client.v1.connectors.$get>) {
  return ['v1', '/v1/connectors', args] as const
}

export function useGetV1Connectors<TError = unknown>(
  args: InferRequestType<typeof client.v1.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConnectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Connectors<TError = unknown>(
  args: InferRequestType<typeof client.v1.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConnectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConnectorsKey() {
  return ['v1', '/v1/connectors', 'POST'] as const
}

export function usePostV1Connectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connectors.$post> }) =>
        parseResponse(client.v1.connectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectorsConnectorIdOrNameAuthUrlKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/auth_url', args] as const
}

export function useGetV1ConnectorsConnectorIdOrNameAuthUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameAuthUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].auth_url.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsConnectorIdOrNameAuthUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameAuthUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['auth_url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].auth_url.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConnectorsConnectorIdShareKey() {
  return ['v1', '/v1/connectors/:connector_id/share', 'PUT'] as const
}

export function usePutV1ConnectorsConnectorIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConnectorsConnectorIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$put']>
        },
      ) => parseResponse(client.v1.connectors[':connector_id'].share.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectorsConnectorIdShareKey() {
  return ['v1', '/v1/connectors/:connector_id/share', 'DELETE'] as const
}

export function useDeleteV1ConnectorsConnectorIdShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectorsConnectorIdShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.connectors)[':connector_id']['share']['$delete']>
        },
      ) => parseResponse(client.v1.connectors[':connector_id'].share.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConnectorsConnectorIdOrganizationShareKey() {
  return ['v1', '/v1/connectors/:connector_id/organization/share', 'PUT'] as const
}

export function usePutV1ConnectorsConnectorIdOrganizationShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConnectorsConnectorIdOrganizationShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id']['organization']['share']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id'].organization.share.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectorsConnectorIdOrganizationShareKey() {
  return ['v1', '/v1/connectors/:connector_id/organization/share', 'DELETE'] as const
}

export function useDeleteV1ConnectorsConnectorIdOrganizationShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectorsConnectorIdOrganizationShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id']['organization']['share']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id'].organization.share.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorsConnectorIdConsumerScopeActivateKey() {
  return ['v1', '/v1/connectors/:connector_id/:consumer_scope/activate', 'POST'] as const
}

export function usePostV1ConnectorsConnectorIdConsumerScopeActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorsConnectorIdConsumerScopeActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id'][':consumer_scope'].activate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorsConnectorIdConsumerScopeDeactivateKey() {
  return ['v1', '/v1/connectors/:connector_id/:consumer_scope/deactivate', 'POST'] as const
}

export function usePostV1ConnectorsConnectorIdConsumerScopeDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorsConnectorIdConsumerScopeDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id'][':consumer_scope']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id'][':consumer_scope'].deactivate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorsConnectorIdOrNameToolsToolNameCallKey() {
  return ['v1', '/v1/connectors/:connector_id_or_name/tools/:tool_name/call', 'POST'] as const
}

export function usePostV1ConnectorsConnectorIdOrNameToolsToolNameCall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorsConnectorIdOrNameToolsToolNameCallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name']['tools'][':tool_name']['call']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].tools[':tool_name'].call.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectorsConnectorIdOrNameToolsKey(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/tools', args] as const
}

export function useGetV1ConnectorsConnectorIdOrNameTools<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameToolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].tools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsConnectorIdOrNameTools<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameToolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name']['tools']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].tools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConnectorsConnectorIdOrNameAuthenticationMethodsKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/authentication_methods', args] as const
}

export function useGetV1ConnectorsConnectorIdOrNameAuthenticationMethods<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameAuthenticationMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].authentication_methods.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsConnectorIdOrNameAuthenticationMethods<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['authentication_methods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameAuthenticationMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].authentication_methods.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConnectorsConnectorIdOrNameOrganizationCredentialsKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/organization/credentials', args] as const
}

export function useGetV1ConnectorsConnectorIdOrNameOrganizationCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameOrganizationCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].organization.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsConnectorIdOrNameOrganizationCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['organization']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameOrganizationCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].organization.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConnectorsConnectorIdOrNameWorkspaceCredentialsKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/workspace/credentials', args] as const
}

export function useGetV1ConnectorsConnectorIdOrNameWorkspaceCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameWorkspaceCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].workspace.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsConnectorIdOrNameWorkspaceCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['workspace']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameWorkspaceCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].workspace.credentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConnectorsConnectorIdOrNameUserCredentialsKey(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
  >,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name/user/credentials', args] as const
}

export function useGetV1ConnectorsConnectorIdOrNameUserCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameUserCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].user.credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsConnectorIdOrNameUserCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameUserCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].user.credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ConnectorsConnectorIdOrNameUserCredentialsKey() {
  return ['v1', '/v1/connectors/:connector_id_or_name/user/credentials', 'DELETE'] as const
}

export function useDeleteV1ConnectorsConnectorIdOrNameUserCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectorsConnectorIdOrNameUserCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name']['user']['credentials']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'].user.credentials.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsKey() {
  return ['v1', '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials', 'POST'] as const
}

export function usePostV1ConnectorsConnectorIdOrNameConsumerScopeCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsKey() {
  return [
    'v1',
    '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials',
    'PATCH',
  ] as const
}

export function usePatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameKey() {
  return [
    'v1',
    '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials/:credentials_name',
    'DELETE',
  ] as const
}

export function useDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ConnectorsConnectorIdOrNameConsumerScopeCredentialsCredentialsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.connectors)[':connector_id_or_name'][':consumer_scope']['credentials'][':credentials_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name'][':consumer_scope'].credentials[
            ':credentials_name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectorsConnectorIdOrNameIdOrNameKey(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>,
) {
  return ['v1', '/v1/connectors/:connector_id_or_name#idOrName', args] as const
}

export function useGetV1ConnectorsConnectorIdOrNameIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name#idOrName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectorsConnectorIdOrNameIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ConnectorsConnectorIdOrNameIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.connectors)[':connector_id_or_name#idOrName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connectors[':connector_id_or_name#idOrName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ConnectorsConnectorIdIdKey() {
  return ['v1', '/v1/connectors/:connector_id#id', 'DELETE'] as const
}

export function useDeleteV1ConnectorsConnectorIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectorsConnectorIdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$delete']> },
      ) => parseResponse(client.v1.connectors[':connector_id#id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ConnectorsConnectorIdIdKey() {
  return ['v1', '/v1/connectors/:connector_id#id', 'PATCH'] as const
}

export function usePatchV1ConnectorsConnectorIdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ConnectorsConnectorIdIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.connectors)[':connector_id#id']['$patch']> },
      ) => parseResponse(client.v1.connectors[':connector_id#id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudioVoicesKey(args: InferRequestType<typeof client.v1.audio.voices.$get>) {
  return ['v1', '/v1/audio/voices', args] as const
}

export function useGetV1AudioVoices<TError = unknown>(
  args: InferRequestType<typeof client.v1.audio.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AudioVoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioVoices<TError = unknown>(
  args: InferRequestType<typeof client.v1.audio.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AudioVoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AudioVoicesKey() {
  return ['v1', '/v1/audio/voices', 'POST'] as const
}

export function usePostV1AudioVoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.voices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.audio.voices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AudioVoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.audio.voices.$post> }) =>
        parseResponse(client.v1.audio.voices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudioVoicesVoiceIdKey(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>,
) {
  return ['v1', '/v1/audio/voices/:voice_id', args] as const
}

export function useGetV1AudioVoicesVoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioVoicesVoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.voices[':voice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioVoicesVoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioVoicesVoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.voices[':voice_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AudioVoicesVoiceIdKey() {
  return ['v1', '/v1/audio/voices/:voice_id', 'DELETE'] as const
}

export function useDeleteV1AudioVoicesVoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AudioVoicesVoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$delete']> },
      ) => parseResponse(client.v1.audio.voices[':voice_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AudioVoicesVoiceIdKey() {
  return ['v1', '/v1/audio/voices/:voice_id', 'PATCH'] as const
}

export function usePatchV1AudioVoicesVoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AudioVoicesVoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['$patch']> },
      ) => parseResponse(client.v1.audio.voices[':voice_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudioVoicesVoiceIdSampleKey(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>,
) {
  return ['v1', '/v1/audio/voices/:voice_id/sample', args] as const
}

export function useGetV1AudioVoicesVoiceIdSample<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioVoicesVoiceIdSampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.audio.voices[':voice_id'].sample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioVoicesVoiceIdSample<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioVoicesVoiceIdSampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.voices)[':voice_id']['sample']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.audio.voices[':voice_id'].sample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AudioSessionsKey() {
  return ['v1', '/v1/audio/sessions', 'POST'] as const
}

export function usePostV1AudioSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.audio.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AudioSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.audio.sessions.$post> }) =>
        parseResponse(client.v1.audio.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudioSessionsSessionIdKey(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>,
) {
  return ['v1', '/v1/audio/sessions/:session_id', args] as const
}

export function useGetV1AudioSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AudioSessionsSessionIdKey() {
  return ['v1', '/v1/audio/sessions/:session_id', 'DELETE'] as const
}

export function useDeleteV1AudioSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AudioSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$delete']> },
      ) => parseResponse(client.v1.audio.sessions[':session_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AudioSessionsSessionIdKey() {
  return ['v1', '/v1/audio/sessions/:session_id', 'PATCH'] as const
}

export function usePatchV1AudioSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AudioSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.audio.sessions)[':session_id']['$patch']> },
      ) => parseResponse(client.v1.audio.sessions[':session_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudioAgentsKey(args: InferRequestType<typeof client.v1.audio.agents.$get>) {
  return ['v1', '/v1/audio/agents', args] as const
}

export function useGetV1AudioAgents<TError = unknown>(
  args: InferRequestType<typeof client.v1.audio.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AudioAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioAgents<TError = unknown>(
  args: InferRequestType<typeof client.v1.audio.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AudioAgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AudioAgentsKey() {
  return ['v1', '/v1/audio/agents', 'POST'] as const
}

export function usePostV1AudioAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audio.agents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.audio.agents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AudioAgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.audio.agents.$post> }) =>
        parseResponse(client.v1.audio.agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudioAgentsAgentIdKey(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>,
) {
  return ['v1', '/v1/audio/agents/:agent_id', args] as const
}

export function useGetV1AudioAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioAgentsAgentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioAgentsAgentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audio.agents[':agent_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AudioAgentsAgentIdKey() {
  return ['v1', '/v1/audio/agents/:agent_id', 'PUT'] as const
}

export function usePutV1AudioAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AudioAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$put']> },
      ) => parseResponse(client.v1.audio.agents[':agent_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AudioAgentsAgentIdKey() {
  return ['v1', '/v1/audio/agents/:agent_id', 'DELETE'] as const
}

export function useDeleteV1AudioAgentsAgentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AudioAgentsAgentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['$delete']> },
      ) => parseResponse(client.v1.audio.agents[':agent_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudioAgentsAgentIdVersionsKey(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>,
) {
  return ['v1', '/v1/audio/agents/:agent_id/versions', args] as const
}

export function useGetV1AudioAgentsAgentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioAgentsAgentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.audio.agents[':agent_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioAgentsAgentIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioAgentsAgentIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.audio.agents[':agent_id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AudioAgentsAgentIdSessionsKey(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>,
) {
  return ['v1', '/v1/audio/agents/:agent_id/sessions', args] as const
}

export function useGetV1AudioAgentsAgentIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioAgentsAgentIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.audio.agents[':agent_id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudioAgentsAgentIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AudioAgentsAgentIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audio.agents)[':agent_id']['sessions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.audio.agents[':agent_id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AudioVoicesKey(args: InferRequestType<typeof client.v2.audio.voices.$get>) {
  return ['v2', '/v2/audio/voices', args] as const
}

export function useGetV2AudioVoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioVoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AudioVoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.audio.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AudioVoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.voices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.audio.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdKey(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>,
) {
  return ['v1', '/v1/workflows/executions/:execution_id', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.executions[':execution_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.executions[':execution_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdHistoryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/history', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsExecutionIdSignalsKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/signals', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsExecutionIdSignals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsExecutionIdSignalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['signals']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].signals.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsExecutionIdQueriesKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/queries', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsExecutionIdQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsExecutionIdQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['queries']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].queries.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsExecutionIdTerminateKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/terminate', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsExecutionIdTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsExecutionIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['terminate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].terminate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsTerminateKey() {
  return ['v1', '/v1/workflows/executions/terminate', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsTerminate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workflows.executions.terminate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workflows.executions.terminate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workflows.executions.terminate.$post> },
      ) => parseResponse(client.v1.workflows.executions.terminate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsExecutionIdCancelKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/cancel', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsExecutionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsExecutionIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsCancelKey() {
  return ['v1', '/v1/workflows/executions/cancel', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workflows.executions.cancel.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workflows.executions.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workflows.executions.cancel.$post> },
      ) => parseResponse(client.v1.workflows.executions.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsExecutionIdResetKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/reset', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsExecutionIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsExecutionIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsExecutionsExecutionIdUpdatesKey() {
  return ['v1', '/v1/workflows/executions/:execution_id/updates', 'POST'] as const
}

export function usePostV1WorkflowsExecutionsExecutionIdUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsExecutionsExecutionIdUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.executions)[':execution_id']['updates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].updates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdTraceInfoKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/info', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdTraceInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.info.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdTraceInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.info.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdTraceOtelKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/otel', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdTraceOtel<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceOtelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.otel.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdTraceOtel<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['otel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceOtelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.otel.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdTraceSummaryKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/summary', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdTraceSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdTraceSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdTraceEventsKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/trace/events', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdTraceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdTraceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['trace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdTraceEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].trace.events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdStreamKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
  >,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/stream', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['stream']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdLogsKey(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>,
) {
  return ['v1', '/v1/workflows/executions/:execution_id/logs', args] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.executions)[':execution_id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsExecutionsExecutionIdLogsStreamKey(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/workflows/executions/:execution_id/logs/stream', keyArgs] as const
}

export function useGetV1WorkflowsExecutionsExecutionIdLogsStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdLogsStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].logs.stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsExecutionsExecutionIdLogsStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.executions)[':execution_id']['logs']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsExecutionsExecutionIdLogsStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.executions[':execution_id'].logs.stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsWorkflowNameMetricsKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>,
) {
  return ['v1', '/v1/workflows/:workflow_name/metrics', args] as const
}

export function useGetV1WorkflowsWorkflowNameMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsWorkflowNameMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows[':workflow_name'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsWorkflowNameMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsWorkflowNameMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_name']['metrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows[':workflow_name'].metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsRunsKey(
  args: InferRequestType<typeof client.v1.workflows.runs.$get>,
) {
  return ['v1', '/v1/workflows/runs', args] as const
}

export function useGetV1WorkflowsRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.runs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsRunsRunIdKey(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>,
) {
  return ['v1', '/v1/workflows/runs/:run_id', args] as const
}

export function useGetV1WorkflowsRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsRunsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRunsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.runs[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsRunsRunIdHistoryKey(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>,
) {
  return ['v1', '/v1/workflows/runs/:run_id/history', args] as const
}

export function useGetV1WorkflowsRunsRunIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRunsRunIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.runs[':run_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsRunsRunIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRunsRunIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.runs)[':run_id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.runs[':run_id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsSchedulesKey(
  args: InferRequestType<typeof client.v1.workflows.schedules.$get>,
) {
  return ['v1', '/v1/workflows/schedules', args] as const
}

export function useGetV1WorkflowsSchedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsSchedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsSchedulesKey() {
  return ['v1', '/v1/workflows/schedules', 'POST'] as const
}

export function usePostV1WorkflowsSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.schedules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workflows.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workflows.schedules.$post> },
      ) => parseResponse(client.v1.workflows.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsSchedulesScheduleIdKey(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>,
) {
  return ['v1', '/v1/workflows/schedules/:schedule_id', args] as const
}

export function useGetV1WorkflowsSchedulesScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsSchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.schedules[':schedule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsSchedulesScheduleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsSchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.schedules[':schedule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1WorkflowsSchedulesScheduleIdKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id', 'DELETE'] as const
}

export function useDeleteV1WorkflowsSchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WorkflowsSchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$delete']>
        },
      ) => parseResponse(client.v1.workflows.schedules[':schedule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1WorkflowsSchedulesScheduleIdKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id', 'PATCH'] as const
}

export function usePatchV1WorkflowsSchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1WorkflowsSchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['$patch']>
        },
      ) => parseResponse(client.v1.workflows.schedules[':schedule_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsSchedulesScheduleIdPauseKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id/pause', 'POST'] as const
}

export function usePostV1WorkflowsSchedulesScheduleIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsSchedulesScheduleIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.schedules)[':schedule_id']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.schedules[':schedule_id'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsSchedulesScheduleIdResumeKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id/resume', 'POST'] as const
}

export function usePostV1WorkflowsSchedulesScheduleIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsSchedulesScheduleIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.schedules)[':schedule_id']['resume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.schedules[':schedule_id'].resume.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsSchedulesScheduleIdTriggerKey() {
  return ['v1', '/v1/workflows/schedules/:schedule_id/trigger', 'POST'] as const
}

export function usePostV1WorkflowsSchedulesScheduleIdTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsSchedulesScheduleIdTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.schedules)[':schedule_id']['trigger']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.schedules[':schedule_id'].trigger.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsEventsStreamKey(
  args: InferRequestType<typeof client.v1.workflows.events.stream.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/workflows/events/stream', keyArgs] as const
}

export function useGetV1WorkflowsEventsStream<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.events.stream.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsEventsStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.events.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsEventsStream<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.events.stream.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsEventsStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.stream.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.events.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsEventsListKey(
  args: InferRequestType<typeof client.v1.workflows.events.list.$get>,
) {
  return ['v1', '/v1/workflows/events/list', args] as const
}

export function useGetV1WorkflowsEventsList<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.events.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsEventsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.events.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsEventsList<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.events.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsEventsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.events.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.events.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsDeploymentsDeploymentIdUnhardenKey() {
  return ['v1', '/v1/workflows/deployments/:deployment_id/unharden', 'POST'] as const
}

export function usePostV1WorkflowsDeploymentsDeploymentIdUnharden<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsDeploymentsDeploymentIdUnhardenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.deployments)[':deployment_id']['unharden']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.deployments[':deployment_id'].unharden.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsDeploymentsKey(
  args: InferRequestType<typeof client.v1.workflows.deployments.$get>,
) {
  return ['v1', '/v1/workflows/deployments', args] as const
}

export function useGetV1WorkflowsDeployments<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsDeployments<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsDeploymentsKey() {
  return ['v1', '/v1/workflows/deployments', 'POST'] as const
}

export function usePostV1WorkflowsDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.deployments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workflows.deployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workflows.deployments.$post> },
      ) => parseResponse(client.v1.workflows.deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsDeploymentsNameKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name', args] as const
}

export function useGetV1WorkflowsDeploymentsName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.deployments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsDeploymentsName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.deployments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1WorkflowsDeploymentsNameKey() {
  return ['v1', '/v1/workflows/deployments/:name', 'DELETE'] as const
}

export function useDeleteV1WorkflowsDeploymentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WorkflowsDeploymentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$delete']> },
      ) => parseResponse(client.v1.workflows.deployments[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1WorkflowsDeploymentsNameKey() {
  return ['v1', '/v1/workflows/deployments/:name', 'PATCH'] as const
}

export function usePatchV1WorkflowsDeploymentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1WorkflowsDeploymentsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['$patch']> },
      ) => parseResponse(client.v1.workflows.deployments[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsDeploymentsNameStopKey() {
  return ['v1', '/v1/workflows/deployments/:name/stop', 'POST'] as const
}

export function usePostV1WorkflowsDeploymentsNameStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsDeploymentsNameStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['stop']['$post']>
        },
      ) => parseResponse(client.v1.workflows.deployments[':name'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsDeploymentsNameStartKey() {
  return ['v1', '/v1/workflows/deployments/:name/start', 'POST'] as const
}

export function usePostV1WorkflowsDeploymentsNameStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsDeploymentsNameStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['start']['$post']>
        },
      ) => parseResponse(client.v1.workflows.deployments[':name'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsDeploymentsNameRestartKey() {
  return ['v1', '/v1/workflows/deployments/:name/restart', 'POST'] as const
}

export function usePostV1WorkflowsDeploymentsNameRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows.deployments)[':name']['restart']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsDeploymentsNameRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.deployments)[':name']['restart']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.workflows.deployments[':name'].restart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsDeploymentsNameWorkersKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name/workers', args] as const
}

export function useGetV1WorkflowsDeploymentsNameWorkers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameWorkersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.deployments[':name'].workers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsDeploymentsNameWorkers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameWorkersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['workers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.deployments[':name'].workers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsDeploymentsNameArchiveKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name/archive', args] as const
}

export function useGetV1WorkflowsDeploymentsNameArchive<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.deployments[':name'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsDeploymentsNameArchive<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.workflows.deployments)[':name']['archive']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.deployments[':name'].archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsDeploymentsArchivesKey() {
  return ['v1', '/v1/workflows/deployments/archives', 'POST'] as const
}

export function usePostV1WorkflowsDeploymentsArchives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.workflows.deployments.archives.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workflows.deployments.archives.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsDeploymentsArchivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workflows.deployments.archives.$post> },
      ) => parseResponse(client.v1.workflows.deployments.archives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsDeploymentsNameLogsKey(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>,
) {
  return ['v1', '/v1/workflows/deployments/:name/logs', args] as const
}

export function useGetV1WorkflowsDeploymentsNameLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.deployments[':name'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsDeploymentsNameLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows.deployments)[':name']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows.deployments[':name'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsDeploymentsNameLogsStreamKey(
  args: InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/workflows/deployments/:name/logs/stream', keyArgs] as const
}

export function useGetV1WorkflowsDeploymentsNameLogsStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameLogsStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.deployments[':name'].logs.stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsDeploymentsNameLogsStream<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.deployments)[':name']['logs']['stream']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsDeploymentsNameLogsStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.deployments[':name'].logs.stream.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsKey(args: InferRequestType<typeof client.v1.workflows.$get>) {
  return ['v1', '/v1/workflows', args] as const
}

export function useGetV1Workflows<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Workflows<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsRegistrationsKey(
  args: InferRequestType<typeof client.v1.workflows.registrations.$get>,
) {
  return ['v1', '/v1/workflows/registrations', args] as const
}

export function useGetV1WorkflowsRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsRegistrations<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.registrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsWorkflowIdentifierExecuteKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/execute', 'POST'] as const
}

export function usePostV1WorkflowsWorkflowIdentifierExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsWorkflowIdentifierExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows)[':workflow_identifier']['execute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows[':workflow_identifier'].execute.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteKey() {
  return ['v1', '/v1/workflows/registrations/:workflow_registration_id/execute', 'POST'] as const
}

export function usePostV1WorkflowsRegistrationsWorkflowRegistrationIdExecute<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows.registrations)[':workflow_registration_id']['execute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows.registrations[':workflow_registration_id'].execute.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsWorkflowIdentifierKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>,
) {
  return ['v1', '/v1/workflows/:workflow_identifier', args] as const
}

export function useGetV1WorkflowsWorkflowIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsWorkflowIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows[':workflow_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsWorkflowIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsWorkflowIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.workflows[':workflow_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowIdentifierKey() {
  return ['v1', '/v1/workflows/:workflow_identifier', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['$put']> },
      ) => parseResponse(client.v1.workflows[':workflow_identifier'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WorkflowsRegistrationsWorkflowRegistrationIdKey(
  args: InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
  >,
) {
  return ['v1', '/v1/workflows/registrations/:workflow_registration_id', args] as const
}

export function useGetV1WorkflowsRegistrationsWorkflowRegistrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRegistrationsWorkflowRegistrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.registrations[':workflow_registration_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsRegistrationsWorkflowRegistrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.workflows.registrations)[':workflow_registration_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WorkflowsRegistrationsWorkflowRegistrationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.workflows.registrations[':workflow_registration_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkflowsArchiveKey() {
  return ['v1', '/v1/workflows/archive', 'PUT'] as const
}

export function usePutV1WorkflowsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.archive.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workflows.archive.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.workflows.archive.$put> }) =>
        parseResponse(client.v1.workflows.archive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WorkflowsUnarchiveKey() {
  return ['v1', '/v1/workflows/unarchive', 'PUT'] as const
}

export function usePutV1WorkflowsUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.unarchive.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.workflows.unarchive.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.workflows.unarchive.$put> },
      ) => parseResponse(client.v1.workflows.unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsWorkflowIdentifierTagsKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/tags', 'POST'] as const
}

export function usePostV1WorkflowsWorkflowIdentifierTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsWorkflowIdentifierTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows)[':workflow_identifier']['tags']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.workflows[':workflow_identifier'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowIdentifierArchiveKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/archive', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowIdentifierArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowIdentifierArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows)[':workflow_identifier']['archive']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.workflows[':workflow_identifier'].archive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowIdentifierUnarchiveKey() {
  return ['v1', '/v1/workflows/:workflow_identifier/unarchive', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowIdentifierUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowIdentifierUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.workflows)[':workflow_identifier']['unarchive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows[':workflow_identifier'].unarchive.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RagIngestionPipelineConfigurationsKey() {
  return ['v1', '/v1/rag/ingestion_pipeline_configurations'] as const
}

export function useGetV1RagIngestionPipelineConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RagIngestionPipelineConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.rag.ingestion_pipeline_configurations.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RagIngestionPipelineConfigurations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1RagIngestionPipelineConfigurationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.rag.ingestion_pipeline_configurations.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1RagIngestionPipelineConfigurationsKey() {
  return ['v1', '/v1/rag/ingestion_pipeline_configurations', 'PUT'] as const
}

export function usePutV1RagIngestionPipelineConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rag.ingestion_pipeline_configurations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RagIngestionPipelineConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.rag.ingestion_pipeline_configurations.$put> },
      ) => parseResponse(client.v1.rag.ingestion_pipeline_configurations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1RagIngestionPipelineConfigurationsIdRunInfoKey() {
  return ['v1', '/v1/rag/ingestion_pipeline_configurations/:id/run_info', 'PUT'] as const
}

export function usePutV1RagIngestionPipelineConfigurationsIdRunInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RagIngestionPipelineConfigurationsIdRunInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.rag.ingestion_pipeline_configurations)[':id']['run_info']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.rag.ingestion_pipeline_configurations[':id'].run_info.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextSearchIndexesKey(
  args: InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>,
) {
  return ['v1', '/v1/context/search-indexes', args] as const
}

export function useGetV1ContextSearchIndexes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.context['search-indexes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextSearchIndexes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.context)['search-indexes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.context['search-indexes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ContextSearchIndexesKey() {
  return ['v1', '/v1/context/search-indexes', 'POST'] as const
}

export function usePostV1ContextSearchIndexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.context)['search-indexes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.context)['search-indexes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextSearchIndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.context)['search-indexes']['$post']> },
      ) => parseResponse(client.v1.context['search-indexes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextSearchIndexesIndexNameKey(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>,
) {
  return ['v1', '/v1/context/search-indexes/:index_name', args] as const
}

export function useGetV1ContextSearchIndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.context['search-indexes'][':index_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextSearchIndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.context['search-indexes'][':index_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ContextSearchIndexesIndexNameKey() {
  return ['v1', '/v1/context/search-indexes/:index_name', 'PUT'] as const
}

export function usePutV1ContextSearchIndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ContextSearchIndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$put']>
        },
      ) =>
        parseResponse(client.v1.context['search-indexes'][':index_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ContextSearchIndexesIndexNameKey() {
  return ['v1', '/v1/context/search-indexes/:index_name', 'DELETE'] as const
}

export function useDeleteV1ContextSearchIndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ContextSearchIndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextSearchIndexesIndexNameDocumentsKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/documents', 'POST'] as const
}

export function usePostV1ContextSearchIndexesIndexNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextSearchIndexesIndexNameDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].documents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ContextSearchIndexesIndexNameDocumentsKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/documents', 'DELETE'] as const
}

export function useDeleteV1ContextSearchIndexesIndexNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ContextSearchIndexesIndexNameDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['documents']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].documents.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextSearchIndexesIndexNameSearchKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/search', 'POST'] as const
}

export function usePostV1ContextSearchIndexesIndexNameSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextSearchIndexesIndexNameSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextSearchIndexesIndexNameNavigateKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/navigate', 'POST'] as const
}

export function usePostV1ContextSearchIndexesIndexNameNavigate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextSearchIndexesIndexNameNavigateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['navigate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].navigate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextSearchIndexesIndexNameReadKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/read', 'POST'] as const
}

export function usePostV1ContextSearchIndexesIndexNameRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextSearchIndexesIndexNameReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextSearchIndexesIndexNameGrepKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/grep', 'POST'] as const
}

export function usePostV1ContextSearchIndexesIndexNameGrep<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextSearchIndexesIndexNameGrepKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['grep']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].grep.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextSearchIndexesIndexNameChunksChunkIdKey(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
  >,
) {
  return ['v1', '/v1/context/search-indexes/:index_name/chunks/:chunk_id', args] as const
}

export function useGetV1ContextSearchIndexesIndexNameChunksChunkId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesIndexNameChunksChunkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].chunks[':chunk_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextSearchIndexesIndexNameChunksChunkId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['chunks'][':chunk_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesIndexNameChunksChunkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].chunks[':chunk_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextSearchIndexesIndexNameSummaryFieldLanguageKey(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
  >,
) {
  return ['v1', '/v1/context/search-indexes/:index_name/summary_field/:language', args] as const
}

export function useGetV1ContextSearchIndexesIndexNameSummaryFieldLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesIndexNameSummaryFieldLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ContextSearchIndexesIndexNameSummaryFieldLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ContextSearchIndexesIndexNameSummaryFieldLanguageKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/summary_field/:language', 'PUT'] as const
}

export function usePutV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ContextSearchIndexesIndexNameSummaryFieldLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextSearchIndexesIndexNameSummaryFieldLanguageKey() {
  return ['v1', '/v1/context/search-indexes/:index_name/summary_field/:language', 'POST'] as const
}

export function usePostV1ContextSearchIndexesIndexNameSummaryFieldLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextSearchIndexesIndexNameSummaryFieldLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.context)['search-indexes'][':index_name']['summary_field'][':language']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.context['search-indexes'][':index_name'].summary_field[':language'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TriggersKey(args: InferRequestType<typeof client.v1.triggers.$get>) {
  return ['v1', '/v1/triggers', args] as const
}

export function useGetV1Triggers<TError = unknown>(
  args: InferRequestType<typeof client.v1.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TriggersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Triggers<TError = unknown>(
  args: InferRequestType<typeof client.v1.triggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TriggersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.triggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TriggersKey() {
  return ['v1', '/v1/triggers', 'POST'] as const
}

export function usePostV1Triggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.triggers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.triggers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.triggers.$post> }) =>
        parseResponse(client.v1.triggers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TriggersTriggerIdKey(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>,
) {
  return ['v1', '/v1/triggers/:trigger_id', args] as const
}

export function useGetV1TriggersTriggerId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TriggersTriggerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.triggers[':trigger_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TriggersTriggerId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TriggersTriggerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.triggers[':trigger_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TriggersTriggerIdKey() {
  return ['v1', '/v1/triggers/:trigger_id', 'DELETE'] as const
}

export function useDeleteV1TriggersTriggerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TriggersTriggerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['$delete']> },
      ) => parseResponse(client.v1.triggers[':trigger_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TriggersTriggerIdEventsKey(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>,
) {
  return ['v1', '/v1/triggers/:trigger_id/events', args] as const
}

export function useGetV1TriggersTriggerIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TriggersTriggerIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.triggers[':trigger_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TriggersTriggerIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TriggersTriggerIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.triggers)[':trigger_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.triggers[':trigger_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WebhooksKey() {
  return ['v1', '/v1/webhooks'] as const
}

export function useGetV1Webhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Webhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhooksKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function usePostV1Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.webhooks.$post> }) =>
        parseResponse(client.v1.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:webhook_id', args] as const
}

export function useGetV1WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1WebhooksWebhookIdKey() {
  return ['v1', '/v1/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteV1WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['$delete']> },
      ) => parseResponse(client.v1.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksWebhookIdSigningSecretKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>,
) {
  return ['v1', '/v1/webhooks/:webhook_id/signing-secret', args] as const
}

export function useGetV1WebhooksWebhookIdSigningSecret<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WebhooksWebhookIdSigningSecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.webhooks[':webhook_id']['signing-secret'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhooksWebhookIdSigningSecret<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1WebhooksWebhookIdSigningSecretKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.webhooks)[':webhook_id']['signing-secret']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.webhooks[':webhook_id']['signing-secret'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersMeKey() {
  return ['v1', '/v1/users/me'] as const
}

export function useGetV1UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersMeOrganizationsKey(
  args: InferRequestType<typeof client.v1.users.me.organizations.$get>,
) {
  return ['v1', '/v1/users/me/organizations', args] as const
}

export function useGetV1UsersMeOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.me.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersMeOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersMeOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.me.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersMeOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.organizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersMeWorkspacesKey(
  args: InferRequestType<typeof client.v1.users.me.workspaces.$get>,
) {
  return ['v1', '/v1/users/me/workspaces', args] as const
}

export function useGetV1UsersMeWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.me.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersMeWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersMeWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.me.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1UsersMeWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.me.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.me.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WhoamiKey() {
  return ['v1', '/v1/whoami'] as const
}

export function useGetV1Whoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Whoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BillingBudgetKey() {
  return ['v1', '/v1/billing/budget'] as const
}

export function useGetV1BillingBudget<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BillingBudgetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.budget.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingBudget<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BillingBudgetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.budget.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.budget.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BillingSubscriptionKey() {
  return ['v1', '/v1/billing/subscription'] as const
}

export function useGetV1BillingSubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BillingSubscriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingSubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BillingSubscriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminUsageQueryKey() {
  return ['v1', '/v1/admin/usage/query', 'POST'] as const
}

export function usePostV1AdminUsageQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.admin.usage.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUsageQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.admin.usage.query.$post> },
      ) => parseResponse(client.v1.admin.usage.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUsersKey(args: InferRequestType<typeof client.v1.admin.users.$get>) {
  return ['v1', '/v1/admin/users', args] as const
}

export function useGetV1AdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminUsersKey() {
  return ['v1', '/v1/admin/users', 'POST'] as const
}

export function usePostV1AdminUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.admin.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.admin.users.$post> }) =>
        parseResponse(client.v1.admin.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUsersInviteKey() {
  return ['v1', '/v1/admin/users-invite'] as const
}

export function useGetV1AdminUsersInvite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminUsersInviteKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['users-invite'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUsersInvite<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminUsersInviteKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['users-invite'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminUsersInviteKey() {
  return ['v1', '/v1/admin/users-invite', 'POST'] as const
}

export function usePostV1AdminUsersInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['users-invite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['users-invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUsersInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.admin)['users-invite']['$post']> },
      ) => parseResponse(client.v1.admin['users-invite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AdminUsersInviteInviteUuidKey() {
  return ['v1', '/v1/admin/users-invite/:invite_uuid', 'DELETE'] as const
}

export function useDeleteV1AdminUsersInviteInviteUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminUsersInviteInviteUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.admin)['users-invite'][':invite_uuid']['$delete']>
        },
      ) =>
        parseResponse(client.v1.admin['users-invite'][':invite_uuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUsersUserIdKey(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>,
) {
  return ['v1', '/v1/admin/users/:user_id', args] as const
}

export function useGetV1AdminUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AdminUsersUserIdKey() {
  return ['v1', '/v1/admin/users/:user_id', 'DELETE'] as const
}

export function useDeleteV1AdminUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$delete']> },
      ) => parseResponse(client.v1.admin.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AdminUsersUserIdKey() {
  return ['v1', '/v1/admin/users/:user_id', 'PATCH'] as const
}

export function usePatchV1AdminUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AdminUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.admin.users)[':user_id']['$patch']> },
      ) => parseResponse(client.v1.admin.users[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AdminUsersUserIdDeactivateKey() {
  return ['v1', '/v1/admin/users/:user_id/deactivate', 'POST'] as const
}

export function usePostV1AdminUsersUserIdDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUsersUserIdDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.admin.users)[':user_id']['deactivate']['$post']>
        },
      ) => parseResponse(client.v1.admin.users[':user_id'].deactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AdminUsersUserIdReactivateKey() {
  return ['v1', '/v1/admin/users/:user_id/reactivate', 'POST'] as const
}

export function usePostV1AdminUsersUserIdReactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUsersUserIdReactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.admin.users)[':user_id']['reactivate']['$post']>
        },
      ) => parseResponse(client.v1.admin.users[':user_id'].reactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUsersUserIdWorkspacesKey(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>,
) {
  return ['v1', '/v1/admin/users/:user_id/workspaces', args] as const
}

export function useGetV1AdminUsersUserIdWorkspaces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUsersUserIdWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.admin.users[':user_id'].workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUsersUserIdWorkspaces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUsersUserIdWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.users)[':user_id']['workspaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.admin.users[':user_id'].workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminRolesKey() {
  return ['v1', '/v1/admin/roles'] as const
}

export function useGetV1AdminRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminWorkspacesKey(
  args: InferRequestType<typeof client.v1.admin.workspaces.$get>,
) {
  return ['v1', '/v1/admin/workspaces', args] as const
}

export function useGetV1AdminWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminWorkspaces<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.workspaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.workspaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminWorkspacesKey() {
  return ['v1', '/v1/admin/workspaces', 'POST'] as const
}

export function usePostV1AdminWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.workspaces.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.admin.workspaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.admin.workspaces.$post> }) =>
        parseResponse(client.v1.admin.workspaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AdminWorkspacesWorkspaceUuidKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid', 'DELETE'] as const
}

export function useDeleteV1AdminWorkspacesWorkspaceUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminWorkspacesWorkspaceUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$delete']>
        },
      ) => parseResponse(client.v1.admin.workspaces[':workspace_uuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AdminWorkspacesWorkspaceUuidKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid', 'PATCH'] as const
}

export function usePatchV1AdminWorkspacesWorkspaceUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AdminWorkspacesWorkspaceUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['$patch']>
        },
      ) => parseResponse(client.v1.admin.workspaces[':workspace_uuid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminWorkspacesWorkspaceUuidUsersKey(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>,
) {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/users', args] as const
}

export function useGetV1AdminWorkspacesWorkspaceUuidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminWorkspacesWorkspaceUuidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.workspaces[':workspace_uuid'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminWorkspacesWorkspaceUuidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminWorkspacesWorkspaceUuidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.workspaces[':workspace_uuid'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AdminWorkspacesWorkspaceUuidUsersKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/users', 'PATCH'] as const
}

export function usePatchV1AdminWorkspacesWorkspaceUuidUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AdminWorkspacesWorkspaceUuidUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin.workspaces)[':workspace_uuid']['users']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin.workspaces[':workspace_uuid'].users.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AdminWorkspacesWorkspaceUuidAddUsersKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/add-users', 'POST'] as const
}

export function usePostV1AdminWorkspacesWorkspaceUuidAddUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminWorkspacesWorkspaceUuidAddUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin.workspaces)[':workspace_uuid']['add-users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin.workspaces[':workspace_uuid']['add-users'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsersKey() {
  return ['v1', '/v1/admin/workspaces/:workspace_uuid/remove-users', 'DELETE'] as const
}

export function useDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminWorkspacesWorkspaceUuidRemoveUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin.workspaces)[':workspace_uuid']['remove-users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin.workspaces[':workspace_uuid']['remove-users'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminRateLimitKey() {
  return ['v1', '/v1/admin/rate-limit'] as const
}

export function useGetV1AdminRateLimit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminRateLimitKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['rate-limit'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminRateLimit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminRateLimitKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['rate-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['rate-limit'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminSpendLimitKey() {
  return ['v1', '/v1/admin/spend-limit'] as const
}

export function useGetV1AdminSpendLimit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminSpendLimitKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['spend-limit'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminSpendLimit<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminSpendLimitKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['spend-limit'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminSpendLimitKey() {
  return ['v1', '/v1/admin/spend-limit', 'POST'] as const
}

export function usePostV1AdminSpendLimit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['spend-limit']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['spend-limit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminSpendLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.admin)['spend-limit']['$post']> },
      ) => parseResponse(client.v1.admin['spend-limit'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUsageKey(args: InferRequestType<typeof client.v1.admin.usage.$get>) {
  return ['v1', '/v1/admin/usage', args] as const
}

export function useGetV1AdminUsage<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUsage<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.usage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminAuditLogsKey(
  args: InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>,
) {
  return ['v1', '/v1/admin/audit-logs', args] as const
}

export function useGetV1AdminAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['audit-logs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminUserGroupsKey(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>,
) {
  return ['v1', '/v1/admin/user-groups', args] as const
}

export function useGetV1AdminUserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['user-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['user-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminUserGroupsKey() {
  return ['v1', '/v1/admin/user-groups', 'POST'] as const
}

export function usePostV1AdminUserGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['user-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['user-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUserGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.admin)['user-groups']['$post']> },
      ) => parseResponse(client.v1.admin['user-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AdminUserGroupsProvisionWorkspaceKey() {
  return ['v1', '/v1/admin/user-groups/provision-workspace', 'POST'] as const
}

export function usePostV1AdminUserGroupsProvisionWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.admin)['user-groups']['provision-workspace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUserGroupsProvisionWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin)['user-groups']['provision-workspace']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin['user-groups']['provision-workspace'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUserGroupsGroupUuidKey(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid', args] as const
}

export function useGetV1AdminUserGroupsGroupUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsGroupUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.admin['user-groups'][':group_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUserGroupsGroupUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsGroupUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.admin['user-groups'][':group_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AdminUserGroupsGroupUuidKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid', 'DELETE'] as const
}

export function useDeleteV1AdminUserGroupsGroupUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminUserGroupsGroupUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$delete']>
        },
      ) => parseResponse(client.v1.admin['user-groups'][':group_uuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AdminUserGroupsGroupUuidKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid', 'PATCH'] as const
}

export function usePatchV1AdminUserGroupsGroupUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AdminUserGroupsGroupUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['$patch']>
        },
      ) => parseResponse(client.v1.admin['user-groups'][':group_uuid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUserGroupsGroupUuidMembersKey(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid/members', args] as const
}

export function useGetV1AdminUserGroupsGroupUuidMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsGroupUuidMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUserGroupsGroupUuidMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsGroupUuidMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminUserGroupsGroupUuidMembersKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/members', 'POST'] as const
}

export function usePostV1AdminUserGroupsGroupUuidMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUserGroupsGroupUuidMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AdminUserGroupsGroupUuidMembersKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/members', 'DELETE'] as const
}

export function useDeleteV1AdminUserGroupsGroupUuidMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminUserGroupsGroupUuidMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['members']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].members.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminUserGroupsGroupUuidWorkspacesKey(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
  >,
) {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces', args] as const
}

export function useGetV1AdminUserGroupsGroupUuidWorkspaces<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsGroupUuidWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].workspaces.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminUserGroupsGroupUuidWorkspaces<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminUserGroupsGroupUuidWorkspacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].workspaces.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminUserGroupsGroupUuidWorkspacesKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces', 'POST'] as const
}

export function usePostV1AdminUserGroupsGroupUuidWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminUserGroupsGroupUuidWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].workspaces.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces/:workspace_uuid', 'DELETE'] as const
}

export function useDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].workspaces[':workspace_uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/workspaces/:workspace_uuid', 'PATCH'] as const
}

export function usePatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AdminUserGroupsGroupUuidWorkspacesWorkspaceUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['workspaces'][':workspace_uuid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid'].workspaces[':workspace_uuid'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AdminUserGroupsGroupUuidOrganizationRoleKey() {
  return ['v1', '/v1/admin/user-groups/:group_uuid/organization-role', 'PATCH'] as const
}

export function usePatchV1AdminUserGroupsGroupUuidOrganizationRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AdminUserGroupsGroupUuidOrganizationRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.admin)['user-groups'][':group_uuid']['organization-role']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.admin['user-groups'][':group_uuid']['organization-role'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminApiKeysKey(
  args: InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>,
) {
  return ['v1', '/v1/admin/api-keys', args] as const
}

export function useGetV1AdminApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AdminApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AdminApiKeysKey() {
  return ['v1', '/v1/admin/api-keys', 'POST'] as const
}

export function usePostV1AdminApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)['api-keys']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.admin)['api-keys']['$post']> },
      ) => parseResponse(client.v1.admin['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AdminApiKeysKeyIdKey() {
  return ['v1', '/v1/admin/api-keys/:key_id', 'DELETE'] as const
}

export function useDeleteV1AdminApiKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AdminApiKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.admin)['api-keys'][':key_id']['$delete']> },
      ) => parseResponse(client.v1.admin['api-keys'][':key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AdminScimSyncKey() {
  return ['v1', '/v1/admin/scim/sync', 'POST'] as const
}

export function usePostV1AdminScimSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.admin.scim.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.admin.scim.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AdminScimSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.admin.scim.sync.$post> }) =>
        parseResponse(client.v1.admin.scim.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AdminScimSyncRunIdKey(
  args: InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>,
) {
  return ['v1', '/v1/admin/scim/sync/:run_id', args] as const
}

export function useGetV1AdminScimSyncRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminScimSyncRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.scim.sync[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminScimSyncRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminScimSyncRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.admin.scim.sync)[':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.admin.scim.sync[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminAnalyticsVibeWorkUsageByUserStatsKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_user_stats', args] as const
}

export function useGetV1AdminAnalyticsVibeWorkUsageByUserStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeWorkUsageByUserStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminAnalyticsVibeWorkUsageByUserStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeWorkUsageByUserStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_user_stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminAnalyticsVibeWorkUsageByAgentStatsKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_agent_stats', args] as const
}

export function useGetV1AdminAnalyticsVibeWorkUsageByAgentStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeWorkUsageByAgentStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminAnalyticsVibeWorkUsageByAgentStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeWorkUsageByAgentStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_agent_stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminAnalyticsVibeWorkUsageByTimeStatsKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/work/usage/by_time_stats', args] as const
}

export function useGetV1AdminAnalyticsVibeWorkUsageByTimeStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeWorkUsageByTimeStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminAnalyticsVibeWorkUsageByTimeStats<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeWorkUsageByTimeStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.work.usage.by_time_stats.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminAnalyticsVibeCodeUsageByWorkspaceKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/code/usage/by_workspace', args] as const
}

export function useGetV1AdminAnalyticsVibeCodeUsageByWorkspace<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeCodeUsageByWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.code.usage.by_workspace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminAnalyticsVibeCodeUsageByWorkspace<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeCodeUsageByWorkspaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_workspace.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.code.usage.by_workspace.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AdminAnalyticsVibeCodeUsageByOrganizationKey(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>,
) {
  return ['v1', '/v1/admin/analytics/vibe/code/usage/by_organization', args] as const
}

export function useGetV1AdminAnalyticsVibeCodeUsageByOrganization<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeCodeUsageByOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.code.usage.by_organization.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AdminAnalyticsVibeCodeUsageByOrganization<TError = unknown>(
  args: InferRequestType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AdminAnalyticsVibeCodeUsageByOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v1.admin.analytics.vibe.code.usage.by_organization.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.admin.analytics.vibe.code.usage.by_organization.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
