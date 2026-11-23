import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssetsKey() {
  return ['assets'] as const
}

export function getFactorsKey() {
  return ['factors'] as const
}

export function getPortfolioKey() {
  return ['portfolio'] as const
}

export function getPostAssetsAnalysisAbsorptionRatioMutationKey() {
  return ['assets', '/assets/analysis/absorption-ratio', 'POST'] as const
}

export function getPostAssetsAnalysisAbsorptionRatioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.analysis)['absorption-ratio']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets.analysis)['absorption-ratio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsAnalysisAbsorptionRatioMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets.analysis)['absorption-ratio']['$post']>,
    ) {
      return parseResponse(client.assets.analysis['absorption-ratio'].$post(args, options))
    },
  })
}

export function createPostAssetsAnalysisAbsorptionRatio<
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
                Awaited<ReturnType<(typeof client.assets.analysis)['absorption-ratio']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets.analysis)['absorption-ratio']['$post']>,
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
    const mutationDefaults = getPostAssetsAnalysisAbsorptionRatioMutationOptions<
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

export function getPostAssetsAnalysisTurbulenceIndexMutationKey() {
  return ['assets', '/assets/analysis/turbulence-index', 'POST'] as const
}

export function getPostAssetsAnalysisTurbulenceIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.analysis)['turbulence-index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets.analysis)['turbulence-index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsAnalysisTurbulenceIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets.analysis)['turbulence-index']['$post']>,
    ) {
      return parseResponse(client.assets.analysis['turbulence-index'].$post(args, options))
    },
  })
}

