import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWhatsappKey() {
  return ['whatsapp'] as const
}

export function getVersionKey() {
  return ['{Version}'] as const
}

export function getGetVersionApplicationIDConnectedClientBusinessesKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Application-ID/connected_client_businesses', keyArgs] as const
}

export function useGetVersionApplicationIDConnectedClientBusinesses<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
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
        ? getGetVersionApplicationIDConnectedClientBusinessesKey(args)
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
                (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
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
          client[':Version'][':Application-ID'].connected_client_businesses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionApplicationIDConnectedClientBusinesses<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
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
        ? getGetVersionApplicationIDConnectedClientBusinessesKey(args)
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
                (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
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
          client[':Version'][':Application-ID'].connected_client_businesses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionApplicationIDWhatsappBusinessSolutionKey() {
  return [':Version', '/:Version/:Application-ID/whatsapp_business_solution', 'POST'] as const
}

export function usePostVersionApplicationIDWhatsappBusinessSolution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionApplicationIDWhatsappBusinessSolutionKey()
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
            (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Application-ID'].whatsapp_business_solution.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionApplicationIDWhatsappBusinessSolutionsKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Application-ID/whatsapp_business_solutions', keyArgs] as const
}

export function useGetVersionApplicationIDWhatsappBusinessSolutions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
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
        ? getGetVersionApplicationIDWhatsappBusinessSolutionsKey(args)
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
                (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
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
          client[':Version'][':Application-ID'].whatsapp_business_solutions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionApplicationIDWhatsappBusinessSolutions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
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
        ? getGetVersionApplicationIDWhatsappBusinessSolutionsKey(args)
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
                (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
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
          client[':Version'][':Application-ID'].whatsapp_business_solutions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionBusinessIDAddPhoneNumbersKey() {
  return [':Version', '/:Version/:Business-ID/add_phone_numbers', 'POST'] as const
}

export function usePostVersionBusinessIDAddPhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionBusinessIDAddPhoneNumbersKey()
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
            (typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Business-ID'].add_phone_numbers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionBusinessIDKey(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Business-ID', keyArgs] as const
}

export function useGetVersionBusinessID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>
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
        ? getGetVersionBusinessIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Business-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionBusinessID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>
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
        ? getGetVersionBusinessIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Business-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Business-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionBusinessIDPreverifiedNumbersKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Business-ID/preverified_numbers', keyArgs] as const
}

export function useGetVersionBusinessIDPreverifiedNumbers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
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
        ? getGetVersionBusinessIDPreverifiedNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Business-ID'].preverified_numbers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionBusinessIDPreverifiedNumbers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
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
        ? getGetVersionBusinessIDPreverifiedNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Business-ID'].preverified_numbers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVersionBusinessIDClientWhatsappBusinessAccountsKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Business-ID/client_whatsapp_business_accounts', keyArgs] as const
}

export function useGetVersionBusinessIDClientWhatsappBusinessAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
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
        ? getGetVersionBusinessIDClientWhatsappBusinessAccountsKey(args)
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
                (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
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
          client[':Version'][':Business-ID'].client_whatsapp_business_accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionBusinessIDClientWhatsappBusinessAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
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
        ? getGetVersionBusinessIDClientWhatsappBusinessAccountsKey(args)
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
                (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
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
          client[':Version'][':Business-ID'].client_whatsapp_business_accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionBusinessIDOnboardPartnersToMmLiteKey() {
  return [':Version', '/:Version/:Business-ID/onboard_partners_to_mm_lite', 'POST'] as const
}

export function usePostVersionBusinessIDOnboardPartnersToMmLite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionBusinessIDOnboardPartnersToMmLiteKey()
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
            (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Business-ID'].onboard_partners_to_mm_lite.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionBusinessIDOwnedWhatsappBusinessAccountsKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Business-ID/owned_whatsapp_business_accounts', keyArgs] as const
}

export function useGetVersionBusinessIDOwnedWhatsappBusinessAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
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
        ? getGetVersionBusinessIDOwnedWhatsappBusinessAccountsKey(args)
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
                (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
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
          client[':Version'][':Business-ID'].owned_whatsapp_business_accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionBusinessIDOwnedWhatsappBusinessAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
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
        ? getGetVersionBusinessIDOwnedWhatsappBusinessAccountsKey(args)
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
                (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
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
          client[':Version'][':Business-ID'].owned_whatsapp_business_accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionBusinessIDSharePreverifiedNumbersKey() {
  return [':Version', '/:Version/:Business-ID/share_preverified_numbers', 'POST'] as const
}

export function usePostVersionBusinessIDSharePreverifiedNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionBusinessIDSharePreverifiedNumbersKey()
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
            (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Business-ID'].share_preverified_numbers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDBlockUsersKey(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/block_users', keyArgs] as const
}

export function useGetVersionPhoneNumberIDBlockUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
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
        ? getGetVersionPhoneNumberIDBlockUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Phone-Number-ID'].block_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDBlockUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
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
        ? getGetVersionPhoneNumberIDBlockUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Phone-Number-ID'].block_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDBlockUsersKey() {
  return [':Version', '/:Version/:Phone-Number-ID/block_users', 'POST'] as const
}

export function usePostVersionPhoneNumberIDBlockUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDBlockUsersKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']
          >
        },
      ) =>
        parseResponse(client[':Version'][':Phone-Number-ID'].block_users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionPhoneNumberIDBlockUsersKey() {
  return [':Version', '/:Version/:Phone-Number-ID/block_users', 'DELETE'] as const
}

export function useDeleteVersionPhoneNumberIDBlockUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionPhoneNumberIDBlockUsersKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].block_users.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDCallPermissionsKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/call_permissions', keyArgs] as const
}

export function useGetVersionPhoneNumberIDCallPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
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
        ? getGetVersionPhoneNumberIDCallPermissionsKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
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
          client[':Version'][':Phone-Number-ID'].call_permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDCallPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
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
        ? getGetVersionPhoneNumberIDCallPermissionsKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
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
          client[':Version'][':Phone-Number-ID'].call_permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDCallsKey() {
  return [':Version', '/:Version/:Phone-Number-ID/calls', 'POST'] as const
}

export function usePostVersionPhoneNumberIDCalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDCallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>
        },
      ) => parseResponse(client[':Version'][':Phone-Number-ID'].calls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDGroupsKey(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/groups', keyArgs] as const
}

export function useGetVersionPhoneNumberIDGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>>
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
        ? getGetVersionPhoneNumberIDGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Phone-Number-ID'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>>
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
        ? getGetVersionPhoneNumberIDGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Phone-Number-ID'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDGroupsKey() {
  return [':Version', '/:Version/:Phone-Number-ID/groups', 'POST'] as const
}

export function usePostVersionPhoneNumberIDGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>
        },
      ) => parseResponse(client[':Version'][':Phone-Number-ID'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDMarketingMessagesKey() {
  return [':Version', '/:Version/:Phone-Number-ID/marketing_messages', 'POST'] as const
}

export function usePostVersionPhoneNumberIDMarketingMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDMarketingMessagesKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].marketing_messages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDMediaKey() {
  return [':Version', '/:Version/:Phone-Number-ID/media', 'POST'] as const
}

export function usePostVersionPhoneNumberIDMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>
        },
      ) => parseResponse(client[':Version'][':Phone-Number-ID'].media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDMessagesKey() {
  return [':Version', '/:Version/:Phone-Number-ID/messages', 'POST'] as const
}

export function usePostVersionPhoneNumberIDMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDMessagesKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']
          >
        },
      ) => parseResponse(client[':Version'][':Phone-Number-ID'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDMessageQrdlsKey(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls', keyArgs] as const
}

export function useGetVersionPhoneNumberIDMessageQrdls<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
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
        ? getGetVersionPhoneNumberIDMessageQrdlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].message_qrdls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDMessageQrdls<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
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
        ? getGetVersionPhoneNumberIDMessageQrdlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].message_qrdls.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDMessageQrdlsKey() {
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls', 'POST'] as const
}

export function usePostVersionPhoneNumberIDMessageQrdls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDMessageQrdlsKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].message_qrdls.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDMessageQrdlsQRCodeIDKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls/:QR-Code-ID', keyArgs] as const
}

export function useGetVersionPhoneNumberIDMessageQrdlsQRCodeID<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
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
        ? getGetVersionPhoneNumberIDMessageQrdlsQRCodeIDKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
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
          client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDMessageQrdlsQRCodeID<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
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
        ? getGetVersionPhoneNumberIDMessageQrdlsQRCodeIDKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
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
          client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteVersionPhoneNumberIDMessageQrdlsQRCodeIDKey() {
  return [':Version', '/:Version/:Phone-Number-ID/message_qrdls/:QR-Code-ID', 'DELETE'] as const
}

export function useDeleteVersionPhoneNumberIDMessageQrdlsQRCodeID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionPhoneNumberIDMessageQrdlsQRCodeIDKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDMessagesEncryptedKey() {
  return [':Version', '/:Version/:Phone-Number-ID/messages_encrypted', 'POST'] as const
}

export function usePostVersionPhoneNumberIDMessagesEncrypted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDMessagesEncryptedKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].messages_encrypted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDOfficialBusinessAccountKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/official_business_account', keyArgs] as const
}

