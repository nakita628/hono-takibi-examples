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

export function injectPostApiPricingHubPrices<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPricingHubPricesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutConfig<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
