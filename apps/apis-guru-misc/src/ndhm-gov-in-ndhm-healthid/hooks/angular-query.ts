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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AccountAadhaarGenerateOTPMutationKey() {
  return ['v1', '/v1/account/aadhaar/generateOTP', 'POST'] as const
}

export function getPostV1AccountAadhaarGenerateOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.aadhaar.generateOTP.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.account.aadhaar.generateOTP.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountAadhaarGenerateOTPMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.account.aadhaar.generateOTP.$post>) {
      return parseResponse(client.v1.account.aadhaar.generateOTP.$post(args, options))
    },
  })
}

export function injectPostV1AccountAadhaarGenerateOTP<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.account.aadhaar.generateOTP.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account.aadhaar.generateOTP.$post>,
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
    const mutationDefaults = getPostV1AccountAadhaarGenerateOTPMutationOptions<
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

export function getPostV1AccountAadhaarVerifyOTPMutationKey() {
  return ['v1', '/v1/account/aadhaar/verifyOTP', 'POST'] as const
}

export function getPostV1AccountAadhaarVerifyOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.aadhaar.verifyOTP.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.account.aadhaar.verifyOTP.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountAadhaarVerifyOTPMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.account.aadhaar.verifyOTP.$post>) {
      return parseResponse(client.v1.account.aadhaar.verifyOTP.$post(args, options))
    },
  })
}

export function injectPostV1AccountAadhaarVerifyOTP<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.account.aadhaar.verifyOTP.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account.aadhaar.verifyOTP.$post>,
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
    const mutationDefaults = getPostV1AccountAadhaarVerifyOTPMutationOptions<
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

export function getV1AccountBenefitsQueryKey(
  args: InferRequestType<typeof client.v1.account.benefits.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/benefits', keyArgs] as const
}

export function getV1AccountBenefitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.account.benefits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountBenefitsQueryKey>
  >({
    queryKey: getV1AccountBenefitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.benefits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountBenefits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.benefits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.benefits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountBenefitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountBenefitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1AccountChangePasswdByAadhaarMutationKey() {
  return ['v1', '/v1/account/change/passwd/byAadhaar', 'POST'] as const
}

export function getPostV1AccountChangePasswdByAadhaarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.change.passwd.byAadhaar.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.account.change.passwd.byAadhaar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountChangePasswdByAadhaarMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.account.change.passwd.byAadhaar.$post>,
    ) {
      return parseResponse(client.v1.account.change.passwd.byAadhaar.$post(args, options))
    },
  })
}

export function injectPostV1AccountChangePasswdByAadhaar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.account.change.passwd.byAadhaar.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account.change.passwd.byAadhaar.$post>,
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
    const mutationDefaults = getPostV1AccountChangePasswdByAadhaarMutationOptions<
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

export function getPostV1AccountChangePasswdByMobileMutationKey() {
  return ['v1', '/v1/account/change/passwd/byMobile', 'POST'] as const
}

export function getPostV1AccountChangePasswdByMobileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.change.passwd.byMobile.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.account.change.passwd.byMobile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountChangePasswdByMobileMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.account.change.passwd.byMobile.$post>,
    ) {
      return parseResponse(client.v1.account.change.passwd.byMobile.$post(args, options))
    },
  })
}

export function injectPostV1AccountChangePasswdByMobile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.account.change.passwd.byMobile.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account.change.passwd.byMobile.$post>,
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
    const mutationDefaults = getPostV1AccountChangePasswdByMobileMutationOptions<
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

export function getV1AccountChangePasswdGenerateAadhaarOTPQueryKey(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/change/passwd/generateAadhaarOTP', keyArgs] as const
}

export function getV1AccountChangePasswdGenerateAadhaarOTPQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountChangePasswdGenerateAadhaarOTPQueryKey>
  >({
    queryKey: getV1AccountChangePasswdGenerateAadhaarOTPQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.change.passwd.generateAadhaarOTP.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountChangePasswdGenerateAadhaarOTP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountChangePasswdGenerateAadhaarOTPQueryKey>
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
      ...getV1AccountChangePasswdGenerateAadhaarOTPQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AccountChangePasswdGenerateMobileOTPQueryKey(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/change/passwd/generateMobileOTP', keyArgs] as const
}

export function getV1AccountChangePasswdGenerateMobileOTPQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountChangePasswdGenerateMobileOTPQueryKey>
  >({
    queryKey: getV1AccountChangePasswdGenerateMobileOTPQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.change.passwd.generateMobileOTP.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AccountChangePasswdGenerateMobileOTP<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountChangePasswdGenerateMobileOTPQueryKey>
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
      ...getV1AccountChangePasswdGenerateMobileOTPQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1AccountChangePasswordMutationKey() {
  return ['v1', '/v1/account/change/password', 'POST'] as const
}

export function getPostV1AccountChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.change.password.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.account.change.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountChangePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.account.change.password.$post>) {
      return parseResponse(client.v1.account.change.password.$post(args, options))
    },
  })
}