export function useGetVersionPhoneNumberIDOfficialBusinessAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
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
        ? getGetVersionPhoneNumberIDOfficialBusinessAccountKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
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
          client[':Version'][':Phone-Number-ID'].official_business_account.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDOfficialBusinessAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
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
        ? getGetVersionPhoneNumberIDOfficialBusinessAccountKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
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
          client[':Version'][':Phone-Number-ID'].official_business_account.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDOfficialBusinessAccountKey() {
  return [':Version', '/:Version/:Phone-Number-ID/official_business_account', 'POST'] as const
}

export function usePostVersionPhoneNumberIDOfficialBusinessAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDOfficialBusinessAccountKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].official_business_account.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDKey(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID', keyArgs] as const
}

export function useGetVersionPhoneNumberID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
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
        ? getGetVersionPhoneNumberIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Phone-Number-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
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
        ? getGetVersionPhoneNumberIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Phone-Number-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDKey() {
  return [':Version', '/:Version/:Phone-Number-ID', 'POST'] as const
}

export function usePostVersionPhoneNumberID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$post']> },
      ) => parseResponse(client[':Version'][':Phone-Number-ID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDDeregisterKey() {
  return [':Version', '/:Version/:Phone-Number-ID/deregister', 'POST'] as const
}

export function usePostVersionPhoneNumberIDDeregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDDeregisterKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']
          >
        },
      ) =>
        parseResponse(client[':Version'][':Phone-Number-ID'].deregister.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDMessageHistoryKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/message_history', keyArgs] as const
}

export function useGetVersionPhoneNumberIDMessageHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
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
        ? getGetVersionPhoneNumberIDMessageHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].message_history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDMessageHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
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
        ? getGetVersionPhoneNumberIDMessageHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].message_history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDRegisterKey() {
  return [':Version', '/:Version/:Phone-Number-ID/register', 'POST'] as const
}

export function usePostVersionPhoneNumberIDRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDRegisterKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['register']['$post']
          >
        },
      ) => parseResponse(client[':Version'][':Phone-Number-ID'].register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDRequestCodeKey() {
  return [':Version', '/:Version/:Phone-Number-ID/request_code', 'POST'] as const
}

export function usePostVersionPhoneNumberIDRequestCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDRequestCodeKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].request_code.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDSettingsKey(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/settings', keyArgs] as const
}

export function useGetVersionPhoneNumberIDSettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>>
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
        ? getGetVersionPhoneNumberIDSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Phone-Number-ID'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDSettings<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>>
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
        ? getGetVersionPhoneNumberIDSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Phone-Number-ID'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDSettingsKey() {
  return [':Version', '/:Version/:Phone-Number-ID/settings', 'POST'] as const
}

export function usePostVersionPhoneNumberIDSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDSettingsKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']
          >
        },
      ) => parseResponse(client[':Version'][':Phone-Number-ID'].settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDVerifyCodeKey() {
  return [':Version', '/:Version/:Phone-Number-ID/verify_code', 'POST'] as const
}

export function usePostVersionPhoneNumberIDVerifyCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDVerifyCodeKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']
          >
        },
      ) =>
        parseResponse(client[':Version'][':Phone-Number-ID'].verify_code.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDWhatsappBusinessEncryptionKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_encryption', keyArgs] as const
}

export function useGetVersionPhoneNumberIDWhatsappBusinessEncryption<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
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
        ? getGetVersionPhoneNumberIDWhatsappBusinessEncryptionKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
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
          client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDWhatsappBusinessEncryption<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
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
        ? getGetVersionPhoneNumberIDWhatsappBusinessEncryptionKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
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
          client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDWhatsappBusinessEncryptionKey() {
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_encryption', 'POST'] as const
}

export function usePostVersionPhoneNumberIDWhatsappBusinessEncryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDWhatsappBusinessEncryptionKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDWhatsappBusinessProfileKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_profile', keyArgs] as const
}

export function useGetVersionPhoneNumberIDWhatsappBusinessProfile<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
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
        ? getGetVersionPhoneNumberIDWhatsappBusinessProfileKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
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
          client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDWhatsappBusinessProfile<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
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
        ? getGetVersionPhoneNumberIDWhatsappBusinessProfileKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
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
          client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDWhatsappBusinessProfileKey() {
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_business_profile', 'POST'] as const
}

export function usePostVersionPhoneNumberIDWhatsappBusinessProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDWhatsappBusinessProfileKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDWhatsappCommerceSettingsKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_commerce_settings', keyArgs] as const
}

export function useGetVersionPhoneNumberIDWhatsappCommerceSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
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
        ? getGetVersionPhoneNumberIDWhatsappCommerceSettingsKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
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
          client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDWhatsappCommerceSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
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
        ? getGetVersionPhoneNumberIDWhatsappCommerceSettingsKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
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
          client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDWhatsappCommerceSettingsKey() {
  return [':Version', '/:Version/:Phone-Number-ID/whatsapp_commerce_settings', 'POST'] as const
}

