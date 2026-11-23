import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIdealKey() {
  return ['ideal'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getPostIdealProfileAuthLinkMutationKey() {
  return ['ideal', '/ideal/profile/auth-link', 'POST'] as const
}

export function getPostIdealProfileAuthLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ideal.profile)['auth-link']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ideal.profile)['auth-link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdealProfileAuthLinkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ideal.profile)['auth-link']['$post']>) {
      return parseResponse(client.ideal.profile['auth-link'].$post(args, options))
    },
  })
}

export function createPostIdealProfileAuthLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ideal.profile)['auth-link']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ideal.profile)['auth-link']['$post']>,
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
    const mutationDefaults = getPostIdealProfileAuthLinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdealProfileAuthenticateMutationKey() {
  return ['ideal', '/ideal/profile/authenticate', 'POST'] as const
}

export function getPostIdealProfileAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ideal.profile.authenticate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ideal.profile.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdealProfileAuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ideal.profile.authenticate.$post>) {
      return parseResponse(client.ideal.profile.authenticate.$post(args, options))
    },
  })
}

export function createPostIdealProfileAuthenticate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ideal.profile.authenticate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ideal.profile.authenticate.$post>,
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
    const mutationDefaults = getPostIdealProfileAuthenticateMutationOptions<
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

export function getPostIdealProfileRegisterMutationKey() {
  return ['ideal', '/ideal/profile/register', 'POST'] as const
}

export function getPostIdealProfileRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ideal.profile.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ideal.profile.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdealProfileRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ideal.profile.register.$post>) {
      return parseResponse(client.ideal.profile.register.$post(args, options))
    },
  })
}

export function createPostIdealProfileRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ideal.profile.register.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ideal.profile.register.$post>,
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
    const mutationDefaults = getPostIdealProfileRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentsCancelMutationKey() {
  return ['payments', '/payments/cancel', 'POST'] as const
}

export function getPostPaymentsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payments.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.cancel.$post>) {
      return parseResponse(client.payments.cancel.$post(args, options))
    },
  })
}

export function createPostPaymentsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.payments.cancel.$post>,
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
    const mutationDefaults = getPostPaymentsCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentsConfirmMutationKey() {
  return ['payments', '/payments/confirm', 'POST'] as const
}

export function getPostPaymentsConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.confirm.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payments.confirm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsConfirmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.confirm.$post>) {
      return parseResponse(client.payments.confirm.$post(args, options))
    },
  })
}

export function createPostPaymentsConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.confirm.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payments.confirm.$post>,
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
    const mutationDefaults = getPostPaymentsConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentsDetailsMutationKey() {
  return ['payments', '/payments/details', 'POST'] as const
}

export function getPostPaymentsDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.details.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payments.details.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.details.$post>) {
      return parseResponse(client.payments.details.$post(args, options))
    },
  })
}

export function createPostPaymentsDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.details.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payments.details.$post>,
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
    const mutationDefaults = getPostPaymentsDetailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