export function injectPostV1AccountChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.account.change.password.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account.change.password.$post>,
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
    const mutationDefaults = getPostV1AccountChangePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountGetCardQueryKey(
  args: InferRequestType<typeof client.v1.account.getCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/getCard', keyArgs] as const
}

export function getV1AccountGetCardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.account.getCard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountGetCardQueryKey>
  >({
    queryKey: getV1AccountGetCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.getCard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountGetCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.getCard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getCard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountGetCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountGetCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AccountGetPngCardQueryKey(
  args: InferRequestType<typeof client.v1.account.getPngCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/getPngCard', keyArgs] as const
}

export function getV1AccountGetPngCardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.account.getPngCard.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountGetPngCardQueryKey>
  >({
    queryKey: getV1AccountGetPngCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.getPngCard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountGetPngCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.getPngCard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getPngCard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountGetPngCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountGetPngCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AccountGetSvgCardQueryKey(
  args: InferRequestType<typeof client.v1.account.getSvgCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/getSvgCard', keyArgs] as const
}

export function getV1AccountGetSvgCardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.account.getSvgCard.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountGetSvgCardQueryKey>
  >({
    queryKey: getV1AccountGetSvgCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.getSvgCard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountGetSvgCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.getSvgCard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.getSvgCard.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountGetSvgCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountGetSvgCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1AccountProfileQueryKey(
  args: InferRequestType<typeof client.v1.account.profile.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/profile', keyArgs] as const
}

export function getV1AccountProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.account.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountProfileQueryKey>
  >({
    queryKey: getV1AccountProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.profile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1AccountProfileMutationKey() {
  return ['v1', '/v1/account/profile', 'POST'] as const
}

export function getPostV1AccountProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.account.profile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.account.profile.$post>) {
      return parseResponse(client.v1.account.profile.$post(args, options))
    },
  })
}

export function injectPostV1AccountProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account.profile.$post>,
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
    const mutationDefaults = getPostV1AccountProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1AccountProfileMutationKey() {
  return ['v1', '/v1/account/profile', 'DELETE'] as const
}

export function getDeleteV1AccountProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.account.profile.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AccountProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.account.profile.$delete>) {
      return parseResponse(client.v1.account.profile.$delete(args, options))
    },
  })
}

export function injectDeleteV1AccountProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.profile.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.account.profile.$delete>,
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
    const mutationDefaults = getDeleteV1AccountProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AccountQrCodeQueryKey(
  args: InferRequestType<typeof client.v1.account.qrCode.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/account/qrCode', keyArgs] as const
}

export function getV1AccountQrCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.account.qrCode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountQrCodeQueryKey>
  >({
    queryKey: getV1AccountQrCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account.qrCode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AccountQrCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account.qrCode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.qrCode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountQrCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountQrCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1AccountTokenMutationKey() {
  return ['v1', '/v1/account/token', 'POST'] as const
}

export function getPostV1AccountTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.account.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.account.token.$post>) {
      return parseResponse(client.v1.account.token.$post(args, options))
    },
  })
}

export function injectPostV1AccountToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account.token.$post>,
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
    const mutationDefaults = getPostV1AccountTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AuthAuthPasswordMutationKey() {
  return ['v1', '/v1/auth/authPassword', 'POST'] as const
}

export function getPostV1AuthAuthPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authPassword.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.authPassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthAuthPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.authPassword.$post>) {
      return parseResponse(client.v1.auth.authPassword.$post(args, options))
    },
  })
}

export function injectPostV1AuthAuthPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authPassword.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.authPassword.$post>,
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
    const mutationDefaults = getPostV1AuthAuthPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AuthAuthWithMobileMutationKey() {
  return ['v1', '/v1/auth/authWithMobile', 'POST'] as const
}

export function getPostV1AuthAuthWithMobileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authWithMobile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.authWithMobile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthAuthWithMobileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.authWithMobile.$post>) {
      return parseResponse(client.v1.auth.authWithMobile.$post(args, options))
    },
  })
}

export function injectPostV1AuthAuthWithMobile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authWithMobile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.authWithMobile.$post>,
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
    const mutationDefaults = getPostV1AuthAuthWithMobileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AuthAuthWithMobileTokenMutationKey() {
  return ['v1', '/v1/auth/authWithMobileToken', 'POST'] as const
}

export function getPostV1AuthAuthWithMobileTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.authWithMobileToken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.authWithMobileToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthAuthWithMobileTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.authWithMobileToken.$post>) {
      return parseResponse(client.v1.auth.authWithMobileToken.$post(args, options))
    },
  })
}

export function injectPostV1AuthAuthWithMobileToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.auth.authWithMobileToken.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.authWithMobileToken.$post>,
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
    const mutationDefaults = getPostV1AuthAuthWithMobileTokenMutationOptions<
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

export function getV1AuthCertQueryKey(args: InferRequestType<typeof client.v1.auth.cert.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/auth/cert', keyArgs] as const
}