export function usePostVersionPhoneNumberIDWhatsappCommerceSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDWhatsappCommerceSettingsKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPhoneNumberIDBusinessComplianceInfoKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Phone-Number-ID/business_compliance_info', keyArgs] as const
}

export function useGetVersionPhoneNumberIDBusinessComplianceInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
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
        ? getGetVersionPhoneNumberIDBusinessComplianceInfoKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
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
          client[':Version'][':Phone-Number-ID'].business_compliance_info.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPhoneNumberIDBusinessComplianceInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
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
        ? getGetVersionPhoneNumberIDBusinessComplianceInfoKey(args)
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
                (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
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
          client[':Version'][':Phone-Number-ID'].business_compliance_info.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDBusinessComplianceInfoKey() {
  return [':Version', '/:Version/:Phone-Number-ID/business_compliance_info', 'POST'] as const
}

export function usePostVersionPhoneNumberIDBusinessComplianceInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDBusinessComplianceInfoKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].business_compliance_info.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionGroupIdInviteLinkKey() {
  return [':Version', '/:Version/:group_id/invite_link', 'POST'] as const
}

export function usePostVersionGroupIdInviteLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionGroupIdInviteLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>
        },
      ) => parseResponse(client[':Version'][':group_id'].invite_link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionGroupIdInviteLinkKey() {
  return [':Version', '/:Version/:group_id/invite_link', 'DELETE'] as const
}

export function useDeleteVersionGroupIdInviteLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionGroupIdInviteLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>
        },
      ) => parseResponse(client[':Version'][':group_id'].invite_link.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionGroupIdJoinRequestsKey(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:group_id/join_requests', keyArgs] as const
}

export function useGetVersionGroupIdJoinRequests<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>>
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
        ? getGetVersionGroupIdJoinRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':group_id'].join_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionGroupIdJoinRequests<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>>
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
        ? getGetVersionGroupIdJoinRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':group_id'].join_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionGroupIdJoinRequestsKey() {
  return [':Version', '/:Version/:group_id/join_requests', 'POST'] as const
}

export function usePostVersionGroupIdJoinRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionGroupIdJoinRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>
        },
      ) => parseResponse(client[':Version'][':group_id'].join_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionGroupIdJoinRequestsKey() {
  return [':Version', '/:Version/:group_id/join_requests', 'DELETE'] as const
}

export function useDeleteVersionGroupIdJoinRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionGroupIdJoinRequestsKey()
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
            (typeof client)[':Version'][':group_id']['join_requests']['$delete']
          >
        },
      ) => parseResponse(client[':Version'][':group_id'].join_requests.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionGroupIdParticipantsKey() {
  return [':Version', '/:Version/:group_id/participants', 'POST'] as const
}

export function usePostVersionGroupIdParticipants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['participants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionGroupIdParticipantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$post']>
        },
      ) => parseResponse(client[':Version'][':group_id'].participants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionGroupIdParticipantsKey() {
  return [':Version', '/:Version/:group_id/participants', 'DELETE'] as const
}

export function useDeleteVersionGroupIdParticipants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['participants']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionGroupIdParticipantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$delete']>
        },
      ) => parseResponse(client[':Version'][':group_id'].participants.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionGroupIdKey(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:group_id', keyArgs] as const
}

export function useGetVersionGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetVersionGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetVersionGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionGroupIdKey() {
  return [':Version', '/:Version/:group_id', 'POST'] as const
}

export function usePostVersionGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Version'][':group_id']['$post']> },
      ) => parseResponse(client[':Version'][':group_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionGroupIdKey() {
  return [':Version', '/:Version/:group_id', 'DELETE'] as const
}

export function useDeleteVersionGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':group_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Version'][':group_id']['$delete']> },
      ) => parseResponse(client[':Version'][':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionMediaIDKey(
  args: InferRequestType<(typeof client)[':Version'][':Media-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Media-ID', keyArgs] as const
}

export function useGetVersionMediaID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Media-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetVersionMediaIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Media-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionMediaID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Media-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetVersionMediaIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Media-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVersionMediaIDKey() {
  return [':Version', '/:Version/:Media-ID', 'DELETE'] as const
}

export function useDeleteVersionMediaID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Media-ID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Media-ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionMediaIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Version'][':Media-ID']['$delete']> },
      ) => parseResponse(client[':Version'][':Media-ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionMediaURLKey(
  args: InferRequestType<(typeof client)[':Version'][':Media-URL']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Media-URL', keyArgs] as const
}

export function useGetVersionMediaURL<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Media-URL']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>
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
        ? getGetVersionMediaURLKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Media-URL'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionMediaURL<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Media-URL']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>
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
        ? getGetVersionMediaURLKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Media-URL']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Media-URL'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionMessageHistoryIDEventsKey(
  args: InferRequestType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Message-History-ID/events', keyArgs] as const
}

export function useGetVersionMessageHistoryIDEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
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
        ? getGetVersionMessageHistoryIDEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Message-History-ID'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionMessageHistoryIDEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
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
        ? getGetVersionMessageHistoryIDEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Message-History-ID'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionMigrationIntentIDKey(
  args: InferRequestType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Migration-Intent-ID', keyArgs] as const
}

export function useGetVersionMigrationIntentID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
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
        ? getGetVersionMigrationIntentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Migration-Intent-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionMigrationIntentID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
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
        ? getGetVersionMigrationIntentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Migration-Intent-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionPreVerifiedPhoneNumberIDKey(
  args: InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID', keyArgs] as const
}

export function useGetVersionPreVerifiedPhoneNumberID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
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
        ? getGetVersionPreVerifiedPhoneNumberIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Pre-Verified-Phone-Number-ID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPreVerifiedPhoneNumberID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
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
        ? getGetVersionPreVerifiedPhoneNumberIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':Pre-Verified-Phone-Number-ID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteVersionPreVerifiedPhoneNumberIDKey() {
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID', 'DELETE'] as const
}

export function useDeleteVersionPreVerifiedPhoneNumberID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionPreVerifiedPhoneNumberIDKey()
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
            (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Pre-Verified-Phone-Number-ID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionPreVerifiedPhoneNumberIDPartnersKey(
  args: InferRequestType<
    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID/partners', keyArgs] as const
}

export function useGetVersionPreVerifiedPhoneNumberIDPartners<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
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
        ? getGetVersionPreVerifiedPhoneNumberIDPartnersKey(args)
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
                (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
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
          client[':Version'][':Pre-Verified-Phone-Number-ID'].partners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionPreVerifiedPhoneNumberIDPartners<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
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
        ? getGetVersionPreVerifiedPhoneNumberIDPartnersKey(args)
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
                (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
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
          client[':Version'][':Pre-Verified-Phone-Number-ID'].partners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionPreVerifiedPhoneNumberIDRequestCodeKey() {
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID/request_code', 'POST'] as const
}

export function usePostVersionPreVerifiedPhoneNumberIDRequestCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPreVerifiedPhoneNumberIDRequestCodeKey()
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
            (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Pre-Verified-Phone-Number-ID'].request_code.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPreVerifiedPhoneNumberIDVerifyCodeKey() {
  return [':Version', '/:Version/:Pre-Verified-Phone-Number-ID/verify_code', 'POST'] as const
}

export function usePostVersionPreVerifiedPhoneNumberIDVerifyCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPreVerifiedPhoneNumberIDVerifyCodeKey()
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
            (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Pre-Verified-Phone-Number-ID'].verify_code.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionSolutionIDAccessTokenKey(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Solution-ID/access_token', keyArgs] as const
}

export function useGetVersionSolutionIDAccessToken<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>>
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
        ? getGetVersionSolutionIDAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Solution-ID'].access_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionSolutionIDAccessToken<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>>
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
        ? getGetVersionSolutionIDAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Solution-ID'].access_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionSolutionIDAcceptDeactivationRequestKey() {
  return [':Version', '/:Version/:Solution-ID/accept_deactivation_request', 'POST'] as const
}

export function usePostVersionSolutionIDAcceptDeactivationRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionSolutionIDAcceptDeactivationRequestKey()
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
            (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Solution-ID'].accept_deactivation_request.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionSolutionIDAcceptKey() {
  return [':Version', '/:Version/:Solution-ID/accept', 'POST'] as const
}

export function usePostVersionSolutionIDAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionSolutionIDAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>
        },
      ) => parseResponse(client[':Version'][':Solution-ID'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionSolutionIDKey(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Solution-ID', keyArgs] as const
}

export function useGetVersionSolutionID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>
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
        ? getGetVersionSolutionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Solution-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionSolutionID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>
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
        ? getGetVersionSolutionIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Solution-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionSolutionIDRejectDeactivationRequestKey() {
  return [':Version', '/:Version/:Solution-ID/reject_deactivation_request', 'POST'] as const
}

export function usePostVersionSolutionIDRejectDeactivationRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionSolutionIDRejectDeactivationRequestKey()
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
            (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Solution-ID'].reject_deactivation_request.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionSolutionIDRejectKey() {
  return [':Version', '/:Version/:Solution-ID/reject', 'POST'] as const
}

export function usePostVersionSolutionIDReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionSolutionIDRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>
        },
      ) => parseResponse(client[':Version'][':Solution-ID'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionSolutionIDSendDeactivationRequestKey() {
  return [':Version', '/:Version/:Solution-ID/send_deactivation_request', 'POST'] as const
}

export function usePostVersionSolutionIDSendDeactivationRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionSolutionIDSendDeactivationRequestKey()
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
            (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Solution-ID'].send_deactivation_request.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionUserIDAssignedWhatsappBusinessAccountsKey(
  args: InferRequestType<
    (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:User-ID/assigned_whatsapp_business_accounts', keyArgs] as const
}

export function useGetVersionUserIDAssignedWhatsappBusinessAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
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
        ? getGetVersionUserIDAssignedWhatsappBusinessAccountsKey(args)
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
                (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
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
          client[':Version'][':User-ID'].assigned_whatsapp_business_accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionUserIDAssignedWhatsappBusinessAccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
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
        ? getGetVersionUserIDAssignedWhatsappBusinessAccountsKey(args)
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
                (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
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
          client[':Version'][':User-ID'].assigned_whatsapp_business_accounts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVersionWhatsAppAccountNumberIDKey(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WhatsApp-Account-Number-ID', keyArgs] as const
}

export function useGetVersionWhatsAppAccountNumberID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>>
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
        ? getGetVersionWhatsAppAccountNumberIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WhatsApp-Account-Number-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWhatsAppAccountNumberID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>>
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
        ? getGetVersionWhatsAppAccountNumberIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WhatsApp-Account-Number-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionWhatsAppBusinessAccountIDAssignedUsersKey(
  args: InferRequestType<
    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WhatsApp-Business-Account-ID/assigned_users', keyArgs] as const
}

export function useGetVersionWhatsAppBusinessAccountIDAssignedUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
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
        ? getGetVersionWhatsAppBusinessAccountIDAssignedUsersKey(args)
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
                (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
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
          client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWhatsAppBusinessAccountIDAssignedUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
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
        ? getGetVersionWhatsAppBusinessAccountIDAssignedUsersKey(args)
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
                (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
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
          client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWhatsAppBusinessAccountIDAssignedUsersKey() {
  return [':Version', '/:Version/:WhatsApp-Business-Account-ID/assigned_users', 'POST'] as const
}

export function usePostVersionWhatsAppBusinessAccountIDAssignedUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWhatsAppBusinessAccountIDAssignedUsersKey()
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
            (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionWhatsAppBusinessAccountIDAssignedUsersKey() {
  return [':Version', '/:Version/:WhatsApp-Business-Account-ID/assigned_users', 'DELETE'] as const
}

export function useDeleteVersionWhatsAppBusinessAccountIDAssignedUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionWhatsAppBusinessAccountIDAssignedUsersKey()
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
            (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionPhoneNumberIDConversationalAutomationKey() {
  return [':Version', '/:Version/:Phone-Number-ID/conversational_automation', 'POST'] as const
}

export function usePostVersionPhoneNumberIDConversationalAutomation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionPhoneNumberIDConversationalAutomationKey()
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
            (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':Phone-Number-ID'].conversational_automation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionBusinessIDExtendedcreditsKey(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Business-ID/extendedcredits', keyArgs] as const
}

export function useGetVersionBusinessIDExtendedcredits<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
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
        ? getGetVersionBusinessIDExtendedcreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Business-ID'].extendedcredits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionBusinessIDExtendedcredits<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
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
        ? getGetVersionBusinessIDExtendedcreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':Business-ID'].extendedcredits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionWABAIDFlowsKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/flows', keyArgs] as const
}

export function useGetVersionWABAIDFlows<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
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
        ? getGetVersionWABAIDFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDFlows<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
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
        ? getGetVersionWABAIDFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWABAIDFlowsKey() {
  return [':Version', '/:Version/:WABA-ID/flows', 'POST'] as const
}

export function usePostVersionWABAIDFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']> },
      ) => parseResponse(client[':Version'][':WABA-ID'].flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionWABAIDMigrateFlowsKey() {
  return [':Version', '/:Version/:WABA-ID/migrate_flows', 'POST'] as const
}

export function usePostVersionWABAIDMigrateFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDMigrateFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>
        },
      ) => parseResponse(client[':Version'][':WABA-ID'].migrate_flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionFlowIDKey(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Flow-ID', keyArgs] as const
}

export function useGetVersionFlowID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionFlowIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Flow-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionFlowID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionFlowIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Flow-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionFlowIDKey() {
  return [':Version', '/:Version/:Flow-ID', 'POST'] as const
}

export function usePostVersionFlowID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionFlowIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$post']> },
      ) => parseResponse(client[':Version'][':Flow-ID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionFlowIDKey() {
  return [':Version', '/:Version/:Flow-ID', 'DELETE'] as const
}

export function useDeleteVersionFlowID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionFlowIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$delete']> },
      ) => parseResponse(client[':Version'][':Flow-ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionFlowIDAssetsKey(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:Flow-ID/assets', keyArgs] as const
}

export function useGetVersionFlowIDAssets<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
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
        ? getGetVersionFlowIDAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Flow-ID'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionFlowIDAssets<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
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
        ? getGetVersionFlowIDAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':Flow-ID'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionFlowIDAssetsKey() {
  return [':Version', '/:Version/:Flow-ID/assets', 'POST'] as const
}

export function usePostVersionFlowIDAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionFlowIDAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']> },
      ) => parseResponse(client[':Version'][':Flow-ID'].assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionFlowIDPublishKey() {
  return [':Version', '/:Version/:Flow-ID/publish', 'POST'] as const
}

export function usePostVersionFlowIDPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionFlowIDPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']> },
      ) => parseResponse(client[':Version'][':Flow-ID'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionFlowIDDeprecateKey() {
  return [':Version', '/:Version/:Flow-ID/deprecate', 'POST'] as const
}

export function usePostVersionFlowIDDeprecate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionFlowIDDeprecateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']> },
      ) => parseResponse(client[':Version'][':Flow-ID'].deprecate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionWABAIDInProgressOnbehalfRequestKey(
  args: InferRequestType<
    (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/in_progress_onbehalf_request', keyArgs] as const
}

export function useGetVersionWABAIDInProgressOnbehalfRequest<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
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
        ? getGetVersionWABAIDInProgressOnbehalfRequestKey(args)
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
                (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
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
          client[':Version'][':WABA-ID'].in_progress_onbehalf_request.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDInProgressOnbehalfRequest<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
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
        ? getGetVersionWABAIDInProgressOnbehalfRequestKey(args)
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
                (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
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
          client[':Version'][':WABA-ID'].in_progress_onbehalf_request.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVersionOBOMobilityIntentIDKey(
  args: InferRequestType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:OBO-Mobility-Intent-ID', keyArgs] as const
}

export function useGetVersionOBOMobilityIntentID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
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
        ? getGetVersionOBOMobilityIntentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':OBO-Mobility-Intent-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionOBOMobilityIntentID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
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
        ? getGetVersionOBOMobilityIntentIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':OBO-Mobility-Intent-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWABAIDOboMobilityIntentKey() {
  return [':Version', '/:Version/:WABA-ID/obo_mobility_intent', 'POST'] as const
}

export function usePostVersionWABAIDOboMobilityIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDOboMobilityIntentKey()
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
            (typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']
          >
        },
      ) =>
        parseResponse(client[':Version'][':WABA-ID'].obo_mobility_intent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionWABAIDPhoneNumbersKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/phone_numbers', keyArgs] as const
}

export function useGetVersionWABAIDPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>>
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
        ? getGetVersionWABAIDPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>>
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
        ? getGetVersionWABAIDPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].phone_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWABAIDPhoneNumbersKey() {
  return [':Version', '/:Version/:WABA-ID/phone_numbers', 'POST'] as const
}

export function usePostVersionWABAIDPhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDPhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>
        },
      ) => parseResponse(client[':Version'][':WABA-ID'].phone_numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionWABAIDSchedulesKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/schedules', keyArgs] as const
}

export function useGetVersionWABAIDSchedules<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
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
        ? getGetVersionWABAIDSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDSchedules<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
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
        ? getGetVersionWABAIDSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWABAIDSchedulesKey() {
  return [':Version', '/:Version/:WABA-ID/schedules', 'POST'] as const
}

export function usePostVersionWABAIDSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']> },
      ) => parseResponse(client[':Version'][':WABA-ID'].schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionWABAIDSetOboMobilityIntentKey() {
  return [':Version', '/:Version/:WABA-ID/set_obo_mobility_intent', 'POST'] as const
}

export function usePostVersionWABAIDSetOboMobilityIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDSetOboMobilityIntentKey()
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
            (typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':WABA-ID'].set_obo_mobility_intent.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVersionWABAIDSetSolutionMigrationIntentKey() {
  return [':Version', '/:Version/:WABA-ID/set_solution_migration_intent', 'POST'] as const
}

export function usePostVersionWABAIDSetSolutionMigrationIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDSetSolutionMigrationIntentKey()
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
            (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':WABA-ID'].set_solution_migration_intent.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVersionWABAIDSolutionsKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/solutions', keyArgs] as const
}

export function useGetVersionWABAIDSolutions<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
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
        ? getGetVersionWABAIDSolutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].solutions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDSolutions<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
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
        ? getGetVersionWABAIDSolutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].solutions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionWABAIDSubscribedAppsKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/subscribed_apps', keyArgs] as const
}