export function createPostAssetsAnalysisTurbulenceIndex<
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
                Awaited<ReturnType<(typeof client.assets.analysis)['turbulence-index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets.analysis)['turbulence-index']['$post']>,
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
    const mutationDefaults = getPostAssetsAnalysisTurbulenceIndexMutationOptions<
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

export function getPostAssetsCorrelationMatrixMutationKey() {
  return ['assets', '/assets/correlation/matrix', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.correlation.matrix.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.correlation.matrix.$post>) {
      return parseResponse(client.assets.correlation.matrix.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.assets.correlation.matrix.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsCorrelationMatrixBoundsMutationKey() {
  return ['assets', '/assets/correlation/matrix/bounds', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixBoundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.bounds.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.bounds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixBoundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.correlation.matrix.bounds.$post>) {
      return parseResponse(client.assets.correlation.matrix.bounds.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixBounds<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.bounds.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.bounds.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixBoundsMutationOptions<
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

export function getPostAssetsCorrelationMatrixDenoisedMutationKey() {
  return ['assets', '/assets/correlation/matrix/denoised', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixDenoisedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.denoised.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.denoised.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixDenoisedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.correlation.matrix.denoised.$post>,
    ) {
      return parseResponse(client.assets.correlation.matrix.denoised.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixDenoised<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.denoised.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.denoised.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixDenoisedMutationOptions<
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

export function getPostAssetsCorrelationMatrixDistanceMutationKey() {
  return ['assets', '/assets/correlation/matrix/distance', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixDistanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.distance.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.distance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixDistanceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.correlation.matrix.distance.$post>,
    ) {
      return parseResponse(client.assets.correlation.matrix.distance.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixDistance<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.distance.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.distance.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixDistanceMutationOptions<
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

export function getPostAssetsCorrelationMatrixEffectiveRankMutationKey() {
  return ['assets', '/assets/correlation/matrix/effective-rank', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixEffectiveRankMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixEffectiveRankMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>,
    ) {
      return parseResponse(client.assets.correlation.matrix['effective-rank'].$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixEffectiveRank<
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
                  ReturnType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixEffectiveRankMutationOptions<
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

export function getPostAssetsCorrelationMatrixInformativenessMutationKey() {
  return ['assets', '/assets/correlation/matrix/informativeness', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixInformativenessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.informativeness.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.informativeness.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixInformativenessMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.correlation.matrix.informativeness.$post>,
    ) {
      return parseResponse(client.assets.correlation.matrix.informativeness.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixInformativeness<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.informativeness.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.informativeness.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixInformativenessMutationOptions<
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

export function getPostAssetsCorrelationMatrixNearestMutationKey() {
  return ['assets', '/assets/correlation/matrix/nearest', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixNearestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.nearest.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.nearest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixNearestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.correlation.matrix.nearest.$post>,
    ) {
      return parseResponse(client.assets.correlation.matrix.nearest.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixNearest<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.nearest.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.nearest.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixNearestMutationOptions<
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

export function getPostAssetsCorrelationMatrixRandomMutationKey() {
  return ['assets', '/assets/correlation/matrix/random', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixRandomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.random.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.random.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixRandomMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.correlation.matrix.random.$post>) {
      return parseResponse(client.assets.correlation.matrix.random.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixRandom<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.random.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.random.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixRandomMutationOptions<
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

export function getPostAssetsCorrelationMatrixShrinkageMutationKey() {
  return ['assets', '/assets/correlation/matrix/shrinkage', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixShrinkageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.shrinkage.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.shrinkage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixShrinkageMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.correlation.matrix.shrinkage.$post>,
    ) {
      return parseResponse(client.assets.correlation.matrix.shrinkage.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixShrinkage<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.shrinkage.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.shrinkage.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixShrinkageMutationOptions<
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

export function getPostAssetsCorrelationMatrixTheoryImpliedMutationKey() {
  return ['assets', '/assets/correlation/matrix/theory-implied', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixTheoryImpliedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixTheoryImpliedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>,
    ) {
      return parseResponse(client.assets.correlation.matrix['theory-implied'].$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixTheoryImplied<
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
                  ReturnType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixTheoryImpliedMutationOptions<
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

export function getPostAssetsCorrelationMatrixValidationMutationKey() {
  return ['assets', '/assets/correlation/matrix/validation', 'POST'] as const
}

export function getPostAssetsCorrelationMatrixValidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.validation.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.correlation.matrix.validation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCorrelationMatrixValidationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.correlation.matrix.validation.$post>,
    ) {
      return parseResponse(client.assets.correlation.matrix.validation.$post(args, options))
    },
  })
}

export function createPostAssetsCorrelationMatrixValidation<
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
                Awaited<ReturnType<typeof client.assets.correlation.matrix.validation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.correlation.matrix.validation.$post>,
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
    const mutationDefaults = getPostAssetsCorrelationMatrixValidationMutationOptions<
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

export function getPostAssetsCovarianceMatrixMutationKey() {
  return ['assets', '/assets/covariance/matrix', 'POST'] as const
}

export function getPostAssetsCovarianceMatrixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.covariance.matrix.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assets.covariance.matrix.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCovarianceMatrixMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.covariance.matrix.$post>) {
      return parseResponse(client.assets.covariance.matrix.$post(args, options))
    },
  })
}

export function createPostAssetsCovarianceMatrix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.assets.covariance.matrix.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.covariance.matrix.$post>,
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
    const mutationDefaults = getPostAssetsCovarianceMatrixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsCovarianceMatrixEffectiveRankMutationKey() {
  return ['assets', '/assets/covariance/matrix/effective-rank', 'POST'] as const
}

export function getPostAssetsCovarianceMatrixEffectiveRankMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCovarianceMatrixEffectiveRankMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>,
    ) {
      return parseResponse(client.assets.covariance.matrix['effective-rank'].$post(args, options))
    },
  })
}

export function createPostAssetsCovarianceMatrixEffectiveRank<
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
                  ReturnType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>,
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
    const mutationDefaults = getPostAssetsCovarianceMatrixEffectiveRankMutationOptions<
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

export function getPostAssetsCovarianceMatrixExponentiallyWeightedMutationKey() {
  return ['assets', '/assets/covariance/matrix/exponentially-weighted', 'POST'] as const
}

export function getPostAssetsCovarianceMatrixExponentiallyWeightedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCovarianceMatrixExponentiallyWeightedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']
      >,
    ) {
      return parseResponse(
        client.assets.covariance.matrix['exponentially-weighted'].$post(args, options),
      )
    },
  })
}

export function createPostAssetsCovarianceMatrixExponentiallyWeighted<
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
                    (typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']
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
    const mutationDefaults = getPostAssetsCovarianceMatrixExponentiallyWeightedMutationOptions<
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

export function getPostAssetsCovarianceMatrixValidationMutationKey() {
  return ['assets', '/assets/covariance/matrix/validation', 'POST'] as const
}

export function getPostAssetsCovarianceMatrixValidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.covariance.matrix.validation.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.covariance.matrix.validation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsCovarianceMatrixValidationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.covariance.matrix.validation.$post>,
    ) {
      return parseResponse(client.assets.covariance.matrix.validation.$post(args, options))
    },
  })
}

export function createPostAssetsCovarianceMatrixValidation<
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
                Awaited<ReturnType<typeof client.assets.covariance.matrix.validation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.covariance.matrix.validation.$post>,
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
    const mutationDefaults = getPostAssetsCovarianceMatrixValidationMutationOptions<
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

export function getPostAssetsKurtosisMutationKey() {
  return ['assets', '/assets/kurtosis', 'POST'] as const
}

export function getPostAssetsKurtosisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.kurtosis.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.assets.kurtosis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsKurtosisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.kurtosis.$post>) {
      return parseResponse(client.assets.kurtosis.$post(args, options))
    },
  })
}

export function createPostAssetsKurtosis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.kurtosis.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.kurtosis.$post>,
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
    const mutationDefaults = getPostAssetsKurtosisMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsPricesAdjustedMutationKey() {
  return ['assets', '/assets/prices/adjusted', 'POST'] as const
}

export function getPostAssetsPricesAdjustedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.prices.adjusted.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assets.prices.adjusted.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsPricesAdjustedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.prices.adjusted.$post>) {
      return parseResponse(client.assets.prices.adjusted.$post(args, options))
    },
  })
}

export function createPostAssetsPricesAdjusted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.prices.adjusted.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.prices.adjusted.$post>,
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
    const mutationDefaults = getPostAssetsPricesAdjustedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsPricesAdjustedForwardMutationKey() {
  return ['assets', '/assets/prices/adjusted/forward', 'POST'] as const
}

export function getPostAssetsPricesAdjustedForwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.prices.adjusted.forward.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.prices.adjusted.forward.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsPricesAdjustedForwardMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.prices.adjusted.forward.$post>) {
      return parseResponse(client.assets.prices.adjusted.forward.$post(args, options))
    },
  })
}

export function createPostAssetsPricesAdjustedForward<
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
                Awaited<ReturnType<typeof client.assets.prices.adjusted.forward.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.prices.adjusted.forward.$post>,
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
    const mutationDefaults = getPostAssetsPricesAdjustedForwardMutationOptions<
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