export function getV1AuthCertQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.auth.cert.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AuthCertQueryKey>
  >({
    queryKey: getV1AuthCertQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.auth.cert.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AuthCert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.auth.cert.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.cert.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AuthCertQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AuthCertQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1AuthConfirmWithAadhaarBioMutationKey() {
  return ['v1', '/v1/auth/confirmWithAadhaarBio', 'POST'] as const
}

export function getPostV1AuthConfirmWithAadhaarBioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithAadhaarBio.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.confirmWithAadhaarBio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthConfirmWithAadhaarBioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.confirmWithAadhaarBio.$post>) {
      return parseResponse(client.v1.auth.confirmWithAadhaarBio.$post(args, options))
    },
  })
}

export function injectPostV1AuthConfirmWithAadhaarBio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.auth.confirmWithAadhaarBio.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.confirmWithAadhaarBio.$post>,
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
    const mutationDefaults = getPostV1AuthConfirmWithAadhaarBioMutationOptions<
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

export function getPostV1AuthConfirmWithAadhaarOtpMutationKey() {
  return ['v1', '/v1/auth/confirmWithAadhaarOtp', 'POST'] as const
}

export function getPostV1AuthConfirmWithAadhaarOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthConfirmWithAadhaarOtpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>) {
      return parseResponse(client.v1.auth.confirmWithAadhaarOtp.$post(args, options))
    },
  })
}

export function injectPostV1AuthConfirmWithAadhaarOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>,
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
    const mutationDefaults = getPostV1AuthConfirmWithAadhaarOtpMutationOptions<
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

export function getPostV1AuthConfirmWithDemographicsMutationKey() {
  return ['v1', '/v1/auth/confirmWithDemographics', 'POST'] as const
}

export function getPostV1AuthConfirmWithDemographicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.auth.confirmWithDemographics.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.confirmWithDemographics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthConfirmWithDemographicsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.confirmWithDemographics.$post>) {
      return parseResponse(client.v1.auth.confirmWithDemographics.$post(args, options))
    },
  })
}

export function injectPostV1AuthConfirmWithDemographics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.auth.confirmWithDemographics.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.confirmWithDemographics.$post>,
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
    const mutationDefaults = getPostV1AuthConfirmWithDemographicsMutationOptions<
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

export function getPostV1AuthConfirmWithMobileOTPMutationKey() {
  return ['v1', '/v1/auth/confirmWithMobileOTP', 'POST'] as const
}

export function getPostV1AuthConfirmWithMobileOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithMobileOTP.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.confirmWithMobileOTP.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthConfirmWithMobileOTPMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.confirmWithMobileOTP.$post>) {
      return parseResponse(client.v1.auth.confirmWithMobileOTP.$post(args, options))
    },
  })
}

export function injectPostV1AuthConfirmWithMobileOTP<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.auth.confirmWithMobileOTP.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.confirmWithMobileOTP.$post>,
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
    const mutationDefaults = getPostV1AuthConfirmWithMobileOTPMutationOptions<
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

export function getPostV1AuthConfirmWithPasswordMutationKey() {
  return ['v1', '/v1/auth/confirmWithPassword', 'POST'] as const
}

export function getPostV1AuthConfirmWithPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.confirmWithPassword.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.confirmWithPassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthConfirmWithPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.confirmWithPassword.$post>) {
      return parseResponse(client.v1.auth.confirmWithPassword.$post(args, options))
    },
  })
}

export function injectPostV1AuthConfirmWithPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.auth.confirmWithPassword.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.confirmWithPassword.$post>,
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
    const mutationDefaults = getPostV1AuthConfirmWithPasswordMutationOptions<
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

export function getPostV1AuthInitMutationKey() {
  return ['v1', '/v1/auth/init', 'POST'] as const
}

export function getPostV1AuthInitMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.init.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.auth.init.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthInitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.init.$post>) {
      return parseResponse(client.v1.auth.init.$post(args, options))
    },
  })
}

export function injectPostV1AuthInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.init.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.auth.init.$post>,
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
    const mutationDefaults = getPostV1AuthInitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AuthResendAuthOTPMutationKey() {
  return ['v1', '/v1/auth/resendAuthOTP', 'POST'] as const
}

export function getPostV1AuthResendAuthOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.resendAuthOTP.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.auth.resendAuthOTP.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthResendAuthOTPMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.auth.resendAuthOTP.$post>) {
      return parseResponse(client.v1.auth.resendAuthOTP.$post(args, options))
    },
  })
}

export function injectPostV1AuthResendAuthOTP<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth.resendAuthOTP.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.auth.resendAuthOTP.$post>,
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
    const mutationDefaults = getPostV1AuthResendAuthOTPMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ForgotHealthIdAadhaarMutationKey() {
  return ['v1', '/v1/forgot/healthId/aadhaar', 'POST'] as const
}

export function getPostV1ForgotHealthIdAadhaarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.forgot.healthId.aadhaar.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.forgot.healthId.aadhaar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ForgotHealthIdAadhaarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.forgot.healthId.aadhaar.$post>) {
      return parseResponse(client.v1.forgot.healthId.aadhaar.$post(args, options))
    },
  })
}

export function injectPostV1ForgotHealthIdAadhaar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.forgot.healthId.aadhaar.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.forgot.healthId.aadhaar.$post>,
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
    const mutationDefaults = getPostV1ForgotHealthIdAadhaarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ForgotHealthIdAadhaarGenerateOtpMutationKey() {
  return ['v1', '/v1/forgot/healthId/aadhaar/generateOtp', 'POST'] as const
}

