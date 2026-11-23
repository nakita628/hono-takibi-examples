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

export function getPostV1AccountAadhaarGenerateOTPKey() {
  return ['v1', '/v1/account/aadhaar/generateOTP', 'POST'] as const
}

export function usePostV1AccountAadhaarGenerateOTP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.aadhaar.generateOTP.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.aadhaar.generateOTP.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountAadhaarGenerateOTPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.account.aadhaar.generateOTP.$post> },
      ) => parseResponse(client.v1.account.aadhaar.generateOTP.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountAadhaarVerifyOTPKey() {
  return ['v1', '/v1/account/aadhaar/verifyOTP', 'POST'] as const
}

export function usePostV1AccountAadhaarVerifyOTP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.aadhaar.verifyOTP.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.aadhaar.verifyOTP.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountAadhaarVerifyOTPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.account.aadhaar.verifyOTP.$post> },
      ) => parseResponse(client.v1.account.aadhaar.verifyOTP.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountBenefitsKey(
  args: InferRequestType<typeof client.v1.account.benefits.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/benefits', keyArgs] as const
}

export function useGetV1AccountBenefits<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.benefits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountBenefitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.benefits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountBenefits<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.benefits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountBenefitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.benefits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountChangePasswdByAadhaarKey() {
  return ['v1', '/v1/account/change/passwd/byAadhaar', 'POST'] as const
}

export function usePostV1AccountChangePasswdByAadhaar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.change.passwd.byAadhaar.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.change.passwd.byAadhaar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountChangePasswdByAadhaarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.account.change.passwd.byAadhaar.$post> },
      ) => parseResponse(client.v1.account.change.passwd.byAadhaar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountChangePasswdByMobileKey() {
  return ['v1', '/v1/account/change/passwd/byMobile', 'POST'] as const
}

export function usePostV1AccountChangePasswdByMobile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.change.passwd.byMobile.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.change.passwd.byMobile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountChangePasswdByMobileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.account.change.passwd.byMobile.$post> },
      ) => parseResponse(client.v1.account.change.passwd.byMobile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountChangePasswdGenerateAadhaarOTPKey(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/change/passwd/generateAadhaarOTP', keyArgs] as const
}

export function useGetV1AccountChangePasswdGenerateAadhaarOTP<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountChangePasswdGenerateAadhaarOTPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account.change.passwd.generateAadhaarOTP.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountChangePasswdGenerateAadhaarOTP<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountChangePasswdGenerateAadhaarOTPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account.change.passwd.generateAadhaarOTP.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountChangePasswdGenerateMobileOTPKey(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/change/passwd/generateMobileOTP', keyArgs] as const
}

export function useGetV1AccountChangePasswdGenerateMobileOTP<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountChangePasswdGenerateMobileOTPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account.change.passwd.generateMobileOTP.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountChangePasswdGenerateMobileOTP<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountChangePasswdGenerateMobileOTPKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.account.change.passwd.generateMobileOTP.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountChangePasswordKey() {
  return ['v1', '/v1/account/change/password', 'POST'] as const
}

export function usePostV1AccountChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.change.password.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.change.password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.account.change.password.$post> },
      ) => parseResponse(client.v1.account.change.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountGetCardKey(
  args: InferRequestType<typeof client.v1.account.getCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/getCard', keyArgs] as const
}

export function useGetV1AccountGetCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.getCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountGetCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.getCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountGetCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.getCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountGetCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.getCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountGetPngCardKey(
  args: InferRequestType<typeof client.v1.account.getPngCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/getPngCard', keyArgs] as const
}

export function useGetV1AccountGetPngCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.getPngCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountGetPngCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.getPngCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountGetPngCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.getPngCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountGetPngCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.getPngCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountGetSvgCardKey(
  args: InferRequestType<typeof client.v1.account.getSvgCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/getSvgCard', keyArgs] as const
}

export function useGetV1AccountGetSvgCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.getSvgCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountGetSvgCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.getSvgCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountGetSvgCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.getSvgCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountGetSvgCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.getSvgCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountProfileKey(
  args: InferRequestType<typeof client.v1.account.profile.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/profile', keyArgs] as const
}

export function useGetV1AccountProfile<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountProfile<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountProfileKey() {
  return ['v1', '/v1/account/profile', 'POST'] as const
}

export function usePostV1AccountProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.profile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.account.profile.$post> }) =>
        parseResponse(client.v1.account.profile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountProfileKey() {
  return ['v1', '/v1/account/profile', 'DELETE'] as const
}

export function useDeleteV1AccountProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.profile.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.account.profile.$delete> },
      ) => parseResponse(client.v1.account.profile.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountQrCodeKey(
  args: InferRequestType<typeof client.v1.account.qrCode.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/qrCode', keyArgs] as const
}

export function useGetV1AccountQrCode<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.qrCode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountQrCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.qrCode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountQrCode<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.qrCode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccountQrCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.qrCode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountTokenKey() {
  return ['v1', '/v1/account/token', 'POST'] as const
}

export function usePostV1AccountToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.account.token.$post> }) =>
        parseResponse(client.v1.account.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthAuthPasswordKey() {
  return ['v1', '/v1/auth/authPassword', 'POST'] as const
}

export function usePostV1AuthAuthPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authPassword.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.authPassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthAuthPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.authPassword.$post> },
      ) => parseResponse(client.v1.auth.authPassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthAuthWithMobileKey() {
  return ['v1', '/v1/auth/authWithMobile', 'POST'] as const
}

export function usePostV1AuthAuthWithMobile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authWithMobile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.authWithMobile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthAuthWithMobileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.authWithMobile.$post> },
      ) => parseResponse(client.v1.auth.authWithMobile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthAuthWithMobileTokenKey() {
  return ['v1', '/v1/auth/authWithMobileToken', 'POST'] as const
}

export function usePostV1AuthAuthWithMobileToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authWithMobileToken.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.authWithMobileToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthAuthWithMobileTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.authWithMobileToken.$post> },
      ) => parseResponse(client.v1.auth.authWithMobileToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AuthCertKey(args: InferRequestType<typeof client.v1.auth.cert.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/auth/cert', keyArgs] as const
}

export function useGetV1AuthCert<TError = unknown>(
  args: InferRequestType<typeof client.v1.auth.cert.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuthCertKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.auth.cert.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AuthCert<TError = unknown>(
  args: InferRequestType<typeof client.v1.auth.cert.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuthCertKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.auth.cert.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AuthConfirmWithAadhaarBioKey() {
  return ['v1', '/v1/auth/confirmWithAadhaarBio', 'POST'] as const
}

export function usePostV1AuthConfirmWithAadhaarBio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithAadhaarBio.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.confirmWithAadhaarBio.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthConfirmWithAadhaarBioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.confirmWithAadhaarBio.$post> },
      ) => parseResponse(client.v1.auth.confirmWithAadhaarBio.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthConfirmWithAadhaarOtpKey() {
  return ['v1', '/v1/auth/confirmWithAadhaarOtp', 'POST'] as const
}

export function usePostV1AuthConfirmWithAadhaarOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthConfirmWithAadhaarOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.confirmWithAadhaarOtp.$post> },
      ) => parseResponse(client.v1.auth.confirmWithAadhaarOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthConfirmWithDemographicsKey() {
  return ['v1', '/v1/auth/confirmWithDemographics', 'POST'] as const
}

export function usePostV1AuthConfirmWithDemographics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.auth.confirmWithDemographics.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.confirmWithDemographics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthConfirmWithDemographicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.confirmWithDemographics.$post> },
      ) => parseResponse(client.v1.auth.confirmWithDemographics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthConfirmWithMobileOTPKey() {
  return ['v1', '/v1/auth/confirmWithMobileOTP', 'POST'] as const
}

export function usePostV1AuthConfirmWithMobileOTP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithMobileOTP.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.confirmWithMobileOTP.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthConfirmWithMobileOTPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.confirmWithMobileOTP.$post> },
      ) => parseResponse(client.v1.auth.confirmWithMobileOTP.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthConfirmWithPasswordKey() {
  return ['v1', '/v1/auth/confirmWithPassword', 'POST'] as const
}

export function usePostV1AuthConfirmWithPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithPassword.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.confirmWithPassword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthConfirmWithPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.confirmWithPassword.$post> },
      ) => parseResponse(client.v1.auth.confirmWithPassword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthInitKey() {
  return ['v1', '/v1/auth/init', 'POST'] as const
}

export function usePostV1AuthInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.init.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.init.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.auth.init.$post> }) =>
        parseResponse(client.v1.auth.init.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AuthResendAuthOTPKey() {
  return ['v1', '/v1/auth/resendAuthOTP', 'POST'] as const
}

export function usePostV1AuthResendAuthOTP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.resendAuthOTP.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.auth.resendAuthOTP.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthResendAuthOTPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.auth.resendAuthOTP.$post> },
      ) => parseResponse(client.v1.auth.resendAuthOTP.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ForgotHealthIdAadhaarKey() {
  return ['v1', '/v1/forgot/healthId/aadhaar', 'POST'] as const
}

export function usePostV1ForgotHealthIdAadhaar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.forgot.healthId.aadhaar.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.forgot.healthId.aadhaar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ForgotHealthIdAadhaarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.forgot.healthId.aadhaar.$post> },
      ) => parseResponse(client.v1.forgot.healthId.aadhaar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ForgotHealthIdAadhaarGenerateOtpKey() {
  return ['v1', '/v1/forgot/healthId/aadhaar/generateOtp', 'POST'] as const
}

export function usePostV1ForgotHealthIdAadhaarGenerateOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ForgotHealthIdAadhaarGenerateOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post> },
      ) => parseResponse(client.v1.forgot.healthId.aadhaar.generateOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ForgotHealthIdMobileKey() {
  return ['v1', '/v1/forgot/healthId/mobile', 'POST'] as const
}

export function usePostV1ForgotHealthIdMobile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.forgot.healthId.mobile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.forgot.healthId.mobile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ForgotHealthIdMobileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.forgot.healthId.mobile.$post> },
      ) => parseResponse(client.v1.forgot.healthId.mobile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ForgotHealthIdMobileGenerateOtpKey() {
  return ['v1', '/v1/forgot/healthId/mobile/generateOtp', 'POST'] as const
}

export function usePostV1ForgotHealthIdMobileGenerateOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ForgotHealthIdMobileGenerateOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post> },
      ) => parseResponse(client.v1.forgot.healthId.mobile.generateOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HaLgdDistrictsKey(
  args: InferRequestType<typeof client.v1.ha.lgd.districts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ha/lgd/districts', keyArgs] as const
}

export function useGetV1HaLgdDistricts<TError = unknown>(
  args: InferRequestType<typeof client.v1.ha.lgd.districts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HaLgdDistrictsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ha.lgd.districts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HaLgdDistricts<TError = unknown>(
  args: InferRequestType<typeof client.v1.ha.lgd.districts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HaLgdDistrictsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ha.lgd.districts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1HaLgdStatesKey(
  args: InferRequestType<typeof client.v1.ha.lgd.states.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ha/lgd/states', keyArgs] as const
}

export function useGetV1HaLgdStates<TError = unknown>(
  args: InferRequestType<typeof client.v1.ha.lgd.states.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HaLgdStatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ha.lgd.states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HaLgdStates<TError = unknown>(
  args: InferRequestType<typeof client.v1.ha.lgd.states.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HaLgdStatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ha.lgd.states.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1HaTagsKey(args: InferRequestType<typeof client.v1.ha.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ha/tags', keyArgs] as const
}

export function useGetV1HaTags<TError = unknown>(
  args: InferRequestType<typeof client.v1.ha.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HaTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ha.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HaTags<TError = unknown>(
  args: InferRequestType<typeof client.v1.ha.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HaTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ha.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1HaTagsKey() {
  return ['v1', '/v1/ha/tags', 'POST'] as const
}

export function usePostV1HaTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.ha.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HaTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ha.tags.$post> }) =>
        parseResponse(client.v1.ha.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1HaTagsKey() {
  return ['v1', '/v1/ha/tags', 'DELETE'] as const
}

export function useDeleteV1HaTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.ha.tags.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1HaTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ha.tags.$delete> }) =>
        parseResponse(client.v1.ha.tags.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HealthFacilityAuthenticateKey() {
  return ['v1', '/v1/health/facility/authenticate', 'POST'] as const
}

export function usePostV1HealthFacilityAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.authenticate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.health.facility.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HealthFacilityAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.health.facility.authenticate.$post> },
      ) => parseResponse(client.v1.health.facility.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HealthFacilityChangePasswordKey() {
  return ['v1', '/v1/health/facility/change/password', 'POST'] as const
}

export function usePostV1HealthFacilityChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.change.password.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.health.facility.change.password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HealthFacilityChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.health.facility.change.password.$post> },
      ) => parseResponse(client.v1.health.facility.change.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HealthFacilityCreateHealthIdWithPreVerifiedKey() {
  return ['v1', '/v1/health/facility/createHealthIdWithPreVerified', 'POST'] as const
}

export function usePostV1HealthFacilityCreateHealthIdWithPreVerified<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HealthFacilityCreateHealthIdWithPreVerifiedKey()
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
            typeof client.v1.health.facility.createHealthIdWithPreVerified.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.health.facility.createHealthIdWithPreVerified.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1HealthFacilityGeneratePasswordKey() {
  return ['v1', '/v1/health/facility/generate/password', 'POST'] as const
}

export function usePostV1HealthFacilityGeneratePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.generate.password.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.health.facility.generate.password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HealthFacilityGeneratePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.health.facility.generate.password.$post> },
      ) => parseResponse(client.v1.health.facility.generate.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HealthFacilityGenerateOtpKey() {
  return ['v1', '/v1/health/facility/generateOtp', 'POST'] as const
}

export function usePostV1HealthFacilityGenerateOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.generateOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.health.facility.generateOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HealthFacilityGenerateOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.health.facility.generateOtp.$post> },
      ) => parseResponse(client.v1.health.facility.generateOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HealthFacilityGetSvgCardKey(
  args: InferRequestType<typeof client.v1.health.facility.getSvgCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/health/facility/getSvgCard', keyArgs] as const
}

export function useGetV1HealthFacilityGetSvgCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.health.facility.getSvgCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HealthFacilityGetSvgCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.health.facility.getSvgCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HealthFacilityGetSvgCard<TError = unknown>(
  args: InferRequestType<typeof client.v1.health.facility.getSvgCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HealthFacilityGetSvgCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.health.facility.getSvgCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1HealthFacilityResetPasswordKey() {
  return ['v1', '/v1/health/facility/reset/password', 'POST'] as const
}

export function usePostV1HealthFacilityResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.reset.password.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.health.facility.reset.password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HealthFacilityResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.health.facility.reset.password.$post> },
      ) => parseResponse(client.v1.health.facility.reset.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitAadhaarGenerateOtpKey() {
  return ['v1', '/v1/hid/benefit/aadhaar/generateOtp', 'POST'] as const
}

export function usePostV1HidBenefitAadhaarGenerateOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitAadhaarGenerateOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post> },
      ) => parseResponse(client.v1.hid.benefit.aadhaar.generateOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitAadhaarVerifyAadharOtpKey() {
  return ['v1', '/v1/hid/benefit/aadhaar/verifyAadharOtp', 'POST'] as const
}

export function usePostV1HidBenefitAadhaarVerifyAadharOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitAadhaarVerifyAadharOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post> },
      ) => parseResponse(client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitAadhaarVerifyBioKey() {
  return ['v1', '/v1/hid/benefit/aadhaar/verifyBio', 'POST'] as const
}

export function usePostV1HidBenefitAadhaarVerifyBio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitAadhaarVerifyBioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post> },
      ) => parseResponse(client.v1.hid.benefit.aadhaar.verifyBio.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitCreateHealthIdDemoAuthKey() {
  return ['v1', '/v1/hid/benefit/createHealthId/demo/auth', 'POST'] as const
}

export function usePostV1HidBenefitCreateHealthIdDemoAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitCreateHealthIdDemoAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post> },
      ) => parseResponse(client.v1.hid.benefit.createHealthId.demo.auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitDelinkKey() {
  return ['v1', '/v1/hid/benefit/delink', 'POST'] as const
}

export function usePostV1HidBenefitDelink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.delink.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.delink.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitDelinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.delink.$post> },
      ) => parseResponse(client.v1.hid.benefit.delink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitLinkKey() {
  return ['v1', '/v1/hid/benefit/link', 'POST'] as const
}

export function usePostV1HidBenefitLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.link.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.link.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.link.$post> }) =>
        parseResponse(client.v1.hid.benefit.link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitMobileCreateHealthIdKey() {
  return ['v1', '/v1/hid/benefit/mobile/createHealthId', 'POST'] as const
}

export function usePostV1HidBenefitMobileCreateHealthId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitMobileCreateHealthIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.hid.benefit.mobile.createHealthId.$post> },
      ) => parseResponse(client.v1.hid.benefit.mobile.createHealthId.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitMobileGenerateOtpKey() {
  return ['v1', '/v1/hid/benefit/mobile/generateOtp', 'POST'] as const
}

export function usePostV1HidBenefitMobileGenerateOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitMobileGenerateOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.mobile.generateOtp.$post> },
      ) => parseResponse(client.v1.hid.benefit.mobile.generateOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitNotifyBenefitKey() {
  return ['v1', '/v1/hid/benefit/notify/benefit', 'POST'] as const
}

export function usePostV1HidBenefitNotifyBenefit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.notify.benefit.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.notify.benefit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitNotifyBenefitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.notify.benefit.$post> },
      ) => parseResponse(client.v1.hid.benefit.notify.benefit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitSearchAadhaarKey() {
  return ['v1', '/v1/hid/benefit/search/aadhaar', 'POST'] as const
}

export function usePostV1HidBenefitSearchAadhaar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.search.aadhaar.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.search.aadhaar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitSearchAadhaarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.search.aadhaar.$post> },
      ) => parseResponse(client.v1.hid.benefit.search.aadhaar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitSearchHealthIdNumberKey() {
  return ['v1', '/v1/hid/benefit/search/healthIdNumber', 'POST'] as const
}

export function usePostV1HidBenefitSearchHealthIdNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitSearchHealthIdNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.hid.benefit.search.healthIdNumber.$post> },
      ) => parseResponse(client.v1.hid.benefit.search.healthIdNumber.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitUpdateMobileKey() {
  return ['v1', '/v1/hid/benefit/update/mobile', 'POST'] as const
}

export function usePostV1HidBenefitUpdateMobile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.update.mobile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.update.mobile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitUpdateMobileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.update.mobile.$post> },
      ) => parseResponse(client.v1.hid.benefit.update.mobile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitUpdateProfileKey() {
  return ['v1', '/v1/hid/benefit/update/profile', 'POST'] as const
}

export function usePostV1HidBenefitUpdateProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.update.profile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.update.profile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitUpdateProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.update.profile.$post> },
      ) => parseResponse(client.v1.hid.benefit.update.profile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HidBenefitUpdateStatusKey() {
  return ['v1', '/v1/hid/benefit/update/status', 'POST'] as const
}

export function usePostV1HidBenefitUpdateStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.update.status.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.hid.benefit.update.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HidBenefitUpdateStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.hid.benefit.update.status.$post> },
      ) => parseResponse(client.v1.hid.benefit.update.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpKey() {
  return ['v1', '/v1/registration/aadhaar/createHealthIdWithAadhaarOtp', 'POST'] as const
}

export function usePostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpKey()
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
            typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarCreateHealthIdWithPreVerifiedKey() {
  return ['v1', '/v1/registration/aadhaar/createHealthIdWithPreVerified', 'POST'] as const
}

export function usePostV1RegistrationAadhaarCreateHealthIdWithPreVerified<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarCreateHealthIdWithPreVerifiedKey()
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
            typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post
          >
        },
      ) =>
        parseResponse(
          client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarGenerateMobileOTPKey() {
  return ['v1', '/v1/registration/aadhaar/generateMobileOTP', 'POST'] as const
}

export function usePostV1RegistrationAadhaarGenerateMobileOTP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarGenerateMobileOTPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post> },
      ) =>
        parseResponse(client.v1.registration.aadhaar.generateMobileOTP.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarGenerateOtpKey() {
  return ['v1', '/v1/registration/aadhaar/generateOtp', 'POST'] as const
}

export function usePostV1RegistrationAadhaarGenerateOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.generateOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.generateOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarGenerateOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registration.aadhaar.generateOtp.$post> },
      ) => parseResponse(client.v1.registration.aadhaar.generateOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarResendAadhaarOtpKey() {
  return ['v1', '/v1/registration/aadhaar/resendAadhaarOtp', 'POST'] as const
}

export function usePostV1RegistrationAadhaarResendAadhaarOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarResendAadhaarOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post> },
      ) => parseResponse(client.v1.registration.aadhaar.resendAadhaarOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarSearchAadharKey() {
  return ['v1', '/v1/registration/aadhaar/search/aadhar', 'POST'] as const
}

export function usePostV1RegistrationAadhaarSearchAadhar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.search.aadhar.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.search.aadhar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarSearchAadharKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.registration.aadhaar.search.aadhar.$post> },
      ) => parseResponse(client.v1.registration.aadhaar.search.aadhar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarVerifyBioKey() {
  return ['v1', '/v1/registration/aadhaar/verifyBio', 'POST'] as const
}

export function usePostV1RegistrationAadhaarVerifyBio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyBio.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.verifyBio.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarVerifyBioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registration.aadhaar.verifyBio.$post> },
      ) => parseResponse(client.v1.registration.aadhaar.verifyBio.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarVerifyMobileOTPKey() {
  return ['v1', '/v1/registration/aadhaar/verifyMobileOTP', 'POST'] as const
}

export function usePostV1RegistrationAadhaarVerifyMobileOTP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarVerifyMobileOTPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post> },
      ) => parseResponse(client.v1.registration.aadhaar.verifyMobileOTP.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationAadhaarVerifyOTPKey() {
  return ['v1', '/v1/registration/aadhaar/verifyOTP', 'POST'] as const
}

export function usePostV1RegistrationAadhaarVerifyOTP<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyOTP.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.aadhaar.verifyOTP.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationAadhaarVerifyOTPKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registration.aadhaar.verifyOTP.$post> },
      ) => parseResponse(client.v1.registration.aadhaar.verifyOTP.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationMobileCreateHealthIdKey() {
  return ['v1', '/v1/registration/mobile/createHealthId', 'POST'] as const
}

export function usePostV1RegistrationMobileCreateHealthId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.createHealthId.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.mobile.createHealthId.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationMobileCreateHealthIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.registration.mobile.createHealthId.$post> },
      ) => parseResponse(client.v1.registration.mobile.createHealthId.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationMobileGenerateOtpKey() {
  return ['v1', '/v1/registration/mobile/generateOtp', 'POST'] as const
}

export function usePostV1RegistrationMobileGenerateOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.generateOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.mobile.generateOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationMobileGenerateOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registration.mobile.generateOtp.$post> },
      ) => parseResponse(client.v1.registration.mobile.generateOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationMobileResendOtpKey() {
  return ['v1', '/v1/registration/mobile/resendOtp', 'POST'] as const
}

export function usePostV1RegistrationMobileResendOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.resendOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.mobile.resendOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationMobileResendOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registration.mobile.resendOtp.$post> },
      ) => parseResponse(client.v1.registration.mobile.resendOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrationMobileVerifyOtpKey() {
  return ['v1', '/v1/registration/mobile/verifyOtp', 'POST'] as const
}

export function usePostV1RegistrationMobileVerifyOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.verifyOtp.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registration.mobile.verifyOtp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrationMobileVerifyOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registration.mobile.verifyOtp.$post> },
      ) => parseResponse(client.v1.registration.mobile.verifyOtp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SearchExistsByHealthIdKey() {
  return ['v1', '/v1/search/existsByHealthId', 'POST'] as const
}

export function usePostV1SearchExistsByHealthId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.existsByHealthId.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.search.existsByHealthId.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SearchExistsByHealthIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.search.existsByHealthId.$post> },
      ) => parseResponse(client.v1.search.existsByHealthId.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SearchSearchByHealthIdKey() {
  return ['v1', '/v1/search/searchByHealthId', 'POST'] as const
}

export function usePostV1SearchSearchByHealthId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.searchByHealthId.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.search.searchByHealthId.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SearchSearchByHealthIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.search.searchByHealthId.$post> },
      ) => parseResponse(client.v1.search.searchByHealthId.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SearchSearchByMobileKey() {
  return ['v1', '/v1/search/searchByMobile', 'POST'] as const
}

export function usePostV1SearchSearchByMobile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.searchByMobile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.search.searchByMobile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SearchSearchByMobileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.search.searchByMobile.$post> },
      ) => parseResponse(client.v1.search.searchByMobile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
