import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAddressesKey(args: InferRequestType<typeof client.addresses.$get>) {
  return ['addresses', '/addresses', args] as const
}

export function useGetAddresses<TError = unknown>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddresses<TError = unknown>(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddressesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addresses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutocompleteAddressesKey(
  args: InferRequestType<typeof client.autocomplete.addresses.$get>,
) {
  return ['autocomplete', '/autocomplete/addresses', args] as const
}

export function useGetAutocompleteAddresses<TError = unknown>(
  args: InferRequestType<typeof client.autocomplete.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
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
        ? getGetAutocompleteAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.autocomplete.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutocompleteAddresses<TError = unknown>(
  args: InferRequestType<typeof client.autocomplete.addresses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
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
        ? getGetAutocompleteAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.autocomplete.addresses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.autocomplete.addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutocompleteAddressesAddressGbrKey(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>,
) {
  return ['autocomplete', '/autocomplete/addresses/:address/gbr', args] as const
}

export function useGetAutocompleteAddressesAddressGbr<TError = unknown>(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
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
        ? getGetAutocompleteAddressesAddressGbrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.autocomplete.addresses[':address'].gbr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutocompleteAddressesAddressGbr<TError = unknown>(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
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
        ? getGetAutocompleteAddressesAddressGbrKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.autocomplete.addresses[':address'].gbr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAutocompleteAddressesAddressUsaKey(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>,
) {
  return ['autocomplete', '/autocomplete/addresses/:address/usa', args] as const
}

export function useGetAutocompleteAddressesAddressUsa<TError = unknown>(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
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
        ? getGetAutocompleteAddressesAddressUsaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.autocomplete.addresses[':address'].usa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutocompleteAddressesAddressUsa<TError = unknown>(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
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
        ? getGetAutocompleteAddressesAddressUsaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.autocomplete.addresses[':address'].usa.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCleanseAddressesKey() {
  return ['cleanse', '/cleanse/addresses', 'POST'] as const
}

export function usePostCleanseAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cleanse.addresses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cleanse.addresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCleanseAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cleanse.addresses.$post> }) =>
        parseResponse(client.cleanse.addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmailsKey(args: InferRequestType<typeof client.emails.$get>) {
  return ['emails', '/emails', args] as const
}

export function useGetEmails<TError = unknown>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emails.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEmails<TError = unknown>(
  args: InferRequestType<typeof client.emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emails.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emails.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetKeysKeyKey(args: InferRequestType<(typeof client.keys)[':key']['$get']>) {
  return ['keys', '/keys/:key', args] as const
}

export function useGetKeysKey<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKey<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeysKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKeysKeyConfigsKey(
  args: InferRequestType<(typeof client.keys)[':key']['configs']['$get']>,
) {
  return ['keys', '/keys/:key/configs', args] as const
}

export function useGetKeysKeyConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyConfigsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyConfigsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeysKeyConfigsKey() {
  return ['keys', '/keys/:key/configs', 'POST'] as const
}

export function usePostKeysKeyConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['configs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key']['configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysKeyConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':key']['configs']['$post']> },
      ) => parseResponse(client.keys[':key'].configs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKeyConfigsConfigKey(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>,
) {
  return ['keys', '/keys/:key/configs/:config', args] as const
}

export function useGetKeysKeyConfigsConfig<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
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
        ? getGetKeysKeyConfigsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].configs[':config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyConfigsConfig<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
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
        ? getGetKeysKeyConfigsConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].configs[':config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeysKeyConfigsConfigKey() {
  return ['keys', '/keys/:key/configs/:config', 'POST'] as const
}

export function usePostKeysKeyConfigsConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysKeyConfigsConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$post']> },
      ) => parseResponse(client.keys[':key'].configs[':config'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKeysKeyConfigsConfigKey() {
  return ['keys', '/keys/:key/configs/:config', 'DELETE'] as const
}

export function useDeleteKeysKeyConfigsConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['configs'][':config']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeysKeyConfigsConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$delete']> },
      ) => parseResponse(client.keys[':key'].configs[':config'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKeyDetailsKey(
  args: InferRequestType<(typeof client.keys)[':key']['details']['$get']>,
) {
  return ['keys', '/keys/:key/details', args] as const
}

export function useGetKeysKeyDetails<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyDetails<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['details']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKeysKeyLicenseesKey(
  args: InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>,
) {
  return ['keys', '/keys/:key/licensees', args] as const
}

export function useGetKeysKeyLicensees<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>
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
        ? getGetKeysKeyLicenseesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].licensees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyLicensees<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>
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
        ? getGetKeysKeyLicenseesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].licensees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKeysKeyLicenseesKey() {
  return ['keys', '/keys/:key/licensees', 'POST'] as const
}

export function usePostKeysKeyLicensees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['licensees']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key']['licensees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeysKeyLicenseesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.keys)[':key']['licensees']['$post']> },
      ) => parseResponse(client.keys[':key'].licensees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKeyLicenseesLicenseeKey(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>,
) {
  return ['keys', '/keys/:key/licensees/:licensee', args] as const
}

export function useGetKeysKeyLicenseesLicensee<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
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
        ? getGetKeysKeyLicenseesLicenseeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.keys[':key'].licensees[':licensee'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyLicenseesLicensee<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
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
        ? getGetKeysKeyLicenseesLicenseeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.keys[':key'].licensees[':licensee'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKeysKeyLicenseesLicenseeKey() {
  return ['keys', '/keys/:key/licensees/:licensee', 'PUT'] as const
}

export function usePutKeysKeyLicenseesLicensee<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKeysKeyLicenseesLicenseeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>
        },
      ) => parseResponse(client.keys[':key'].licensees[':licensee'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKeysKeyLicenseesLicenseeKey() {
  return ['keys', '/keys/:key/licensees/:licensee', 'DELETE'] as const
}

export function useDeleteKeysKeyLicenseesLicensee<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeysKeyLicenseesLicenseeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>
        },
      ) => parseResponse(client.keys[':key'].licensees[':licensee'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeysKeyLookupsKey(
  args: InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>,
) {
  return ['keys', '/keys/:key/lookups', args] as const
}

export function useGetKeysKeyLookups<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyLookupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].lookups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyLookups<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyLookupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['lookups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].lookups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKeysKeyUsageKey(
  args: InferRequestType<(typeof client.keys)[':key']['usage']['$get']>,
) {
  return ['keys', '/keys/:key/usage', args] as const
}

export function useGetKeysKeyUsage<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeysKeyUsage<TError = unknown>(
  args: InferRequestType<(typeof client.keys)[':key']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKeysKeyUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key']['usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keys[':key'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhoneNumbersKey(args: InferRequestType<typeof client.phone_numbers.$get>) {
  return ['phone_numbers', '/phone_numbers', args] as const
}

export function useGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneNumbers<TError = unknown>(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneNumbersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone_numbers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlacesKey(args: InferRequestType<typeof client.places.$get>) {
  return ['places', '/places', args] as const
}

export function useGetPlaces<TError = unknown>(
  args: InferRequestType<typeof client.places.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.places.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlaces<TError = unknown>(
  args: InferRequestType<typeof client.places.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.places.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPlacesPlaceKey(
  args: InferRequestType<(typeof client.places)['$:place']['$get']>,
) {
  return ['places', '/places/$:place', args] as const
}

export function useGetPlacesPlace<TError = unknown>(
  args: InferRequestType<(typeof client.places)['$:place']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.places)['$:place']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPlacesPlaceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.places)['$:place']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.places['$:place'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlacesPlace<TError = unknown>(
  args: InferRequestType<(typeof client.places)['$:place']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.places)['$:place']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPlacesPlaceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.places)['$:place']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.places['$:place'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPostcodesPostcodeKey(
  args: InferRequestType<(typeof client.postcodes)[':postcode']['$get']>,
) {
  return ['postcodes', '/postcodes/:postcode', args] as const
}

export function useGetPostcodesPostcode<TError = unknown>(
  args: InferRequestType<(typeof client.postcodes)[':postcode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
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
        ? getGetPostcodesPostcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postcodes[':postcode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostcodesPostcode<TError = unknown>(
  args: InferRequestType<(typeof client.postcodes)[':postcode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
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
        ? getGetPostcodesPostcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.postcodes)[':postcode']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.postcodes[':postcode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUdprnUdprnKey(
  args: InferRequestType<(typeof client.udprn)[':udprn']['$get']>,
) {
  return ['udprn', '/udprn/:udprn', args] as const
}

export function useGetUdprnUdprn<TError = unknown>(
  args: InferRequestType<(typeof client.udprn)[':udprn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUdprnUdprnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.udprn[':udprn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUdprnUdprn<TError = unknown>(
  args: InferRequestType<(typeof client.udprn)[':udprn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUdprnUdprnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.udprn)[':udprn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.udprn[':udprn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUmprnUmprnKey(
  args: InferRequestType<(typeof client.umprn)[':umprn']['$get']>,
) {
  return ['umprn', '/umprn/:umprn', args] as const
}

export function useGetUmprnUmprn<TError = unknown>(
  args: InferRequestType<(typeof client.umprn)[':umprn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUmprnUmprnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.umprn[':umprn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUmprnUmprn<TError = unknown>(
  args: InferRequestType<(typeof client.umprn)[':umprn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUmprnUmprnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.umprn)[':umprn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.umprn[':umprn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
