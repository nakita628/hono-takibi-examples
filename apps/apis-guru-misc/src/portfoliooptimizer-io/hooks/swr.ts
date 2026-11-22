import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAssetsAnalysisAbsorptionRatioKey() {
  return ['assets', '/assets/analysis/absorption-ratio', 'POST'] as const
}

export function usePostAssetsAnalysisAbsorptionRatio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.analysis)['absorption-ratio']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets.analysis)['absorption-ratio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsAnalysisAbsorptionRatioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.assets.analysis)['absorption-ratio']['$post']> },
      ) => parseResponse(client.assets.analysis['absorption-ratio'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsAnalysisTurbulenceIndexKey() {
  return ['assets', '/assets/analysis/turbulence-index', 'POST'] as const
}

export function usePostAssetsAnalysisTurbulenceIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.analysis)['turbulence-index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets.analysis)['turbulence-index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsAnalysisTurbulenceIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.assets.analysis)['turbulence-index']['$post']> },
      ) => parseResponse(client.assets.analysis['turbulence-index'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixKey() {
  return ['assets', '/assets/correlation/matrix', 'POST'] as const
}

export function usePostAssetsCorrelationMatrix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.correlation.matrix.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.correlation.matrix.$post> },
      ) => parseResponse(client.assets.correlation.matrix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixBoundsKey() {
  return ['assets', '/assets/correlation/matrix/bounds', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixBounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.bounds.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.bounds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixBoundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.correlation.matrix.bounds.$post> },
      ) => parseResponse(client.assets.correlation.matrix.bounds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixDenoisedKey() {
  return ['assets', '/assets/correlation/matrix/denoised', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixDenoised<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.denoised.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.denoised.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixDenoisedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.correlation.matrix.denoised.$post> },
      ) => parseResponse(client.assets.correlation.matrix.denoised.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixDistanceKey() {
  return ['assets', '/assets/correlation/matrix/distance', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixDistance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.distance.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.distance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixDistanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.correlation.matrix.distance.$post> },
      ) => parseResponse(client.assets.correlation.matrix.distance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixEffectiveRankKey() {
  return ['assets', '/assets/correlation/matrix/effective-rank', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixEffectiveRank<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets.correlation.matrix)['effective-rank']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixEffectiveRankKey()
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
            (typeof client.assets.correlation.matrix)['effective-rank']['$post']
          >
        },
      ) =>
        parseResponse(client.assets.correlation.matrix['effective-rank'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixInformativenessKey() {
  return ['assets', '/assets/correlation/matrix/informativeness', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixInformativeness<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.informativeness.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.informativeness.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixInformativenessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.assets.correlation.matrix.informativeness.$post> },
      ) =>
        parseResponse(client.assets.correlation.matrix.informativeness.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixNearestKey() {
  return ['assets', '/assets/correlation/matrix/nearest', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixNearest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.nearest.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.nearest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixNearestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.correlation.matrix.nearest.$post> },
      ) => parseResponse(client.assets.correlation.matrix.nearest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixRandomKey() {
  return ['assets', '/assets/correlation/matrix/random', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixRandom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.random.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.random.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixRandomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.correlation.matrix.random.$post> },
      ) => parseResponse(client.assets.correlation.matrix.random.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixShrinkageKey() {
  return ['assets', '/assets/correlation/matrix/shrinkage', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixShrinkage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.shrinkage.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.shrinkage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixShrinkageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.correlation.matrix.shrinkage.$post> },
      ) => parseResponse(client.assets.correlation.matrix.shrinkage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixTheoryImpliedKey() {
  return ['assets', '/assets/correlation/matrix/theory-implied', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixTheoryImplied<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets.correlation.matrix)['theory-implied']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixTheoryImpliedKey()
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
            (typeof client.assets.correlation.matrix)['theory-implied']['$post']
          >
        },
      ) =>
        parseResponse(client.assets.correlation.matrix['theory-implied'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCorrelationMatrixValidationKey() {
  return ['assets', '/assets/correlation/matrix/validation', 'POST'] as const
}

export function usePostAssetsCorrelationMatrixValidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.correlation.matrix.validation.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.correlation.matrix.validation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCorrelationMatrixValidationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.assets.correlation.matrix.validation.$post> },
      ) => parseResponse(client.assets.correlation.matrix.validation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCovarianceMatrixKey() {
  return ['assets', '/assets/covariance/matrix', 'POST'] as const
}

export function usePostAssetsCovarianceMatrix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.covariance.matrix.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.covariance.matrix.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCovarianceMatrixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.covariance.matrix.$post> },
      ) => parseResponse(client.assets.covariance.matrix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCovarianceMatrixEffectiveRankKey() {
  return ['assets', '/assets/covariance/matrix/effective-rank', 'POST'] as const
}

export function usePostAssetsCovarianceMatrixEffectiveRank<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCovarianceMatrixEffectiveRankKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.assets.covariance.matrix)['effective-rank']['$post']>
        },
      ) =>
        parseResponse(client.assets.covariance.matrix['effective-rank'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCovarianceMatrixExponentiallyWeightedKey() {
  return ['assets', '/assets/covariance/matrix/exponentially-weighted', 'POST'] as const
}

export function usePostAssetsCovarianceMatrixExponentiallyWeighted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCovarianceMatrixExponentiallyWeightedKey()
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
            (typeof client.assets.covariance.matrix)['exponentially-weighted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.assets.covariance.matrix['exponentially-weighted'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsCovarianceMatrixValidationKey() {
  return ['assets', '/assets/covariance/matrix/validation', 'POST'] as const
}

export function usePostAssetsCovarianceMatrixValidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.covariance.matrix.validation.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.covariance.matrix.validation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsCovarianceMatrixValidationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.covariance.matrix.validation.$post> },
      ) => parseResponse(client.assets.covariance.matrix.validation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsKurtosisKey() {
  return ['assets', '/assets/kurtosis', 'POST'] as const
}

export function usePostAssetsKurtosis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.kurtosis.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.kurtosis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsKurtosisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.kurtosis.$post> }) =>
        parseResponse(client.assets.kurtosis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsPricesAdjustedKey() {
  return ['assets', '/assets/prices/adjusted', 'POST'] as const
}

export function usePostAssetsPricesAdjusted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.prices.adjusted.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.prices.adjusted.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsPricesAdjustedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.prices.adjusted.$post> },
      ) => parseResponse(client.assets.prices.adjusted.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsPricesAdjustedForwardKey() {
  return ['assets', '/assets/prices/adjusted/forward', 'POST'] as const
}

export function usePostAssetsPricesAdjustedForward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.prices.adjusted.forward.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.prices.adjusted.forward.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsPricesAdjustedForwardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.prices.adjusted.forward.$post> },
      ) => parseResponse(client.assets.prices.adjusted.forward.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsReturnsKey() {
  return ['assets', '/assets/returns', 'POST'] as const
}

export function usePostAssetsReturns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.returns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.returns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsReturnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.returns.$post> }) =>
        parseResponse(client.assets.returns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsReturnsAverageKey() {
  return ['assets', '/assets/returns/average', 'POST'] as const
}

export function usePostAssetsReturnsAverage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assets.returns.average.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.returns.average.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsReturnsAverageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.returns.average.$post> },
      ) => parseResponse(client.assets.returns.average.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsReturnsSimulationBootstrapKey() {
  return ['assets', '/assets/returns/simulation/bootstrap', 'POST'] as const
}

export function usePostAssetsReturnsSimulationBootstrap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.assets.returns.simulation.bootstrap.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.returns.simulation.bootstrap.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsReturnsSimulationBootstrapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assets.returns.simulation.bootstrap.$post> },
      ) => parseResponse(client.assets.returns.simulation.bootstrap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsSkewnessKey() {
  return ['assets', '/assets/skewness', 'POST'] as const
}

export function usePostAssetsSkewness<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.skewness.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.skewness.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsSkewnessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.skewness.$post> }) =>
        parseResponse(client.assets.skewness.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsVarianceKey() {
  return ['assets', '/assets/variance', 'POST'] as const
}

export function usePostAssetsVariance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.variance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.variance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsVarianceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.variance.$post> }) =>
        parseResponse(client.assets.variance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssetsVolatilityKey() {
  return ['assets', '/assets/volatility', 'POST'] as const
}

export function usePostAssetsVolatility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.volatility.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.assets.volatility.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsVolatilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.volatility.$post> }) =>
        parseResponse(client.assets.volatility.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFactorsResidualizationKey() {
  return ['factors', '/factors/residualization', 'POST'] as const
}

export function usePostFactorsResidualization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.factors.residualization.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.factors.residualization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFactorsResidualizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.factors.residualization.$post> },
      ) => parseResponse(client.factors.residualization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisAlphaKey() {
  return ['portfolio', '/portfolio/analysis/alpha', 'POST'] as const
}

export function usePostPortfolioAnalysisAlpha<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.alpha.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.alpha.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisAlphaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.analysis.alpha.$post> },
      ) => parseResponse(client.portfolio.analysis.alpha.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisBetaKey() {
  return ['portfolio', '/portfolio/analysis/beta', 'POST'] as const
}

export function usePostPortfolioAnalysisBeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.beta.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.beta.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisBetaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.analysis.beta.$post> },
      ) => parseResponse(client.portfolio.analysis.beta.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisConditionalValueAtRiskKey() {
  return ['portfolio', '/portfolio/analysis/conditional-value-at-risk', 'POST'] as const
}

export function usePostPortfolioAnalysisConditionalValueAtRisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisConditionalValueAtRiskKey()
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
            (typeof client.portfolio.analysis)['conditional-value-at-risk']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['conditional-value-at-risk'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisContributionsReturnKey() {
  return ['portfolio', '/portfolio/analysis/contributions/return', 'POST'] as const
}

export function usePostPortfolioAnalysisContributionsReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.contributions.return.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.contributions.return.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisContributionsReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.portfolio.analysis.contributions.return.$post> },
      ) => parseResponse(client.portfolio.analysis.contributions.return.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisContributionsRiskKey() {
  return ['portfolio', '/portfolio/analysis/contributions/risk', 'POST'] as const
}

export function usePostPortfolioAnalysisContributionsRisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.contributions.risk.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.contributions.risk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisContributionsRiskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.portfolio.analysis.contributions.risk.$post> },
      ) => parseResponse(client.portfolio.analysis.contributions.risk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisCorrelationSpectrumKey() {
  return ['portfolio', '/portfolio/analysis/correlation-spectrum', 'POST'] as const
}

export function usePostPortfolioAnalysisCorrelationSpectrum<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisCorrelationSpectrumKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolio.analysis)['correlation-spectrum']['$post']>
        },
      ) =>
        parseResponse(client.portfolio.analysis['correlation-spectrum'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisDiversificationRatioKey() {
  return ['portfolio', '/portfolio/analysis/diversification-ratio', 'POST'] as const
}

export function usePostPortfolioAnalysisDiversificationRatio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['diversification-ratio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisDiversificationRatioKey()
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
            (typeof client.portfolio.analysis)['diversification-ratio']['$post']
          >
        },
      ) =>
        parseResponse(client.portfolio.analysis['diversification-ratio'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisDrawdownsKey() {
  return ['portfolio', '/portfolio/analysis/drawdowns', 'POST'] as const
}

export function usePostPortfolioAnalysisDrawdowns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.drawdowns.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.drawdowns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisDrawdownsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.analysis.drawdowns.$post> },
      ) => parseResponse(client.portfolio.analysis.drawdowns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisEffectiveNumberOfBetsKey() {
  return ['portfolio', '/portfolio/analysis/effective-number-of-bets', 'POST'] as const
}

export function usePostPortfolioAnalysisEffectiveNumberOfBets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['effective-number-of-bets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisEffectiveNumberOfBetsKey()
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
            (typeof client.portfolio.analysis)['effective-number-of-bets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['effective-number-of-bets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisFactorsExposuresKey() {
  return ['portfolio', '/portfolio/analysis/factors/exposures', 'POST'] as const
}

export function usePostPortfolioAnalysisFactorsExposures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.factors.exposures.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.factors.exposures.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisFactorsExposuresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.portfolio.analysis.factors.exposures.$post> },
      ) => parseResponse(client.portfolio.analysis.factors.exposures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisMeanVarianceEfficientFrontierKey() {
  return ['portfolio', '/portfolio/analysis/mean-variance/efficient-frontier', 'POST'] as const
}

export function usePostPortfolioAnalysisMeanVarianceEfficientFrontier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisMeanVarianceEfficientFrontierKey()
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
            (typeof client.portfolio.analysis)['mean-variance']['efficient-frontier']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['mean-variance']['efficient-frontier'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierKey() {
  return [
    'portfolio',
    '/portfolio/analysis/mean-variance/minimum-variance-frontier',
    'POST',
  ] as const
}

export function usePostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierKey()
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
            (typeof client.portfolio.analysis)['mean-variance']['minimum-variance-frontier']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['mean-variance']['minimum-variance-frontier'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisReturnKey() {
  return ['portfolio', '/portfolio/analysis/return', 'POST'] as const
}

export function usePostPortfolioAnalysisReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.return.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.return.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.analysis.return.$post> },
      ) => parseResponse(client.portfolio.analysis.return.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisReturnsAverageKey() {
  return ['portfolio', '/portfolio/analysis/returns/average', 'POST'] as const
}

export function usePostPortfolioAnalysisReturnsAverage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.analysis.returns.average.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.returns.average.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisReturnsAverageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.analysis.returns.average.$post> },
      ) => parseResponse(client.portfolio.analysis.returns.average.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisSharpeRatioKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio', 'POST'] as const
}

export function usePostPortfolioAnalysisSharpeRatio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisSharpeRatioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['$post']> },
      ) => parseResponse(client.portfolio.analysis['sharpe-ratio'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisSharpeRatioBiasAdjustedKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio/bias-adjusted', 'POST'] as const
}

export function usePostPortfolioAnalysisSharpeRatioBiasAdjusted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisSharpeRatioBiasAdjustedKey()
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
            (typeof client.portfolio.analysis)['sharpe-ratio']['bias-adjusted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['sharpe-ratio']['bias-adjusted'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisSharpeRatioConfidenceIntervalKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio/confidence-interval', 'POST'] as const
}

