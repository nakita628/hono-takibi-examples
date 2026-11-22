import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIngesterV1IngesterServiceKey() {
  return ['ingester.v1.IngesterService'] as const
}

export function getPostIngesterV1IngesterServiceBlockMetadataMutationKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/BlockMetadata',
    'POST',
  ] as const
}

export function getPostIngesterV1IngesterServiceBlockMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceBlockMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']
      >,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].BlockMetadata.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServiceBlockMetadata<
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
                ReturnType<(typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['BlockMetadata']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceBlockMetadataMutationOptions<
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

export function getPostIngesterV1IngesterServiceFlushMutationKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/Flush', 'POST'] as const
}

export function getPostIngesterV1IngesterServiceFlushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceFlushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].Flush.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServiceFlush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['Flush']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceFlushMutationOptions<
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

export function getPostIngesterV1IngesterServiceGetBlockStatsMutationKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/GetBlockStats',
    'POST',
  ] as const
}

export function getPostIngesterV1IngesterServiceGetBlockStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceGetBlockStatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']
      >,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].GetBlockStats.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServiceGetBlockStats<
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
                ReturnType<(typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['GetBlockStats']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceGetBlockStatsMutationOptions<
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

export function getPostIngesterV1IngesterServiceGetProfileStatsMutationKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/GetProfileStats',
    'POST',
  ] as const
}

export function getPostIngesterV1IngesterServiceGetProfileStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceGetProfileStatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']
      >,
    ) {
      return parseResponse(
        client['ingester.v1.IngesterService'].GetProfileStats.$post(args, options),
      )
    },
  })
}

export function createPostIngesterV1IngesterServiceGetProfileStats<
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
                  (typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['ingester.v1.IngesterService']['GetProfileStats']['$post']
        >,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceGetProfileStatsMutationOptions<
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

export function getPostIngesterV1IngesterServiceLabelNamesMutationKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/LabelNames', 'POST'] as const
}

export function getPostIngesterV1IngesterServiceLabelNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceLabelNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].LabelNames.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServiceLabelNames<
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
                ReturnType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelNames']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceLabelNamesMutationOptions<
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

export function getPostIngesterV1IngesterServiceLabelValuesMutationKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/LabelValues',
    'POST',
  ] as const
}

export function getPostIngesterV1IngesterServiceLabelValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceLabelValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']
      >,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].LabelValues.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServiceLabelValues<
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
                ReturnType<(typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['LabelValues']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceLabelValuesMutationOptions<
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

export function getPostIngesterV1IngesterServiceProfileTypesMutationKey() {
  return [
    'ingester.v1.IngesterService',
    '/ingester.v1.IngesterService/ProfileTypes',
    'POST',
  ] as const
}

export function getPostIngesterV1IngesterServiceProfileTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceProfileTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']
      >,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].ProfileTypes.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServiceProfileTypes<
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
                ReturnType<(typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['ProfileTypes']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceProfileTypesMutationOptions<
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

export function getPostIngesterV1IngesterServicePushMutationKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/Push', 'POST'] as const
}

export function getPostIngesterV1IngesterServicePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServicePushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].Push.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServicePush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['Push']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServicePushMutationOptions<
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

export function getPostIngesterV1IngesterServiceSeriesMutationKey() {
  return ['ingester.v1.IngesterService', '/ingester.v1.IngesterService/Series', 'POST'] as const
}

export function getPostIngesterV1IngesterServiceSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIngesterV1IngesterServiceSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>,
    ) {
      return parseResponse(client['ingester.v1.IngesterService'].Series.$post(args, options))
    },
  })
}

export function createPostIngesterV1IngesterServiceSeries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['ingester.v1.IngesterService']['Series']['$post']>,
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
    const mutationDefaults = getPostIngesterV1IngesterServiceSeriesMutationOptions<
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