export function getPostV1ForgotHealthIdAadhaarGenerateOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ForgotHealthIdAadhaarGenerateOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>,
    ) {
      return parseResponse(client.v1.forgot.healthId.aadhaar.generateOtp.$post(args, options))
    },
  })
}

export function injectPostV1ForgotHealthIdAadhaarGenerateOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>,
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
    const mutationDefaults = getPostV1ForgotHealthIdAadhaarGenerateOtpMutationOptions<
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

export function getPostV1ForgotHealthIdMobileMutationKey() {
  return ['v1', '/v1/forgot/healthId/mobile', 'POST'] as const
}

export function getPostV1ForgotHealthIdMobileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.forgot.healthId.mobile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.forgot.healthId.mobile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ForgotHealthIdMobileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.forgot.healthId.mobile.$post>) {
      return parseResponse(client.v1.forgot.healthId.mobile.$post(args, options))
    },
  })
}

export function injectPostV1ForgotHealthIdMobile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.forgot.healthId.mobile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.forgot.healthId.mobile.$post>,
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
    const mutationDefaults = getPostV1ForgotHealthIdMobileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ForgotHealthIdMobileGenerateOtpMutationKey() {
  return ['v1', '/v1/forgot/healthId/mobile/generateOtp', 'POST'] as const
}

export function getPostV1ForgotHealthIdMobileGenerateOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ForgotHealthIdMobileGenerateOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>,
    ) {
      return parseResponse(client.v1.forgot.healthId.mobile.generateOtp.$post(args, options))
    },
  })
}

export function injectPostV1ForgotHealthIdMobileGenerateOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>,
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
    const mutationDefaults = getPostV1ForgotHealthIdMobileGenerateOtpMutationOptions<
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

export function getV1HaLgdDistrictsQueryKey(
  args: InferRequestType<typeof client.v1.ha.lgd.districts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ha/lgd/districts', keyArgs] as const
}

export function getV1HaLgdDistrictsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.ha.lgd.districts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1HaLgdDistrictsQueryKey>
  >({
    queryKey: getV1HaLgdDistrictsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ha.lgd.districts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1HaLgdDistricts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.ha.lgd.districts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.districts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1HaLgdDistrictsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HaLgdDistrictsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1HaLgdStatesQueryKey(
  args: InferRequestType<typeof client.v1.ha.lgd.states.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ha/lgd/states', keyArgs] as const
}

export function getV1HaLgdStatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.ha.lgd.states.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1HaLgdStatesQueryKey>
  >({
    queryKey: getV1HaLgdStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ha.lgd.states.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1HaLgdStates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.ha.lgd.states.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.lgd.states.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1HaLgdStatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HaLgdStatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1HaTagsQueryKey(args: InferRequestType<typeof client.v1.ha.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/ha/tags', keyArgs] as const
}

export function getV1HaTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.ha.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HaTagsQueryKey>
  >({
    queryKey: getV1HaTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ha.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1HaTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.ha.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1HaTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HaTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1HaTagsMutationKey() {
  return ['v1', '/v1/ha/tags', 'POST'] as const
}

export function getPostV1HaTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.ha.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HaTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ha.tags.$post>) {
      return parseResponse(client.v1.ha.tags.$post(args, options))
    },
  })
}

export function injectPostV1HaTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.ha.tags.$post>,
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
    const mutationDefaults = getPostV1HaTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1HaTagsMutationKey() {
  return ['v1', '/v1/ha/tags', 'DELETE'] as const
}

export function getDeleteV1HaTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.ha.tags.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1HaTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.ha.tags.$delete>) {
      return parseResponse(client.v1.ha.tags.$delete(args, options))
    },
  })
}

export function injectDeleteV1HaTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ha.tags.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.ha.tags.$delete>,
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
    const mutationDefaults = getDeleteV1HaTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1HealthFacilityAuthenticateMutationKey() {
  return ['v1', '/v1/health/facility/authenticate', 'POST'] as const
}

export function getPostV1HealthFacilityAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.authenticate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.health.facility.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HealthFacilityAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.health.facility.authenticate.$post>) {
      return parseResponse(client.v1.health.facility.authenticate.$post(args, options))
    },
  })
}

export function injectPostV1HealthFacilityAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.health.facility.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.health.facility.authenticate.$post>,
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
    const mutationDefaults = getPostV1HealthFacilityAuthenticateMutationOptions<
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

export function getPostV1HealthFacilityChangePasswordMutationKey() {
  return ['v1', '/v1/health/facility/change/password', 'POST'] as const
}

export function getPostV1HealthFacilityChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.change.password.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.health.facility.change.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HealthFacilityChangePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.health.facility.change.password.$post>,
    ) {
      return parseResponse(client.v1.health.facility.change.password.$post(args, options))
    },
  })
}

export function injectPostV1HealthFacilityChangePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.health.facility.change.password.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.health.facility.change.password.$post>,
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
    const mutationDefaults = getPostV1HealthFacilityChangePasswordMutationOptions<
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

