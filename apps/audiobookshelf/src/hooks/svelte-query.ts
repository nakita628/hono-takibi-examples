import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiAuthorsIdQueryKey(
  args: InferRequestType<(typeof client.api.authors)[':id']['$get']>,
) {
  return ['api', '/api/authors/:id', args] as const
}

export function getApiAuthorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.authors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthorsIdQueryKey>
  >({
    queryKey: getApiAuthorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.authors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAuthorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.authors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthorsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiAuthorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.authors)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAuthorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiAuthorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.authors)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiAuthorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAuthorsIdImageQueryKey(
  args: InferRequestType<(typeof client.api.authors)[':id']['image']['$get']>,
) {
  return ['api', '/api/authors/:id/image', args] as const
}

export function getApiAuthorsIdImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.authors)[':id']['image']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAuthorsIdImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.authors[':id'].image.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAuthorsIdImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.authors)[':id']['image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.authors)[':id']['image']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthorsIdImageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAuthorsIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAuthorsIdImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiAuthorsIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAuthorsIdImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiAuthorsIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiAuthorsIdImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiAuthorsIdMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAuthorsIdMatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiEmailsSettingsQueryKey() {
  return ['api', '/api/emails/settings'] as const
}

export function getApiEmailsSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmailsSettingsQueryKey>
  >({
    queryKey: getApiEmailsSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.emails.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiEmailsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmailsSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEmailsSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPatchApiEmailsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.settings.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.emails.settings.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiEmailsSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiEmailsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.emails.test.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiEmailsTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiEmailsEreaderDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiEmailsEreaderDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiEmailsSendEbookToDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiEmailsSendEbookToDeviceMutationOptions<
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

export function getApiLibrariesQueryKey() {
  return ['api', '/api/libraries'] as const
}

export function getApiLibrariesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesQueryKey>
  >({
    queryKey: getApiLibrariesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.libraries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLibraries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLibrariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLibrariesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiLibraries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.libraries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.libraries.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLibrariesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLibrariesIdQueryKey(
  args: InferRequestType<(typeof client.api.libraries)[':id']['$get']>,
) {
  return ['api', '/api/libraries/:id', args] as const
}

export function getApiLibrariesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.libraries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLibrariesIdQueryKey>
  >({
    queryKey: getApiLibrariesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.libraries[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLibrariesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.libraries)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.libraries)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLibrariesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLibrariesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiLibrariesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLibrariesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiLibrariesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLibrariesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLibrariesIdAuthorsQueryKey(
  args: InferRequestType<(typeof client.api.libraries)[':id']['authors']['$get']>,
) {
  return ['api', '/api/libraries/:id/authors', args] as const
}

export function getApiLibrariesIdAuthorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.libraries)[':id']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLibrariesIdAuthorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.libraries[':id'].authors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLibrariesIdAuthors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.libraries)[':id']['authors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiLibrariesIdAuthorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLibrariesIdItemsQueryKey(
  args: InferRequestType<(typeof client.api.libraries)[':id']['items']['$get']>,
) {
  return ['api', '/api/libraries/:id/items', args] as const
}

export function getApiLibrariesIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.libraries)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLibrariesIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.libraries[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLibrariesIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.libraries)[':id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLibrariesIdItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiLibrariesIdIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLibrariesIdIssuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLibrariesIdSeriesQueryKey(
  args: InferRequestType<(typeof client.api.libraries)[':id']['series']['$get']>,
) {
  return ['api', '/api/libraries/:id/series', args] as const
}

export function getApiLibrariesIdSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.libraries)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLibrariesIdSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.libraries[':id'].series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLibrariesIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.libraries)[':id']['series']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiLibrariesIdSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiLibrariesIdSeriesSeriesIdQueryKey(
  args: InferRequestType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>,
) {
  return ['api', '/api/libraries/:id/series/:seriesId', args] as const
}

export function getApiLibrariesIdSeriesSeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLibrariesIdSeriesSeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.libraries[':id'].series[':seriesId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiLibrariesIdSeriesSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiLibrariesIdSeriesSeriesIdQueryKey>
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
      ...getApiLibrariesIdSeriesSeriesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiNotificationsQueryKey() {
  return ['api', '/api/notifications'] as const
}

export function getApiNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsQueryKey>
  >({
    queryKey: getApiNotificationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNotificationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.notifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.notifications.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiNotificationdataQueryKey() {
  return ['api', '/api/notificationdata'] as const
}

export function getApiNotificationdataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationdataQueryKey>
  >({
    queryKey: getApiNotificationdataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notificationdata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiNotificationdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.notificationdata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNotificationdataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNotificationdataQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiNotificationsTestQueryKey(
  args: InferRequestType<typeof client.api.notifications.test.$get>,
) {
  return ['api', '/api/notifications/test', args] as const
}

export function getApiNotificationsTestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.notifications.test.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsTestQueryKey>
  >({
    queryKey: getApiNotificationsTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications.test.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiNotificationsTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.notifications.test.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.test.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNotificationsTestQueryKey>
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
      ...getApiNotificationsTestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiNotificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiNotificationsIdTestQueryKey(
  args: InferRequestType<(typeof client.api.notifications)[':id']['test']['$get']>,
) {
  return ['api', '/api/notifications/:id/test', args] as const
}

export function getApiNotificationsIdTestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)[':id']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.notifications)[':id']['test']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiNotificationsIdTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications[':id'].test.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiNotificationsIdTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.notifications)[':id']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.notifications)[':id']['test']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiNotificationsIdTestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiPodcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.podcasts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPodcastsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiPodcastsFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.feed.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.podcasts.feed.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPodcastsFeedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiPodcastsOpmlParse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.opml.parse.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.podcasts.opml.parse.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPodcastsOpmlParseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiPodcastsOpmlCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.podcasts.opml.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.podcasts.opml.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPodcastsOpmlCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPodcastsIdChecknewQueryKey(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['checknew']['$get']>,
) {
  return ['api', '/api/podcasts/:id/checknew', args] as const
}

export function getApiPodcastsIdChecknewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['checknew']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPodcastsIdChecknewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.podcasts[':id'].checknew.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPodcastsIdChecknew<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['checknew']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.podcasts)[':id']['checknew']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPodcastsIdChecknewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPodcastsIdClearQueueQueryKey(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>,
) {
  return ['api', '/api/podcasts/:id/clear-queue', args] as const
}

export function getApiPodcastsIdClearQueueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPodcastsIdClearQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.podcasts[':id']['clear-queue'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPodcastsIdClearQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPodcastsIdClearQueueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPodcastsIdDownloadsQueryKey(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['downloads']['$get']>,
) {
  return ['api', '/api/podcasts/:id/downloads', args] as const
}

export function getApiPodcastsIdDownloadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['downloads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['downloads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPodcastsIdDownloadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.podcasts[':id'].downloads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPodcastsIdDownloads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['downloads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.podcasts)[':id']['downloads']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPodcastsIdDownloadsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPodcastsIdSearchEpisodeQueryKey(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>,
) {
  return ['api', '/api/podcasts/:id/search-episode', args] as const
}

export function getApiPodcastsIdSearchEpisodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPodcastsIdSearchEpisodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.podcasts[':id']['search-episode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPodcastsIdSearchEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPodcastsIdSearchEpisodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiPodcastsIdDownloadEpisodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPodcastsIdDownloadEpisodesMutationOptions<
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

export function createPostApiPodcastsIdMatchEpisodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPodcastsIdMatchEpisodesMutationOptions<
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

export function getApiPodcastsIdEpisodeEpisodeIdQueryKey(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>,
) {
  return ['api', '/api/podcasts/:id/episode/:episodeId', args] as const
}

export function getApiPodcastsIdEpisodeEpisodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPodcastsIdEpisodeEpisodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.podcasts[':id'].episode[':episodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiPodcastsIdEpisodeEpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiPodcastsIdEpisodeEpisodeIdQueryKey>
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
      ...getApiPodcastsIdEpisodeEpisodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiPodcastsIdEpisodeEpisodeId<
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
                ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiPodcastsIdEpisodeEpisodeIdMutationOptions<
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

export function createPatchApiPodcastsIdEpisodeEpisodeId<
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
                ReturnType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiPodcastsIdEpisodeEpisodeIdMutationOptions<
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

export function getApiSeriesIdQueryKey(
  args: InferRequestType<(typeof client.api.series)[':id']['$get']>,
) {
  return ['api', '/api/series/:id', args] as const
}

export function getApiSeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.series)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSeriesIdQueryKey>
  >({
    queryKey: getApiSeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.series[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSeriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.series)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSeriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSeriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchApiSeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.series)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.series)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiSeriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
