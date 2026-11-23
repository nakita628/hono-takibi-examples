import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAddressesQueryKey(args: InferRequestType<typeof client.addresses.$get>) {
  return ['addresses', '/addresses', args] as const
}

export function getAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.addresses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddressesQueryKey>
  >({
    queryKey: getAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addresses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.addresses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddressesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAutocompleteAddressesQueryKey(
  args: InferRequestType<typeof client.autocomplete.addresses.$get>,
) {
  return ['autocomplete', '/autocomplete/addresses', args] as const
}

export function getAutocompleteAddressesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.autocomplete.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutocompleteAddressesQueryKey>
  >({
    queryKey: getAutocompleteAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.autocomplete.addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAutocompleteAddresses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.autocomplete.addresses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutocompleteAddressesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutocompleteAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAutocompleteAddressesAddressGbrQueryKey(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>,
) {
  return ['autocomplete', '/autocomplete/addresses/:address/gbr', args] as const
}

export function getAutocompleteAddressesAddressGbrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutocompleteAddressesAddressGbrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.autocomplete.addresses[':address'].gbr.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAutocompleteAddressesAddressGbr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutocompleteAddressesAddressGbrQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAutocompleteAddressesAddressUsaQueryKey(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>,
) {
  return ['autocomplete', '/autocomplete/addresses/:address/usa', args] as const
}

export function getAutocompleteAddressesAddressUsaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutocompleteAddressesAddressUsaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.autocomplete.addresses[':address'].usa.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAutocompleteAddressesAddressUsa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAutocompleteAddressesAddressUsaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCleanseAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cleanse.addresses.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cleanse.addresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCleanseAddressesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmailsQueryKey(args: InferRequestType<typeof client.emails.$get>) {
  return ['emails', '/emails', args] as const
}

export function getEmailsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emails.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmailsQueryKey>
  >({
    queryKey: getEmailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmails<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.emails.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKeysKeyQueryKey(args: InferRequestType<(typeof client.keys)[':key']['$get']>) {
  return ['keys', '/keys/:key', args] as const
}

export function getKeysKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.keys)[':key']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyQueryKey>
  >({
    queryKey: getKeysKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeysKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKeysKeyConfigsQueryKey(
  args: InferRequestType<(typeof client.keys)[':key']['configs']['$get']>,
) {
  return ['keys', '/keys/:key/configs', args] as const
}

export function getKeysKeyConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyConfigsQueryKey>
  >({
    queryKey: getKeysKeyConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].configs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeysKeyConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['configs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysKeyConfigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysKeyConfigsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKeysKeyConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeysKeyConfigsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysKeyConfigsConfigQueryKey(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>,
) {
  return ['keys', '/keys/:key/configs/:config', args] as const
}

export function getKeysKeyConfigsConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKeysKeyConfigsConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].configs[':config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKeysKeyConfigsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getKeysKeyConfigsConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKeysKeyConfigsConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeysKeyConfigsConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteKeysKeyConfigsConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKeysKeyConfigsConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysKeyDetailsQueryKey(
  args: InferRequestType<(typeof client.keys)[':key']['details']['$get']>,
) {
  return ['keys', '/keys/:key/details', args] as const
}

export function getKeysKeyDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyDetailsQueryKey>
  >({
    queryKey: getKeysKeyDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeysKeyDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['details']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysKeyDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysKeyDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKeysKeyLicenseesQueryKey(
  args: InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>,
) {
  return ['keys', '/keys/:key/licensees', args] as const
}

export function getKeysKeyLicenseesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyLicenseesQueryKey>
  >({
    queryKey: getKeysKeyLicenseesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].licensees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKeysKeyLicensees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysKeyLicenseesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysKeyLicenseesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKeysKeyLicensees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKeysKeyLicenseesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysKeyLicenseesLicenseeQueryKey(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>,
) {
  return ['keys', '/keys/:key/licensees/:licensee', args] as const
}

export function getKeysKeyLicenseesLicenseeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKeysKeyLicenseesLicenseeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].licensees[':licensee'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKeysKeyLicenseesLicensee<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getKeysKeyLicenseesLicenseeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKeysKeyLicenseesLicensee<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKeysKeyLicenseesLicenseeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteKeysKeyLicenseesLicensee<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKeysKeyLicenseesLicenseeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysKeyLookupsQueryKey(
  args: InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>,
) {
  return ['keys', '/keys/:key/lookups', args] as const
}

export function getKeysKeyLookupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyLookupsQueryKey>
  >({
    queryKey: getKeysKeyLookupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].lookups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeysKeyLookups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysKeyLookupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysKeyLookupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKeysKeyUsageQueryKey(
  args: InferRequestType<(typeof client.keys)[':key']['usage']['$get']>,
) {
  return ['keys', '/keys/:key/usage', args] as const
}

export function getKeysKeyUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyUsageQueryKey>
  >({
    queryKey: getKeysKeyUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key'].usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeysKeyUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key']['usage']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysKeyUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysKeyUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPhoneNumbersQueryKey(args: InferRequestType<typeof client.phone_numbers.$get>) {
  return ['phone_numbers', '/phone_numbers', args] as const
}

export function getPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.phone_numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneNumbersQueryKey>
  >({
    queryKey: getPhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phone_numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPhoneNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.phone_numbers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPhoneNumbersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPlacesQueryKey(args: InferRequestType<typeof client.places.$get>) {
  return ['places', '/places', args] as const
}

export function getPlacesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.places.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlacesQueryKey>
  >({
    queryKey: getPlacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.places.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.places.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPlacesPlaceQueryKey(
  args: InferRequestType<(typeof client.places)['${place}']['$get']>,
) {
  return ['places', '/places/${place}', args] as const
}

export function getPlacesPlaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.places)['${place}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlacesPlaceQueryKey>
  >({
    queryKey: getPlacesPlaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.places['${place}'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlacesPlace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.places)['${place}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.places)['${place}']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlacesPlaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlacesPlaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostcodesPostcodeQueryKey(
  args: InferRequestType<(typeof client.postcodes)[':postcode']['$get']>,
) {
  return ['postcodes', '/postcodes/:postcode', args] as const
}

export function getPostcodesPostcodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.postcodes)[':postcode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostcodesPostcodeQueryKey>
  >({
    queryKey: getPostcodesPostcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.postcodes[':postcode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPostcodesPostcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.postcodes)[':postcode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostcodesPostcodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPostcodesPostcodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUdprnUdprnQueryKey(
  args: InferRequestType<(typeof client.udprn)[':udprn']['$get']>,
) {
  return ['udprn', '/udprn/:udprn', args] as const
}

export function getUdprnUdprnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.udprn)[':udprn']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUdprnUdprnQueryKey>
  >({
    queryKey: getUdprnUdprnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.udprn[':udprn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUdprnUdprn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.udprn)[':udprn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUdprnUdprnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUdprnUdprnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUmprnUmprnQueryKey(
  args: InferRequestType<(typeof client.umprn)[':umprn']['$get']>,
) {
  return ['umprn', '/umprn/:umprn', args] as const
}

export function getUmprnUmprnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.umprn)[':umprn']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUmprnUmprnQueryKey>
  >({
    queryKey: getUmprnUmprnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.umprn[':umprn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUmprnUmprn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.umprn)[':umprn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUmprnUmprnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUmprnUmprnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
