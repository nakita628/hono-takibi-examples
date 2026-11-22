import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppstoreKey() {
  return ['appstore'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostAppstoreV1ApplicationChargesJsonKey() {
  return ['appstore', '/appstore/v1/application_charges.json', 'POST'] as const
}

export function usePostAppstoreV1ApplicationChargesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['application_charges.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.appstore.v1)['application_charges.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppstoreV1ApplicationChargesJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.appstore.v1)['application_charges.json']['$post']>
        },
      ) => parseResponse(client.appstore.v1['application_charges.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppstoreV1InstallationJsonKey() {
  return ['appstore', '/appstore/v1/installation.json', 'DELETE'] as const
}

export function useDeleteAppstoreV1InstallationJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['installation.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppstoreV1InstallationJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.appstore.v1['installation.json'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonKey() {
  return [
    'appstore',
    '/appstore/v1/recurring_application_charges/:recurringApplicationChargeId/usage_charges.json',
    'POST',
  ] as const
}

export function usePostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.appstore.v1.recurring_application_charges)[':recurringApplicationChargeId']['usage_charges.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.appstore.v1.recurring_application_charges)[':recurringApplicationChargeId']['usage_charges.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonKey()
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
            (typeof client.appstore.v1.recurring_application_charges)[':recurringApplicationChargeId']['usage_charges.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.appstore.v1.recurring_application_charges[':recurringApplicationChargeId'][
            'usage_charges.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppstoreV1ScriptTagsJsonKey() {
  return ['appstore', '/appstore/v1/script_tags.json'] as const
}

export function useGetAppstoreV1ScriptTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
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
        ? getGetAppstoreV1ScriptTagsJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.appstore.v1['script_tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppstoreV1ScriptTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
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
        ? getGetAppstoreV1ScriptTagsJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.appstore.v1['script_tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppstoreV1ScriptTagsJsonKey() {
  return ['appstore', '/appstore/v1/script_tags.json', 'POST'] as const
}

export function usePostAppstoreV1ScriptTagsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.appstore.v1)['script_tags.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppstoreV1ScriptTagsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.appstore.v1)['script_tags.json']['$post']> },
      ) => parseResponse(client.appstore.v1['script_tags.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppstoreV1ScriptTagsScriptTagIdJsonKey(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>,
) {
  return ['appstore', '/appstore/v1/script_tags/:scriptTagId.json', args] as const
}

export function useGetAppstoreV1ScriptTagsScriptTagIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>
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
        ? getGetAppstoreV1ScriptTagsScriptTagIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.appstore.v1.script_tags[':scriptTagId.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppstoreV1ScriptTagsScriptTagIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>
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
        ? getGetAppstoreV1ScriptTagsScriptTagIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.appstore.v1.script_tags[':scriptTagId.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppstoreV1ScriptTagsScriptTagIdJsonKey() {
  return ['appstore', '/appstore/v1/script_tags/:scriptTagId.json', 'PUT'] as const
}

export function usePutAppstoreV1ScriptTagsScriptTagIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppstoreV1ScriptTagsScriptTagIdJsonKey()
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
            (typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']
          >
        },
      ) =>
        parseResponse(client.appstore.v1.script_tags[':scriptTagId.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppstoreV1ScriptTagsScriptTagIdJsonKey() {
  return ['appstore', '/appstore/v1/script_tags/:scriptTagId.json', 'DELETE'] as const
}

export function useDeleteAppstoreV1ScriptTagsScriptTagIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppstoreV1ScriptTagsScriptTagIdJsonKey()
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
            (typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.appstore.v1.script_tags[':scriptTagId.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1InlineScriptTagsJsonKey() {
  return ['v1', '/v1/inline_script_tags.json'] as const
}

export function useGetV1InlineScriptTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
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
        ? getGetV1InlineScriptTagsJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['inline_script_tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InlineScriptTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
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
        ? getGetV1InlineScriptTagsJsonKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['inline_script_tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InlineScriptTagsJsonKey() {
  return ['v1', '/v1/inline_script_tags.json', 'POST'] as const
}

export function usePostV1InlineScriptTagsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['inline_script_tags.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InlineScriptTagsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['inline_script_tags.json']['$post']> },
      ) => parseResponse(client.v1['inline_script_tags.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InlineScriptTagsInlineScriptTagIdJsonKey(
  args: InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>,
) {
  return ['v1', '/v1/inline_script_tags/:inlineScriptTagId.json', args] as const
}

export function useGetV1InlineScriptTagsInlineScriptTagIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>
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
        ? getGetV1InlineScriptTagsInlineScriptTagIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.inline_script_tags[':inlineScriptTagId.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InlineScriptTagsInlineScriptTagIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>
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
        ? getGetV1InlineScriptTagsInlineScriptTagIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.inline_script_tags[':inlineScriptTagId.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1InlineScriptTagsInlineScriptTagIdJsonKey() {
  return ['v1', '/v1/inline_script_tags/:inlineScriptTagId.json', 'PUT'] as const
}

export function usePutV1InlineScriptTagsInlineScriptTagIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1InlineScriptTagsInlineScriptTagIdJsonKey()
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
            (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.inline_script_tags[':inlineScriptTagId.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1InlineScriptTagsInlineScriptTagIdJsonKey() {
  return ['v1', '/v1/inline_script_tags/:inlineScriptTagId.json', 'DELETE'] as const
}

export function useDeleteV1InlineScriptTagsInlineScriptTagIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1InlineScriptTagsInlineScriptTagIdJsonKey()
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
            (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.inline_script_tags[':inlineScriptTagId.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ScriptTagsJsonKey() {
  return ['v1', '/v1/script_tags.json'] as const
}

export function useGetV1ScriptTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ScriptTagsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['script_tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ScriptTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ScriptTagsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['script_tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ScriptTagsJsonKey() {
  return ['v1', '/v1/script_tags.json', 'POST'] as const
}

export function usePostV1ScriptTagsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['script_tags.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ScriptTagsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['script_tags.json']['$post']> },
      ) => parseResponse(client.v1['script_tags.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ScriptTagsScriptTagIdJsonKey(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>,
) {
  return ['v1', '/v1/script_tags/:scriptTagId.json', args] as const
}

export function useGetV1ScriptTagsScriptTagIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
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
        ? getGetV1ScriptTagsScriptTagIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.script_tags[':scriptTagId.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ScriptTagsScriptTagIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
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
        ? getGetV1ScriptTagsScriptTagIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.script_tags[':scriptTagId.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ScriptTagsScriptTagIdJsonKey() {
  return ['v1', '/v1/script_tags/:scriptTagId.json', 'PUT'] as const
}

export function usePutV1ScriptTagsScriptTagIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ScriptTagsScriptTagIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']> },
      ) => parseResponse(client.v1.script_tags[':scriptTagId.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ScriptTagsScriptTagIdJsonKey() {
  return ['v1', '/v1/script_tags/:scriptTagId.json', 'DELETE'] as const
}

export function useDeleteV1ScriptTagsScriptTagIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ScriptTagsScriptTagIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>
        },
      ) => parseResponse(client.v1.script_tags[':scriptTagId.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