export function usePostPortfolioAnalysisSharpeRatioConfidenceInterval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisSharpeRatioConfidenceIntervalKey()
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
            (typeof client.portfolio.analysis)['sharpe-ratio']['confidence-interval']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['sharpe-ratio']['confidence-interval'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisSharpeRatioProbabilisticKey() {
  return ['portfolio', '/portfolio/analysis/sharpe-ratio/probabilistic', 'POST'] as const
}

export function usePostPortfolioAnalysisSharpeRatioProbabilistic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisSharpeRatioProbabilisticKey()
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
            (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['sharpe-ratio'].probabilistic.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthKey() {
  return [
    'portfolio',
    '/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length',
    'POST',
  ] as const
}

export function usePostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthKey()
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
            (typeof client.portfolio.analysis)['sharpe-ratio']['probabilistic']['minimum-track-record-length']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['sharpe-ratio'].probabilistic[
            'minimum-track-record-length'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisTrackingErrorKey() {
  return ['portfolio', '/portfolio/analysis/tracking-error', 'POST'] as const
}

export function usePostPortfolioAnalysisTrackingError<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['tracking-error']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['tracking-error']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisTrackingErrorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.portfolio.analysis)['tracking-error']['$post']> },
      ) => parseResponse(client.portfolio.analysis['tracking-error'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisUlcerIndexKey() {
  return ['portfolio', '/portfolio/analysis/ulcer-index', 'POST'] as const
}

export function usePostPortfolioAnalysisUlcerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['ulcer-index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisUlcerIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.portfolio.analysis)['ulcer-index']['$post']> },
      ) => parseResponse(client.portfolio.analysis['ulcer-index'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisUlcerPerformanceIndexKey() {
  return ['portfolio', '/portfolio/analysis/ulcer-performance-index', 'POST'] as const
}

export function usePostPortfolioAnalysisUlcerPerformanceIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['ulcer-performance-index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisUlcerPerformanceIndexKey()
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
            (typeof client.portfolio.analysis)['ulcer-performance-index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.analysis['ulcer-performance-index'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisValueAtRiskKey() {
  return ['portfolio', '/portfolio/analysis/value-at-risk', 'POST'] as const
}

export function usePostPortfolioAnalysisValueAtRisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.analysis)['value-at-risk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisValueAtRiskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.portfolio.analysis)['value-at-risk']['$post']> },
      ) => parseResponse(client.portfolio.analysis['value-at-risk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioAnalysisVolatilityKey() {
  return ['portfolio', '/portfolio/analysis/volatility', 'POST'] as const
}

export function usePostPortfolioAnalysisVolatility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.analysis.volatility.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.analysis.volatility.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioAnalysisVolatilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.analysis.volatility.$post> },
      ) => parseResponse(client.portfolio.analysis.volatility.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioConstructionInvestableKey() {
  return ['portfolio', '/portfolio/construction/investable', 'POST'] as const
}

export function usePostPortfolioConstructionInvestable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.construction.investable.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.construction.investable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioConstructionInvestableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.construction.investable.$post> },
      ) => parseResponse(client.portfolio.construction.investable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioConstructionMimickingKey() {
  return ['portfolio', '/portfolio/construction/mimicking', 'POST'] as const
}

export function usePostPortfolioConstructionMimicking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.portfolio.construction.mimicking.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.construction.mimicking.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioConstructionMimickingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.construction.mimicking.$post> },
      ) => parseResponse(client.portfolio.construction.mimicking.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioConstructionRandomKey() {
  return ['portfolio', '/portfolio/construction/random', 'POST'] as const
}

export function usePostPortfolioConstructionRandom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.construction.random.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.portfolio.construction.random.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioConstructionRandomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.portfolio.construction.random.$post> },
      ) => parseResponse(client.portfolio.construction.random.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationEqualRiskContributionsKey() {
  return ['portfolio', '/portfolio/optimization/equal-risk-contributions', 'POST'] as const
}

export function usePostPortfolioOptimizationEqualRiskContributions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['equal-risk-contributions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationEqualRiskContributionsKey()
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
            (typeof client.portfolio.optimization)['equal-risk-contributions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['equal-risk-contributions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationEqualSharpeRatioContributionsKey() {
  return ['portfolio', '/portfolio/optimization/equal-sharpe-ratio-contributions', 'POST'] as const
}

export function usePostPortfolioOptimizationEqualSharpeRatioContributions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationEqualSharpeRatioContributionsKey()
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
            (typeof client.portfolio.optimization)['equal-sharpe-ratio-contributions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['equal-sharpe-ratio-contributions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationEqualVolatilityWeightedKey() {
  return ['portfolio', '/portfolio/optimization/equal-volatility-weighted', 'POST'] as const
}

export function usePostPortfolioOptimizationEqualVolatilityWeighted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationEqualVolatilityWeightedKey()
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
            (typeof client.portfolio.optimization)['equal-volatility-weighted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['equal-volatility-weighted'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationEqualWeightedKey() {
  return ['portfolio', '/portfolio/optimization/equal-weighted', 'POST'] as const
}

export function usePostPortfolioOptimizationEqualWeighted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationEqualWeightedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolio.optimization)['equal-weighted']['$post']>
        },
      ) => parseResponse(client.portfolio.optimization['equal-weighted'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationHierarchicalRiskParityKey() {
  return ['portfolio', '/portfolio/optimization/hierarchical-risk-parity', 'POST'] as const
}

export function usePostPortfolioOptimizationHierarchicalRiskParity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationHierarchicalRiskParityKey()
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
            (typeof client.portfolio.optimization)['hierarchical-risk-parity']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['hierarchical-risk-parity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationHierarchicalRiskParityClusteringBasedKey() {
  return [
    'portfolio',
    '/portfolio/optimization/hierarchical-risk-parity/clustering-based',
    'POST',
  ] as const
}

export function usePostPortfolioOptimizationHierarchicalRiskParityClusteringBased<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationHierarchicalRiskParityClusteringBasedKey()
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
            (typeof client.portfolio.optimization)['hierarchical-risk-parity']['clustering-based']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['hierarchical-risk-parity']['clustering-based'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationInverseVarianceWeightedKey() {
  return ['portfolio', '/portfolio/optimization/inverse-variance-weighted', 'POST'] as const
}

export function usePostPortfolioOptimizationInverseVarianceWeighted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationInverseVarianceWeightedKey()
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
            (typeof client.portfolio.optimization)['inverse-variance-weighted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['inverse-variance-weighted'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationInverseVolatilityWeightedKey() {
  return ['portfolio', '/portfolio/optimization/inverse-volatility-weighted', 'POST'] as const
}

export function usePostPortfolioOptimizationInverseVolatilityWeighted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationInverseVolatilityWeightedKey()
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
            (typeof client.portfolio.optimization)['inverse-volatility-weighted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['inverse-volatility-weighted'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMarketCapitalizationWeightedKey() {
  return ['portfolio', '/portfolio/optimization/market-capitalization-weighted', 'POST'] as const
}

export function usePostPortfolioOptimizationMarketCapitalizationWeighted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMarketCapitalizationWeightedKey()
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
            (typeof client.portfolio.optimization)['market-capitalization-weighted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['market-capitalization-weighted'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumDecorrelationKey() {
  return ['portfolio', '/portfolio/optimization/maximum-decorrelation', 'POST'] as const
}

export function usePostPortfolioOptimizationMaximumDecorrelation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['maximum-decorrelation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMaximumDecorrelationKey()
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
            (typeof client.portfolio.optimization)['maximum-decorrelation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['maximum-decorrelation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumReturnKey() {
  return ['portfolio', '/portfolio/optimization/maximum-return', 'POST'] as const
}

export function usePostPortfolioOptimizationMaximumReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['maximum-return']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['maximum-return']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMaximumReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolio.optimization)['maximum-return']['$post']>
        },
      ) => parseResponse(client.portfolio.optimization['maximum-return'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumReturnDiversifiedKey() {
  return ['portfolio', '/portfolio/optimization/maximum-return/diversified', 'POST'] as const
}

export function usePostPortfolioOptimizationMaximumReturnDiversified<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMaximumReturnDiversifiedKey()
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
            (typeof client.portfolio.optimization)['maximum-return']['diversified']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['maximum-return'].diversified.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumReturnSubsetResamplingBasedKey() {
  return [
    'portfolio',
    '/portfolio/optimization/maximum-return/subset-resampling-based',
    'POST',
  ] as const
}

export function usePostPortfolioOptimizationMaximumReturnSubsetResamplingBased<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMaximumReturnSubsetResamplingBasedKey()
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
            (typeof client.portfolio.optimization)['maximum-return']['subset-resampling-based']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['maximum-return']['subset-resampling-based'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumSharpeRatioKey() {
  return ['portfolio', '/portfolio/optimization/maximum-sharpe-ratio', 'POST'] as const
}

export function usePostPortfolioOptimizationMaximumSharpeRatio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMaximumSharpeRatioKey()
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
            (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['maximum-sharpe-ratio'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumSharpeRatioDiversifiedKey() {
  return ['portfolio', '/portfolio/optimization/maximum-sharpe-ratio/diversified', 'POST'] as const
}

export function usePostPortfolioOptimizationMaximumSharpeRatioDiversified<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMaximumSharpeRatioDiversifiedKey()
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
            (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['diversified']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['maximum-sharpe-ratio'].diversified.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedKey() {
  return [
    'portfolio',
    '/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based',
    'POST',
  ] as const
}

export function usePostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedKey()
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
            (typeof client.portfolio.optimization)['maximum-sharpe-ratio']['subset-resampling-based']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['maximum-sharpe-ratio']['subset-resampling-based'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMaximumUlcerPerformanceIndexKey() {
  return ['portfolio', '/portfolio/optimization/maximum-ulcer-performance-index', 'POST'] as const
}

export function usePostPortfolioOptimizationMaximumUlcerPerformanceIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMaximumUlcerPerformanceIndexKey()
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
            (typeof client.portfolio.optimization)['maximum-ulcer-performance-index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['maximum-ulcer-performance-index'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMeanVarianceEfficientKey() {
  return ['portfolio', '/portfolio/optimization/mean-variance-efficient', 'POST'] as const
}

export function usePostPortfolioOptimizationMeanVarianceEfficient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['mean-variance-efficient']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMeanVarianceEfficientKey()
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
            (typeof client.portfolio.optimization)['mean-variance-efficient']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['mean-variance-efficient'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMeanVarianceEfficientDiversifiedKey() {
  return [
    'portfolio',
    '/portfolio/optimization/mean-variance-efficient/diversified',
    'POST',
  ] as const
}

export function usePostPortfolioOptimizationMeanVarianceEfficientDiversified<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMeanVarianceEfficientDiversifiedKey()
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
            (typeof client.portfolio.optimization)['mean-variance-efficient']['diversified']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['mean-variance-efficient'].diversified.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedKey() {
  return [
    'portfolio',
    '/portfolio/optimization/mean-variance-efficient/subset-resampling-based',
    'POST',
  ] as const
}

export function usePostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedKey()
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
            (typeof client.portfolio.optimization)['mean-variance-efficient']['subset-resampling-based']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['mean-variance-efficient']['subset-resampling-based'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMinimumCorrelationKey() {
  return ['portfolio', '/portfolio/optimization/minimum-correlation', 'POST'] as const
}

export function usePostPortfolioOptimizationMinimumCorrelation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['minimum-correlation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMinimumCorrelationKey()
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
            (typeof client.portfolio.optimization)['minimum-correlation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['minimum-correlation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMinimumUlcerIndexKey() {
  return ['portfolio', '/portfolio/optimization/minimum-ulcer-index', 'POST'] as const
}

export function usePostPortfolioOptimizationMinimumUlcerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMinimumUlcerIndexKey()
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
            (typeof client.portfolio.optimization)['minimum-ulcer-index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['minimum-ulcer-index'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMinimumVarianceKey() {
  return ['portfolio', '/portfolio/optimization/minimum-variance', 'POST'] as const
}

export function usePostPortfolioOptimizationMinimumVariance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMinimumVarianceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolio.optimization)['minimum-variance']['$post']>
        },
      ) =>
        parseResponse(client.portfolio.optimization['minimum-variance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMinimumVarianceDiversifiedKey() {
  return ['portfolio', '/portfolio/optimization/minimum-variance/diversified', 'POST'] as const
}

export function usePostPortfolioOptimizationMinimumVarianceDiversified<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMinimumVarianceDiversifiedKey()
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
            (typeof client.portfolio.optimization)['minimum-variance']['diversified']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['minimum-variance'].diversified.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedKey() {
  return [
    'portfolio',
    '/portfolio/optimization/minimum-variance/subset-resampling-based',
    'POST',
  ] as const
}

export function usePostPortfolioOptimizationMinimumVarianceSubsetResamplingBased<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMinimumVarianceSubsetResamplingBasedKey()
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
            (typeof client.portfolio.optimization)['minimum-variance']['subset-resampling-based']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.optimization['minimum-variance']['subset-resampling-based'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioOptimizationMostDiversifiedKey() {
  return ['portfolio', '/portfolio/optimization/most-diversified', 'POST'] as const
}

export function usePostPortfolioOptimizationMostDiversified<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio.optimization)['most-diversified']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portfolio.optimization)['most-diversified']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioOptimizationMostDiversifiedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.portfolio.optimization)['most-diversified']['$post']>
        },
      ) =>
        parseResponse(client.portfolio.optimization['most-diversified'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioSimulationRebalancingDriftWeightKey() {
  return ['portfolio', '/portfolio/simulation/rebalancing/drift-weight', 'POST'] as const
}

export function usePostPortfolioSimulationRebalancingDriftWeight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioSimulationRebalancingDriftWeightKey()
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
            (typeof client.portfolio.simulation.rebalancing)['drift-weight']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.simulation.rebalancing['drift-weight'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioSimulationRebalancingFixedWeightKey() {
  return ['portfolio', '/portfolio/simulation/rebalancing/fixed-weight', 'POST'] as const
}

export function usePostPortfolioSimulationRebalancingFixedWeight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioSimulationRebalancingFixedWeightKey()
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
            (typeof client.portfolio.simulation.rebalancing)['fixed-weight']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.simulation.rebalancing['fixed-weight'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPortfolioSimulationRebalancingRandomWeightKey() {
  return ['portfolio', '/portfolio/simulation/rebalancing/random-weight', 'POST'] as const
}

export function usePostPortfolioSimulationRebalancingRandomWeight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortfolioSimulationRebalancingRandomWeightKey()
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
            (typeof client.portfolio.simulation.rebalancing)['random-weight']['$post']
          >
        },
      ) =>
        parseResponse(
          client.portfolio.simulation.rebalancing['random-weight'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
