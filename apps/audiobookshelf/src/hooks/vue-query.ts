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

export function getApiAuthorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.authors)[':id']['$get']>>,
) {
  return ['api', '/api/authors/:id', toValue(args)] as const
}

export function getApiAuthorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.authors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAuthorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.authors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAuthorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.authors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiAuthorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAuthorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.authors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiAuthorsIdMutationKey() {
  return ['api', '/api/authors/:id', 'DELETE'] as const
}

export function getDeleteApiAuthorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.authors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAuthorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.authors)[':id']['$delete']>) {
      return parseResponse(client.api.authors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAuthorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.authors)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiAuthorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiAuthorsIdMutationKey() {
  return ['api', '/api/authors/:id', 'PATCH'] as const
}

export function getPatchApiAuthorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.authors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAuthorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.authors)[':id']['$patch']>) {
      return parseResponse(client.api.authors[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiAuthorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.authors)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiAuthorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAuthorsIdImageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.authors)[':id']['image']['$get']>>,
) {
  return ['api', '/api/authors/:id/image', toValue(args)] as const
}

export function getApiAuthorsIdImageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.authors)[':id']['image']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAuthorsIdImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.authors[':id'].image.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAuthorsIdImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.authors)[':id']['image']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAuthorsIdImageQueryKey>
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
          Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthorsIdImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAuthorsIdImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.authors[':id'].image.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAuthorsIdImageMutationKey() {
  return ['api', '/api/authors/:id/image', 'POST'] as const
}

export function getPostApiAuthorsIdImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.authors)[':id']['image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthorsIdImageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.authors)[':id']['image']['$post']>) {
      return parseResponse(client.api.authors[':id'].image.$post(args, options))
    },
  })
}

export function usePostApiAuthorsIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.authors)[':id']['image']['$post']>,
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
  const mutationDefaults = getPostApiAuthorsIdImageMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAuthorsIdImageMutationKey() {
  return ['api', '/api/authors/:id/image', 'DELETE'] as const
}

export function getDeleteApiAuthorsIdImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.authors)[':id']['image']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAuthorsIdImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.authors)[':id']['image']['$delete']>,
    ) {
      return parseResponse(client.api.authors[':id'].image.$delete(args, options))
    },
  })
}

export function useDeleteApiAuthorsIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.authors)[':id']['image']['$delete']>,
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
  const mutationDefaults = getDeleteApiAuthorsIdImageMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiAuthorsIdImageMutationKey() {
  return ['api', '/api/authors/:id/image', 'PATCH'] as const
}

export function getPatchApiAuthorsIdImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.authors)[':id']['image']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAuthorsIdImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.authors)[':id']['image']['$patch']>,
    ) {
      return parseResponse(client.api.authors[':id'].image.$patch(args, options))
    },
  })
}

export function usePatchApiAuthorsIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.authors)[':id']['image']['$patch']>,
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
  const mutationDefaults = getPatchApiAuthorsIdImageMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiAuthorsIdMatchMutationKey() {
  return ['api', '/api/authors/:id/match', 'POST'] as const
}

export function getPostApiAuthorsIdMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.authors)[':id']['match']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.authors)[':id']['match']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthorsIdMatchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.authors)[':id']['match']['$post']>) {
      return parseResponse(client.api.authors[':id'].match.$post(args, options))
    },
  })
}

export function usePostApiAuthorsIdMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.authors)[':id']['match']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.authors)[':id']['match']['$post']>,
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
  const mutationDefaults = getPostApiAuthorsIdMatchMutationOptions<TError, TOnMutateResult>(
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

export function getApiEmailsSettingsQueryKey() {
  return ['api', '/api/emails/settings'] as const
}

export function getApiEmailsSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiEmailsSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.emails.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEmailsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>
            >
          >,
          ReturnType<typeof getApiEmailsSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmailsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiEmailsSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.emails.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiEmailsSettingsMutationKey() {
  return ['api', '/api/emails/settings', 'PATCH'] as const
}

export function getPatchApiEmailsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.emails.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiEmailsSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.emails.settings.$patch>) {
      return parseResponse(client.api.emails.settings.$patch(args, options))
    },
  })
}