export function useGetVersionWABAIDSubscribedApps<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>>
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
        ? getGetVersionWABAIDSubscribedAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDSubscribedApps<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>>
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
        ? getGetVersionWABAIDSubscribedAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWABAIDSubscribedAppsKey() {
  return [':Version', '/:Version/:WABA-ID/subscribed_apps', 'POST'] as const
}

export function usePostVersionWABAIDSubscribedApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDSubscribedAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>
        },
      ) => parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionWABAIDSubscribedAppsKey() {
  return [':Version', '/:Version/:WABA-ID/subscribed_apps', 'DELETE'] as const
}

export function useDeleteVersionWABAIDSubscribedApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionWABAIDSubscribedAppsKey()
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
            (typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']
          >
        },
      ) =>
        parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionTEMPLATEIDKey(
  args: InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:TEMPLATE_ID', keyArgs] as const
}

export function useGetVersionTEMPLATEID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>
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
        ? getGetVersionTEMPLATEIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':TEMPLATE_ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionTEMPLATEID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>
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
        ? getGetVersionTEMPLATEIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':TEMPLATE_ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionTEMPLATEIDKey() {
  return [':Version', '/:Version/:TEMPLATE_ID', 'POST'] as const
}

export function usePostVersionTEMPLATEID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionTEMPLATEIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']> },
      ) => parseResponse(client[':Version'][':TEMPLATE_ID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionWABAIDMessageTemplatesKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/message_templates', keyArgs] as const
}

export function useGetVersionWABAIDMessageTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
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
        ? getGetVersionWABAIDMessageTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].message_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDMessageTemplates<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
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
        ? getGetVersionWABAIDMessageTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].message_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWABAIDMessageTemplatesKey() {
  return [':Version', '/:Version/:WABA-ID/message_templates', 'POST'] as const
}

export function usePostVersionWABAIDMessageTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDMessageTemplatesKey()
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
            (typeof client)[':Version'][':WABA-ID']['message_templates']['$post']
          >
        },
      ) =>
        parseResponse(client[':Version'][':WABA-ID'].message_templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionWABAIDMessageTemplatesKey() {
  return [':Version', '/:Version/:WABA-ID/message_templates', 'DELETE'] as const
}

export function useDeleteVersionWABAIDMessageTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionWABAIDMessageTemplatesKey()
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
            (typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']
          >
        },
      ) =>
        parseResponse(client[':Version'][':WABA-ID'].message_templates.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionWABAIDActivitiesKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID/activities', keyArgs] as const
}

export function useGetVersionWABAIDActivities<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
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
        ? getGetVersionWABAIDActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAIDActivities<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
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
        ? getGetVersionWABAIDActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':Version'][':WABA-ID'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionWABAIDKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-ID', keyArgs] as const
}

