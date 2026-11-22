import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIdealKey() {
  return ['ideal'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getPostIdealProfileAuthLinkKey() {
  return ['ideal', '/ideal/profile/auth-link', 'POST'] as const
}

export function usePostIdealProfileAuthLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ideal.profile)['auth-link']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ideal.profile)['auth-link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdealProfileAuthLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ideal.profile)['auth-link']['$post']> },
      ) => parseResponse(client.ideal.profile['auth-link'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdealProfileAuthenticateKey() {
  return ['ideal', '/ideal/profile/authenticate', 'POST'] as const
}

export function usePostIdealProfileAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ideal.profile.authenticate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ideal.profile.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdealProfileAuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ideal.profile.authenticate.$post> },
      ) => parseResponse(client.ideal.profile.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdealProfileRegisterKey() {
  return ['ideal', '/ideal/profile/register', 'POST'] as const
}

export function usePostIdealProfileRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ideal.profile.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ideal.profile.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdealProfileRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ideal.profile.register.$post> },
      ) => parseResponse(client.ideal.profile.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsCancelKey() {
  return ['payments', '/payments/cancel', 'POST'] as const
}

export function usePostPaymentsCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payments.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payments.cancel.$post> }) =>
        parseResponse(client.payments.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsConfirmKey() {
  return ['payments', '/payments/confirm', 'POST'] as const
}

export function usePostPaymentsConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.confirm.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payments.confirm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payments.confirm.$post> }) =>
        parseResponse(client.payments.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsDetailsKey() {
  return ['payments', '/payments/details', 'POST'] as const
}

export function usePostPaymentsDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.details.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payments.details.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payments.details.$post> }) =>
        parseResponse(client.payments.details.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