export function getPostV1HealthFacilityCreateHealthIdWithPreVerifiedMutationKey() {
  return ['v1', '/v1/health/facility/createHealthIdWithPreVerified', 'POST'] as const
}

export function getPostV1HealthFacilityCreateHealthIdWithPreVerifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HealthFacilityCreateHealthIdWithPreVerifiedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>,
    ) {
      return parseResponse(
        client.v1.health.facility.createHealthIdWithPreVerified.$post(args, options),
      )
    },
  })
}

export function injectPostV1HealthFacilityCreateHealthIdWithPreVerified<
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
                ReturnType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>,
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
    const mutationDefaults = getPostV1HealthFacilityCreateHealthIdWithPreVerifiedMutationOptions<
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

export function getPostV1HealthFacilityGeneratePasswordMutationKey() {
  return ['v1', '/v1/health/facility/generate/password', 'POST'] as const
}

export function getPostV1HealthFacilityGeneratePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.generate.password.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.health.facility.generate.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HealthFacilityGeneratePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.health.facility.generate.password.$post>,
    ) {
      return parseResponse(client.v1.health.facility.generate.password.$post(args, options))
    },
  })
}

export function injectPostV1HealthFacilityGeneratePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.health.facility.generate.password.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.health.facility.generate.password.$post>,
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
    const mutationDefaults = getPostV1HealthFacilityGeneratePasswordMutationOptions<
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

export function getPostV1HealthFacilityGenerateOtpMutationKey() {
  return ['v1', '/v1/health/facility/generateOtp', 'POST'] as const
}

export function getPostV1HealthFacilityGenerateOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.generateOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.health.facility.generateOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HealthFacilityGenerateOtpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.health.facility.generateOtp.$post>) {
      return parseResponse(client.v1.health.facility.generateOtp.$post(args, options))
    },
  })
}

export function injectPostV1HealthFacilityGenerateOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.health.facility.generateOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.health.facility.generateOtp.$post>,
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
    const mutationDefaults = getPostV1HealthFacilityGenerateOtpMutationOptions<
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

export function getV1HealthFacilityGetSvgCardQueryKey(
  args: InferRequestType<typeof client.v1.health.facility.getSvgCard.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/health/facility/getSvgCard', keyArgs] as const
}

export function getV1HealthFacilityGetSvgCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.health.facility.getSvgCard.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HealthFacilityGetSvgCardQueryKey>
  >({
    queryKey: getV1HealthFacilityGetSvgCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.health.facility.getSvgCard.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1HealthFacilityGetSvgCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.health.facility.getSvgCard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.health.facility.getSvgCard.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1HealthFacilityGetSvgCardQueryKey>
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
      ...getV1HealthFacilityGetSvgCardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1HealthFacilityResetPasswordMutationKey() {
  return ['v1', '/v1/health/facility/reset/password', 'POST'] as const
}

export function getPostV1HealthFacilityResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.health.facility.reset.password.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.health.facility.reset.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HealthFacilityResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.health.facility.reset.password.$post>,
    ) {
      return parseResponse(client.v1.health.facility.reset.password.$post(args, options))
    },
  })
}

export function injectPostV1HealthFacilityResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.health.facility.reset.password.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.health.facility.reset.password.$post>,
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
    const mutationDefaults = getPostV1HealthFacilityResetPasswordMutationOptions<
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

export function getPostV1HidBenefitAadhaarGenerateOtpMutationKey() {
  return ['v1', '/v1/hid/benefit/aadhaar/generateOtp', 'POST'] as const
}

