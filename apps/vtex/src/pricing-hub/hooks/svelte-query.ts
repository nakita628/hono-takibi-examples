import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getPostApiPricingHubPricesMutationKey() {
  return ['api', '/api/pricing-hub/prices', 'POST'] as const
}

export function getPostApiPricingHubPricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['pricing-hub']['prices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['pricing-hub']['prices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPricingHubPricesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['pricing-hub']['prices']['$post']>,
    ) {
      return parseResponse(client.api['pricing-hub'].prices.$post(args, options))
    },
  })
}

export function createPostApiPricingHubPrices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['pricing-hub']['prices']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['pricing-hub']['prices']['$post']>,
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
    const mutationDefaults = getPostApiPricingHubPricesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutConfigMutationKey() {
  return ['config', '/config', 'PUT'] as const
}

export function getPutConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$put>>>>>,
    TError,
    InferRequestType<typeof client.config.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.$put>) {
      return parseResponse(client.config.$put(args, options))
    },
  })
}

export function createPutConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$put>>>>>,
        TError,
        InferRequestType<typeof client.config.$put>,
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
    const mutationDefaults = getPutConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
