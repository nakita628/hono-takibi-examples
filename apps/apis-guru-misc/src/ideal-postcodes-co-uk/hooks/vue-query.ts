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

export function getAddressesKey() {
  return ['addresses'] as const
}

export function getAutocompleteKey() {
  return ['autocomplete'] as const
}

export function getCleanseKey() {
  return ['cleanse'] as const
}

export function getEmailsKey() {
  return ['emails'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getPhoneNumbersKey() {
  return ['phone_numbers'] as const
}

export function getPlacesKey() {
  return ['places'] as const
}

export function getPostcodesKey() {
  return ['postcodes'] as const
}

export function getUdprnKey() {
  return ['udprn'] as const
}

export function getUmprnKey() {
  return ['umprn'] as const
}

export function getAddressesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addresses.$get>>,
) {
  return ['addresses', '/addresses', toValue(args)] as const
}

export function getAddressesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addresses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addresses.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.addresses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
          >,
          ReturnType<typeof getAddressesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAutocompleteAddressesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocomplete.addresses.$get>>,
) {
  return ['autocomplete', '/autocomplete/addresses', toValue(args)] as const
}

export function getAutocompleteAddressesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocomplete.addresses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutocompleteAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.autocomplete.addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutocompleteAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.autocomplete.addresses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
            >
          >,
          ReturnType<typeof getAutocompleteAddressesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompleteAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutocompleteAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.autocomplete.addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAutocompleteAddressesAddressGbrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>
  >,
) {
  return ['autocomplete', '/autocomplete/addresses/:address/gbr', toValue(args)] as const
}

export function getAutocompleteAddressesAddressGbrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutocompleteAddressesAddressGbrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.autocomplete.addresses[':address'].gbr.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutocompleteAddressesAddressGbr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>
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
                  ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAutocompleteAddressesAddressGbrQueryKey>
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
          Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompleteAddressesAddressGbrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutocompleteAddressesAddressGbrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.autocomplete.addresses[':address'].gbr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAutocompleteAddressesAddressUsaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>
  >,
) {
  return ['autocomplete', '/autocomplete/addresses/:address/usa', toValue(args)] as const
}

export function getAutocompleteAddressesAddressUsaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutocompleteAddressesAddressUsaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.autocomplete.addresses[':address'].usa.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutocompleteAddressesAddressUsa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>
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
                  ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAutocompleteAddressesAddressUsaQueryKey>
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
          Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompleteAddressesAddressUsaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutocompleteAddressesAddressUsaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.autocomplete.addresses[':address'].usa.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCleanseAddressesMutationKey() {
  return ['cleanse', '/cleanse/addresses', 'POST'] as const
}

export function getPostCleanseAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cleanse.addresses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cleanse.addresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCleanseAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cleanse.addresses.$post>) {
      return parseResponse(client.cleanse.addresses.$post(args, options))
    },
  })
}

export function usePostCleanseAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cleanse.addresses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cleanse.addresses.$post>,
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
  const mutationDefaults = getPostCleanseAddressesMutationOptions<TError, TOnMutateResult>(
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

export function getEmailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
) {
  return ['emails', '/emails', toValue(args)] as const
}

export function getEmailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emails.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
          ReturnType<typeof getEmailsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeysKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['$get']>>,
) {
  return ['keys', '/keys/:key', toValue(args)] as const
}

export function getKeysKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeysKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getKeysKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeysKeyConfigsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['configs']['$get']>>,
) {
  return ['keys', '/keys/:key/configs', toValue(args)] as const
}

export function getKeysKeyConfigsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['configs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['configs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyConfigsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKeysKeyConfigsMutationKey() {
  return ['keys', '/keys/:key/configs', 'POST'] as const
}

export function getPostKeysKeyConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysKeyConfigsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':key']['configs']['$post']>) {
      return parseResponse(client.keys[':key'].configs.$post(args, options))
    },
  })
}

export function usePostKeysKeyConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key']['configs']['$post']>,
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
  const mutationDefaults = getPostKeysKeyConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getKeysKeyConfigsConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>
  >,
) {
  return ['keys', '/keys/:key/configs/:config', toValue(args)] as const
}

export function getKeysKeyConfigsConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyConfigsConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].configs[':config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyConfigsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyConfigsConfigQueryKey>
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
          Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyConfigsConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyConfigsConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].configs[':config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKeysKeyConfigsConfigMutationKey() {
  return ['keys', '/keys/:key/configs/:config', 'POST'] as const
}

export function getPostKeysKeyConfigsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysKeyConfigsConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$post']>,
    ) {
      return parseResponse(client.keys[':key'].configs[':config'].$post(args, options))
    },
  })
}

export function usePostKeysKeyConfigsConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$post']>,
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
  const mutationDefaults = getPostKeysKeyConfigsConfigMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKeysKeyConfigsConfigMutationKey() {
  return ['keys', '/keys/:key/configs/:config', 'DELETE'] as const
}

export function getDeleteKeysKeyConfigsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeysKeyConfigsConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$delete']>,
    ) {
      return parseResponse(client.keys[':key'].configs[':config'].$delete(args, options))
    },
  })
}

export function useDeleteKeysKeyConfigsConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$delete']>,
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
  const mutationDefaults = getDeleteKeysKeyConfigsConfigMutationOptions<TError, TOnMutateResult>(
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

export function getKeysKeyDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['details']['$get']>>,
) {
  return ['keys', '/keys/:key/details', toValue(args)] as const
}

export function getKeysKeyDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['details']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['details']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyDetailsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeysKeyLicenseesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>>,
) {
  return ['keys', '/keys/:key/licensees', toValue(args)] as const
}

export function getKeysKeyLicenseesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyLicenseesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].licensees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyLicensees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyLicenseesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyLicenseesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyLicenseesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].licensees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKeysKeyLicenseesMutationKey() {
  return ['keys', '/keys/:key/licensees', 'POST'] as const
}

export function getPostKeysKeyLicenseesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key']['licensees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysKeyLicenseesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':key']['licensees']['$post']>) {
      return parseResponse(client.keys[':key'].licensees.$post(args, options))
    },
  })
}

export function usePostKeysKeyLicensees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key']['licensees']['$post']>,
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
  const mutationDefaults = getPostKeysKeyLicenseesMutationOptions<TError, TOnMutateResult>(
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

export function getKeysKeyLicenseesLicenseeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>
  >,
) {
  return ['keys', '/keys/:key/licensees/:licensee', toValue(args)] as const
}

export function getKeysKeyLicenseesLicenseeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyLicenseesLicenseeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].licensees[':licensee'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyLicenseesLicensee<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyLicenseesLicenseeQueryKey>
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
          Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyLicenseesLicenseeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyLicenseesLicenseeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].licensees[':licensee'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKeysKeyLicenseesLicenseeMutationKey() {
  return ['keys', '/keys/:key/licensees/:licensee', 'PUT'] as const
}

export function getPutKeysKeyLicenseesLicenseeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKeysKeyLicenseesLicenseeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>,
    ) {
      return parseResponse(client.keys[':key'].licensees[':licensee'].$put(args, options))
    },
  })
}

export function usePutKeysKeyLicenseesLicensee<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>,
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
  const mutationDefaults = getPutKeysKeyLicenseesLicenseeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKeysKeyLicenseesLicenseeMutationKey() {
  return ['keys', '/keys/:key/licensees/:licensee', 'DELETE'] as const
}

export function getDeleteKeysKeyLicenseesLicenseeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeysKeyLicenseesLicenseeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>,
    ) {
      return parseResponse(client.keys[':key'].licensees[':licensee'].$delete(args, options))
    },
  })
}

export function useDeleteKeysKeyLicenseesLicensee<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>,
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
  const mutationDefaults = getDeleteKeysKeyLicenseesLicenseeMutationOptions<
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

export function getKeysKeyLookupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>>,
) {
  return ['keys', '/keys/:key/lookups', toValue(args)] as const
}

export function getKeysKeyLookupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyLookupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].lookups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyLookups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyLookupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyLookupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyLookupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].lookups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeysKeyUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['usage']['$get']>>,
) {
  return ['keys', '/keys/:key/usage', toValue(args)] as const
}

export function getKeysKeyUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['usage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key'].usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key']['usage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyUsageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key'].usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhoneNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone_numbers.$get>>,
) {
  return ['phone_numbers', '/phone_numbers', toValue(args)] as const
}

export function getPhoneNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone_numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phone_numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.phone_numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
          >,
          ReturnType<typeof getPhoneNumbersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phone_numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.places.$get>>,
) {
  return ['places', '/places', toValue(args)] as const
}

export function getPlacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.places.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.places.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.places.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
          ReturnType<typeof getPlacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.places.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlacesPlaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.places)['${place}']['$get']>>,
) {
  return ['places', '/places/${place}', toValue(args)] as const
}

export function getPlacesPlaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.places)['${place}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlacesPlaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.places['${place}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlacesPlace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.places)['${place}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
            >
          >,
          ReturnType<typeof getPlacesPlaceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlacesPlaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlacesPlaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.places['${place}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostcodesPostcodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postcodes)[':postcode']['$get']>>,
) {
  return ['postcodes', '/postcodes/:postcode', toValue(args)] as const
}

export function getPostcodesPostcodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postcodes)[':postcode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostcodesPostcodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.postcodes[':postcode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostcodesPostcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.postcodes)[':postcode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostcodesPostcodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostcodesPostcodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostcodesPostcodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.postcodes[':postcode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUdprnUdprnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.udprn)[':udprn']['$get']>>,
) {
  return ['udprn', '/udprn/:udprn', toValue(args)] as const
}

export function getUdprnUdprnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.udprn)[':udprn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUdprnUdprnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.udprn[':udprn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUdprnUdprn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.udprn)[':udprn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>
            >
          >,
          ReturnType<typeof getUdprnUdprnQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUdprnUdprnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUdprnUdprnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.udprn[':udprn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUmprnUmprnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.umprn)[':umprn']['$get']>>,
) {
  return ['umprn', '/umprn/:umprn', toValue(args)] as const
}

export function getUmprnUmprnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.umprn)[':umprn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUmprnUmprnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.umprn[':umprn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUmprnUmprn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.umprn)[':umprn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>
            >
          >,
          ReturnType<typeof getUmprnUmprnQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUmprnUmprnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUmprnUmprnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.umprn[':umprn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
