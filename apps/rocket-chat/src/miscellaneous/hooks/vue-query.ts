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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1EmailInboxListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/email-inbox.list', keyArgs] as const
}

export function getApiV1EmailInboxListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmailInboxListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['email-inbox.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmailInboxList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['email-inbox.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmailInboxListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['email-inbox.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmailInboxListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmailInboxListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['email-inbox.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1EmailInboxMutationKey() {
  return ['api', '/api/v1/email-inbox', 'POST'] as const
}

export function getPostApiV1EmailInboxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['email-inbox']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['email-inbox']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmailInboxMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['email-inbox']['$post']>) {
      return parseResponse(client.api.v1['email-inbox'].$post(args, options))
    },
  })
}

export function usePostApiV1EmailInbox<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['email-inbox']['$post']>,
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
  const mutationDefaults = getPostApiV1EmailInboxMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EmailInboxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/email-inbox/:_id', keyArgs] as const
}

export function getApiV1EmailInboxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmailInboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['email-inbox'][':_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmailInboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmailInboxIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['email-inbox'][':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmailInboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmailInboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['email-inbox'][':_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1EmailInboxIdMutationKey() {
  return ['api', '/api/v1/email-inbox/:_id', 'DELETE'] as const
}

export function getDeleteApiV1EmailInboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['email-inbox'][':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1EmailInboxIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1['email-inbox'][':_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1EmailInboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox'][':_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['email-inbox'][':_id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1EmailInboxIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EmailInboxSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox.search']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/email-inbox.search', keyArgs] as const
}

export function getApiV1EmailInboxSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox.search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmailInboxSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['email-inbox.search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmailInboxSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['email-inbox.search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['email-inbox.search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox.search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['email-inbox.search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmailInboxSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['email-inbox.search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmailInboxSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmailInboxSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['email-inbox.search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1EmailInboxSendTestIdMutationKey() {
  return ['api', '/api/v1/email-inbox.send-test/:_id', 'POST'] as const
}

export function getPostApiV1EmailInboxSendTestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['email-inbox.send-test'][':_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['email-inbox.send-test'][':_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmailInboxSendTestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['email-inbox.send-test'][':_id']['$post']>,
    ) {
      return parseResponse(client.api.v1['email-inbox.send-test'][':_id'].$post(args, options))
    },
  })
}

export function usePostApiV1EmailInboxSendTestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['email-inbox.send-test'][':_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['email-inbox.send-test'][':_id']['$post']>,
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
  const mutationDefaults = getPostApiV1EmailInboxSendTestIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ShieldSvgQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['shield.svg']['$get']>>,
) {
  return ['api', '/api/v1/shield.svg', toValue(args)] as const
}

export function getApiV1ShieldSvgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['shield.svg']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ShieldSvgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['shield.svg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ShieldSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['shield.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['shield.svg']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['shield.svg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['shield.svg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ShieldSvgQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['shield.svg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ShieldSvgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ShieldSvgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['shield.svg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SpotlightQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.spotlight.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/spotlight', keyArgs] as const
}

export function getApiV1SpotlightQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.spotlight.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SpotlightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.spotlight.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Spotlight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spotlight.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.spotlight.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spotlight.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spotlight.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SpotlightQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spotlight.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SpotlightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SpotlightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.spotlight.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SmtpCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['smtp.check']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/smtp.check', keyArgs] as const
}

export function getApiV1SmtpCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['smtp.check']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SmtpCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['smtp.check'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SmtpCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['smtp.check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['smtp.check']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['smtp.check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['smtp.check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SmtpCheckQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['smtp.check']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SmtpCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SmtpCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['smtp.check'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1FingerprintMutationKey() {
  return ['api', '/api/v1/fingerprint', 'POST'] as const
}

export function getPostApiV1FingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fingerprint.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.fingerprint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FingerprintMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.fingerprint.$post>) {
      return parseResponse(client.api.v1.fingerprint.$post(args, options))
    },
  })
}

export function usePostApiV1Fingerprint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fingerprint.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.fingerprint.$post>,
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
  const mutationDefaults = getPostApiV1FingerprintMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LicensesInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['licenses.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/licenses.info', keyArgs] as const
}

