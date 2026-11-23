import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCapabilitiesV1FeatureFlagsServiceKey() {
  return ['capabilities.v1.FeatureFlagsService'] as const
}

export function getPostCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsMutationKey() {
  return [
    'capabilities.v1.FeatureFlagsService',
    '/capabilities.v1.FeatureFlagsService/GetFeatureFlags',
    'POST',
  ] as const
}

export function getPostCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
      >,
    ) {
      return parseResponse(
        client['capabilities.v1.FeatureFlagsService'].GetFeatureFlags.$post(args, options),
      )
    },
  })
}

export function createPostCapabilitiesV1FeatureFlagsServiceGetFeatureFlags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsMutationOptions<
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
