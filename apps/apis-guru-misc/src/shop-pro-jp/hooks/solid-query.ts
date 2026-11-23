import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppstoreKey() {
  return ['appstore'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostAppstoreV1ApplicationChargesJsonMutationKey() {
  return ['appstore', '/appstore/v1/application_charges.json', 'POST'] as const
}

export function getPostAppstoreV1ApplicationChargesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['application_charges.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.appstore.v1)['application_charges.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppstoreV1ApplicationChargesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.appstore.v1)['application_charges.json']['$post']>,
    ) {
      return parseResponse(client.appstore.v1['application_charges.json'].$post(args, options))
    },
  })
}

export function createPostAppstoreV1ApplicationChargesJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.appstore.v1)['application_charges.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.appstore.v1)['application_charges.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppstoreV1ApplicationChargesJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAppstoreV1InstallationJsonMutationKey() {
  return ['appstore', '/appstore/v1/installation.json', 'DELETE'] as const
}

export function getDeleteAppstoreV1InstallationJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['installation.json']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppstoreV1InstallationJsonMutationKey(),
    async mutationFn() {
      return parseResponse(client.appstore.v1['installation.json'].$delete(undefined, options))
    },
  })
}

export function createDeleteAppstoreV1InstallationJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.appstore.v1)['installation.json']['$delete']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppstoreV1InstallationJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonMutationKey() {
  return [
    'appstore',
    '/appstore/v1/recurring_application_charges/:recurringApplicationChargeId/usage_charges.json',
    'POST',
  ] as const
}

export function getPostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.appstore.v1.recurring_application_charges)[':recurringApplicationChargeId']['usage_charges.json']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.appstore.v1.recurring_application_charges)[':recurringApplicationChargeId']['usage_charges.json']['$post']
      >,
    ) {
      return parseResponse(
        client.appstore.v1.recurring_application_charges[':recurringApplicationChargeId'][
          'usage_charges.json'
        ].$post(args, options),
      )
    },
  })
}

export function createPostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.appstore.v1.recurring_application_charges)[':recurringApplicationChargeId']['usage_charges.json']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAppstoreV1ScriptTagsJsonQueryKey() {
  return ['appstore', '/appstore/v1/script_tags.json'] as const
}

export function getAppstoreV1ScriptTagsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppstoreV1ScriptTagsJsonQueryKey>
  >({
    queryKey: getAppstoreV1ScriptTagsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.appstore.v1['script_tags.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppstoreV1ScriptTagsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppstoreV1ScriptTagsJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppstoreV1ScriptTagsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAppstoreV1ScriptTagsJsonMutationKey() {
  return ['appstore', '/appstore/v1/script_tags.json', 'POST'] as const
}

export function getPostAppstoreV1ScriptTagsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.appstore.v1)['script_tags.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppstoreV1ScriptTagsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.appstore.v1)['script_tags.json']['$post']>,
    ) {
      return parseResponse(client.appstore.v1['script_tags.json'].$post(args, options))
    },
  })
}

export function createPostAppstoreV1ScriptTagsJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.appstore.v1)['script_tags.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.appstore.v1)['script_tags.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppstoreV1ScriptTagsJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAppstoreV1ScriptTagsScriptTagIdJsonQueryKey(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>,
) {
  return ['appstore', '/appstore/v1/script_tags/:scriptTagId.json', args] as const
}

export function getAppstoreV1ScriptTagsScriptTagIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppstoreV1ScriptTagsScriptTagIdJsonQueryKey>
  >({
    queryKey: getAppstoreV1ScriptTagsScriptTagIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.appstore.v1.script_tags[':scriptTagId.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppstoreV1ScriptTagsScriptTagIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppstoreV1ScriptTagsScriptTagIdJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAppstoreV1ScriptTagsScriptTagIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAppstoreV1ScriptTagsScriptTagIdJsonMutationKey() {
  return ['appstore', '/appstore/v1/script_tags/:scriptTagId.json', 'PUT'] as const
}

export function getPutAppstoreV1ScriptTagsScriptTagIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppstoreV1ScriptTagsScriptTagIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>,
    ) {
      return parseResponse(client.appstore.v1.script_tags[':scriptTagId.json'].$put(args, options))
    },
  })
}

export function createPutAppstoreV1ScriptTagsScriptTagIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAppstoreV1ScriptTagsScriptTagIdJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAppstoreV1ScriptTagsScriptTagIdJsonMutationKey() {
  return ['appstore', '/appstore/v1/script_tags/:scriptTagId.json', 'DELETE'] as const
}