export function usePatchApiEmailsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.emails.settings.$patch>,
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
  const mutationDefaults = getPatchApiEmailsSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiEmailsTestMutationKey() {
  return ['api', '/api/emails/test', 'POST'] as const
}

export function getPostApiEmailsTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.test.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailsTestMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.emails.test.$post(undefined, options))
    },
  })
}

export function usePostApiEmailsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.test.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiEmailsTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiEmailsEreaderDevicesMutationKey() {
  return ['api', '/api/emails/ereader-devices', 'POST'] as const
}

export function getPostApiEmailsEreaderDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.emails)['ereader-devices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.emails)['ereader-devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailsEreaderDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.emails)['ereader-devices']['$post']>,
    ) {
      return parseResponse(client.api.emails['ereader-devices'].$post(args, options))
    },
  })
}

export function usePostApiEmailsEreaderDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.emails)['ereader-devices']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.emails)['ereader-devices']['$post']>,
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
  const mutationDefaults = getPostApiEmailsEreaderDevicesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiEmailsSendEbookToDeviceMutationKey() {
  return ['api', '/api/emails/send-ebook-to-device', 'POST'] as const
}

export function getPostApiEmailsSendEbookToDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.emails)['send-ebook-to-device']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.emails)['send-ebook-to-device']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmailsSendEbookToDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.emails)['send-ebook-to-device']['$post']>,
    ) {
      return parseResponse(client.api.emails['send-ebook-to-device'].$post(args, options))
    },
  })
}

export function usePostApiEmailsSendEbookToDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.emails)['send-ebook-to-device']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.emails)['send-ebook-to-device']['$post']>,
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
  const mutationDefaults = getPostApiEmailsSendEbookToDeviceMutationOptions<
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

export function getApiLibrariesQueryKey() {
  return ['api', '/api/libraries'] as const
}

export function getApiLibrariesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiLibrariesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.libraries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLibraries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
          >,
          ReturnType<typeof getApiLibrariesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiLibrariesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.libraries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLibrariesMutationKey() {
  return ['api', '/api/libraries', 'POST'] as const
}

export function getPostApiLibrariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.libraries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLibrariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.libraries.$post>) {
      return parseResponse(client.api.libraries.$post(args, options))
    },
  })
}

export function usePostApiLibraries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.libraries.$post>,
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
  const mutationDefaults = getPostApiLibrariesMutationOptions<TError, TOnMutateResult>(
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

export function getApiLibrariesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['$get']>>,
) {
  return ['api', '/api/libraries/:id', toValue(args)] as const
}

export function getApiLibrariesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLibrariesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.libraries[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLibrariesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLibrariesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLibrariesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.libraries[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLibrariesIdMutationKey() {
  return ['api', '/api/libraries/:id', 'DELETE'] as const
}

export function getDeleteApiLibrariesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.libraries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLibrariesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.libraries)[':id']['$delete']>) {
      return parseResponse(client.api.libraries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiLibrariesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.libraries)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiLibrariesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiLibrariesIdMutationKey() {
  return ['api', '/api/libraries/:id', 'PATCH'] as const
}

export function getPatchApiLibrariesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.libraries)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLibrariesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.libraries)[':id']['$patch']>) {
      return parseResponse(client.api.libraries[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLibrariesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.libraries)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLibrariesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLibrariesIdAuthorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['authors']['$get']>>,
) {
  return ['api', '/api/libraries/:id/authors', toValue(args)] as const
}

export function getApiLibrariesIdAuthorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['authors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLibrariesIdAuthorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.libraries[':id'].authors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLibrariesIdAuthors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['authors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['authors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['authors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLibrariesIdAuthorsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.libraries)[':id']['authors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesIdAuthorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLibrariesIdAuthorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.libraries[':id'].authors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLibrariesIdItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['items']['$get']>>,
) {
  return ['api', '/api/libraries/:id/items', toValue(args)] as const
}

export function getApiLibrariesIdItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLibrariesIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.libraries[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLibrariesIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLibrariesIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.libraries)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLibrariesIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.libraries[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLibrariesIdIssuesMutationKey() {
  return ['api', '/api/libraries/:id/issues', 'DELETE'] as const
}

export function getDeleteApiLibrariesIdIssuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.libraries)[':id']['issues']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.libraries)[':id']['issues']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLibrariesIdIssuesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.libraries)[':id']['issues']['$delete']>,
    ) {
      return parseResponse(client.api.libraries[':id'].issues.$delete(args, options))
    },
  })
}

export function useDeleteApiLibrariesIdIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['issues']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.libraries)[':id']['issues']['$delete']>,
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
  const mutationDefaults = getDeleteApiLibrariesIdIssuesMutationOptions<TError, TOnMutateResult>(
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

export function getApiLibrariesIdSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['series']['$get']>>,
) {
  return ['api', '/api/libraries/:id/series', toValue(args)] as const
}

export function getApiLibrariesIdSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['series']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLibrariesIdSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.libraries[':id'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLibrariesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.libraries)[':id']['series']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['series']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.libraries)[':id']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLibrariesIdSeriesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.libraries)[':id']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesIdSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLibrariesIdSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.libraries[':id'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLibrariesIdSeriesSeriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>
  >,
) {
  return ['api', '/api/libraries/:id/series/:seriesId', toValue(args)] as const
}

export function getApiLibrariesIdSeriesSeriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLibrariesIdSeriesSeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.libraries[':id'].series[':seriesId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLibrariesIdSeriesSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>
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
                  ReturnType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLibrariesIdSeriesSeriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesIdSeriesSeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLibrariesIdSeriesSeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.libraries[':id'].series[':seriesId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNotificationsQueryKey() {
  return ['api', '/api/notifications'] as const
}

export function getApiNotificationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiNotificationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>
            >
          >,
          ReturnType<typeof getApiNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiNotificationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiNotificationsMutationKey() {
  return ['api', '/api/notifications', 'POST'] as const
}

export function getPostApiNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.notifications.$post>) {
      return parseResponse(client.api.notifications.$post(args, options))
    },
  })
}

export function usePostApiNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.notifications.$post>,
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
  const mutationDefaults = getPostApiNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiNotificationsMutationKey() {
  return ['api', '/api/notifications', 'PATCH'] as const
}

export function getPatchApiNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.notifications.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.notifications.$patch>) {
      return parseResponse(client.api.notifications.$patch(args, options))
    },
  })
}

export function usePatchApiNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.notifications.$patch>,
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
  const mutationDefaults = getPatchApiNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiNotificationdataQueryKey() {
  return ['api', '/api/notificationdata'] as const
}

export function getApiNotificationdataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiNotificationdataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notificationdata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>
            >
          >,
          ReturnType<typeof getApiNotificationdataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiNotificationdataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notificationdata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNotificationsTestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.notifications.test.$get>>,
) {
  return ['api', '/api/notifications/test', toValue(args)] as const
}

export function getApiNotificationsTestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.notifications.test.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNotificationsTestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications.test.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationsTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.notifications.test.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>
            >
          >,
          ReturnType<typeof getApiNotificationsTestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNotificationsTestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications.test.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiNotificationsIdMutationKey() {
  return ['api', '/api/notifications/:id', 'DELETE'] as const
}

export function getDeleteApiNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.notifications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.notifications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.notifications)[':id']['$delete']>) {
      return parseResponse(client.api.notifications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.notifications)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiNotificationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiNotificationsIdMutationKey() {
  return ['api', '/api/notifications/:id', 'PATCH'] as const
}

export function getPatchApiNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.notifications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.notifications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.notifications)[':id']['$patch']>) {
      return parseResponse(client.api.notifications[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.notifications)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiNotificationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiNotificationsIdTestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)[':id']['test']['$get']>
  >,
) {
  return ['api', '/api/notifications/:id/test', toValue(args)] as const
}