export function getApiV1LicensesInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['licenses.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LicensesInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['licenses.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LicensesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['licenses.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['licenses.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['licenses.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['licenses.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LicensesInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['licenses.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LicensesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LicensesInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['licenses.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1LicensesAddMutationKey() {
  return ['api', '/api/v1/licenses.add', 'POST'] as const
}

export function getPostApiV1LicensesAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['licenses.add']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['licenses.add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LicensesAddMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['licenses.add']['$post']>) {
      return parseResponse(client.api.v1['licenses.add'].$post(args, options))
    },
  })
}

export function usePostApiV1LicensesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['licenses.add']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['licenses.add']['$post']>,
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
  const mutationDefaults = getPostApiV1LicensesAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1LicensesValidateMutationKey() {
  return ['api', '/api/v1/licenses.validate', 'POST'] as const
}

export function getPostApiV1LicensesValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['licenses.validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['licenses.validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LicensesValidateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['licenses.validate']['$post']>) {
      return parseResponse(client.api.v1['licenses.validate'].$post(args, options))
    },
  })
}

export function usePostApiV1LicensesValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['licenses.validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['licenses.validate']['$post']>,
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
  const mutationDefaults = getPostApiV1LicensesValidateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LicensesMaxActiveUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/licenses.maxActiveUsers', keyArgs] as const
}

export function getApiV1LicensesMaxActiveUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LicensesMaxActiveUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['licenses.maxActiveUsers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LicensesMaxActiveUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LicensesMaxActiveUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['licenses.maxActiveUsers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LicensesMaxActiveUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LicensesMaxActiveUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['licenses.maxActiveUsers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CommandsGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.get']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/commands.get', keyArgs] as const
}

export function getApiV1CommandsGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CommandsGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['commands.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CommandsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['commands.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.get']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.get']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CommandsGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['commands.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandsGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CommandsGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['commands.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CommandsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/commands.list', keyArgs] as const
}

export function getApiV1CommandsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CommandsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['commands.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CommandsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['commands.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CommandsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['commands.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CommandsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['commands.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CommandsPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.preview']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/commands.preview', keyArgs] as const
}

export function getApiV1CommandsPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CommandsPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['commands.preview'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CommandsPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['commands.preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['commands.preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CommandsPreviewQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['commands.preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandsPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CommandsPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['commands.preview'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CommandsPreviewMutationKey() {
  return ['api', '/api/v1/commands.preview', 'POST'] as const
}

export function getPostApiV1CommandsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['commands.preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['commands.preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CommandsPreviewMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['commands.preview']['$post']>) {
      return parseResponse(client.api.v1['commands.preview'].$post(args, options))
    },
  })
}

export function usePostApiV1CommandsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.preview']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['commands.preview']['$post']>,
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
  const mutationDefaults = getPostApiV1CommandsPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1CommandsRunMutationKey() {
  return ['api', '/api/v1/commands.run', 'POST'] as const
}

export function getPostApiV1CommandsRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['commands.run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['commands.run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CommandsRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['commands.run']['$post']>) {
      return parseResponse(client.api.v1['commands.run'].$post(args, options))
    },
  })
}

export function usePostApiV1CommandsRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['commands.run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['commands.run']['$post']>,
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
  const mutationDefaults = getPostApiV1CommandsRunMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1MailerMutationKey() {
  return ['api', '/api/v1/mailer', 'POST'] as const
}

export function getPostApiV1MailerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mailer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.mailer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MailerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.mailer.$post>) {
      return parseResponse(client.api.v1.mailer.$post(args, options))
    },
  })
}

export function usePostApiV1Mailer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mailer.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.mailer.$post>,
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
  const mutationDefaults = getPostApiV1MailerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1MailerUnsubscribeMutationKey() {
  return ['api', '/api/v1/mailer.unsubscribe', 'POST'] as const
}

export function getPostApiV1MailerUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['mailer.unsubscribe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['mailer.unsubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MailerUnsubscribeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['mailer.unsubscribe']['$post']>,
    ) {
      return parseResponse(client.api.v1['mailer.unsubscribe'].$post(args, options))
    },
  })
}

export function usePostApiV1MailerUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['mailer.unsubscribe']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['mailer.unsubscribe']['$post']>,
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
  const mutationDefaults = getPostApiV1MailerUnsubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CalendarEventsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['calendar-events.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/calendar-events.list', keyArgs] as const
}