export function getDeleteAppstoreV1ScriptTagsScriptTagIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppstoreV1ScriptTagsScriptTagIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']
      >,
    ) {
      return parseResponse(
        client.appstore.v1.script_tags[':scriptTagId.json'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAppstoreV1ScriptTagsScriptTagIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAppstoreV1ScriptTagsScriptTagIdJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1InlineScriptTagsJsonQueryKey() {
  return ['v1', '/v1/inline_script_tags.json'] as const
}

export function getV1InlineScriptTagsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InlineScriptTagsJsonQueryKey>
  >({
    queryKey: getV1InlineScriptTagsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['inline_script_tags.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InlineScriptTagsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1InlineScriptTagsJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1InlineScriptTagsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1InlineScriptTagsJsonMutationKey() {
  return ['v1', '/v1/inline_script_tags.json', 'POST'] as const
}

export function getPostV1InlineScriptTagsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['inline_script_tags.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InlineScriptTagsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['inline_script_tags.json']['$post']>,
    ) {
      return parseResponse(client.v1['inline_script_tags.json'].$post(args, options))
    },
  })
}

export function createPostV1InlineScriptTagsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['inline_script_tags.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['inline_script_tags.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1InlineScriptTagsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1InlineScriptTagsInlineScriptTagIdJsonQueryKey(
  args: InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>,
) {
  return ['v1', '/v1/inline_script_tags/:inlineScriptTagId.json', args] as const
}

export function getV1InlineScriptTagsInlineScriptTagIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InlineScriptTagsInlineScriptTagIdJsonQueryKey>
  >({
    queryKey: getV1InlineScriptTagsInlineScriptTagIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.inline_script_tags[':inlineScriptTagId.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InlineScriptTagsInlineScriptTagIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1InlineScriptTagsInlineScriptTagIdJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1InlineScriptTagsInlineScriptTagIdJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1InlineScriptTagsInlineScriptTagIdJsonMutationKey() {
  return ['v1', '/v1/inline_script_tags/:inlineScriptTagId.json', 'PUT'] as const
}

export function getPutV1InlineScriptTagsInlineScriptTagIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1InlineScriptTagsInlineScriptTagIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.inline_script_tags[':inlineScriptTagId.json'].$put(args, options),
      )
    },
  })
}

export function createPutV1InlineScriptTagsInlineScriptTagIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1InlineScriptTagsInlineScriptTagIdJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1InlineScriptTagsInlineScriptTagIdJsonMutationKey() {
  return ['v1', '/v1/inline_script_tags/:inlineScriptTagId.json', 'DELETE'] as const
}

export function getDeleteV1InlineScriptTagsInlineScriptTagIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1InlineScriptTagsInlineScriptTagIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.inline_script_tags[':inlineScriptTagId.json'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1InlineScriptTagsInlineScriptTagIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1InlineScriptTagsInlineScriptTagIdJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ScriptTagsJsonQueryKey() {
  return ['v1', '/v1/script_tags.json'] as const
}

export function getV1ScriptTagsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ScriptTagsJsonQueryKey>
  >({
    queryKey: getV1ScriptTagsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['script_tags.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ScriptTagsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ScriptTagsJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ScriptTagsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ScriptTagsJsonMutationKey() {
  return ['v1', '/v1/script_tags.json', 'POST'] as const
}

export function getPostV1ScriptTagsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['script_tags.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ScriptTagsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['script_tags.json']['$post']>) {
      return parseResponse(client.v1['script_tags.json'].$post(args, options))
    },
  })
}

export function createPostV1ScriptTagsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['script_tags.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['script_tags.json']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ScriptTagsJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ScriptTagsScriptTagIdJsonQueryKey(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>,
) {
  return ['v1', '/v1/script_tags/:scriptTagId.json', args] as const
}

export function getV1ScriptTagsScriptTagIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ScriptTagsScriptTagIdJsonQueryKey>
  >({
    queryKey: getV1ScriptTagsScriptTagIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.script_tags[':scriptTagId.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ScriptTagsScriptTagIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ScriptTagsScriptTagIdJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ScriptTagsScriptTagIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ScriptTagsScriptTagIdJsonMutationKey() {
  return ['v1', '/v1/script_tags/:scriptTagId.json', 'PUT'] as const
}

export function getPutV1ScriptTagsScriptTagIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ScriptTagsScriptTagIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>,
    ) {
      return parseResponse(client.v1.script_tags[':scriptTagId.json'].$put(args, options))
    },
  })
}

export function createPutV1ScriptTagsScriptTagIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ScriptTagsScriptTagIdJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1ScriptTagsScriptTagIdJsonMutationKey() {
  return ['v1', '/v1/script_tags/:scriptTagId.json', 'DELETE'] as const
}

export function getDeleteV1ScriptTagsScriptTagIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ScriptTagsScriptTagIdJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>,
    ) {
      return parseResponse(client.v1.script_tags[':scriptTagId.json'].$delete(args, options))
    },
  })
}

export function createDeleteV1ScriptTagsScriptTagIdJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ScriptTagsScriptTagIdJsonMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