export function getApiNotificationsIdTestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)[':id']['test']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNotificationsIdTestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications[':id'].test.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotificationsIdTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)[':id']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.notifications)[':id']['test']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)[':id']['test']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.notifications)[':id']['test']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiNotificationsIdTestQueryKey>
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
          Awaited<ReturnType<(typeof client.api.notifications)[':id']['test']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsIdTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNotificationsIdTestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications[':id'].test.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPodcastsMutationKey() {
  return ['api', '/api/podcasts', 'POST'] as const
}

export function getPostApiPodcastsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.podcasts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPodcastsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.podcasts.$post>) {
      return parseResponse(client.api.podcasts.$post(args, options))
    },
  })
}

export function usePostApiPodcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.podcasts.$post>,
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
  const mutationDefaults = getPostApiPodcastsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPodcastsFeedMutationKey() {
  return ['api', '/api/podcasts/feed', 'POST'] as const
}

export function getPostApiPodcastsFeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.feed.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.podcasts.feed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPodcastsFeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.podcasts.feed.$post>) {
      return parseResponse(client.api.podcasts.feed.$post(args, options))
    },
  })
}

export function usePostApiPodcastsFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.feed.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.podcasts.feed.$post>,
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
  const mutationDefaults = getPostApiPodcastsFeedMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiPodcastsOpmlParseMutationKey() {
  return ['api', '/api/podcasts/opml/parse', 'POST'] as const
}

export function getPostApiPodcastsOpmlParseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.opml.parse.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.podcasts.opml.parse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPodcastsOpmlParseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.podcasts.opml.parse.$post>) {
      return parseResponse(client.api.podcasts.opml.parse.$post(args, options))
    },
  })
}

export function usePostApiPodcastsOpmlParse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.opml.parse.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.podcasts.opml.parse.$post>,
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
  const mutationDefaults = getPostApiPodcastsOpmlParseMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiPodcastsOpmlCreateMutationKey() {
  return ['api', '/api/podcasts/opml/create', 'POST'] as const
}

export function getPostApiPodcastsOpmlCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.opml.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.podcasts.opml.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPodcastsOpmlCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.podcasts.opml.create.$post>) {
      return parseResponse(client.api.podcasts.opml.create.$post(args, options))
    },
  })
}

export function usePostApiPodcastsOpmlCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.podcasts.opml.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.podcasts.opml.create.$post>,
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
  const mutationDefaults = getPostApiPodcastsOpmlCreateMutationOptions<TError, TOnMutateResult>(
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

export function getApiPodcastsIdChecknewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>,
) {
  return ['api', '/api/podcasts/:id/checknew', toValue(args)] as const
}

export function getApiPodcastsIdChecknewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPodcastsIdChecknewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.podcasts[':id'].checknew.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPodcastsIdChecknew<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPodcastsIdChecknewQueryKey>
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
          Awaited<ReturnType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastsIdChecknewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPodcastsIdChecknewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.podcasts[':id'].checknew.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPodcastsIdClearQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>
  >,
) {
  return ['api', '/api/podcasts/:id/clear-queue', toValue(args)] as const
}

export function getApiPodcastsIdClearQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPodcastsIdClearQueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.podcasts[':id']['clear-queue'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPodcastsIdClearQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPodcastsIdClearQueueQueryKey>
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
          Awaited<ReturnType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastsIdClearQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPodcastsIdClearQueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.podcasts[':id']['clear-queue'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPodcastsIdDownloadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['downloads']['$get']>
  >,
) {
  return ['api', '/api/podcasts/:id/downloads', toValue(args)] as const
}

export function getApiPodcastsIdDownloadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['downloads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPodcastsIdDownloadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.podcasts[':id'].downloads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPodcastsIdDownloads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['downloads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['downloads']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['downloads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['downloads']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPodcastsIdDownloadsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.podcasts)[':id']['downloads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastsIdDownloadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPodcastsIdDownloadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.podcasts[':id'].downloads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPodcastsIdSearchEpisodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>
  >,
) {
  return ['api', '/api/podcasts/:id/search-episode', toValue(args)] as const
}

export function getApiPodcastsIdSearchEpisodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPodcastsIdSearchEpisodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.podcasts[':id']['search-episode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPodcastsIdSearchEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPodcastsIdSearchEpisodeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastsIdSearchEpisodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPodcastsIdSearchEpisodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.podcasts[':id']['search-episode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPodcastsIdDownloadEpisodesMutationKey() {
  return ['api', '/api/podcasts/:id/download-episodes', 'POST'] as const
}

export function getPostApiPodcastsIdDownloadEpisodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.podcasts)[':id']['download-episodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.podcasts)[':id']['download-episodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPodcastsIdDownloadEpisodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.podcasts)[':id']['download-episodes']['$post']>,
    ) {
      return parseResponse(client.api.podcasts[':id']['download-episodes'].$post(args, options))
    },
  })
}