export function useGetVersionWABAID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionWABAIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABAID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionWABAIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWABAIDKey() {
  return [':Version', '/:Version/:WABA-ID', 'POST'] as const
}

export function usePostVersionWABAID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':Version'][':WABA-ID']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WABA-ID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWABAIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':Version'][':WABA-ID']['$post']> },
      ) => parseResponse(client[':Version'][':WABA-ID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionWABABotIDKey(
  args: InferRequestType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WABA-Bot-ID', keyArgs] as const
}

export function useGetVersionWABABotID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>
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
        ? getGetVersionWABABotIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-Bot-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWABABotID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>
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
        ? getGetVersionWABABotIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':Version'][':WABA-Bot-ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionWhatsAppBusinessProfileIDKey(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':Version', '/:Version/:WhatsApp-Business-Profile-ID', keyArgs] as const
}

export function useGetVersionWhatsAppBusinessProfileID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
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
        ? getGetVersionWhatsAppBusinessProfileIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':WhatsApp-Business-Profile-ID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionWhatsAppBusinessProfileID<TError = unknown>(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
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
        ? getGetVersionWhatsAppBusinessProfileIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':Version'][':WhatsApp-Business-Profile-ID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVersionWhatsAppBusinessProfileIDKey() {
  return [':Version', '/:Version/:WhatsApp-Business-Profile-ID', 'POST'] as const
}

export function usePostVersionWhatsAppBusinessProfileID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionWhatsAppBusinessProfileIDKey()
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
            (typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':Version'][':WhatsApp-Business-Profile-ID'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWhatsappWebhooksKey() {
  return ['whatsapp', '/whatsapp/webhooks', 'POST'] as const
}

export function usePostWhatsappWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.webhooks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.whatsapp.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWhatsappWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.whatsapp.webhooks.$post> }) =>
        parseResponse(client.whatsapp.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