export function getPostV1HidBenefitAadhaarGenerateOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitAadhaarGenerateOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>,
    ) {
      return parseResponse(client.v1.hid.benefit.aadhaar.generateOtp.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitAadhaarGenerateOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>,
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
    const mutationDefaults = getPostV1HidBenefitAadhaarGenerateOtpMutationOptions<
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

export function getPostV1HidBenefitAadhaarVerifyAadharOtpMutationKey() {
  return ['v1', '/v1/hid/benefit/aadhaar/verifyAadharOtp', 'POST'] as const
}

export function getPostV1HidBenefitAadhaarVerifyAadharOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitAadhaarVerifyAadharOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>,
    ) {
      return parseResponse(client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitAadhaarVerifyAadharOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>,
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
    const mutationDefaults = getPostV1HidBenefitAadhaarVerifyAadharOtpMutationOptions<
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

export function getPostV1HidBenefitAadhaarVerifyBioMutationKey() {
  return ['v1', '/v1/hid/benefit/aadhaar/verifyBio', 'POST'] as const
}

export function getPostV1HidBenefitAadhaarVerifyBioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitAadhaarVerifyBioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>) {
      return parseResponse(client.v1.hid.benefit.aadhaar.verifyBio.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitAadhaarVerifyBio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>,
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
    const mutationDefaults = getPostV1HidBenefitAadhaarVerifyBioMutationOptions<
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

export function getPostV1HidBenefitCreateHealthIdDemoAuthMutationKey() {
  return ['v1', '/v1/hid/benefit/createHealthId/demo/auth', 'POST'] as const
}

export function getPostV1HidBenefitCreateHealthIdDemoAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitCreateHealthIdDemoAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>,
    ) {
      return parseResponse(client.v1.hid.benefit.createHealthId.demo.auth.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitCreateHealthIdDemoAuth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>,
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
    const mutationDefaults = getPostV1HidBenefitCreateHealthIdDemoAuthMutationOptions<
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

export function getPostV1HidBenefitDelinkMutationKey() {
  return ['v1', '/v1/hid/benefit/delink', 'POST'] as const
}

export function getPostV1HidBenefitDelinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.delink.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.delink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitDelinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.delink.$post>) {
      return parseResponse(client.v1.hid.benefit.delink.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitDelink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.delink.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.delink.$post>,
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
    const mutationDefaults = getPostV1HidBenefitDelinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1HidBenefitLinkMutationKey() {
  return ['v1', '/v1/hid/benefit/link', 'POST'] as const
}

export function getPostV1HidBenefitLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.link.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.link.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.link.$post>) {
      return parseResponse(client.v1.hid.benefit.link.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.link.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.link.$post>,
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
    const mutationDefaults = getPostV1HidBenefitLinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1HidBenefitMobileCreateHealthIdMutationKey() {
  return ['v1', '/v1/hid/benefit/mobile/createHealthId', 'POST'] as const
}

export function getPostV1HidBenefitMobileCreateHealthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitMobileCreateHealthIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>,
    ) {
      return parseResponse(client.v1.hid.benefit.mobile.createHealthId.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitMobileCreateHealthId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>,
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
    const mutationDefaults = getPostV1HidBenefitMobileCreateHealthIdMutationOptions<
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

export function getPostV1HidBenefitMobileGenerateOtpMutationKey() {
  return ['v1', '/v1/hid/benefit/mobile/generateOtp', 'POST'] as const
}

export function getPostV1HidBenefitMobileGenerateOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitMobileGenerateOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>,
    ) {
      return parseResponse(client.v1.hid.benefit.mobile.generateOtp.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitMobileGenerateOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>,
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
    const mutationDefaults = getPostV1HidBenefitMobileGenerateOtpMutationOptions<
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

export function getPostV1HidBenefitNotifyBenefitMutationKey() {
  return ['v1', '/v1/hid/benefit/notify/benefit', 'POST'] as const
}

export function getPostV1HidBenefitNotifyBenefitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.notify.benefit.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.notify.benefit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitNotifyBenefitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.notify.benefit.$post>) {
      return parseResponse(client.v1.hid.benefit.notify.benefit.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitNotifyBenefit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.notify.benefit.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.notify.benefit.$post>,
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
    const mutationDefaults = getPostV1HidBenefitNotifyBenefitMutationOptions<
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

export function getPostV1HidBenefitSearchAadhaarMutationKey() {
  return ['v1', '/v1/hid/benefit/search/aadhaar', 'POST'] as const
}

export function getPostV1HidBenefitSearchAadhaarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.search.aadhaar.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.search.aadhaar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitSearchAadhaarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.search.aadhaar.$post>) {
      return parseResponse(client.v1.hid.benefit.search.aadhaar.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitSearchAadhaar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.search.aadhaar.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.search.aadhaar.$post>,
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
    const mutationDefaults = getPostV1HidBenefitSearchAadhaarMutationOptions<
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

export function getPostV1HidBenefitSearchHealthIdNumberMutationKey() {
  return ['v1', '/v1/hid/benefit/search/healthIdNumber', 'POST'] as const
}

export function getPostV1HidBenefitSearchHealthIdNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitSearchHealthIdNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>,
    ) {
      return parseResponse(client.v1.hid.benefit.search.healthIdNumber.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitSearchHealthIdNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>,
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
    const mutationDefaults = getPostV1HidBenefitSearchHealthIdNumberMutationOptions<
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

export function getPostV1HidBenefitUpdateMobileMutationKey() {
  return ['v1', '/v1/hid/benefit/update/mobile', 'POST'] as const
}

export function getPostV1HidBenefitUpdateMobileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.update.mobile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.update.mobile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitUpdateMobileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.update.mobile.$post>) {
      return parseResponse(client.v1.hid.benefit.update.mobile.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitUpdateMobile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.update.mobile.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.update.mobile.$post>,
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
    const mutationDefaults = getPostV1HidBenefitUpdateMobileMutationOptions<
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

export function getPostV1HidBenefitUpdateProfileMutationKey() {
  return ['v1', '/v1/hid/benefit/update/profile', 'POST'] as const
}

export function getPostV1HidBenefitUpdateProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.update.profile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.update.profile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitUpdateProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.update.profile.$post>) {
      return parseResponse(client.v1.hid.benefit.update.profile.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitUpdateProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.update.profile.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.update.profile.$post>,
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
    const mutationDefaults = getPostV1HidBenefitUpdateProfileMutationOptions<
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

export function getPostV1HidBenefitUpdateStatusMutationKey() {
  return ['v1', '/v1/hid/benefit/update/status', 'POST'] as const
}

export function getPostV1HidBenefitUpdateStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.hid.benefit.update.status.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.hid.benefit.update.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HidBenefitUpdateStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.hid.benefit.update.status.$post>) {
      return parseResponse(client.v1.hid.benefit.update.status.$post(args, options))
    },
  })
}

export function injectPostV1HidBenefitUpdateStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.hid.benefit.update.status.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.hid.benefit.update.status.$post>,
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
    const mutationDefaults = getPostV1HidBenefitUpdateStatusMutationOptions<
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

export function getPostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpMutationKey() {
  return ['v1', '/v1/registration/aadhaar/createHealthIdWithAadhaarOtp', 'POST'] as const
}

export function getPostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post
      >,
    ) {
      return parseResponse(
        client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post(args, options),
      )
    },
  })
}

export function injectPostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtp<
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
                ReturnType<typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post>,
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
    const mutationDefaults =
      getPostV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpMutationOptions<
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

export function getPostV1RegistrationAadhaarCreateHealthIdWithPreVerifiedMutationKey() {
  return ['v1', '/v1/registration/aadhaar/createHealthIdWithPreVerified', 'POST'] as const
}

export function getPostV1RegistrationAadhaarCreateHealthIdWithPreVerifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarCreateHealthIdWithPreVerifiedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post
      >,
    ) {
      return parseResponse(
        client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post(args, options),
      )
    },
  })
}

export function injectPostV1RegistrationAadhaarCreateHealthIdWithPreVerified<
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
                ReturnType<
                  typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post>,
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
    const mutationDefaults =
      getPostV1RegistrationAadhaarCreateHealthIdWithPreVerifiedMutationOptions<
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

export function getPostV1RegistrationAadhaarGenerateMobileOTPMutationKey() {
  return ['v1', '/v1/registration/aadhaar/generateMobileOTP', 'POST'] as const
}

export function getPostV1RegistrationAadhaarGenerateMobileOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarGenerateMobileOTPMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>,
    ) {
      return parseResponse(client.v1.registration.aadhaar.generateMobileOTP.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationAadhaarGenerateMobileOTP<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>,
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
    const mutationDefaults = getPostV1RegistrationAadhaarGenerateMobileOTPMutationOptions<
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

export function getPostV1RegistrationAadhaarGenerateOtpMutationKey() {
  return ['v1', '/v1/registration/aadhaar/generateOtp', 'POST'] as const
}

export function getPostV1RegistrationAadhaarGenerateOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.generateOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.aadhaar.generateOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarGenerateOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.aadhaar.generateOtp.$post>,
    ) {
      return parseResponse(client.v1.registration.aadhaar.generateOtp.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationAadhaarGenerateOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.aadhaar.generateOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.generateOtp.$post>,
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
    const mutationDefaults = getPostV1RegistrationAadhaarGenerateOtpMutationOptions<
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

export function getPostV1RegistrationAadhaarResendAadhaarOtpMutationKey() {
  return ['v1', '/v1/registration/aadhaar/resendAadhaarOtp', 'POST'] as const
}

export function getPostV1RegistrationAadhaarResendAadhaarOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarResendAadhaarOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>,
    ) {
      return parseResponse(client.v1.registration.aadhaar.resendAadhaarOtp.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationAadhaarResendAadhaarOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>,
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
    const mutationDefaults = getPostV1RegistrationAadhaarResendAadhaarOtpMutationOptions<
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

export function getPostV1RegistrationAadhaarSearchAadharMutationKey() {
  return ['v1', '/v1/registration/aadhaar/search/aadhar', 'POST'] as const
}

export function getPostV1RegistrationAadhaarSearchAadharMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.search.aadhar.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.aadhaar.search.aadhar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarSearchAadharMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.aadhaar.search.aadhar.$post>,
    ) {
      return parseResponse(client.v1.registration.aadhaar.search.aadhar.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationAadhaarSearchAadhar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.aadhaar.search.aadhar.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.search.aadhar.$post>,
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
    const mutationDefaults = getPostV1RegistrationAadhaarSearchAadharMutationOptions<
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

export function getPostV1RegistrationAadhaarVerifyBioMutationKey() {
  return ['v1', '/v1/registration/aadhaar/verifyBio', 'POST'] as const
}

export function getPostV1RegistrationAadhaarVerifyBioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyBio.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.aadhaar.verifyBio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarVerifyBioMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.aadhaar.verifyBio.$post>,
    ) {
      return parseResponse(client.v1.registration.aadhaar.verifyBio.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationAadhaarVerifyBio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyBio.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.verifyBio.$post>,
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
    const mutationDefaults = getPostV1RegistrationAadhaarVerifyBioMutationOptions<
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

export function getPostV1RegistrationAadhaarVerifyMobileOTPMutationKey() {
  return ['v1', '/v1/registration/aadhaar/verifyMobileOTP', 'POST'] as const
}

export function getPostV1RegistrationAadhaarVerifyMobileOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarVerifyMobileOTPMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>,
    ) {
      return parseResponse(client.v1.registration.aadhaar.verifyMobileOTP.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationAadhaarVerifyMobileOTP<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>,
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
    const mutationDefaults = getPostV1RegistrationAadhaarVerifyMobileOTPMutationOptions<
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

export function getPostV1RegistrationAadhaarVerifyOTPMutationKey() {
  return ['v1', '/v1/registration/aadhaar/verifyOTP', 'POST'] as const
}

export function getPostV1RegistrationAadhaarVerifyOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyOTP.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.aadhaar.verifyOTP.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationAadhaarVerifyOTPMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.aadhaar.verifyOTP.$post>,
    ) {
      return parseResponse(client.v1.registration.aadhaar.verifyOTP.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationAadhaarVerifyOTP<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.aadhaar.verifyOTP.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.aadhaar.verifyOTP.$post>,
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
    const mutationDefaults = getPostV1RegistrationAadhaarVerifyOTPMutationOptions<
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

export function getPostV1RegistrationMobileCreateHealthIdMutationKey() {
  return ['v1', '/v1/registration/mobile/createHealthId', 'POST'] as const
}

export function getPostV1RegistrationMobileCreateHealthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.createHealthId.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.mobile.createHealthId.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationMobileCreateHealthIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.mobile.createHealthId.$post>,
    ) {
      return parseResponse(client.v1.registration.mobile.createHealthId.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationMobileCreateHealthId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.mobile.createHealthId.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.mobile.createHealthId.$post>,
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
    const mutationDefaults = getPostV1RegistrationMobileCreateHealthIdMutationOptions<
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

export function getPostV1RegistrationMobileGenerateOtpMutationKey() {
  return ['v1', '/v1/registration/mobile/generateOtp', 'POST'] as const
}

export function getPostV1RegistrationMobileGenerateOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.generateOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.mobile.generateOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationMobileGenerateOtpMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.registration.mobile.generateOtp.$post>,
    ) {
      return parseResponse(client.v1.registration.mobile.generateOtp.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationMobileGenerateOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.mobile.generateOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.mobile.generateOtp.$post>,
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
    const mutationDefaults = getPostV1RegistrationMobileGenerateOtpMutationOptions<
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

export function getPostV1RegistrationMobileResendOtpMutationKey() {
  return ['v1', '/v1/registration/mobile/resendOtp', 'POST'] as const
}

export function getPostV1RegistrationMobileResendOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.resendOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.mobile.resendOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationMobileResendOtpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.registration.mobile.resendOtp.$post>) {
      return parseResponse(client.v1.registration.mobile.resendOtp.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationMobileResendOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.mobile.resendOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.mobile.resendOtp.$post>,
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
    const mutationDefaults = getPostV1RegistrationMobileResendOtpMutationOptions<
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

export function getPostV1RegistrationMobileVerifyOtpMutationKey() {
  return ['v1', '/v1/registration/mobile/verifyOtp', 'POST'] as const
}

export function getPostV1RegistrationMobileVerifyOtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registration.mobile.verifyOtp.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registration.mobile.verifyOtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationMobileVerifyOtpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.registration.mobile.verifyOtp.$post>) {
      return parseResponse(client.v1.registration.mobile.verifyOtp.$post(args, options))
    },
  })
}

export function injectPostV1RegistrationMobileVerifyOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.registration.mobile.verifyOtp.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registration.mobile.verifyOtp.$post>,
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
    const mutationDefaults = getPostV1RegistrationMobileVerifyOtpMutationOptions<
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

export function getPostV1SearchExistsByHealthIdMutationKey() {
  return ['v1', '/v1/search/existsByHealthId', 'POST'] as const
}

export function getPostV1SearchExistsByHealthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.existsByHealthId.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.search.existsByHealthId.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SearchExistsByHealthIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.search.existsByHealthId.$post>) {
      return parseResponse(client.v1.search.existsByHealthId.$post(args, options))
    },
  })
}

export function injectPostV1SearchExistsByHealthId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.search.existsByHealthId.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.search.existsByHealthId.$post>,
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
    const mutationDefaults = getPostV1SearchExistsByHealthIdMutationOptions<
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

export function getPostV1SearchSearchByHealthIdMutationKey() {
  return ['v1', '/v1/search/searchByHealthId', 'POST'] as const
}

export function getPostV1SearchSearchByHealthIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.searchByHealthId.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.search.searchByHealthId.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SearchSearchByHealthIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.search.searchByHealthId.$post>) {
      return parseResponse(client.v1.search.searchByHealthId.$post(args, options))
    },
  })
}

export function injectPostV1SearchSearchByHealthId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.search.searchByHealthId.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.search.searchByHealthId.$post>,
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
    const mutationDefaults = getPostV1SearchSearchByHealthIdMutationOptions<
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

export function getPostV1SearchSearchByMobileMutationKey() {
  return ['v1', '/v1/search/searchByMobile', 'POST'] as const
}

export function getPostV1SearchSearchByMobileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.searchByMobile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.search.searchByMobile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SearchSearchByMobileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.search.searchByMobile.$post>) {
      return parseResponse(client.v1.search.searchByMobile.$post(args, options))
    },
  })
}

export function injectPostV1SearchSearchByMobile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.search.searchByMobile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.search.searchByMobile.$post>,
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
    const mutationDefaults = getPostV1SearchSearchByMobileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