export function getApiV1CalendarEventsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['calendar-events.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CalendarEventsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['calendar-events.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CalendarEventsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['calendar-events.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['calendar-events.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CalendarEventsListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['calendar-events.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CalendarEventsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CalendarEventsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['calendar-events.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CalendarEventsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['calendar-events.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/calendar-events.info', keyArgs] as const
}

export function getApiV1CalendarEventsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['calendar-events.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CalendarEventsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['calendar-events.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CalendarEventsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['calendar-events.info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['calendar-events.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CalendarEventsInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['calendar-events.info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CalendarEventsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CalendarEventsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['calendar-events.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CalendarEventsCreateMutationKey() {
  return ['api', '/api/v1/calendar-events.create', 'POST'] as const
}

export function getPostApiV1CalendarEventsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['calendar-events.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['calendar-events.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CalendarEventsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['calendar-events.create']['$post']>,
    ) {
      return parseResponse(client.api.v1['calendar-events.create'].$post(args, options))
    },
  })
}

export function usePostApiV1CalendarEventsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['calendar-events.create']['$post']>,
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
  const mutationDefaults = getPostApiV1CalendarEventsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1CalendarEventsUpdateMutationKey() {
  return ['api', '/api/v1/calendar-events.update', 'POST'] as const
}

export function getPostApiV1CalendarEventsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['calendar-events.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['calendar-events.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CalendarEventsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['calendar-events.update']['$post']>,
    ) {
      return parseResponse(client.api.v1['calendar-events.update'].$post(args, options))
    },
  })
}

export function usePostApiV1CalendarEventsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['calendar-events.update']['$post']>,
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
  const mutationDefaults = getPostApiV1CalendarEventsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1CalendarEventsDeleteMutationKey() {
  return ['api', '/api/v1/calendar-events.delete', 'POST'] as const
}

export function getPostApiV1CalendarEventsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['calendar-events.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['calendar-events.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CalendarEventsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['calendar-events.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1['calendar-events.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1CalendarEventsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['calendar-events.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1CalendarEventsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1CalendarEventsImportMutationKey() {
  return ['api', '/api/v1/calendar-events.import', 'POST'] as const
}

export function getPostApiV1CalendarEventsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['calendar-events.import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['calendar-events.import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CalendarEventsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['calendar-events.import']['$post']>,
    ) {
      return parseResponse(client.api.v1['calendar-events.import'].$post(args, options))
    },
  })
}

export function usePostApiV1CalendarEventsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['calendar-events.import']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['calendar-events.import']['$post']>,
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
  const mutationDefaults = getPostApiV1CalendarEventsImportMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAppsPublicAppIdIncomingMutationKey() {
  return ['api', '/api/apps/public/:app-id/incoming', 'POST'] as const
}

export function getPostApiAppsPublicAppIdIncomingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppsPublicAppIdIncomingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
    ) {
      return parseResponse(client.api.apps.public[':app-id'].incoming.$post(args, options))
    },
  })
}

export function usePostApiAppsPublicAppIdIncoming<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
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
  const mutationDefaults = getPostApiAppsPublicAppIdIncomingMutationOptions<
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

export function getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationKey() {
  return ['api', '/api/v1/video-conference/jitsi.update-timeout', 'POST'] as const
}

export function getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['video-conference']['jitsi.update-timeout'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1VideoConferenceJitsiUpdateTimeout<
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
                    (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
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
  const mutationDefaults = getPostApiV1VideoConferenceJitsiUpdateTimeoutMutationOptions<
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

export function getPostApiAppsPublicAppIdTemplateMessageMutationKey() {
  return ['api', '/api/apps/public/:appId/templateMessage', 'POST'] as const
}

export function getPostApiAppsPublicAppIdTemplateMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAppsPublicAppIdTemplateMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
    ) {
      return parseResponse(client.api.apps.public[':appId'].templateMessage.$post(args, options))
    },
  })
}

export function usePostApiAppsPublicAppIdTemplateMessage<
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
                  ReturnType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
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
  const mutationDefaults = getPostApiAppsPublicAppIdTemplateMessageMutationOptions<
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
