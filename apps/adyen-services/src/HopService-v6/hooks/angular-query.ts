import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetOnboardingUrlKey() {
  return ['getOnboardingUrl'] as const
}

export function getGetPciQuestionnaireUrlKey() {
  return ['getPciQuestionnaireUrl'] as const
}

export function getPostGetOnboardingUrlMutationKey() {
  return ['getOnboardingUrl', '/getOnboardingUrl', 'POST'] as const
}

export function getPostGetOnboardingUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getOnboardingUrl.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getOnboardingUrl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetOnboardingUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getOnboardingUrl.$post>) {
      return parseResponse(client.getOnboardingUrl.$post(args, options))
    },
  })
}

export function injectPostGetOnboardingUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getOnboardingUrl.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getOnboardingUrl.$post>,
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
    const mutationDefaults = getPostGetOnboardingUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGetPciQuestionnaireUrlMutationKey() {
  return ['getPciQuestionnaireUrl', '/getPciQuestionnaireUrl', 'POST'] as const
}

export function getPostGetPciQuestionnaireUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getPciQuestionnaireUrl.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getPciQuestionnaireUrl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetPciQuestionnaireUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getPciQuestionnaireUrl.$post>) {
      return parseResponse(client.getPciQuestionnaireUrl.$post(args, options))
    },
  })
}

export function injectPostGetPciQuestionnaireUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getPciQuestionnaireUrl.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getPciQuestionnaireUrl.$post>,
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
    const mutationDefaults = getPostGetPciQuestionnaireUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