export function getPostAssetsReturnsMutationKey() {
  return ['assets', '/assets/returns', 'POST'] as const
}

export function getPostAssetsReturnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.returns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.assets.returns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.returns.$post>) {
      return parseResponse(client.assets.returns.$post(args, options))
    },
  })
}

export function createPostAssetsReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.returns.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.returns.$post>,
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
    const mutationDefaults = getPostAssetsReturnsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsReturnsAverageMutationKey() {
  return ['assets', '/assets/returns/average', 'POST'] as const
}

export function getPostAssetsReturnsAverageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.returns.average.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assets.returns.average.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsReturnsAverageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.returns.average.$post>) {
      return parseResponse(client.assets.returns.average.$post(args, options))
    },
  })
}

export function createPostAssetsReturnsAverage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.returns.average.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.returns.average.$post>,
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
    const mutationDefaults = getPostAssetsReturnsAverageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsReturnsSimulationBootstrapMutationKey() {
  return ['assets', '/assets/returns/simulation/bootstrap', 'POST'] as const
}

export function getPostAssetsReturnsSimulationBootstrapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.returns.simulation.bootstrap.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.assets.returns.simulation.bootstrap.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsReturnsSimulationBootstrapMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.assets.returns.simulation.bootstrap.$post>,
    ) {
      return parseResponse(client.assets.returns.simulation.bootstrap.$post(args, options))
    },
  })
}

export function createPostAssetsReturnsSimulationBootstrap<
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
                Awaited<ReturnType<typeof client.assets.returns.simulation.bootstrap.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.assets.returns.simulation.bootstrap.$post>,
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
    const mutationDefaults = getPostAssetsReturnsSimulationBootstrapMutationOptions<
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

export function getPostAssetsSkewnessMutationKey() {
  return ['assets', '/assets/skewness', 'POST'] as const
}

export function getPostAssetsSkewnessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.skewness.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.assets.skewness.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsSkewnessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.skewness.$post>) {
      return parseResponse(client.assets.skewness.$post(args, options))
    },
  })
}

export function createPostAssetsSkewness<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.skewness.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.skewness.$post>,
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
    const mutationDefaults = getPostAssetsSkewnessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsVarianceMutationKey() {
  return ['assets', '/assets/variance', 'POST'] as const
}

export function getPostAssetsVarianceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.variance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.assets.variance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsVarianceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.variance.$post>) {
      return parseResponse(client.assets.variance.$post(args, options))
    },
  })
}

export function createPostAssetsVariance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.variance.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.variance.$post>,
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
    const mutationDefaults = getPostAssetsVarianceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssetsVolatilityMutationKey() {
  return ['assets', '/assets/volatility', 'POST'] as const
}

export function getPostAssetsVolatilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.volatility.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.assets.volatility.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsVolatilityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.volatility.$post>) {
      return parseResponse(client.assets.volatility.$post(args, options))
    },
  })
}

export function createPostAssetsVolatility<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assets.volatility.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assets.volatility.$post>,
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
    const mutationDefaults = getPostAssetsVolatilityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFactorsResidualizationMutationKey() {
  return ['factors', '/factors/residualization', 'POST'] as const
}

export function getPostFactorsResidualizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.factors.residualization.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.factors.residualization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFactorsResidualizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.factors.residualization.$post>) {
      return parseResponse(client.factors.residualization.$post(args, options))
    },
  })
}

export function createPostFactorsResidualization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.factors.residualization.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.factors.residualization.$post>,
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
    const mutationDefaults = getPostFactorsResidualizationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPortfolioAnalysisAlphaMutationKey() {
  return ['portfolio', '/portfolio/analysis/alpha', 'POST'] as const
}

export function getPostPortfolioAnalysisAlphaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.alpha.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.alpha.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisAlphaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.analysis.alpha.$post>) {
      return parseResponse(client.portfolio.analysis.alpha.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisAlpha<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.portfolio.analysis.alpha.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.alpha.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisAlphaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPortfolioAnalysisBetaMutationKey() {
  return ['portfolio', '/portfolio/analysis/beta', 'POST'] as const
}

export function getPostPortfolioAnalysisBetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.beta.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.beta.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisBetaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.analysis.beta.$post>) {
      return parseResponse(client.portfolio.analysis.beta.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisBeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.beta.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.beta.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisBetaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPortfolioAnalysisConditionalValueAtRiskMutationKey() {
  return ['portfolio', '/portfolio/analysis/conditional-value-at-risk', 'POST'] as const
}

export function getPostPortfolioAnalysisConditionalValueAtRiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisConditionalValueAtRiskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['conditional-value-at-risk'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisConditionalValueAtRisk<
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
                    (typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']
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
    const mutationDefaults = getPostPortfolioAnalysisConditionalValueAtRiskMutationOptions<
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

export function getPostPortfolioAnalysisContributionsReturnMutationKey() {
  return ['portfolio', '/portfolio/analysis/contributions/return', 'POST'] as const
}

export function getPostPortfolioAnalysisContributionsReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.contributions.return.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.contributions.return.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisContributionsReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.portfolio.analysis.contributions.return.$post>,
    ) {
      return parseResponse(client.portfolio.analysis.contributions.return.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisContributionsReturn<
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
                Awaited<ReturnType<typeof client.portfolio.analysis.contributions.return.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.contributions.return.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisContributionsReturnMutationOptions<
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

export function getPostPortfolioAnalysisContributionsRiskMutationKey() {
  return ['portfolio', '/portfolio/analysis/contributions/risk', 'POST'] as const
}

export function getPostPortfolioAnalysisContributionsRiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.contributions.risk.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.contributions.risk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisContributionsRiskMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.portfolio.analysis.contributions.risk.$post>,
    ) {
      return parseResponse(client.portfolio.analysis.contributions.risk.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisContributionsRisk<
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
                Awaited<ReturnType<typeof client.portfolio.analysis.contributions.risk.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.contributions.risk.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisContributionsRiskMutationOptions<
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

export function getPostPortfolioAnalysisCorrelationSpectrumMutationKey() {
  return ['portfolio', '/portfolio/analysis/correlation-spectrum', 'POST'] as const
}

export function getPostPortfolioAnalysisCorrelationSpectrumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisCorrelationSpectrumMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>,
    ) {
      return parseResponse(client.portfolio.analysis['correlation-spectrum'].$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisCorrelationSpectrum<
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
                  ReturnType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisCorrelationSpectrumMutationOptions<
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

export function getPostPortfolioAnalysisDiversificationRatioMutationKey() {
  return ['portfolio', '/portfolio/analysis/diversification-ratio', 'POST'] as const
}

export function getPostPortfolioAnalysisDiversificationRatioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisDiversificationRatioMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>,
    ) {
      return parseResponse(client.portfolio.analysis['diversification-ratio'].$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisDiversificationRatio<
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
                  ReturnType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisDiversificationRatioMutationOptions<
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

export function getPostPortfolioAnalysisDrawdownsMutationKey() {
  return ['portfolio', '/portfolio/analysis/drawdowns', 'POST'] as const
}

export function getPostPortfolioAnalysisDrawdownsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.drawdowns.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.drawdowns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisDrawdownsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.analysis.drawdowns.$post>) {
      return parseResponse(client.portfolio.analysis.drawdowns.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisDrawdowns<
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
                Awaited<ReturnType<typeof client.portfolio.analysis.drawdowns.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.drawdowns.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisDrawdownsMutationOptions<
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

export function getPostPortfolioAnalysisEffectiveNumberOfBetsMutationKey() {
  return ['portfolio', '/portfolio/analysis/effective-number-of-bets', 'POST'] as const
}

export function getPostPortfolioAnalysisEffectiveNumberOfBetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.analysis)['effective-number-of-bets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['effective-number-of-bets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisEffectiveNumberOfBetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['effective-number-of-bets']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['effective-number-of-bets'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisEffectiveNumberOfBets<
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
                    (typeof client.portfolio.analysis)['effective-number-of-bets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['effective-number-of-bets']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisEffectiveNumberOfBetsMutationOptions<
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

export function getPostPortfolioAnalysisFactorsExposuresMutationKey() {
  return ['portfolio', '/portfolio/analysis/factors/exposures', 'POST'] as const
}

export function getPostPortfolioAnalysisFactorsExposuresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.factors.exposures.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.factors.exposures.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisFactorsExposuresMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.portfolio.analysis.factors.exposures.$post>,
    ) {
      return parseResponse(client.portfolio.analysis.factors.exposures.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisFactorsExposures<
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
                Awaited<ReturnType<typeof client.portfolio.analysis.factors.exposures.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.factors.exposures.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisFactorsExposuresMutationOptions<
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

export function getPostPortfolioAnalysisMeanVarianceEfficientFrontierMutationKey() {
  return ['portfolio', '/portfolio/analysis/mean-variance/efficient-frontier', 'POST'] as const
}

export function getPostPortfolioAnalysisMeanVarianceEfficientFrontierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisMeanVarianceEfficientFrontierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['mean-variance']['efficient-frontier'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisMeanVarianceEfficientFrontier<
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
                    (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
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
    const mutationDefaults = getPostPortfolioAnalysisMeanVarianceEfficientFrontierMutationOptions<
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

export function getPostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierMutationKey() {
  return [
    'portfolio',
    '/portfolio/analysis/mean-variance/minimum-variance-frontier',
    'POST',
  ] as const
}

export function getPostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['mean-variance']['minimum-variance-frontier'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier<
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
                    (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
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
    const mutationDefaults =
      getPostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierMutationOptions<
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

export function getPostPortfolioAnalysisReturnMutationKey() {
  return ['portfolio', '/portfolio/analysis/return', 'POST'] as const
}

export function getPostPortfolioAnalysisReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.return.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.return.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisReturnMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.analysis.return.$post>) {
      return parseResponse(client.portfolio.analysis.return.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisReturn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.portfolio.analysis.return.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.return.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisReturnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPortfolioAnalysisReturnsAverageMutationKey() {
  return ['portfolio', '/portfolio/analysis/returns/average', 'POST'] as const
}

export function getPostPortfolioAnalysisReturnsAverageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.returns.average.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.returns.average.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisReturnsAverageMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.portfolio.analysis.returns.average.$post>,
    ) {
      return parseResponse(client.portfolio.analysis.returns.average.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisReturnsAverage<
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
                Awaited<ReturnType<typeof client.portfolio.analysis.returns.average.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.returns.average.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisReturnsAverageMutationOptions<
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

export function getPostPortfolioAnalysisSharpeRatioMutationKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio', 'POST'] as const
}

export function getPostPortfolioAnalysisSharpeRatioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisSharpeRatioMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>,
    ) {
      return parseResponse(client.portfolio.analysis['sharpe-ratio'].$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisSharpeRatio<
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
                Awaited<ReturnType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisSharpeRatioMutationOptions<
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

export function getPostPortfolioAnalysisSharpeRatioBiasAdjustedMutationKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio/bias-adjusted', 'POST'] as const
}

export function getPostPortfolioAnalysisSharpeRatioBiasAdjustedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisSharpeRatioBiasAdjustedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['sharpe-ratio']['bias-adjusted'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisSharpeRatioBiasAdjusted<
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
                    (typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']
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
    const mutationDefaults = getPostPortfolioAnalysisSharpeRatioBiasAdjustedMutationOptions<
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

export function getPostPortfolioAnalysisSharpeRatioConfidenceIntervalMutationKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio/confidence-interval', 'POST'] as const
}

export function getPostPortfolioAnalysisSharpeRatioConfidenceIntervalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisSharpeRatioConfidenceIntervalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['sharpe-ratio']['confidence-interval'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisSharpeRatioConfidenceInterval<
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
                    (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
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
    const mutationDefaults = getPostPortfolioAnalysisSharpeRatioConfidenceIntervalMutationOptions<
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

export function getPostPortfolioAnalysisSharpeRatioProbabilisticMutationKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio/probabilistic', 'POST'] as const
}

export function getPostPortfolioAnalysisSharpeRatioProbabilisticMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisSharpeRatioProbabilisticMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['sharpe-ratio'].probabilistic.$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisSharpeRatioProbabilistic<
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
                    (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']
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
    const mutationDefaults = getPostPortfolioAnalysisSharpeRatioProbabilisticMutationOptions<
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

export function getPostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthMutationKey() {
  return [
    'portfolio',
    '/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length',
    'POST',
  ] as const
}

export function getPostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['sharpe-ratio'].probabilistic[
          'minimum-track-record-length'
        ].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength<
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
                    (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
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
    const mutationDefaults =
      getPostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthMutationOptions<
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

export function getPostPortfolioAnalysisTrackingErrorMutationKey() {
  return ['portfolio', '/portfolio/analysis/tracking-error', 'POST'] as const
}

export function getPostPortfolioAnalysisTrackingErrorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['tracking-error']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['tracking-error']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisTrackingErrorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.analysis)['tracking-error']['$post']>,
    ) {
      return parseResponse(client.portfolio.analysis['tracking-error'].$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisTrackingError<
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
                Awaited<ReturnType<(typeof client.portfolio.analysis)['tracking-error']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['tracking-error']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisTrackingErrorMutationOptions<
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

export function getPostPortfolioAnalysisUlcerIndexMutationKey() {
  return ['portfolio', '/portfolio/analysis/ulcer-index', 'POST'] as const
}

export function getPostPortfolioAnalysisUlcerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisUlcerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>,
    ) {
      return parseResponse(client.portfolio.analysis['ulcer-index'].$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisUlcerIndex<
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
                Awaited<ReturnType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisUlcerIndexMutationOptions<
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

export function getPostPortfolioAnalysisUlcerPerformanceIndexMutationKey() {
  return ['portfolio', '/portfolio/analysis/ulcer-performance-index', 'POST'] as const
}

export function getPostPortfolioAnalysisUlcerPerformanceIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.analysis)['ulcer-performance-index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['ulcer-performance-index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisUlcerPerformanceIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.analysis)['ulcer-performance-index']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.analysis['ulcer-performance-index'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioAnalysisUlcerPerformanceIndex<
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
                  ReturnType<(typeof client.portfolio.analysis)['ulcer-performance-index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['ulcer-performance-index']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisUlcerPerformanceIndexMutationOptions<
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

export function getPostPortfolioAnalysisValueAtRiskMutationKey() {
  return ['portfolio', '/portfolio/analysis/value-at-risk', 'POST'] as const
}

export function getPostPortfolioAnalysisValueAtRiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisValueAtRiskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>,
    ) {
      return parseResponse(client.portfolio.analysis['value-at-risk'].$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisValueAtRisk<
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
                Awaited<ReturnType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>,
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
    const mutationDefaults = getPostPortfolioAnalysisValueAtRiskMutationOptions<
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

export function getPostPortfolioAnalysisVolatilityMutationKey() {
  return ['portfolio', '/portfolio/analysis/volatility', 'POST'] as const
}

export function getPostPortfolioAnalysisVolatilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.volatility.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.analysis.volatility.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAnalysisVolatilityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.analysis.volatility.$post>) {
      return parseResponse(client.portfolio.analysis.volatility.$post(args, options))
    },
  })
}

export function createPostPortfolioAnalysisVolatility<
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
                Awaited<ReturnType<typeof client.portfolio.analysis.volatility.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.analysis.volatility.$post>,
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
    const mutationDefaults = getPostPortfolioAnalysisVolatilityMutationOptions<
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

export function getPostPortfolioConstructionInvestableMutationKey() {
  return ['portfolio', '/portfolio/construction/investable', 'POST'] as const
}

export function getPostPortfolioConstructionInvestableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.construction.investable.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.construction.investable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioConstructionInvestableMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.portfolio.construction.investable.$post>,
    ) {
      return parseResponse(client.portfolio.construction.investable.$post(args, options))
    },
  })
}

export function createPostPortfolioConstructionInvestable<
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
                Awaited<ReturnType<typeof client.portfolio.construction.investable.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.construction.investable.$post>,
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
    const mutationDefaults = getPostPortfolioConstructionInvestableMutationOptions<
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

export function getPostPortfolioConstructionMimickingMutationKey() {
  return ['portfolio', '/portfolio/construction/mimicking', 'POST'] as const
}

export function getPostPortfolioConstructionMimickingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.construction.mimicking.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.construction.mimicking.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioConstructionMimickingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.construction.mimicking.$post>) {
      return parseResponse(client.portfolio.construction.mimicking.$post(args, options))
    },
  })
}

export function createPostPortfolioConstructionMimicking<
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
                Awaited<ReturnType<typeof client.portfolio.construction.mimicking.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.construction.mimicking.$post>,
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
    const mutationDefaults = getPostPortfolioConstructionMimickingMutationOptions<
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

export function getPostPortfolioConstructionRandomMutationKey() {
  return ['portfolio', '/portfolio/construction/random', 'POST'] as const
}

export function getPostPortfolioConstructionRandomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.construction.random.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.portfolio.construction.random.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioConstructionRandomMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.construction.random.$post>) {
      return parseResponse(client.portfolio.construction.random.$post(args, options))
    },
  })
}

export function createPostPortfolioConstructionRandom<
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
                Awaited<ReturnType<typeof client.portfolio.construction.random.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.portfolio.construction.random.$post>,
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
    const mutationDefaults = getPostPortfolioConstructionRandomMutationOptions<
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

export function getPostPortfolioOptimizationEqualRiskContributionsMutationKey() {
  return ['portfolio', '/portfolio/optimization/equal-risk-contributions', 'POST'] as const
}

export function getPostPortfolioOptimizationEqualRiskContributionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['equal-risk-contributions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['equal-risk-contributions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationEqualRiskContributionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['equal-risk-contributions']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['equal-risk-contributions'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationEqualRiskContributions<
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
                    (typeof client.portfolio.optimization)['equal-risk-contributions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['equal-risk-contributions']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationEqualRiskContributionsMutationOptions<
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

export function getPostPortfolioOptimizationEqualSharpeRatioContributionsMutationKey() {
  return ['portfolio', '/portfolio/optimization/equal-sharpe-ratio-contributions', 'POST'] as const
}

export function getPostPortfolioOptimizationEqualSharpeRatioContributionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationEqualSharpeRatioContributionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['equal-sharpe-ratio-contributions'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationEqualSharpeRatioContributions<
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
                    (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationEqualSharpeRatioContributionsMutationOptions<
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

export function getPostPortfolioOptimizationEqualVolatilityWeightedMutationKey() {
  return ['portfolio', '/portfolio/optimization/equal-volatility-weighted', 'POST'] as const
}

export function getPostPortfolioOptimizationEqualVolatilityWeightedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationEqualVolatilityWeightedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['equal-volatility-weighted'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationEqualVolatilityWeighted<
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
                    (typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationEqualVolatilityWeightedMutationOptions<
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

export function getPostPortfolioOptimizationEqualWeightedMutationKey() {
  return ['portfolio', '/portfolio/optimization/equal-weighted', 'POST'] as const
}

export function getPostPortfolioOptimizationEqualWeightedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationEqualWeightedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>,
    ) {
      return parseResponse(client.portfolio.optimization['equal-weighted'].$post(args, options))
    },
  })
}

export function createPostPortfolioOptimizationEqualWeighted<
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
                  ReturnType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>,
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
    const mutationDefaults = getPostPortfolioOptimizationEqualWeightedMutationOptions<
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

export function getPostPortfolioOptimizationHierarchicalRiskParityMutationKey() {
  return ['portfolio', '/portfolio/optimization/hierarchical-risk-parity', 'POST'] as const
}

export function getPostPortfolioOptimizationHierarchicalRiskParityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationHierarchicalRiskParityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['hierarchical-risk-parity'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationHierarchicalRiskParity<
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
                    (typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationHierarchicalRiskParityMutationOptions<
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

export function getPostPortfolioOptimizationHierarchicalRiskParityClusteringBasedMutationKey() {
  return [
    'portfolio',
    '/portfolio/optimization/hierarchical-risk-parity/clustering-based',
    'POST',
  ] as const
}

export function getPostPortfolioOptimizationHierarchicalRiskParityClusteringBasedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationHierarchicalRiskParityClusteringBasedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['hierarchical-risk-parity']['clustering-based'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPortfolioOptimizationHierarchicalRiskParityClusteringBased<
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
                    (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationHierarchicalRiskParityClusteringBasedMutationOptions<
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

export function getPostPortfolioOptimizationInverseVarianceWeightedMutationKey() {
  return ['portfolio', '/portfolio/optimization/inverse-variance-weighted', 'POST'] as const
}

export function getPostPortfolioOptimizationInverseVarianceWeightedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationInverseVarianceWeightedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['inverse-variance-weighted'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationInverseVarianceWeighted<
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
                    (typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationInverseVarianceWeightedMutationOptions<
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

export function getPostPortfolioOptimizationInverseVolatilityWeightedMutationKey() {
  return ['portfolio', '/portfolio/optimization/inverse-volatility-weighted', 'POST'] as const
}

export function getPostPortfolioOptimizationInverseVolatilityWeightedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationInverseVolatilityWeightedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['inverse-volatility-weighted'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationInverseVolatilityWeighted<
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
                    (typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationInverseVolatilityWeightedMutationOptions<
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

export function getPostPortfolioOptimizationMarketCapitalizationWeightedMutationKey() {
  return ['portfolio', '/portfolio/optimization/market-capitalization-weighted', 'POST'] as const
}

export function getPostPortfolioOptimizationMarketCapitalizationWeightedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMarketCapitalizationWeightedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['market-capitalization-weighted'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMarketCapitalizationWeighted<
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
                    (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMarketCapitalizationWeightedMutationOptions<
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

export function getPostPortfolioOptimizationMaximumDecorrelationMutationKey() {
  return ['portfolio', '/portfolio/optimization/maximum-decorrelation', 'POST'] as const
}

export function getPostPortfolioOptimizationMaximumDecorrelationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['maximum-decorrelation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['maximum-decorrelation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumDecorrelationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['maximum-decorrelation']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['maximum-decorrelation'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMaximumDecorrelation<
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
                    (typeof client.portfolio.optimization)['maximum-decorrelation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['maximum-decorrelation']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationMaximumDecorrelationMutationOptions<
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

export function getPostPortfolioOptimizationMaximumReturnMutationKey() {
  return ['portfolio', '/portfolio/optimization/maximum-return', 'POST'] as const
}

export function getPostPortfolioOptimizationMaximumReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['maximum-return']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['maximum-return']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.optimization)['maximum-return']['$post']>,
    ) {
      return parseResponse(client.portfolio.optimization['maximum-return'].$post(args, options))
    },
  })
}

export function createPostPortfolioOptimizationMaximumReturn<
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
                  ReturnType<(typeof client.portfolio.optimization)['maximum-return']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.optimization)['maximum-return']['$post']>,
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
    const mutationDefaults = getPostPortfolioOptimizationMaximumReturnMutationOptions<
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

export function getPostPortfolioOptimizationMaximumReturnDiversifiedMutationKey() {
  return ['portfolio', '/portfolio/optimization/maximum-return/diversified', 'POST'] as const
}

export function getPostPortfolioOptimizationMaximumReturnDiversifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumReturnDiversifiedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['maximum-return'].diversified.$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMaximumReturnDiversified<
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
                    (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationMaximumReturnDiversifiedMutationOptions<
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

export function getPostPortfolioOptimizationMaximumReturnSubsetResamplingBasedMutationKey() {
  return [
    'portfolio',
    '/portfolio/optimization/maximum-return/subset-resampling-based',
    'POST',
  ] as const
}

export function getPostPortfolioOptimizationMaximumReturnSubsetResamplingBasedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumReturnSubsetResamplingBasedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['maximum-return']['subset-resampling-based'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPortfolioOptimizationMaximumReturnSubsetResamplingBased<
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
                    (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMaximumReturnSubsetResamplingBasedMutationOptions<
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

export function getPostPortfolioOptimizationMaximumSharpeRatioMutationKey() {
  return ['portfolio', '/portfolio/optimization/maximum-sharpe-ratio', 'POST'] as const
}

export function getPostPortfolioOptimizationMaximumSharpeRatioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumSharpeRatioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['maximum-sharpe-ratio'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMaximumSharpeRatio<
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
                    (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']>,
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
    const mutationDefaults = getPostPortfolioOptimizationMaximumSharpeRatioMutationOptions<
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

export function getPostPortfolioOptimizationMaximumSharpeRatioDiversifiedMutationKey() {
  return ['portfolio', '/portfolio/optimization/maximum-sharpe-ratio/diversified', 'POST'] as const
}

export function getPostPortfolioOptimizationMaximumSharpeRatioDiversifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumSharpeRatioDiversifiedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['maximum-sharpe-ratio'].diversified.$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMaximumSharpeRatioDiversified<
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
                    (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMaximumSharpeRatioDiversifiedMutationOptions<
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

export function getPostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedMutationKey() {
  return [
    'portfolio',
    '/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based',
    'POST',
  ] as const
}

export function getPostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['maximum-sharpe-ratio']['subset-resampling-based'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased<
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
                    (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedMutationOptions<
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

export function getPostPortfolioOptimizationMaximumUlcerPerformanceIndexMutationKey() {
  return ['portfolio', '/portfolio/optimization/maximum-ulcer-performance-index', 'POST'] as const
}

export function getPostPortfolioOptimizationMaximumUlcerPerformanceIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMaximumUlcerPerformanceIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['maximum-ulcer-performance-index'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMaximumUlcerPerformanceIndex<
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
                    (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMaximumUlcerPerformanceIndexMutationOptions<
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

export function getPostPortfolioOptimizationMeanVarianceEfficientMutationKey() {
  return ['portfolio', '/portfolio/optimization/mean-variance-efficient', 'POST'] as const
}

export function getPostPortfolioOptimizationMeanVarianceEfficientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['mean-variance-efficient']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['mean-variance-efficient']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMeanVarianceEfficientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['mean-variance-efficient']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['mean-variance-efficient'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMeanVarianceEfficient<
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
                    (typeof client.portfolio.optimization)['mean-variance-efficient']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['mean-variance-efficient']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationMeanVarianceEfficientMutationOptions<
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

export function getPostPortfolioOptimizationMeanVarianceEfficientDiversifiedMutationKey() {
  return [
    'portfolio',
    '/portfolio/optimization/mean-variance-efficient/diversified',
    'POST',
  ] as const
}

export function getPostPortfolioOptimizationMeanVarianceEfficientDiversifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMeanVarianceEfficientDiversifiedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['mean-variance-efficient'].diversified.$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMeanVarianceEfficientDiversified<
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
                    (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMeanVarianceEfficientDiversifiedMutationOptions<
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

export function getPostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedMutationKey() {
  return [
    'portfolio',
    '/portfolio/optimization/mean-variance-efficient/subset-resampling-based',
    'POST',
  ] as const
}

export function getPostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['mean-variance-efficient']['subset-resampling-based'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased<
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
                    (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedMutationOptions<
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

export function getPostPortfolioOptimizationMinimumCorrelationMutationKey() {
  return ['portfolio', '/portfolio/optimization/minimum-correlation', 'POST'] as const
}

export function getPostPortfolioOptimizationMinimumCorrelationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['minimum-correlation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['minimum-correlation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMinimumCorrelationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['minimum-correlation']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['minimum-correlation'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMinimumCorrelation<
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
                  ReturnType<(typeof client.portfolio.optimization)['minimum-correlation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.optimization)['minimum-correlation']['$post']>,
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
    const mutationDefaults = getPostPortfolioOptimizationMinimumCorrelationMutationOptions<
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

export function getPostPortfolioOptimizationMinimumUlcerIndexMutationKey() {
  return ['portfolio', '/portfolio/optimization/minimum-ulcer-index', 'POST'] as const
}

export function getPostPortfolioOptimizationMinimumUlcerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMinimumUlcerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['minimum-ulcer-index'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMinimumUlcerIndex<
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
                  ReturnType<(typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']>,
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
    const mutationDefaults = getPostPortfolioOptimizationMinimumUlcerIndexMutationOptions<
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

export function getPostPortfolioOptimizationMinimumVarianceMutationKey() {
  return ['portfolio', '/portfolio/optimization/minimum-variance', 'POST'] as const
}

export function getPostPortfolioOptimizationMinimumVarianceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMinimumVarianceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>,
    ) {
      return parseResponse(client.portfolio.optimization['minimum-variance'].$post(args, options))
    },
  })
}

export function createPostPortfolioOptimizationMinimumVariance<
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
                  ReturnType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>,
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
    const mutationDefaults = getPostPortfolioOptimizationMinimumVarianceMutationOptions<
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

export function getPostPortfolioOptimizationMinimumVarianceDiversifiedMutationKey() {
  return ['portfolio', '/portfolio/optimization/minimum-variance/diversified', 'POST'] as const
}

export function getPostPortfolioOptimizationMinimumVarianceDiversifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMinimumVarianceDiversifiedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['minimum-variance'].diversified.$post(args, options),
      )
    },
  })
}

export function createPostPortfolioOptimizationMinimumVarianceDiversified<
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
                    (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
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
    const mutationDefaults = getPostPortfolioOptimizationMinimumVarianceDiversifiedMutationOptions<
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

export function getPostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedMutationKey() {
  return [
    'portfolio',
    '/portfolio/optimization/minimum-variance/subset-resampling-based',
    'POST',
  ] as const
}

export function getPostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.optimization['minimum-variance']['subset-resampling-based'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPortfolioOptimizationMinimumVarianceSubsetResamplingBased<
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
                    (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
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
    const mutationDefaults =
      getPostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedMutationOptions<
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

export function getPostPortfolioOptimizationMostDiversifiedMutationKey() {
  return ['portfolio', '/portfolio/optimization/most-diversified', 'POST'] as const
}

export function getPostPortfolioOptimizationMostDiversifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['most-diversified']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.optimization)['most-diversified']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioOptimizationMostDiversifiedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio.optimization)['most-diversified']['$post']>,
    ) {
      return parseResponse(client.portfolio.optimization['most-diversified'].$post(args, options))
    },
  })
}

export function createPostPortfolioOptimizationMostDiversified<
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
                  ReturnType<(typeof client.portfolio.optimization)['most-diversified']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio.optimization)['most-diversified']['$post']>,
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
    const mutationDefaults = getPostPortfolioOptimizationMostDiversifiedMutationOptions<
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

export function getPostPortfolioSimulationRebalancingDriftWeightMutationKey() {
  return ['portfolio', '/portfolio/simulation/rebalancing/drift-weight', 'POST'] as const
}

export function getPostPortfolioSimulationRebalancingDriftWeightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioSimulationRebalancingDriftWeightMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.simulation.rebalancing['drift-weight'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioSimulationRebalancingDriftWeight<
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
                    (typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']
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
    const mutationDefaults = getPostPortfolioSimulationRebalancingDriftWeightMutationOptions<
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

export function getPostPortfolioSimulationRebalancingFixedWeightMutationKey() {
  return ['portfolio', '/portfolio/simulation/rebalancing/fixed-weight', 'POST'] as const
}

export function getPostPortfolioSimulationRebalancingFixedWeightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioSimulationRebalancingFixedWeightMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.simulation.rebalancing['fixed-weight'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioSimulationRebalancingFixedWeight<
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
                    (typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']
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
    const mutationDefaults = getPostPortfolioSimulationRebalancingFixedWeightMutationOptions<
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

export function getPostPortfolioSimulationRebalancingRandomWeightMutationKey() {
  return ['portfolio', '/portfolio/simulation/rebalancing/random-weight', 'POST'] as const
}

export function getPostPortfolioSimulationRebalancingRandomWeightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioSimulationRebalancingRandomWeightMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']
      >,
    ) {
      return parseResponse(
        client.portfolio.simulation.rebalancing['random-weight'].$post(args, options),
      )
    },
  })
}

export function createPostPortfolioSimulationRebalancingRandomWeight<
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
                    (typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']
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
    const mutationDefaults = getPostPortfolioSimulationRebalancingRandomWeightMutationOptions<
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