export function usePostApiPodcastsIdDownloadEpisodes<
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
                  ReturnType<(typeof client.api.podcasts)[':id']['download-episodes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.podcasts)[':id']['download-episodes']['$post']>,
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
  const mutationDefaults = getPostApiPodcastsIdDownloadEpisodesMutationOptions<
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

export function getPostApiPodcastsIdMatchEpisodesMutationKey() {
  return ['api', '/api/podcasts/:id/match-episodes', 'POST'] as const
}

export function getPostApiPodcastsIdMatchEpisodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.podcasts)[':id']['match-episodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.podcasts)[':id']['match-episodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPodcastsIdMatchEpisodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.podcasts)[':id']['match-episodes']['$post']>,
    ) {
      return parseResponse(client.api.podcasts[':id']['match-episodes'].$post(args, options))
    },
  })
}

export function usePostApiPodcastsIdMatchEpisodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.podcasts)[':id']['match-episodes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.podcasts)[':id']['match-episodes']['$post']>,
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
  const mutationDefaults = getPostApiPodcastsIdMatchEpisodesMutationOptions<
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

export function getApiPodcastsIdEpisodeEpisodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>
  >,
) {
  return ['api', '/api/podcasts/:id/episode/:episodeId', toValue(args)] as const
}

export function getApiPodcastsIdEpisodeEpisodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPodcastsIdEpisodeEpisodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.podcasts[':id'].episode[':episodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPodcastsIdEpisodeEpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>
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
                  ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiPodcastsIdEpisodeEpisodeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastsIdEpisodeEpisodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPodcastsIdEpisodeEpisodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.podcasts[':id'].episode[':episodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiPodcastsIdEpisodeEpisodeIdMutationKey() {
  return ['api', '/api/podcasts/:id/episode/:episodeId', 'DELETE'] as const
}

export function getDeleteApiPodcastsIdEpisodeEpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPodcastsIdEpisodeEpisodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']
      >,
    ) {
      return parseResponse(client.api.podcasts[':id'].episode[':episodeId'].$delete(args, options))
    },
  })
}

export function useDeleteApiPodcastsIdEpisodeEpisodeId<
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
                    (typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']>,
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
  const mutationDefaults = getDeleteApiPodcastsIdEpisodeEpisodeIdMutationOptions<
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

export function getPatchApiPodcastsIdEpisodeEpisodeIdMutationKey() {
  return ['api', '/api/podcasts/:id/episode/:episodeId', 'PATCH'] as const
}

export function getPatchApiPodcastsIdEpisodeEpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPodcastsIdEpisodeEpisodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']
      >,
    ) {
      return parseResponse(client.api.podcasts[':id'].episode[':episodeId'].$patch(args, options))
    },
  })
}

export function usePatchApiPodcastsIdEpisodeEpisodeId<
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
                  ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']>,
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
  const mutationDefaults = getPatchApiPodcastsIdEpisodeEpisodeIdMutationOptions<
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

export function getApiSeriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.series)[':id']['$get']>>,
) {
  return ['api', '/api/series/:id', toValue(args)] as const
}

export function getApiSeriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.series)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.series[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.series)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSeriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.series[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiSeriesIdMutationKey() {
  return ['api', '/api/series/:id', 'PATCH'] as const
}

export function getPatchApiSeriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.series)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSeriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.series)[':id']['$patch']>) {
      return parseResponse(client.api.series[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiSeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.series)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiSeriesIdMutationOptions<TError, TOnMutateResult>(
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
